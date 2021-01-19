const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const url = require('url');
const queryString = require('querystring');



//MiddleWare 
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 7000;
var exRateURL = process.env.exRateURL;
var date = new Date();
var curDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
console.log(curDate);
var DATA;





app.listen(port,()=>{
    console.log(`App running on port:${port}`);
});

app.get('/',(req,res)=>{
    res.send('backend working');
})



app.get('/api/rates',(req,res)=>{
    let base = req.query.base;
    let currency = req.query.currency;
    let curArr = currency.split(",");
    var result = {
        rates:{}
    };

    console.log(curArr)
   try{
    const getFunc = ()=>{
        return  axios("https://api.exchangeratesapi.io/latest");
     }  
    (
        async()=>{
            DATA = await getFunc();
            var rates = DATA.data.rates;
            result['date'] = curDate;
            result['base']= base;
            curArr.forEach(item=>{
                result.rates[item] = (rates[item]/rates[base]);
            })
            
            res.status(200).json(result);
        }
        
    )()
   }catch(err){
       res.status(400).json({
           msg:err
       })
   }

 
    //var arr = currency.split(",");
})