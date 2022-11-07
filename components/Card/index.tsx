import styles from './index.module.css'

type Props = {
  bgcolor?: string 
  children?: React.ReactNode
}
export default function Card(props:Props) {
  return (
    <div className={styles.card} style={{backgroundColor: props.bgcolor ?? '#fff'}}>
      {props.children}
    </div>
  );
}
