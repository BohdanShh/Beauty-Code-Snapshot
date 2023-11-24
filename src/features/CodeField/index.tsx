'use client';

import { FC, ForwardedRef, forwardRef } from 'react';
import { Resizable } from 're-resizable';
import { cn } from 'src/lib/utils';

import Editor from 'src/features/Editor';

import { useCodeField } from 'src/features/CodeField/useCodeField';
import { ThemeClasses } from 'src/types';
import { THEMES } from 'src/constants';

import styles from 'src/features/CodeField/styles.module.css';

type CodeEditorProps = {
  ref?: ForwardedRef<HTMLDivElement>;
};

const CodeEditor: FC<CodeEditorProps> = forwardRef((_, ref) => {
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
      className="relative flex flex-col"
      handleStyles={{
        left: { left: 0, transform: 'translateX(-50%)', ...resizeButtonStyles },
        right: { right: 0, transform: 'translateX(50%)', ...resizeButtonStyles },
      }}
      handleClasses={{ left: styles.resizeBtn, right: styles.resizeBtn }}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      onResizeStart={handleResizeStart}
      onResize={handleResize}
      onResizeStop={handleResizeStop}
    >
      <div
        className={cn(
          'relative z-50 flex-grow flex flex-col gap-3',
          !userPreferences.background && styles.emptyBg
        )}
      >
        <div className="flex-grow flex flex-col gap-3" ref={ref}>
          <div
            className={cn(
              'flex-grow flex flex-col rounded-lg transition-[padding] duration-200',
              userPreferences.darkMode ? 'brightness-100' : 'text-gray-700 contrast-150',
              userPreferences.background &&
                THEMES?.[userPreferences.theme as keyof ThemeClasses].background
            )}
            style={{ padding: userPreferences.padding }}
          >
            <Editor />
          </div>
          <div
            className={cn(
              'absolute top-[105%] w-full text-center text-[#8b8b8b] transition-all duration-200',
              isDragging ? 'opacity-100 visible' : 'opacity-0 invisible'
            )}
          >
            {userPreferences.width}px
          </div>
        </div>
      </div>
    </Resizable>
  );
});

CodeEditor.displayName = 'CodeEditor';

export default CodeEditor;
