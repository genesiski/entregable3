const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Products = require('./products.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, Infinity]
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Products
        }
    }
})

module.exports = Posts
