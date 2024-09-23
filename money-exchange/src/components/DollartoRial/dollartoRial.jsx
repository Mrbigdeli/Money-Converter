import { useState } from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";

const DollarToRial = () => {
  const [dollarValue, setDollarValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [showConvertedValue, setShowConvertedValue] = useState(false);
  const [HelperTxt, setHelperTxt] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  function DollarConverter() {
    if (dollarValue === "") {
      setShowError(true);
      setShowHelp(true);
      setHelperTxt("should provide sth");
    } else if (dollarValue !== "") {
      if (!isNaN(dollarValue)) {
        setShowHelp(false);
        setShowConvertedValue(true);
      } else if (isNaN(dollarValue)) {
        setShowError(true);
        setShowHelp(true);
        setHelperTxt("Input should be a Number");
      }
    }
  }
  return (
    <>
      <h4 className="DollarToRial-Comp-Header4">تبدیل دلار به ریال</h4>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              placeholder="50000"
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
              value={dollarValue}
              error={showError ? true : false}
              onChange={(e) => setDollarValue(e.target.value)}
            />
            {showError && showHelp && (
              <FormHelperText id="component-helper-text">
                {HelperTxt}
              </FormHelperText>
            )}
          </FormControl>
        </div>
      </Box>
      <Button
        className="DollarToRial-Comp-ConvertButton"
        variant="contained"
        onClick={() => DollarConverter()}
      >
        Convert
      </Button>
      {showConvertedValue && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "15px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            value={!isNaN(dollarValue) ? dollarValue * 600000 : 0}
            disabled
            variant="standard"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">ریال</InputAdornment>
                ),
              },
            }}
          />
        </Box>
      )}
    </>
  );
};

export default DollarToRial;
