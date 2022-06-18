import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Tamanho = db.define(
  "tamanho_tam",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tamanho: {
      type: DataTypes.STRING(2),
      allowNull: true,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Tamanho.sync({ force: false });
export default Tamanho;
