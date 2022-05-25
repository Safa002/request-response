



const express = require('express')
const app = express()
const data = [
    { "id": '1', "name": "Sam", "age": 45, "price": '1AZN' },
    { "id": '2', "name": "Tom", "age": 34, "price": '1AZN' },
    { "id": '3', "name": "Bill", "age": 18, "price": '1AZN'},
    { "id": '4', "name": "Sam", "age": 45, "price": '1AZN' },
    { "id": '5', "name": "Tom", "age": 34, "price": '1AZN' },
    { "id": '6', "name": "Bill", "age": 18, "price": '1AZN' },
    { "id": '7', "name": "Bill", "age": 18, "price": '1AZN' },
    { "id": '8', "name": "Sam", "age": 45, "price": '1AZN' },
    { "id": '9', "name": "Tom", "age": 34, "price": '1AZN' },
    { "id": '10', "name": "Bill", "age": 18, "price": '1AZN' }
]

// const app = express() => {
//     res.send('sdfghjkl')
// })

app.get('/', (req, res) => {
    res.json(data)
})

app.get('/user', (req,res) => {
    const {count, offset} = req.query
    console.log(count, offset)
    let dataTwo = data.slice(offset, offset+count)
    console.log(dataTwo)
    res.json(dataTwo)
})
app.get('/details/:id', (req, res) => {
    let id = req.params.id
    let newData = data.find(item => item.id === id)
    console.log(newData)
    if(newData){
        return res.json(newData)
    }
    res.send('bele bir istifadeci yoxdur')
})
app.listen(5000, (error) => {
    if(!error){
        console.log('Server is running')
        return
    }
    console.log('Xeta bash verdi')

})