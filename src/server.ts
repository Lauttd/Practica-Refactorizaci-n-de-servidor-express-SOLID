import 'dotenv/config';
import express from 'express'
import { conectarDB } from './config/database'
import router from './routes/employee.routes';
import { errorHandler } from './middlewares/errorHandler'

const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT ?? 3000);

app.use('/api', router);
app.use(errorHandler);

conectarDB();

app.listen(PORT, () => {
  console.log(`Servidor prendido en el puerto ${PORT}`)
}); 