import styles from "./style.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

export function Button({ icon, onClick }: ButtonProps) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
