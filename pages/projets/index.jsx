import { useState, useEffect } from "react";
import { Layout } from "components/users";
import { projetService } from "services";
import CardProjet from "components/CardProjet";
import styles from "styles/projet.module.css";

export default Index;

function Index() {
  const [projets, setProjets] = useState(null);
  // recupere tout les projets
  useEffect(() => {
    projetService.getAll().then((x) => setProjets(x));
  }, []);

  return (
    <Layout>
      {projets && projets.length > 0 && (
        <div className={styles.container_example}>
          {projets &&
            projets.map((projet) => (
              <CardProjet key={projet.id} projet={projet} />
            ))}
        </div>
      )}
      {projets && !projets.length && (
        <div className="text-center">
          <h3 className="p-2">Pas de projets à afficher</h3>
        </div>
      )}
    </Layout>
  );
}
