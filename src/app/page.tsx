import { NextPage } from 'next';

import CodeField from 'src/features/CodeField';
import SettingsBar from 'src/features/SettingsBar';

import styles from 'src/app/styles.module.css';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden h-screen flex flex-col items-center justify-center gap-28 bg-[#0d0d0d]">
      <CodeField />
      <SettingsBar />
    </div>
  );
};

export default Home;
