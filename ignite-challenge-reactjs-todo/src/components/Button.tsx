import styles from "./css/Button.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
};

export { Button };
