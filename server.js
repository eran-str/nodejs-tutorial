const express = require('express');
const hbs = require('hbs');

var port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/about',(req,res)=>{
    res.render('about.hbs', {
      pageTitle: 'About Page',
      currentYear: new Date().getFullYear()
    });
});

app.get('/',(req,res)=>{
  res.send({
    name: 'eran',
    likes: ['tea', 'coffiee']
  });
});

app.listen(port, ()=>{console.log(`server is up in port ${port}`)});
