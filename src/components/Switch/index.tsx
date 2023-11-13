'use client';

import { FC, useState } from 'react';

import styles from 'src/components/Switch/styles.module.css';

type SwitchProps = {
  defaultEnabled?: boolean;
  onClick?: () => void;
};

const Switch: FC<SwitchProps> = ({ defaultEnabled, onClick }) => {
  const [isToggled, setIsToggled] = useState<boolean>(defaultEnabled || false);

  const handleClick = (): void => {
    setIsToggled((prevState) => !prevState);
    onClick?.();
  };

  return (
    <button className={`${styles.btn} ${isToggled ? styles.active : ''}`} onClick={handleClick}>
      <div className={styles.thumb} />
    </button>
  );
};

export default Switch;
