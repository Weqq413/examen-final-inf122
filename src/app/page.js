import Image from "next/image";
import styles from "./page.module.css";
import Im from "./components/im";

export default function Home() {
  return (
    <main className={styles.main}>
      <Im/>

    </main>
  );
}
