const mongoose = require('mongoose')
const config = require('../config')
require('../models/Animes')

module.exports = async () => {
    const connection = await mongoose.connect(config.database_host, { useNewUrlParser: true, dbName: config.database_name })
    
    return connection.connection.db
}
