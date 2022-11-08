import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/door";
import Link from "next/link";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Game() {
  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDoors(createDoors(+router.query.doors, +router.query.hasPresent));
  }, [router.query]);

  useEffect(() => {
    const doorsQuantity = +router.query.doors;
    const presentDoor = +router.query.hasPresent;
    const quantityValidDoors = doorsQuantity >= 3 && doorsQuantity <= 100;
    const validPresentDoor = presentDoor >= 1 && presentDoor <= doorsQuantity;
    setValid(quantityValidDoors && validPresentDoor);
  }, [doors]);

  function renderDoors() {
    return doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
