import styles from "./Home.module.css";

function Home ()
{
  return (
    <>
    <h1>Game of Thrones</h1>
      <section className={styles["section__container"]}>
        <h2>👑 She Threatened to "Burn Cities to the Ground" as Early as Season 2</h2>
        <img src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/season-2-l.jpg?q=50&fit=crop&w=1500&dpr=1.5" width="970" height="600"/>
        <p>To say that Daenerys had somewhat of a short fuse is an understatement. Despite wanting to prove herself different from other Targaryens before her, she was quick to threaten fire and blood. Daenerys first makes this threat as early as season two, when she arrives outside Qarth with her khalasar. When they are denied entry, Daenerys promises them that when her dragons are fully grown, they "will lay waste to armies and burn cities to the ground," starting with Qarth.</p>
      </section>

      <section className={styles["section__container"]}>
        <h2>⚔️ Her Viewpoints Were Outdated in Westeros</h2>
        <img src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/season-7-2-l.jpg?q=50&fit=crop&w=1500&dpr=1.5" width="970" height="600"/>
        <p>Daenerys' plans to liberate the world from tyrants works best in Essos, because they were still behind in their ways. Her grand plan to break the wheel and create a new world doesn't merge well with the complex political landscape of Westeros. Daenerys didn't bother to understand the continent that she believed she was destined to rule, imposing her own beliefs onto it instead. She was incredibly ignorant of Westeros' traditions and allegiances.</p>
      </section>

  
    </>
  );
}

export default Home;
