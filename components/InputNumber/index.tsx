import styles from "./index.module.css";

interface Props {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function InputNumber(props: Props) {

  function dec(){
    props.onChange(props.value - 1)
  }

  function inc(){
    props.onChange(props.value + 1)
  }
  
  return <div className={styles.inputNumber}>
    <span className={styles.text}>{props.text}</span>
    <span className={styles.value}>{props.value}</span>
    <div className={styles.buttons}>
      <button className={styles.btn} onClick={dec}>-</button>
      <button className={styles.btn} onClick={inc}>+</button>
    </div>
  </div>;
}
