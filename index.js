const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const productRouter=require('./products/router')
const itemRouter=require('./items/router')

const corsMiddleware = cors()
app.use(corsMiddleware)
app.use(bodyParser.json())
app.use(productRouter)
app.use(itemRouter)

app.get('/test', (request, response)=>response.send('hey hey'))

app.listen(port, () => console.log(`App listening on port ${port}!`))
