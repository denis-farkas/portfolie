import Image from "next/image";

import styles from "styles/infos.module.css";

const InfosBack = () => {
  return (
    <>
      <div id="projets" className={styles.infos_header}>
        <h1 className={styles.center_text}>
          Quelques exemples de réalisations orientées:
        </h1>
      </div>

      <div className={styles.infos_body}>
        <div className={styles.infos_right}>
          <div className={styles.card_infos}>
            <div className={styles.card_header}>
              <div className={styles.example}>
                <Image
                  className={styles.imagen}
                  src="/img/chevron2.png"
                  width={134}
                  height={40}
                  alt="déco"
                />
                <div className={styles.title_section}>
                  <h2>BACK-END</h2>
                </div>
              </div>
            </div>

            <div className={styles.card_body}>
              <p className={styles.infos_text}>
                Gérer les données du site et de l&apos;utilisateur, les
                communications entre différents serveurs, tout en maintenant la
                conformité avec les politiques d&apos;accessibilité et de
                sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infos_footer}>
        <p>
          Une formation de plus de 3 ans comprenant du php, de la programation
          orientée objet et du php data objects m&apos;a conforté dans la
          création de backends robustes et sécurisés. L&apos;utilisation
          d&apos;architectures Model View Controller, en php pur ou à
          l&apos;aide de frameworks comme codeigniter ou symfony a systématisé
          cet apprentissage. La gestion du data en appliquant la méthode merise
          des modéles conceptuels de données, l&apos;usage de SQL ou la création
          d&apos;API Rest sont les autres aspects que j&apos;ai pratiqué en
          créant du backend.
        </p>
      </div>
    </>
  );
};

export default InfosBack;
