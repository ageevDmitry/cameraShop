import styles from './spinner-page.module.css';

function SpinnerPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default SpinnerPage;
