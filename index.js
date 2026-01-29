const { name } = require('ejs');
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
// const URI ="mongodb+srv://Adedeji2004:adedeji2004@cluster0.qnsypqy.mongodb.net/firstDb?appName=Cluster0"


const port = process.env.PORT
const MONGO_URI = process.env.URI


mongoose.connect(MONGO_URI)
.then(() => {
    console.log('DB Connected')
})

.catch((err) => {
    console.log('DB connection error:', err)
});

app.get('/',(req,res)=>{
    res.send('Hello Webpage!');
})

app.listen(port, () => {
  console.log(`lift off! server started at ${port}`);
});







// let users = [];
// const state = [
//     { id: 1, state: 'Lagos', capital: 'ikeja',Motto:'Justice and Progress',Governor:'Babajide-sanwo Olu',population:'20 million'},  
//     { id: 2, state: 'Ogun', capital: 'Abeokuta',Motto:'Freedom and Progress',Governor:'Dapo Abiodun',population:'5 million'},
//     { id: 3, state: 'Oyo', capital: 'Ibadan',Motto:'Pace Setter',Governor:'Seyi Makinde',population:'7 million'},
//     { id: 4, state: 'Osun', capital: 'Osogbo',Motto:'Land of Virtue',Governor:'Ademola Adeleke,',population:'4.5 million'},
//     { id: 5, state: 'Adamawa', capital: 'yola',Motto:'Land of Beauty',Governor:'Ahmadu Umaru Fintiri',population:'4.9 million'},
//     { id: 6, state: 'Anambra', capital: 'awka',Motto:'Light of the Nation',Governor:' Charles Chukwuma Soludo',population:'4.18 million'},
//     { id: 7, state: 'River', capital: 'port harcourt',Motto:'Treasure base of the NationTreasure base of the nation',Governor:'Siminalayi Fubara',population:'7.4 million'},
//     { id: 8, state: 'Kano', capital: '',Motto:'Centre of Commerce',Governor:'Abba kabir Yusuf',population:'20 million'},
//     { id: 8, state: 'Kano', capital: '',Motto:'Centre of Commerce',Governor:'Abba kabir Yusuf',population:'20 million'},
// ]

// app.get('/state',(req,res)=>{
//     res.send(state);
// });

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended:true}));


// app.get("/home",(req,res) =>{
//     res.sendFile(__dirname + '\index.html')
//     // console.log(__dirname)
// })

//     app.get('/ejs',(req,res) =>{
//         let students = ['DEJI','DIMEJI','DEJAVU','JAMIU','BIDEMI']
//         res.render('home.ejs', {name: 'DEJI', students})
//     })

//     app.get('/signup',(req,res) =>{
//         res.render('signup')
//     })

//     app.post('/login',(req,res) =>{
//         const user = req.body;
//         users.push(user)
//         console.log(req.body);
//         res.send('Login Successful')
//     })

//     app.get('/sign',(req,res) =>{
//         res.render('login')
//     })

//     app.post('/signup',(req,res) =>{
//         console.log(req.body);
//         res.send('Signup Successful')
//     })




