import React from 'react';
import marked, { Renderer } from 'marked';
const Preview = ({ markdown }) => {
  const renderer = new Renderer();
  marked.setOptions({
    breaks: true
  });
  return (
    <div
      className="markdown-body"
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer })
      }}
    />
  );
};
export default Preview;
