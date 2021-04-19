import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug<Post>(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {} as Post

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

//if we dont use extends { date: string } post1.date will complain
//PostAttributes dont "date" does not exist in type PostAttributes
//https://levelup.gitconnected.com/using-typescript-extending-generic-types-2c18459934ea

export function getAllPosts<PostAttributes extends { date: string }>(
  fields: string[] = []
): PostAttributes[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug<PostAttributes>(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1?.date) > new Date(post2.date) ? -1 : 1))
  return posts
}

interface ResultLastThreePosts<PostAttributes> {
  posts: PostAttributes[]
  totalPosts: number
}

export function getLastThreePosts<PostAttributes extends { date: string }>(
  fields: string[] = []
): ResultLastThreePosts<PostAttributes> {
  const allPosts = getAllPosts<PostAttributes>(fields)

  return { posts: allPosts.slice(0, 3), totalPosts: allPosts.length }
}
