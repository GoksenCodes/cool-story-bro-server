"use strict";
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    "like",
    {
      storyId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  like.associate = function(models) {
    // associations can be defined here
    like.belongsTo(models.user);
    like.belongsTo(models.story);
  };
  return like;
};
