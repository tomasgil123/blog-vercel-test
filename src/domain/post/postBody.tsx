import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

import Code from './code'

const PostContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 600px;
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  img[alt*='Layout'] {
    width: 100%;
  }
  img {
    max-width: 600px;
  }
  p {
    line-height: 1.8;
    font-size: ${space.s4};
    @media (min-width: ${breakpoints.md}) {
      font-size: ${space.s5};
    }
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
