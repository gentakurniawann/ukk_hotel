'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pemesanan, {
        foreignKey: "id_user",
        as: "user"
      })
    }
  }
  user.init({
    id_user: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    nama_user: DataTypes.STRING,
    foto: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM("admin", "resepsionis")
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  });
  return user;
};