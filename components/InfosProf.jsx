import Image from "next/image";

import styles from "styles/infos.module.css";

const InfosProf = () => {
  return (
    <div className={styles.contains}>
      <div className={styles.infos_body}>
        <div className={styles.infos_last}>
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
                  <h2>COURS MENTORAT</h2>
                </div>
              </div>
            </div>
            <div className={styles.card_body}>
              <p className={styles.infos_text}>
                Accompagner mes éléves en provenance de divers bootcamps coding
                school, sur la plateforme superprof.com, dans la réalisation de
                leurs projets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infos_footer}>
        <p>
          Pour maintenir une veille technologique et progresser dans les
          domaines variés du développement web, j&apos;ai décidé cette année de
          transmettre mes connaissances. Sur la plateforme superprof.com,
          j&apos;accompagne des élèves, d&apos;horizons divers, pour mener à
          bien leurs projets, réviser le code et les orienter vers les
          ressources disponibles sur le web. Avec <b>430h</b> de cours déjà
          réalisées depuis juillet 2023, j&apos;ai accompagné la progression de
          40 élèves jusqu&apos;à ce jour en javascript, php, symfony, node
          express, react et next.
        </p>
      </div>
    </div>
  );
};

export default InfosProf;
