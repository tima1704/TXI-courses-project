import { FC } from "react";

import Video from "./video.svg";
import Image from "./image.svg";
import Text from "./text.svg";

const Icons = {
  video: Video,
  image: Image,
  text: Text,
};

interface IconProps {
  icon: "video" | "image" | "text";
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className = "" }) => {
  return <img alt="icon" src={Icons[icon]} className={className} />;
};
