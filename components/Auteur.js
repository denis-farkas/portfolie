import Link from "next/link";
import styles from "styles/auteur.module.css";
import Image from "next/image";

const Auteur = () => {
  return (
    <div className={styles.auteur_container}>
      <div className={styles.profil_left}>
        <Image
          className={styles.imagen}
          src="/img/imgAvatar.jpg"
          width={138}
          height={133}
          alt="denis"
        />
      </div>
      <div className={styles.auteur_present}>
        <p className={styles.auteur_text}>
          L&apos;activité de développeur d&apos;applications Web me permet
          d&apos;entretenir les compétences acquises, en tant
          qu&apos;anthropologue consultant en Amérique Latine, pendant 20 ans.
          <br />
          Je suis apte à retranscrire fidèlement l&apos;identité et les besoins
          d&apos;une entreprise, à travers l&apos;observation et l&apos;écoute.
          <br />
          Les solutions technologiques que je propose sont maintenues
          d&apos;actualité grâce à une formation quotidienne, que je transmets
          aussi en cours particuliers, à mes élèves.
        </p>
      </div>
      <div className={styles.profil_right}>
        <ul className={styles.contacts}>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/cv.png"
              width={24}
              height={24}
              alt="cv"
            />
            <Link href="/cv">Curriculum</Link>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/email.png"
              width={24}
              height={24}
              alt="email"
            />
            <span className={styles.email}>dfarkas960@gmail.com</span>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/linkedin.png"
              width={24}
              height={24}
              alt="linkedin"
            />
            <span className={styles.email}>
              <Link
                href="https://www.linkedin.com/in/denis-farkas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </span>
          </li>
          <li className={styles.adresse}>
            <Image
              className={styles.img}
              src="/img/github.png"
              width={24}
              height={24}
              alt="github"
            />
            <span className={styles.email}>
              <Link
                href="https://github.com/denis-farkas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Auteur;
