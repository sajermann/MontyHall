import styles from "./index.module.css";

export default function Door(props) {
  const selectedDoor = props.selected ? styles.selected : ''
  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.knob} />
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
