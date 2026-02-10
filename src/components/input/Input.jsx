import styles from "./Input.module.css";

function Input({ label, error, value, onChange, placeholder, name, type }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export { Input };
