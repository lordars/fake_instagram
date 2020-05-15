const { sequelize, Post } = require('../models');

Post.findAll({include:["autor","comentarios"]}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)