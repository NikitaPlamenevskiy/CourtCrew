import styles from "./Input.module.css";

function Input({ label, error, value, onChange, placeholder, name, type }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
}

export { Input };
