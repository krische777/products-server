const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:products-app@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync({force: true})
    .then(()=> {
        const Product=require('./products/model')
        const Item=require('./items/model')
        console.log('database was synced')
        Product.create({
            productType: 'TVs',
            description:"All kinds of smart TVs and TVs",
            picture: 'https://images-na.ssl-images-amazon.com/images/I/911NRkSMp3L._SL1500_.jpg',
        });
        Product.create({
            productType: 'Phones',
            description:"All kinds of smartphones and phones",
            picture: 'https://www.stuff.tv/sites/stuff.tv/files/brands/5G/Best-phones/best-5g-phones.jpg',
        });
        Product.create({
            productType: 'Cars',
            description:"All kinds of cars",
            picture: 'https://www.grandautomotivecars.com/wp-content/uploads/1b.jpg',
        });
        Product.create({
            productType: 'Speakers ',
            description:"All kinds of speakers and earphones",
            picture: 'https://cdn.thewirecutter.com/wp-content/uploads/2019/05/computerspeakers-2x1-5061.jpg',
        });
        Product.create({
            productType: 'Clothes ',
            description:"All kinds of women, men and kids fashion",
            picture: 'https://www.fbcsouthplainfield.com/wp-content/uploads/2017/01/kidsclothing.jpg',
        });
        Product.create({
            productType: 'Computers ',
            description:"All kinds of computers, laptops and tablets",
            picture: 'https://staff.brighton.ac.uk/is/computing/SiteAssets/Pages/Staff%20computers/Staff_computers/computers.png',
        });
        Product.create({
            productType: 'Shoes ',
            description:"All kinds of shoes",
            picture: 'https://i.redd.it/ra5y28vqvv701.jpg',
        });
        Product.create({
            productType: 'Furniture ',
            description:"All kinds of furniture",
            picture: 'https://i5.walmartimages.com/dfw/4ff9c6c9-e3ce/k2-_8a66db1a-b48a-4152-b36b-1cfe5a3385cd.v1.jpg',
        });
        Item.create({
            author: 'krisi',
            picture: 'https://image-cdn.beforward.jp/autoparts/original/201812/4525419/i-img899x1200-15451842069oglje877149.jpg',
            price:150,
            description:'An iphone SE in a good condition, 1 year old, with 2 years guarantee',
            productId:2
        });
        Item.create({
            author: 'didi',
            picture: 'https://wi-images.condecdn.net/image/NYVwZRbJJYw/crop/1620/f/samsungs9.jpg',
            price:290,
            description:'A Samsung S9 in a good condition, 1 year old, with 2 years guarantee',
            productId:2
        });
    })
    .catch(console.error)

module.exports = db