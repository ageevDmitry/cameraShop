import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default LoadingScreen;
