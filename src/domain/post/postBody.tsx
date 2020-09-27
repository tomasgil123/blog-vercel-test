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

const PostBody: React.FC<{ source: string }> = (props) => {
  return (
    <PostContainer>
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
    </PostContainer>
  )
}

export default PostBody
