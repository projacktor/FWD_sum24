import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.home}>
        <div className={styles.headers}>
          <h1 className={styles.h1}>Galiev <span className="pink">Arsen</span>'s</h1>
          <h2 className={styles.h2}><span className="pink">private</span> pages</h2>
        </div>
      </main>
  );
}
