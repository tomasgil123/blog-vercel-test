import Author from './author'

export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export interface PostThumbnail {
  title: string
  date: string
  slug: string
  coverImage: string
  tags: string
}
