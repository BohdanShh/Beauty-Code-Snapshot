import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

import styles from 'src/features/PaddingRadio/styles.module.css';

export const usePaddingRadio = () => {
  const { addSearchParam } = useUrlManager();
  const { padding, setPadding } = useUserPreferences(
    useShallow(state => ({
      padding: state.padding,
      setPadding: state.setPadding,
    }))
  );

  const handlePaddingChange = (value: number): void => {
    setPadding(value);

    addSearchParam(SearchParam.PADDING, value.toString());
  };

  const isActiveButton = (value: number): boolean => value === padding;

  const paddingButtons = [
    { classNames: styles.paddingBtn, value: 16, onClick: handlePaddingChange, id: '1' },
    { classNames: styles.paddingBtn, value: 32, onClick: handlePaddingChange, id: '2' },
    { classNames: styles.paddingBtn, value: 64, onClick: handlePaddingChange, id: '3' },
    { classNames: styles.paddingBtn, value: 128, onClick: handlePaddingChange, id: '4' },
  ];

  return { paddingButtons, isActiveButton };
};
