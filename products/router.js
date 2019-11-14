const { Router } = require('express')
const Product = require('./model')
const router = new Router()
const sequelize = require('../db')

router.get('/product', (req, res, next)=>{
    Product
        .findAll()
        .then(product=>{
            res.status(200).send(product)
        })
        .catch(next)
})

router.post('/product', (req, res, next)=>{
    let newProduct={
        productType: req.body.productType,
        description: req.body.description,
        picture: req.body.picture
    }
    if (req.body.productType) {
        Product
            .create(newProduct)
            .then(product=> {
                res.status(200).send(product)
            })
            .catch(next)
    }
    else { res.status(400).end()}
})


module.exports=router