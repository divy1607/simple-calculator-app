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

app.post('/pow', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 ** num2;
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

app.post('/sine', (req, res) => {
    var {num} = req.body;
    num = num * Math.PI / 180;
    const result = Math.sin(num)
    res.json(result);
})

app.post('/cosine', (req, res) => {
    var {num} = req.body;
    num = num * Math.PI / 180;
    const result = Math.cos(num)
    res.json(result);
})

app.post('/tan', (req, res) => {
    var {num} = req.body;
    num = num * Math.PI / 180;
    const result = Math.tan(num)
    res.json(result);
})

app.post('/invsine', (req, res) => {
    var {num} = req.body;
    if(num>1 || num<-1){
        res.status(400).json({error: "invalid input"})
    }
    const result = Math.asin(num) * 180 / Math.PI
    res.json(result);
})

app.post('/invcosine', (req, res) => {
    var {num} = req.body;
    if(num>1 || num<-1){
        res.status(400).json({error: "invalid input"})
    }
    const result = Math.acos(num) * 180 / Math.PI
    res.json(result);
})

app.post('/invtan', (req, res) => {
    var {num} = req.body;
    if(num>1 || num<-1){
        res.status(400).json({error: "invalid input"})
    }
    const result = Math.atan(num) * 180 / Math.PI
    res.json(result);
})

app.post('/exp', (req, res) => {
    var {num} = req.body;
    const result = Math.exp(num)
    res.json(result);
})

app.post('/fac', (req, res) => {
    var {num} = req.body;
    var result = 1;
    for(let i=1; i<=num; i++){
        result = result * i;
    }
    res.json(result);
})

app.post('/log', (req, res) => {
    const { num1, num2 } = req.body;
    function logxbaseb (x, b){
        return Math.log(x) / Math.log(b) 
    }
    const result = logxbaseb(num1, num2);
    res.json(result);
})

app.post('/natlog', (req, res) => {
    const { num } = req.body;
    function natlog (x){
        return Math.log(x) / Math.log(Math.E) 
    }
    const result = natlog(num);
    res.json(result);
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});