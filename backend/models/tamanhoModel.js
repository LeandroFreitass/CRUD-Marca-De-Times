import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Tamanho = db.define(
  "tamanhos_tam",
  {
    tamanho: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Tamanho.sync({ force: false });
export default Tamanho;
