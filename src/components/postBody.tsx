import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import Code from './code'

const PostBody: React.FC<{ source: string }> = (props) => {
  return (
    <div>
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
    </div>
  )
}

export default PostBody
