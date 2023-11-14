'use client';

import { FC } from 'react';
import { Resizable } from 're-resizable';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';
import { ThemeClasses } from 'src/types';
import { THEME_VALUES } from 'src/constants';

import styles from 'src/features/CodeField/styles.module.css';

const CodeEditor: FC = () => {
  const {
    isDragging,
    userPreferences,
    minWidth,
    maxWidth,
    minHeight,
    resizeButtonStyles,
    handleResizeStart,
    handleResize,
    handleResizeStop,
  } = useCodeField();

  return (
    <Resizable
      enable={{ left: true, right: true }}
      resizeRatio={2}
      handleStyles={{
        left: { left: 0, ...resizeButtonStyles },
        right: { right: 0, ...resizeButtonStyles },
      }}
      handleClasses={{ left: styles.resizeBtn, right: styles.resizeBtn }}
      defaultSize={{ width: userPreferences.width || minWidth, height: minHeight }}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      onResizeStart={handleResizeStart}
      onResize={handleResize}
      onResizeStop={handleResizeStop}
    >
      <div className="relative h-full flex flex-col gap-3">
        <div
          className={`h-full transition-all duration-200 ${
            THEME_VALUES?.[userPreferences.theme as keyof ThemeClasses]
          }`}
          style={{ padding: userPreferences.padding }}
        >
          <Editor />
        </div>
        <div
          className={`absolute top-[105%] w-full text-center text-[#8b8b8b] transition-all duration-200 ${
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
