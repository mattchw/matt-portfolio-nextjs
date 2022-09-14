/* eslint-disable @next/next/no-img-element */
import styles from "./BusinessCard.module.css";

export interface Props {
  name: string;
  image?: string;
}

const BusinessCard: React.FC<Props> = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.additional}>
        <div className={styles.cardConatiner}>
          {/* <img src={logo} alt={styles.logo" style={{ width: 30 }} /> */}
          <div className={styles.circle}>
            <img src={image} alt={name} />
          </div>

          <div className={styles.cardName}>
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className={styles.general}>
        <div className={styles.cardConatiner}>
          <p>Hong Kong</p>
          <p>matthew.chohin@gmail.com</p>
        </div>

        {/* <ul className={styles.socialLinks}>{networks}</ul> */}
      </div>
    </div>
  );
};

export default BusinessCard;
