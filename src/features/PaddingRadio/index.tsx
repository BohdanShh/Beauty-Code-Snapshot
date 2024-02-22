'use client';

import { cn } from 'src/lib/utils';
import { usePaddingRadio } from 'src/features/PaddingRadio/usePaddingRadio';

import styles from 'src/features/PaddingRadio/styles.module.css';

const PaddingRadio = () => {
  const { paddingButtons, isActiveButton } = usePaddingRadio();

  return (
    <div className="flex items-center gap-3 text-sm">
      {paddingButtons.map(({ classNames, id, value, onClick }) => (
        <button
          className={cn(classNames, isActiveButton(value) ? styles.active : '')}
          onClick={() => onClick(value)}
          key={id}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default PaddingRadio;
