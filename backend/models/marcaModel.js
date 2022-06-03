import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Marca = db.define(
  "marcas_tam",
  {
    marca: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Marca.sync({ force: false });
export default Marca;
