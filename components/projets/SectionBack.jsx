import { projetService } from "services";
import { useState, useEffect } from "react";
import styles from "styles/projet.module.css";
import CardProjet from "components/CardProjet";
import InfosBack from "components/InfosBack";

export { SectionBack };

function SectionBack() {
  const [projets, setProjets] = useState(null);

  useEffect(() => {
    projetService.getVariousBack().then((x) => setProjets(x));
  }, []);

  return (
    <>
      <div className={styles.contains}>
        <InfosBack />
        <div className={styles.container_example}>
          {projets &&
            projets.map((projet) => (
              <CardProjet key={projet.id} projet={projet} />
            ))}
        </div>
      </div>
    </>
  );
}
