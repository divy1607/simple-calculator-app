const express = require('express');
const bodyParser = require('body-parser');
const { z } = require('zod');
const cors = require ('cors');

const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

const schema = z.object({
    num1: z.number(),
    num2: z.number(),
  });

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json(result);
});

app.post('/sub', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json(result);
});

app.post('/mul', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json(result);
});

app.post('/div', (req, res) => {
    const { num1, num2 } = req.body;
    if(num2 === 0){
        return res.status(400).json({error: "invalid input"});
    }
    const result = num1 / num2;
    res.json(result);
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});