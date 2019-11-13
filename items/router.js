const { Router } = require('express')
const Item = require('./model')
const sequelize = require('../db')
const router = new Router()
const Product=require('../products/model')

router.get('/product/:productId/items', (req, res, next) => {
    Item
        .findAll({where: {productId: req.params.productId,}})
        .then(items => {
            res.send(items)
        })
        .catch(next)

})

module.exports = router