import mongoose from 'mongoose'

export const conectarDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/employees_db';
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('No se pudo conectar a MongoDB', error);
        process.exit(1);
    }
};