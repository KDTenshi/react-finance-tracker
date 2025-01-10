import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { FinancesCards } from "../../components/financesCards";

const App: FC = () => {
  return (
    <main className={"App"}>
      <Header />
      <FinancesCards />
    </main>
  );
};

export default App;
