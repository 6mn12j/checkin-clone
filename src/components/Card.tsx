import styles from '../styles/Card.module.css';
import logo from '../images/42-logo-black.png';

type Props =  {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.logo} alt="logo" src={logo} />
        {children}
      </div>
    </>
  );
};

export default Card;
