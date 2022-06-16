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
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Regiao.sync({ force: false });
export default Regiao;
