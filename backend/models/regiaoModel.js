import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Regiao = db.define(
  "regiaos_tam",
  {
    regioes: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Regiao.sync({ force: false });
export default Regiao;
