import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/door";
import Link from "next/link";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Game() {
  const [doors, setDoors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setDoors(createDoors(+router.query.doors, +router.query.hasPresent));
  }, [router.query]);

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
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
