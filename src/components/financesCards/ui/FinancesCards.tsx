import { FC } from "react";
import style from "./FinancesCards.module.css";
import { FinancesCard } from "../../financesCard";

const FinancesCards: FC = () => {
  return (
    <div className={style.Cards}>
      <FinancesCard type={"incomes"} />
      <FinancesCard type={"outcomes"} />
    </div>
  );
};

export default FinancesCards;
