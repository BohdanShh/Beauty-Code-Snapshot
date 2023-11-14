'use client';

import { FC } from 'react';
import { Resizable } from 're-resizable';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';
import { ThemeClasses } from 'src/types';
import { SearchParam, THEME_VALUES } from 'src/constants';

const CodeEditor: FC = () => {
  const { isDragging, userPreferences, handleResizeStart, handleResize, handleResizeStop } =
    useCodeField();

  return (
    <Resizable
      defaultSize={{ width: userPreferences.width || 520, height: 380 }}
      minWidth={520}
      maxWidth={920}
      onResizeStart={handleResizeStart}
      onResize={handleResize}
      onResizeStop={handleResizeStop}
    >
      <div className=" relative flex flex-col gap-3">
        <div
          className={`"h-[380px] ${THEME_VALUES?.[userPreferences.theme as keyof ThemeClasses]}`}
          style={{
            padding: userPreferences.padding,
            resize: 'horizontal',
          }}
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
    </Resizable>
  );
};

export default CodeEditor;
