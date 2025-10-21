import express from 'express';
import cors from 'cors';
import pollutionRoutes from './routes/pollution.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pollution', pollutionRoutes);

app.get('/', (req, res) => res.send('running'));

export default app;
