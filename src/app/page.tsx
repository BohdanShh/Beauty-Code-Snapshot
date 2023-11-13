import { NextPage } from 'next';
import Image from 'next/image';

import CodeField from 'src/features/CodeField';
import SettingsBar from 'src/features/SettingsBar';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10">
      <CodeField />
      <SettingsBar />
      <div className="fixed bottom-0 left-1/2 w-[300px] h-[50px] rounded-full bg-[#0400ff] blur-[100px] -translate-x-1/2 translate-y-1/2" />
    </div>
  );
};

export default Home;
