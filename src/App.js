import "./App.css";
import BodyPortion from "./components/body/bodyPortion/BodyPortion";
import HeadPortion from "./components/body/headPortion/HeadPortion";
import MenuPortion from "./components/body/headPortion/MenuPortion";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import LeftHead from "./components/leftHead/LeftHead";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{ border: "1px solid #ededed", width: "85%", margin: "auto" }}
      >
        <HeadPortion />
        <BodyPortion />
      </div>
    </div>
  );
}

export default App;
