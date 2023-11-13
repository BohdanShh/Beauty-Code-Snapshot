import { FC } from 'react';

import styles from 'src/features/Editor/styles.module.css';

const Editor: FC = () => {
  return (
    <div className="relative w-full h-full p-4 rounded-lg border-[1px] border-[#464646] bg-[#191919c4]">
      <div>
        <div className="flex items-center gap-1">
          <div className={`${styles.circle} bg-[#ff605c]`} />
          <div className={`${styles.circle} bg-[#ffbd44]`} />
          <div className={`${styles.circle} bg-[#00ca4e]`} />
        </div>
        <p className="absolute top-4 left-1/2 -translate-x-1/2 leading-4">Title</p>
      </div>
    </div>
  );
};

export default Editor;
