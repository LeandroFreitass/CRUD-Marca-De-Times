import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product_tam",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nametime: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: true,
    },
    marca: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    regioatime: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Product.sync({ force: false });
export default Product;
