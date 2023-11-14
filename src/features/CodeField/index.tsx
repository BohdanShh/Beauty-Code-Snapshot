'use client';

import { FC } from 'react';
import { Resizable } from 're-resizable';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';
import { ThemeClasses } from 'src/types';
import { THEME_VALUES } from 'src/constants';

import styles from 'src/features/CodeField/styles.module.css';

const CodeEditor: FC = () => {
  const { isDragging, userPreferences, handleResizeStart, handleResize, handleResizeStop } =
    useCodeField();

  return (
    <Resizable
      enable={{ left: true, right: true }}
      resizeRatio={2}
      handleStyles={{
        left: {
          left: '0',
          zIndex: 10,
          top: '50%',
          width: '1.5rem',
          height: '1.5rem',
          transform: 'translate(-50%,-50%)',
        },
        right: {
          right: '0',
          zIndex: 10,
          top: '50%',
          width: '1.5rem',
          height: '1.5rem',
          transform: 'translate(50%,-50%)',
        },
      }}
      handleClasses={{
        left: styles.resizeBtn,
        right: styles.resizeBtn,
      }}
      defaultSize={{ width: userPreferences.width || 520, height: 380 }}
      minWidth={520}
      maxWidth={920}
      minHeight={380}
      onResizeStart={handleResizeStart}
      onResize={handleResize}
      onResizeStop={handleResizeStop}
    >
      <div className="relative h-full flex flex-col gap-3">
        <div
          className={`h-full transition-all duration-200 ${
            THEME_VALUES?.[userPreferences.theme as keyof ThemeClasses]
          }`}
          style={{
            padding: userPreferences.padding,
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
