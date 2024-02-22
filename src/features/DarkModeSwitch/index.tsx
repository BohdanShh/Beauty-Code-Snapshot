'use client';

import { Switch } from 'src/components/ui/switch';

import { useDarkModeSwitch } from 'src/features/DarkModeSwitch/useDarkModeSwitch';

const DarkModeSwitch = () => {
  const { darkMode, handleDarkModeChange } = useDarkModeSwitch();

  return (
    <Switch
      defaultChecked
      checked={darkMode}
      onCheckedChange={handleDarkModeChange}
    />
  );
};

export default DarkModeSwitch;
