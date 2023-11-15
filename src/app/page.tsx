'use client';

import { NextPage } from 'next';

import CodeField from 'src/features/CodeField';
import SettingsBar from 'src/features/SettingsBar';

import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';
import { THEME_VALUES } from 'src/constants';
import { ThemeClasses } from 'src/types';

const Home: NextPage = () => {
  const userPreferences = useGetUserPreferences();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10">
      <CodeField />
      <SettingsBar />
      <div
        className={`fixed top-0 right-0 w-[500px] h-[500px] rounded-full ${
          THEME_VALUES[userPreferences.theme as keyof ThemeClasses]
        } blur-[250px] translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
};

export default Home;
