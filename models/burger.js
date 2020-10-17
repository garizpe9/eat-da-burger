module.exports = function(sequelize, DataTypes) {
  const burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
      timestamps: false
   
    },
 
  });

  return burger;
};