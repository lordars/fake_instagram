const { sequelize, Post, Comentario, Usuario } = require('../models');

Post.findByPk(1,{include:
    [
    {model:Usuario,
        as:"autor",
        include:"posts",
        attributes:["id","nome","email"]
    },

    {model:Comentario,
    as :"comentarios",
    include:"autor"
    }
]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)