let Post = (sequelize, DataTypes) => {
    let post = sequelize.define(
    'Post', // <== primeiro param: Nome do model
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
        img:{
            type: DataTypes.STRING,
            allowNull:true

        },
        usuarios_id:{
            type: DataTypes.INTEGER,
            allowNull:false

        },
        n_likes:{
            type: DataTypes.INTEGER,
            defaultValue:0
            


    
        }
    },
    {
        tableName: "posts",
        timestamps: true

    } 
    
    );
    post.associate= (models)=> {
        post.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"autor" })
        post.hasMany(models.Comentario,{foreignKey:"posts_id", as:"comentarios" })
        

    }
    
return post;
}
    module.exports = Post