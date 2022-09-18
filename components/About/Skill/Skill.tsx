import React from "react";
import {
  Html,
  Css,
  Javascript,
  Nodejs,
  Python,
  Golang,
  Ruby,
  Typescript,
} from "./Icons";

export interface Props {
  name: string;
  size?: number;
  color?: string;
}

const SocialNetwork: React.FC<Props> = ({ name, size = 40, color }) => {
  switch (name) {
    case "Html":
      return <Html size={size} color={color} />;
    case "Css":
      return <Css size={size} color={color} />;
    case "Javascript":
      return <Javascript size={size} color={color} />;
    case "Typescript":
      return <Typescript size={size} color={color} />;
    case "Nodejs":
      return <Nodejs size={size} color={color} />;
    case "Python":
      return <Python size={size} color={color} />;
    case "Golang":
      return <Golang size={size} color={color} />;
    case "Ruby":
      return <Ruby size={size} color={color} />;
    default:
      return <div />;
  }
};

export default SocialNetwork;
