import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import styled from 'styled-components'
import { space, breakpoints, colors } from 'src/tokens'

import Code from './code'

const PostContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 700px;
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  img[alt*='Layout'] {
    width: 100%;
  }
  img {
    margin-top: ${space.s8};
    max-width: 700px;
  }
  pre {
    margin-top: ${space.s8} !important;
  }
  h1 {
    font-size: ${space.s8};
    color: ${colors.text.primary};
    margin-top: ${space.s4};
    font-weight: 700;
  }
  h3 {
    font-size: ${space.s5};
    color: ${colors.text.primary};
    margin-top: ${space.s8};
    font-weight: 700;
  }
  p {
    margin-top: ${space.s8};
  }
  p,
  li {
    line-height: 28px;
    font-size: 18px;
    font-weight: 400;
    color: ${colors.text.primary};
    @media (min-width: ${breakpoints.lg}) {
      font-size: 21px;
      line-height: 32px;
    }
  }
  ul {
    margin-top: ${space.s8};
    padding-left: ${space.s4};
  }
  ul {
    list-style-type: circle;
  }
`

const ImageBodyContainer = styled.div`
  overflow-x: auto;
`

const PostBody: React.FC<{ source: string }> = (props) => {
  function renderParagraph(props) {
    const { children } = props

    if (
      children &&
      children[0] &&
      children.length === 1 &&
      children[0].props &&
      children[0].props.src
    ) {
      //images are wrapped by default by a p element
      //we change it so it is a div with overflow-x: auto

      return <ImageBodyContainer>{children}</ImageBodyContainer>
    }

    return <p>{children}</p>
  }

  return (
    <PostContainer>
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
          paragraph: renderParagraph,
        }}
        escapeHtml={false}
      />
    </PostContainer>
  )
}

export default PostBody
