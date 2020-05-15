let Comentario = (sequelize, DataTypes) => {
    let comentario = sequelize.define(
    'Comentario', // <== primeiro param: Nome do model
    {  // <== segundo param: Colunas da minha tabela...
    
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true
            },
        texto: {
            type: DataTypes.STRING,
            allowNull:false
        },       
        usuarios_id:{
            type: DataTypes.INTEGER,
            allowNull:false

        },
        posts_id:{
            type: DataTypes.INTEGER,
            
            defaultValue:0
        }

    },

    {
        tableName:"comentarios",
        timestamps:true
    }
    
    );
    comentario.associate= (models)=> {
         comentario.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"autor" });
        comentario.belongsTo(models.Post,{foreignKey:"posts_id", as:"posts" });
    }
    
return comentario;
}
    module.exports = Comentario;