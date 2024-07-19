import Image from "next/image";
import styles from "styles/home.module.css";

const HeadSection = () => {
  return (
    <div className={`contenedor ${styles.main}`}>
      <div className={styles.content_left}>
        <div className={styles.subtitles}>Atelier</div>
        <div className={styles.title}>Développement web</div>
        <div className={styles.paragraphe}>
          Qu&#39;il s&#39;agisse de l&#39;intégration de maquettes, du
          développement de nouvelles fonctionnalités ou de la création intégrale
          d&#39;un site internet, notre atelier est à votre disposition, pour
          étudier ensemble, les solutions techniques les plus adaptées à vos
          besoins.
        </div>
      </div>

      <div className={styles.content_right}>
        <Image
          className={styles.img}
          src="/img/crop.png"
          width={1004}
          height={500}
          alt="logo"
          priority={true}
        />
      </div>
    </div>
  );
};

export default HeadSection;
