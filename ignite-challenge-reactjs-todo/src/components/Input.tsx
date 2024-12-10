import styles from "./css/Input.module.css";

const Input = ({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      { ...rest }
    />
  );
};

export { Input };
