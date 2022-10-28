import DoorModel from "../../model/DoorModel";
import styles from "./index.module.css";

interface Props {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door({ value, onChange }: Props) {
  const door = value;
  const selectedDoor = door.isSelected && !door.isOpened ? styles.selected : "";
  function toogleSelection() {
    onChange(value.toggleSelection());
  }

  function handleOpenDoor(e){
    e.stopPropagation()
    onChange(door.open());
  }

  function renderDoor() {
    return (
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.knob} onClick={handleOpenDoor} />
        </div>
    );
  }

  return (
    <div className={styles.container} onClick={toogleSelection}>
      <div className={`${styles.frame} ${selectedDoor}`}>
      {!door.isOpened && renderDoor()}

      </div>

      <div className={styles.floor}></div>
    </div>
  );
}
