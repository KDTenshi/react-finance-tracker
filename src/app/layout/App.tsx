import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";

const App: FC = () => {
  return (
    <main className={"App"}>
      <Header />
    </main>
  );
};

export default App;
