'use client';

import { useRef } from 'react';
import { NextPage } from 'next';
import { cn } from 'src/lib/utils';

import CodeField from 'src/features/CodeField';
import SettingsBar from 'src/features/SettingsBar';

import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';
import { THEMES } from 'src/constants';
import { ThemeClasses } from 'src/types';

const Home: NextPage = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const userPreferences = useGetUserPreferences();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10">
      <CodeField ref={codeRef} />
      <SettingsBar ref={codeRef} />
      <div
        className={cn(
          'fixed top-0 right-0 w-[500px] h-[500px] rounded-full blur-[250px] translate-x-1/2 -translate-y-1/2',
          THEMES[userPreferences.theme as keyof ThemeClasses].background
        )}
      />
    </div>
  );
};

export default Home;
