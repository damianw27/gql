import React, { useState } from 'react';
import { CodeEditor } from '$containers/code-editor/code-editor';

export function App() {
  const [query, setQuery] = useState<string>('MATCH (p:Person)-[:LIVES_IN]->(c:City)\n');

  return (
    <div className="App">
      <CodeEditor value={query} onValueChange={setQuery} />
    </div>
  );
}