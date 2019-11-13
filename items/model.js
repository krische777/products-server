const Sequelize=require('sequelize')
const sequelize=require('../db')

const Item=sequelize.define('item', {
    author: {
        type: Sequelize.STRING,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description: {
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Item