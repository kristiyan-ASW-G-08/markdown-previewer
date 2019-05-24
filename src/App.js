import React, { useState, useEffect } from 'react';
import Preview from './components/Preview';
import Editor from './components/Editor';
import placeholder from './placeholder';
import './style.scss';
import 'github-markdown-css'
const App = () => {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    setMarkdown(placeholder);
  }, []);
  return (
    <main className="main-container">
      <Editor setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </main>
  );
};

export default App;
