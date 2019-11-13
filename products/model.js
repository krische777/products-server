const Sequelize=require('sequelize')
const sequelize=require('../db')
const Item =require('../items/model')

const Product=sequelize.define('product', {
    productType: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description: {
        type:Sequelize.STRING,
        allowNull:false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull:false
    },

})

Item.belongsTo(Product)
Product.hasMany(Item)

module.exports=Product