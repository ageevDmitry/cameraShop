import styles from './spinner-component.module.css';

function SpinnerComponent(): JSX.Element {
  return (
    <div className={styles.container} data-testid="spinner-page">
      <div className={styles.loading}></div>
    </div>
  );
}

export default SpinnerComponent;
