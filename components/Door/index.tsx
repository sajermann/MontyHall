import DoorModel from "../../model/DoorModel";
import styles from "./index.module.css";

interface Props {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door({ value, onChange }: Props) {
  console.log({ value });
  const door = value;
  const selectedDoor = door.isSelected ? styles.selected : "";
  function toogleSelection(e){
    onChange(value.toggleSelection())
  }

  return (
    <div className={styles.container} onClick={toogleSelection}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.knob} />
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
