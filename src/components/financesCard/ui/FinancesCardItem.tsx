import { FC } from "react";
import style from "./FinancesCard.module.css";
import { FinanceItemType } from "../../../shared/types/types";

interface FinancesCardItemProps {
  item: FinanceItemType;
}

const FinancesCardItem: FC<FinancesCardItemProps> = ({ item }) => {
  return (
    <div className={style.Item}>
      <div className={style.Text}>
        <div className={style.Icon}></div>
        <p className={style.Name}>{item.name}</p>
      </div>
      <p className={style.Amount}>{item.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
    </div>
  );
};

export default FinancesCardItem;
