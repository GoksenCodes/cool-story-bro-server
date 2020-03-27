"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: DataTypes.TEXT,
      imageurl: DataTypes.STRING
    },
    {}
  );
  story.associate = function(models) {
    // associations can be defined here
    story.belongsTo(models.homepage);
    story.belongsToMany(models.user, {
      through: "likes",
      foreignKey: "storyId"
    });
  };
  return story;
};
