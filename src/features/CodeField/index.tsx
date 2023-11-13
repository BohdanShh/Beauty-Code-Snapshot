'use client';

import { FC } from 'react';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';

import styles from 'src/features/CodeEditor/styles.module.css';

const CodeEditor: FC = () => {
  const { width, isDragging, handleMouseDown, handleMouseMove, handleMouseUp } = useCodeField();

  return (
    <div className="flex flex-col gap-3">
      <div
        className="min-h-[250px] bg-[red] p-[64px]"
        style={{
          width: `${width}px`,
          resize: 'both',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Editor />
      </div>
      <div
        className={`text-center text-[#8b8b8b] transition-all duration-200  ${
          isDragging ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {width}px
      </div>
    </div>
  );
};

export default CodeEditor;
