import { useShallow } from 'zustand/react/shallow';

import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { SearchParam } from 'src/constants';

export const useBackgroundSwitch = () => {
  const { addSearchParam } = useUrlManager();
  const { background, setBackground } = useUserPreferences(
    useShallow(state => ({
      background: state.background,
      setBackground: state.setBackground,
    }))
  );

  const handleBackgroundChange = (value: boolean): void => {
    setBackground(value);

    addSearchParam(SearchParam.BACKGROUND, value.toString());
  };

  return { background, handleBackgroundChange };
};
