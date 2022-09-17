import React from "react";
import { LinkedIn, GitHub } from "../Icons";

export interface Props {
  name: string;
  size?: number;
}

const SocialNetwork: React.FC<Props> = ({ name, size }) => {
  switch (name) {
    case "LinkedIn":
      return <LinkedIn size={size} />;
    case "GitHub":
      return <GitHub size={size} />;
    default:
      return <div />;
  }
};

export default SocialNetwork;
