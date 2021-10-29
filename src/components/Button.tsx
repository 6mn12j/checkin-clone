import styles from '../styles/Button.module.css';
import classNames from 'classnames/bind';

type Props = {
  color?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<Element>;
  text?: string;
}

const Button = ({ color = 'green', disabled, onClick, text }: Props) => {
  let cx = classNames.bind(styles);
  return (
    <>
      <button
        className={cx('button', color)}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
