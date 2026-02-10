import styles from "./InputText.module.css";

function InputText({ label, error, value, onChange, placeholder, name }) {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
}

export { InputText };
