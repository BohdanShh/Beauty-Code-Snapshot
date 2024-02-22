import { useShallow } from 'zustand/react/shallow';
import { ChangeEvent } from 'react';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

export const useFontSizeInput = () => {
  const { addSearchParam } = useUrlManager();

  const { fontSize, setFontSize } = useUserPreferences(
    useShallow(state => ({
      fontSize: state.fontSize,
      setFontSize: state.setFontSize,
    }))
  );

  const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const targetValue = event.currentTarget.value;

    setFontSize(Number(targetValue));

    addSearchParam(SearchParam.FONT_SIZE, targetValue);
  };

  return { fontSize, handleFontSizeChange };
};
