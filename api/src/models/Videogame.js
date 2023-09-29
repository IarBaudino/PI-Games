const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,     
      defaultValue: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/26TZ62LNNNHFLM5YYVOXEHM7HQ.jpg',
    },


    released: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },

    },

    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
    { timestamps: false }
  );
};
