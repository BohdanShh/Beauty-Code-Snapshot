'use client';

import { FC, ForwardedRef, forwardRef, memo } from 'react';

import ThemeSelect from 'src/features/ThemeSelect';
import BackgroundSwitch from 'src/features/BackgroundSwitch';
import DarkModeSwitch from 'src/features/DarkModeSwitch';
import PaddingRadio from 'src/features/PaddingRadio';
import LanguageSelect from 'src/features/LanguageSelect';
import FontSelect from 'src/features/FontSelect';
import FontSizeInput from 'src/features/FontSizeInput';
import ExportOptions from 'src/features/ExportOptions';
import SettingItem from 'src/features/SettingItem';

type SettingsBarProps = {
  ref?: ForwardedRef<HTMLDivElement>;
};

const SettingsBar: FC<SettingsBarProps> = forwardRef(function SettingsBar(_, ref) {
  return (
    <div className="fixed left-8 top-8 flex flex-col gap-5 w-[250px] border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919]">
      <SettingItem label="Theme">
        <ThemeSelect />
      </SettingItem>
      <SettingItem label="Background">
        <BackgroundSwitch />
      </SettingItem>
      <SettingItem label="Dark mode">
        <DarkModeSwitch />
      </SettingItem>
      <SettingItem label="Padding">
        <PaddingRadio />
      </SettingItem>
      <SettingItem label="Language">
        <LanguageSelect />
      </SettingItem>
      <SettingItem label="Font">
        <FontSelect />
      </SettingItem>
      <SettingItem label="Font size">
        <FontSizeInput />
      </SettingItem>
      <ExportOptions ref={ref} />
    </div>
  );
});

export default memo(SettingsBar);
