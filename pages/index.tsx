import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import { InputNumber } from "../components/InputNumber";
import styles from "./index.module.css";

export default function Form() {
  const [quantityDoors, setQuantityDoors] = useState(3);
  const [doorWithPresent, setDoorWithPresent] = useState(1);
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            value={quantityDoors}
            onChange={(e) => setQuantityDoors(e)}
            text="Quantidade Portas?"
          />
        </Card>
      </div>

      <div>
        <Card>
          <InputNumber
            value={doorWithPresent}
            onChange={(e) => setDoorWithPresent(e)}
            text="Porta com Presente?"
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${quantityDoors}/${doorWithPresent}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
