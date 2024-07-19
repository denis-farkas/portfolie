import { projetService } from "services";

import { useState, useEffect } from "react";
import styles from "styles/projet.module.css";
import CardProjet from "components/CardProjet";

import InfosFront from "components/InfosFront";

export { SectionFront };

function SectionFront() {
  const [projets, setProjets] = useState(null);
  useEffect(() => {
    projetService.getVariousFront().then((x) => setProjets(x));
  }, []);

  return (
    <>
      <div className={styles.contains}>
        <InfosFront />
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
