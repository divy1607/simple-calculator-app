import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import axios from 'axios';
import { Typography } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

function Scientific() {
    const [num, setNum] = useState('');
    const [result, setResult] = useState('');
    const [func, setFunc] = useState(null);
    const [checked, setChecked] = useState(false);

    return <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        justifyContent: "center",
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <Card
                style={{
                    width: 400,
                    padding: 20,
                    marginTop: 50,
                    marginRight: 20,
                    backgroundColor: "#a6ffab"
                }}
                variant="outlined">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">f(x)</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Operation"
                        value={func}
                        onChange={(e) => {
                            setFunc(e.target.value);
                        }}
                    >

                        <MenuItem value="invsine">arcsin(x)</MenuItem>
                        <MenuItem value="invcosine">arccos(x)</MenuItem>
                        <MenuItem value="invtan">arctan(x)</MenuItem>
                        <MenuItem value="natlog">ln(x)</MenuItem>
                        <MenuItem value="sine">sin(x)</MenuItem>
                        <MenuItem value="cosine">cos(x)</MenuItem>
                        <MenuItem value="tan">tan(x)</MenuItem>
                        <MenuItem value="exp">e^x</MenuItem>
                        <MenuItem value="log">log(x)</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />

                <TextField
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setNum(e.target.value)
                    }}
                    fullWidth={true}
                    label="x"
                    variant="outlined"
                />
                <br />
                <br />
                <Button
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    variant="contained"
                    onClick={async () => {
                        try {
                            const parsedNum = parseFloat(num);
                            if (func) {
                                const response = await axios.post(`http://localhost:3000/${func}`, {
                                    num: parsedNum,
                                });

                                setResult(response.data);
                            } else {
                                alert("No function selected")
                            }
                        } catch (error) {
                            alert("error");
                        }
                    }}>
                    Calculate
                </Button>
                <FormControlLabel control={<Checkbox
                    checked={checked}
                    onChange={(e) => {
                        setChecked(e.target.checked)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="inv" />
            </Card>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Card style={{

                padding: 20,
                width: 200,
                marginTop: 50,
                backgroundColor: "#ffffab",

            }}>
                <div>
                    <TextField
                        style={{ marginBottom: 10 }}

                        label="Result"
                        variant="outlined"
                        value={result}
                    />
                </div>
            </Card>
        </div>
    </div>

}

export default Scientific