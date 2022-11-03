import { useState } from "react";
import Door from "../../components/Door";
import { createDoors, updateDoors } from "../../functions/door";
import styles from './index.module.css'

export default function Game() {
  const [doors, setDoors] = useState(createDoors(14, 2));

  function renderDoors() {
    return doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  }

  return <div className={styles.game}><div className={styles.doors}>
    {renderDoors()}
    </div><div className={styles.buttons}></div></div>;
}
