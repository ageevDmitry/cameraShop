import styles from './spinner-page.module.css';

function SpinnerPage(): JSX.Element {
  return (
    <div className={styles.container} data-testid="spinner-page">
      <div className={styles.loading}></div>
    </div>
  );
}

export default SpinnerPage;
