/* eslint-disable @next/next/no-img-element */
import styles from "./BusinessCard.module.css";
import SocialNetwork from "./SocialNetwork/SocialNetwork";
import { IconMapPin, IconMail, IconUser } from "@tabler/icons";

export interface Props {
  name: string;
  image?: string;
  location: string;
  email: string;
  networks?: {
    name: string;
    url: string;
  }[];
}

const BusinessCard: React.FC<Props> = ({
  name,
  image,
  location,
  email,
  networks,
}) => {
  const renderNetworks = () => {
    if (networks) {
      return networks.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noreferrer">
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
            <img src={image} alt={name} className={styles.circleImage} />
          </div>

          <div className={styles.cardName}>
            <IconUser size={20} />
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className={styles.general}>
        <div className={styles.cardConatiner}>
          <div className={styles.location}>
            <IconMapPin size={20} />
            <p>{location}</p>
          </div>
          <button className={styles.email}>
            <IconMail size={20} />
            <span>{email}</span>
          </button>
        </div>

        <ul className={styles.socialLinks}>{renderNetworks()}</ul>
      </div>
    </div>
  );
};

export default BusinessCard;
