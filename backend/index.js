import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/products.js";
import marcaRoutes from "./routes/marca.js";
import regioesRoutes from "./routes/regiao.js";
import tamanhosRoutes from "./routes/tamanho.js";
import cors from "cors";


const app = express();

try {
    await db.authenticate();
    console.log('Database connected.....');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/marcas', marcaRoutes);
app.use('/regioes', regioesRoutes);
app.use('/tamanhos', tamanhosRoutes);

app.listen(5000, () => console.log('server running at port 5000'));