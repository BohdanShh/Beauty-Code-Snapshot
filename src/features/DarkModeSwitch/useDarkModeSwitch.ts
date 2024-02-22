import { useShallow } from 'zustand/react/shallow';

import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { SearchParam } from 'src/constants';

export const useDarkModeSwitch = () => {
  const { addSearchParam } = useUrlManager();

  const { darkMode, setDarkMode } = useUserPreferences(
    useShallow(state => ({
      darkMode: state.darkMode,
      setDarkMode: state.setDarkMode,
    }))
  );

  const handleDarkModeChange = (value: boolean): void => {
    setDarkMode(value);

    addSearchParam(SearchParam.DARK_MODE, value.toString());
  };

  return { darkMode, handleDarkModeChange };
};
