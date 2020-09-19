import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import styled from 'styled-components'

import Code from './code'

const PostContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 600px;
  img {
    max-width: 600px;
  }
  p {
    line-height: 1.8;
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
