import { FC } from 'react';
import CodeEditor from 'react-simple-code-editor';
import hljs from 'highlight.js';

import { FONT_CLASSES } from 'src/constants';
import { useEditor } from 'src/features/Editor/useEditor';
import { FontClasses } from 'src/types';

import 'highlight.js/styles/atom-one-dark.css';
import styles from 'src/features/Editor/styles.module.css';

const Editor: FC = () => {
  const {
    editTitleModeEnabled,
    userPreferences,
    handleTitleClick,
    handleTitleChange,
    handleBlur,
    handleCodeChange,
  } = useEditor();

  return (
    <div
      className="relative w-full flex-grow flex flex-col p-4 rounded-lg border-[1px] border-[#8f8f8f] bg-[#d1d1d1c4] transition-all duration-200"
      style={{
        fontFamily: FONT_CLASSES[userPreferences.font as keyof FontClasses],
        backgroundColor: userPreferences.darkMode ? '#191919' : '#e9e9e9',
      }}
    >
      <div>
        <div className="flex items-center gap-2">
          <div className={`${styles.circle} bg-[#ff605c]`} />
          <div className={`${styles.circle} bg-[#ffbd44]`} />
          <div className={`${styles.circle} bg-[#00ca4e]`} />
        </div>
        {editTitleModeEnabled ? (
          <input
            className={`${styles.titleField} outline-none bg-transparent`}
            type="text"
            autoFocus
            value={userPreferences.title}
            onChange={handleTitleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p className={styles.titleField} onClick={handleTitleClick}>
            {userPreferences.title}
          </p>
        )}
      </div>
      <CodeEditor
        className={styles.codeEditor}
        value={userPreferences.code}
        onValueChange={handleCodeChange}
        highlight={(code) => hljs.highlight(code, { language: userPreferences.language }).value}
        padding={10}
      />
    </div>
  );
};

export default Editor;
