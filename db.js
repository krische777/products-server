const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:products-app@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync({force: true})
    .then(()=> {
        const Product=require('./products/model')
        console.log('database was synced')
        Product.create({
            productType: 'TVs',
            description:"All kinds of smart TVs and TVs",
            picture: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQllaCxQW6k0LlpGTzAQ2h_vvkgXEHTFMAHjdFfv6mazWcoFOYWJ3xMc36yQS5JmAOwOtsyh3g_pvCF1GshrU1rGQgfCywsBA&usqp=CAY',
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
    })
    .catch(console.error)

module.exports = db