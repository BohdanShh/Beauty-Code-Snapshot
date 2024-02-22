'use client';

import { Switch } from 'src/components/ui/switch';

import { useBackgroundSwitch } from 'src/features/BackgroundSwitch/useBackgroundSwitch';

const BackgroundSwitch = () => {
  const { background, handleBackgroundChange } = useBackgroundSwitch();

  return (
    <Switch
      defaultChecked
      checked={background}
      onCheckedChange={handleBackgroundChange}
    />
  );
};

export default BackgroundSwitch;
