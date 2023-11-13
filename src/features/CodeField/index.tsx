'use client';

import { FC } from 'react';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';

const CodeEditor: FC = () => {
  const { isDragging, userPreferences, handleMouseDown, handleMouseMove, handleMouseUp } =
    useCodeField();

  return (
    <div className=" relative flex flex-col gap-3">
      <div
        className="h-[380px] bg-[red]"
        style={{
          width: `${userPreferences.width}px`,
          padding: userPreferences.padding,
          resize: 'horizontal',
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
        {userPreferences.width}px
      </div>
    </div>
  );
};

export default CodeEditor;
