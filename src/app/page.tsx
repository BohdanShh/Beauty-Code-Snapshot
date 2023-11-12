import { NextPage } from 'next';

import styles from 'src/app/page.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div className={styles.background} />
    </div>
  );
};

export default Home;
