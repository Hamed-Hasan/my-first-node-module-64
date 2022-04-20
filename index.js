const express = require('express')
let cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000
app.get('/',(req, res) => {
    res.send('hello world welcome back !!!! okkkk')
})

const users = [
    {id: 1, name: 'hamed',age:24,phone: 999},
    {id: 1, name: 'hasan',age:22,phone: 999},
    {id: 1, name: 'hamas',age:20,phone: 999},
    {id: 2, name: 'rifa',age:28,phone: 999},
    {id: 3, name: 'alifa',age:14,phone: 999},
    {id: 4, name: 'sayed',age:18,phone: 999},
    {id: 5, name: 'huma',age:20,phone: 999},
    {id: 6, name: 'afi',age:10,phone: 999},
    {id: 6, name: 'afifa',age:12,phone: 999},
]
app.get('/user',(req, res) => {
    res.send({id: 1,name: 'hamed',age:24,mail:'exg@gmail.com'})
})
app.get('/users',(req, res) => {
    // console.log(req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase()
        const match = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(match)
    }else{

        res.send(users)
    }
})
app.get('/user/:id',(req, res) => {
    console.log(req.params)
        const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.send(user)
})
app.get('/fruits',(req, res) => {
res.send(['apple','mango','orange'])
})
app.get('/fruit/newFruit',(req, res) => {
res.send('apple','mango','orange')
})

// app.post('/use',(req, res) => {
//     console.log(req.body)
//     res.send('request post success')
// })
app.post('/use',(req, res) => {
    const user = req.body
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('listening on port',port)
})
