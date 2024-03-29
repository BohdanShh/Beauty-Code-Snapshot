'use client';

import { FC } from 'react';
import CodeEditor from 'react-simple-code-editor';
import hljs from 'highlight.js';

import { cn } from 'src/lib/utils';
import { Input } from 'src/components/ui/input';
import { THEMES } from 'src/constants';
import { useEditor } from 'src/features/Editor/useEditor';

import 'src/features/Editor/themes.scss';
import styles from 'src/features/Editor/styles.module.css';

const Editor: FC = () => {
  const {
    editTitleModeEnabled,
    userPreferences,
    fonts,
    handleTitleClick,
    handleTitleChange,
    handleBlur,
    handleCodeChange,
  } = useEditor();

  return (
    <div
      className={cn(
        'relative w-full flex-grow flex flex-col p-4 rounded-lg border-[1px] border-[#8f8f8f] bg-[#d1d1d1c4] transition-[background] duration-200',
        userPreferences.darkMode
          ? 'bg-[#191919] brightness-100'
          : 'bg-[#e9e9e9] text-gray-700 contrast-150',
        fonts[userPreferences.font].className
      )}
    >
      <div>
        <div className="flex items-center gap-2">
          <div className={`${styles.circle} bg-[#ff605c]`} />
          <div className={`${styles.circle} bg-[#ffbd44]`} />
          <div className={`${styles.circle} bg-[#00ca4e]`} />
        </div>
        {editTitleModeEnabled ? (
          <Input
            className={cn(styles.titleField, 'outline-none bg-transparent')}
            type="text"
            maxLength={20}
            autoFocus
            value={userPreferences.title}
            onChange={handleTitleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p
            className={cn(styles.titleField, 'text-ellipsis')}
            onClick={handleTitleClick}
          >
            {userPreferences.title || 'Untitled-1'}
          </p>
        )}
      </div>
      <CodeEditor
        className={cn(styles.codeEditor, THEMES[userPreferences.theme].codeTheme)}
        placeholder="Write your code here..."
        value={userPreferences.code}
        onValueChange={handleCodeChange}
        highlight={code => hljs.highlight(code, { language: userPreferences.language }).value}
        padding={10}
        style={{ fontSize: userPreferences.fontSize }}
      />
    </div>
  );
};

export default Editor;
