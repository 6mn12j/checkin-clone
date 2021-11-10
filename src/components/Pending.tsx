import styles from '../styles/Pending.module.css';

type Props =  {
  children?: React.ReactNode;
}

const Pending = ({ children }: Props) => {
  return (
    <>
      <span className={styles.logo}>42 logo</span>
      <div className={styles.warp}>
        {children}
      </div>
    </>
  );
};

export default Pending;
