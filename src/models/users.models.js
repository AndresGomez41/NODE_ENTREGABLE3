const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = db.define("users",{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field:"first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field:"last_name"
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  timestamps: false,
}
);

module.exports = Users;