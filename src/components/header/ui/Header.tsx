import { FC } from "react";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <h1 className={style.Title}>React Finance Tracker</h1>
      <button className={style.Button}>
        <div className={style.Icon}></div>Add New
      </button>
    </header>
  );
};

export default Header;
