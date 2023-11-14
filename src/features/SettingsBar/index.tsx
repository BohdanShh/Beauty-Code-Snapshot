'use client';

import { FC } from 'react';

import Switch from 'src/components/Switch';
import Select from 'src/components/Select';

import { useSettingsBar } from 'src/features/SettingsBar/useSettingsBar';
import { LANGUAGES, THEMES } from 'src/features/SettingsBar/constants';

import styles from 'src/features/SettingsBar/styles.module.css';

const SettingsBar: FC = () => {
  const {
    paddingButtons,
    userPreferences,
    isActiveButton,
    handleLanguageChange,
    handleThemeChange,
  } = useSettingsBar();

  console.log(userPreferences);

  return (
    <div className="fixed bottom-8 left-1/2 flex max-w-[1000px] w-full justify-between border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919] -translate-x-1/2">
      <div className={styles.flexItem}>
        <div className={styles.label}>Theme</div>
        <Select value={userPreferences.theme} style={{ width: 150 }}>
          {THEMES.map(({ value, text, classNames, id }) => (
            <li className={styles.menuItem} key={id} onClick={() => handleThemeChange(value)}>
              <div className={`w-4 h-4 rounded-full ${classNames}`} />
              <div>{text}</div>
            </li>
          ))}
        </Select>
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
        <Select value={userPreferences.language} style={{ width: 150 }}>
          {LANGUAGES.map(({ text, id, value }) => (
            <li className={styles.menuItem} key={id} onClick={() => handleLanguageChange(value)}>
              {text}
            </li>
          ))}
        </Select>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Font</div>
        <Select>
          {LANGUAGES.map(({ value, text, id }) => (
            <li className={styles.menuItem} key={id} data-value={value}>
              {text}
            </li>
          ))}
        </Select>
      </div>
      <div className={styles.flexItem}>
        <button className="h-full rounded-lg text-[#ee5e5e] px-4 bg-[#ee5e5e2d] transition-all duration-200 hover:bg-[#ee5e5e54]">
          Export
        </button>
      </div>
    </div>
  );
};

export default SettingsBar;
