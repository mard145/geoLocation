const express = require('express')
const app = express()
const path = require('path')
const PORT = 3333
const fs = require('fs');
const axios = require('axios');
const apiip = require('apiip.net')('556efcd7-b691-4f58-9a6e-d02045e73dc8');
apiip
  .getLocation()
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

// axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=92486756521446fba895daa9f1d7e8a9')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/', express.json() , (req, res)=>{
    var data1 = req.body
    fs.writeFile(`${data1.city}.txt`,JSON.stringify(data1) , (err) => {
        if (err) throw err;
      console.log('O arquivo foi criado!');
    });
    console.log(data1)
    
})

app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})