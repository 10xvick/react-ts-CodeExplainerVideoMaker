import * as React from 'react';
import * as Prism from './Prism/prism';
import '../style.css';
import './Prism/prism.css';

export default function CodeWindow({code}) {

  const CodeBlock = React.useCallback(() => Code(code), [code]);

  return (
    <div>
      <pre>
        <CodeBlock />
      </pre>
    </div>
  );
}

const Code = (code) => { 
  React.useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <code className="language-jsx">
      {' '}
      {code}{' '}
    </code>
  );
};
