"use strict";
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define(
    "homepage",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      backgroundcolor: DataTypes.STRING,
      color: DataTypes.STRING
    },
    {}
  );
  homepage.associate = function(models) {
    // associations can be defined here
    homepage.belongsTo(models.user);
    homepage.hasMany(models.story);
  };
  return homepage;
};
