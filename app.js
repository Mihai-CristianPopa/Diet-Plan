const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { dirname } = require('path');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname));


app.post('/generator_diete.html', function (req, res) {
      console.log(req.body);
      console.log(req.body.preferinta);
      console.log(req.body.kcal_total);
    res.send(`Salut, preferinta aleasa este ${req.body.preferinta}! Numarul total de calorii pe care le vei consuma astazi este de ${req.body.kcal_total} .`);
    });


    app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, '404.html'));
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));