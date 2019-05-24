import React from 'react';
import placeholder from '../placeholder';
const Editor = ({ setMarkdown }) => {
  return (
    <div className="editor-container">
      <textarea
        defaultValue={placeholder}
        onChange={e => setMarkdown(e.target.value)}
        id="editor"
      />
    </div>
  );
};
export default Editor;
