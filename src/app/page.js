import styles from "./page.module.css";
import Im from "./components/im";

export default function Home() {
  return (
    <div className={styles.main}>

      <Im/>
    </div>
  );
}