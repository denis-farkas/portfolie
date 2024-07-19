import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Spinner } from "components";
import { Layout } from "components/projets";
import { projetService, alertService } from "services";
import Image from "next/image";
import Gallery from "components/Gallery";
import Presentation from "components/Presentation";
import styles from "styles/projet.module.css";

function View() {
  const router = useRouter();
  const [projet, setProjet] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    console.log(id);
    if (!id) return;

    // fetch projet
    projetService
      .getById(id)
      .then((x) => setProjet(x))
      .catch(alertService.error);
  }, [router]);

  return (
    <Layout>
      <div className={styles.projet}>
        <div className={styles.example}>
          <Image
            className={styles.imagen}
            src="/img/chevron2.png"
            width={269}
            height={80}
            alt="déco"
          />
          <div className={styles.title_section}>
            <h2>PROJET : {projet && projet.name}</h2>
          </div>
        </div>
        {projet ? <Gallery current={projet} /> : <Spinner />}
        {projet ? <Presentation current={projet} /> : <Spinner />}
      </div>
    </Layout>
  );
}

export default View;
