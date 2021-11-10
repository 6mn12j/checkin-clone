import styles from '../styles/Loading.module.css';

type Props =  {
  children?: React.ReactNode;
}

const Loading = ({ children }: Props) => {
  return (
    <>
      <span className={styles.logo}>42 logo</span>
      <div className={styles.warp}>
        {children}
      </div>
    </>
  );
};

export default Loading;
