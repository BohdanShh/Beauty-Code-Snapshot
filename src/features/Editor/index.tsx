import { FC } from 'react';
import { FONT_CLASSES } from 'src/constants';

import styles from 'src/features/Editor/styles.module.css';
import { useEditor } from 'src/features/Editor/useEditor';
import { FontClasses } from 'src/types';

const Editor: FC = () => {
  const { editMode, userPreferences, handleClick, handleChange, handleBlur } = useEditor();

  return (
    <div
      className="relative w-full h-full p-4 rounded-lg border-[1px] border-[#8f8f8f] bg-[#191919c4]"
      style={{ fontFamily: FONT_CLASSES[userPreferences.font as keyof FontClasses] }}
    >
      <div>
        <div className="flex items-center gap-1">
          <div className={`${styles.circle} bg-[#ff605c]`} />
          <div className={`${styles.circle} bg-[#ffbd44]`} />
          <div className={`${styles.circle} bg-[#00ca4e]`} />
        </div>
        {editMode ? (
          <input
            className={`${styles.titleField} outline-none bg-transparent`}
            type="text"
            autoFocus
            width="auto"
            value={userPreferences.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p className={styles.titleField} onClick={handleClick}>
            {userPreferences.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default Editor;
