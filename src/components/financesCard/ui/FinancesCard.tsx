import { FC } from "react";
import { FinancesType } from "../../../shared/types/types";
import Card from "../../../shared/ui/card/Card";
import { useAppSelector } from "../../../app/store/appStore";
import style from "./FinancesCard.module.css";
import FinancesCardItem from "./FinancesCardItem";

interface FinancesCardProps {
  type: FinancesType;
}

const FinancesCard: FC<FinancesCardProps> = ({ type }) => {
  const finances = useAppSelector((state) => state.finances[type]);
  const title = `${type[0].toUpperCase()}${type.slice(1)}`;

  return (
    <Card>
      <div className={style.Content}>
        <h2 className={style.Title}>Recent {title}</h2>
        <div className={style.Container}>
          {finances.map((item) => (
            <FinancesCardItem item={item} key={item.id} />
          ))}
        </div>
        <button className={style.Button}>Detailed {title}</button>
      </div>
    </Card>
  );
};

export default FinancesCard;
