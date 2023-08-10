import styles from "./Motto.module.css";

function Motto ()
{
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>Games of Thrones</span>
      <span className={styles["motto__emojis"]}>🏚️👑⚔️🐉👹👸</span>
    </div>
  );
}

export default Motto;
