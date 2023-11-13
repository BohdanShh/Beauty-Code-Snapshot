import { FC } from 'react';

import Switch from 'src/components/Switch';
import Select from 'src/components/Select';

import styles from 'src/features/SettingsBar/styles.module.css';

const SettingsBar: FC = () => {
  return (
    <div className="flex gap-8 border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919]">
      <div className={styles.flexItem}>
        <div className={styles.label}>Theme</div>
        <Select listItems={[]} />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Background</div>
        <Switch />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Dark mode</div>
        <Switch />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Padding</div>
        <Switch />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Language</div>
        <Select listItems={[1, 2, 3]} />
      </div>
    </div>
  );
};

export default SettingsBar;
