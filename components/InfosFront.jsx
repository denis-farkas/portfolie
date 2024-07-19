import Image from "next/image";

import styles from "styles/infos.module.css";

const InfosFront = () => {
  return (
    <div className={styles.contains}>
      <div className={styles.infos_body}>
        <div className={styles.infos_left}>
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
                  <h2>FRONT-END</h2>
                </div>
              </div>
            </div>
            <div className={styles.card_body}>
              <p className={styles.infos_text}>
                Combiner différents éléments pour former un ensemble cohérent,
                esthétique et fonctionnel, favorisant l&apos;expérience du
                visiteur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infos_footer}>
        <p>
          Dans le domaine du Frontend je me suis spécialisé en Reactjs puis
          Nextjs, avec Express ou des ORM tels que Prisma ou Sequelize, coté
          backend. Je continue à entretenir ma maitrise du Css et du Scss, dans
          une pratique hebdomadaire des projets frontendMentor.
        </p>
      </div>
    </div>
  );
};

export default InfosFront;
