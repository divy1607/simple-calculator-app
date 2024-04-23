import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import axios from 'axios';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState(null);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000000",
      justifyContent: "center",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Card 
          style = {{
            width: 400, 
            padding: 20, 
            marginTop: 50, 
            marginRight: 20,
            backgroundColor: "#a6ffab"
          }} 
          variant="outlined">
            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setNum1(e.target.value)
              }}
              fullWidth={true}
              label="Number 1"
              variant="outlined"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Operator</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Operation"
                value={operator}
                onChange={(e) => {
                  setOperator(e.target.value);
                }}
              >
                <MenuItem value="add">+</MenuItem>
                <MenuItem value="sub">-</MenuItem>
                <MenuItem value="mul">*</MenuItem>
                <MenuItem value="div">/</MenuItem>
                <MenuItem value="pow">^</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setNum2(e.target.value)
              }}
              fullWidth={true}
              label="Number 2"
              variant="outlined"
            />
            <br />
            
            <Button 
            style = {{
              display: "flex",
              justifyContent: "center"
            }}
            variant = "contained"
            onClick={async () => {
              try {
                const parsedNum1 = parseFloat(num1);
                const parsedNum2 = parseFloat(num2);
                if (operator) {
                  const response = await axios.post(`http://localhost:3000/${operator}`, {
                    num1: parsedNum1,
                    num2: parsedNum2
                  });
                  if(num2===0 && operator === '/'){
                    alert("cannot divide by 0")
                  }
                  setResult(response.data);
                } else {
                  alert("No operator selected")
                }
              } catch (error) {
                alert("error while calculating");
              }
            }}>
              Calculate
            </Button>

          </Card>
        </div>
        <div>
          <Card style = {{
            padding: 20,
            marginTop: 120,
            backgroundColor: "#ffffab"
          }}> 
            <div>
              <TextField
                style={{ marginBottom: 10 }}
                fullWidth={true}
                label="Result"
                variant="outlined"
                value={result}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


export default App
