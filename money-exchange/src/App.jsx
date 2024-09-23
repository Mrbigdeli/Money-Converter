import { useState } from "react";
import DollarToRial from "./components/DollartoRial/dollartoRial";
import RialToDollar from "./components/RialToDollar/RialToDollar";
import Button from "@mui/material/Button";
function App() {
  const [exchange, setExchane] = useState("0");
  const [label, setLabel] = useState("تبدیل ریال به دلار");
  function HandleButtonClick() {
    if (exchange == "0") {
      setExchane("1");
      setLabel("تبدیل دلار به ریال");
    } else if (exchange == "1") {
      setExchane("0");
      setLabel("تبدیل ریال به دلار");
    }
  }
  return (
    <div className="App-Comp-Container">
      <Button
        id="App-Comp-ExchangeType-Button"
        variant="contained"
        color="secondary"
        onClick={() => HandleButtonClick()}
      >
        {label}
      </Button>
      {exchange == "0" && <DollarToRial />}
      {exchange == "1" && <RialToDollar />}
    </div>
  );
}

export default App;
