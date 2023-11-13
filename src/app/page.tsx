import { NextPage } from 'next';

import SettingsBar from 'src/features/SettingsBar';

import styles from 'src/app/styles.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <SettingsBar />
      <div className={styles.background} />
    </div>
  );
};

export default Home;
