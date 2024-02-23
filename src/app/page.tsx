'use client';

import { useRef } from 'react';
import { NextPage } from 'next';

import CodeField from 'src/features/CodeField';
import SettingsBar from 'src/features/SettingsBar';

import { cn } from 'src/lib/utils';
import { THEMES } from 'src/constants';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { useIsMounted } from 'src/hooks/useIsMounted';

const Home: NextPage = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const theme = useUserPreferences(state => state.theme);
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden p-8 flex flex-col items-center justify-center gap-10">
      <CodeField ref={codeRef} />
      <SettingsBar ref={codeRef} />
      <div
        className={cn(
          'fixed top-0 right-0 w-[500px] h-[500px] rounded-full blur-[250px] translate-x-1/2 -translate-y-1/2',
          THEMES[theme].background
        )}
      />
    </div>
  );
};

export default Home;
