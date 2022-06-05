import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "products_tam",
  {
    nametime: {
      type: DataTypes.STRING,
    },
    marcas: {
      type: DataTypes.STRING,
    },
    regioatime: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    quantidade: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

Product.sync({ force: false });
export default Product;
