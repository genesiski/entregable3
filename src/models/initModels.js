const Posts = require('./posts.models')
const Products = require('./products.models')

const initModels = () => {
    //? Aqui gestionamos toooooodas las relaciones entre mis models
    
    //* a.hasOne(b)
    //* a.hasMany(b)
    //* b.belongsTo(a)
    //* b.belongsToMany(a)

    //? 1:1 User - HouseDirection(FK)
    //* User.hasOne(HouseDirection)
    //* HouseDirection.belongsTo(User)

    //? 1:M User - Posts
    Products.hasMany(Posts)
    Posts.belongsTo(Products)

    //? M:M Posts - Categories
    //* Posts.belongsToMany(Categories, {through: TablaPivote})
    //* Categories.belongsToMany(Posts, {through: TablaPivote})

}

module.exports = initModels
