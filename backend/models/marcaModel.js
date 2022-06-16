import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Marca = db.define(
  "marcas_tam",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    marca: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Marca.sync({ force: false });
export default Marca;
