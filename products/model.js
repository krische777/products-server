const Sequelize=require('sequelize')
const sequelize=require('../db')

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


module.exports=Product