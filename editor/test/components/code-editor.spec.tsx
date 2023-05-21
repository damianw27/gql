import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CodeEditor } from '$components/code-editor/code-editor';

describe('CodeEditor', () => {
  test('renders code editor with initial value', () => {
    const initialValue = 'console.log("Hello, world!");';
    const handleValueChange = jest.fn();

    render(<CodeEditor value={initialValue} onValueChange={handleValueChange} />);

    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
    expect(editor.nodeValue).toBe(initialValue);
  });

  test('calls onValueChange when code editor value changes', () => {
    const initialValue = 'console.log("Hello, world!");';
    const handleValueChange = jest.fn();

    render(<CodeEditor value={initialValue} onValueChange={handleValueChange} />);

    const editor = screen.getByRole('textbox');
    const newValue = 'console.log("Updated code!");';

    fireEvent.input(editor, { target: { value: newValue } });

    expect(handleValueChange).toHaveBeenCalledWith(newValue);
  });
});
