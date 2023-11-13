'use client';

import { FC } from 'react';

import Switch from 'src/components/Switch';
import Select from 'src/components/Select';

import { useSettingsBar } from 'src/features/SettingsBar/useSettingsBar';

import styles from 'src/features/SettingsBar/styles.module.css';
import { SearchParam } from 'src/constants';

const SettingsBar: FC = () => {
  const { padding, paddingButtons, searchParams, handlePaddingChange, isActiveButton } =
    useSettingsBar();

  return (
    <div className="flex gap-8 border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919]">
      <div className={styles.flexItem}>
        <div className={styles.label}>Theme</div>
        <Select listItems={[]} />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Background</div>
        <Switch defaultEnabled />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Dark mode</div>
        <Switch defaultEnabled />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Padding</div>
        <div className="flex items-center gap-3">
          {paddingButtons.map(({ classNames, id, value, onClick }) => (
            <button
              className={`${classNames} ${isActiveButton(value) ? styles.active : ''}`}
              onClick={() => onClick(value)}
              key={id}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Language</div>
        <Select listItems={[1, 2, 3]} />
      </div>
    </div>
  );
};

export default SettingsBar;
