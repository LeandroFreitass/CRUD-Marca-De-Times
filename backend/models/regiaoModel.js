import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Regiao = db.define(
  "regiaos_tam",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    regioes: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Regiao.sync({ force: false });
export default Regiao;
