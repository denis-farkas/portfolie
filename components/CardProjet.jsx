import Image from "next/image";
import Link from "next/link";
import styles from "styles/cardProjet.module.css";

function CardProjet({ projet }) {
  const { id, name, content, image1, domain } = projet;
  let condition;

  if (domain !== "backend") {
    condition = "orange";
  } else {
    condition = "pink";
  }

  return (
    <article>
      <div className={`${styles.card} ${condition}`}>
        <div className={styles.media}>
          <div className={styles.layer}>
            <p className={styles.layer_text}>{content}</p>
            <Link href={`/projets/view/${id}`}>
              <div className={styles.badge} tabIndex="2">
                +
              </div>
            </Link>
          </div>
          <Image
            className={styles.courbure}
            src={`/img/${image1}`}
            width={307}
            height={208}
            alt={`projet ${name}`}
          />
        </div>
      </div>
    </article>
  );
}

export default CardProjet;
