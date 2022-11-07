import Link from "next/link";
import Card from "../components/Card";
import styles from "./index.module.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>

      <div>
        <Card></Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
