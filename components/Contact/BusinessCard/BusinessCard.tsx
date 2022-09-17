/* eslint-disable @next/next/no-img-element */
import styles from "./BusinessCard.module.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

export interface Props {
  name: string;
  image?: string;
  email: string;
  networks?: {
    name: string;
    url: string;
  }[];
}

const BusinessCard: React.FC<Props> = ({ name, image, email, networks }) => {
  const renderNetworks = () => {
    if (networks) {
      return networks.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <SocialNetwork name={network.name} size={24} />
            </a>
          </li>
        );
      });
    }
  };
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
          <button className={styles.email}>{email}</button>
        </div>

        <ul className={styles.socialLinks}>{renderNetworks()}</ul>
      </div>
    </div>
  );
};

export default BusinessCard;
