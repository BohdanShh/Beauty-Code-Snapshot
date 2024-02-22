import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

export const useFontSelect = () => {
  const { addSearchParam } = useUrlManager();

  const { font, setFont } = useUserPreferences(
    useShallow(state => ({
      font: state.font,
      setFont: state.setFont,
    }))
  );

  const handleFontChange = (value: string): void => {
    setFont(value);

    addSearchParam(SearchParam.FONT, value);
  };

  return { font, handleFontChange };
};
