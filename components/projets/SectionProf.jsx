import { projetService } from "services";

import { useState, useEffect } from "react";
import styles from "styles/projet.module.css";
import CardProjet from "components/CardProjet";

import InfosProf from "components/InfosProf";

export { SectionProf };

function SectionProf() {
  const [projets, setProjets] = useState(null);
  useEffect(() => {
    projetService.getVariousProf().then((x) => setProjets(x));
  }, []);

  return (
    <>
      <div className={styles.contains}>
        <InfosProf />
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
