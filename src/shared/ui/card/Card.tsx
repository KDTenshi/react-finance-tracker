import { FC, PropsWithChildren } from "react";
import style from "./Card.module.css";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.Card}>{children}</div>;
};

export default Card;
