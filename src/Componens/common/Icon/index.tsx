import { FC } from "react";

import Video from "./video.svg";
import Image from "./image.svg";
import Text from "./text.svg";
import Exit from "./exit.svg";
import ArrowLeft from "./arrow-left.svg";
import Enter from "./enter.svg";
import Telegram from "./telegram.svg";
import YouTube from "./youtube.svg";
import Instagram from "./instagram.svg";
import File from "./file.png";
import ChevronDown from "./chevron-down.svg";

const Icons = {
  video: Video,
  image: Image,
  text: Text,
  exit: Exit,
  arrowLeft: ArrowLeft,
  enter: Enter,
  telegram: Telegram,
  youTube: YouTube,
  file: File,
  instagram: Instagram,
  chevronDown: ChevronDown,
};

interface IconProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  icon:
    | "video"
    | "image"
    | "text"
    | "exit"
    | "arrowLeft"
    | "enter"
    | "youTube"
    | "telegram"
    | "instagram"
    | "file"
    | "chevronDown";
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className = "", ...props }) => {
  return <img {...props} alt="icon" src={Icons[icon]} className={className} />;
};
