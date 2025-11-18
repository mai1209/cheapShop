import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const uri = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_DEV;

console.log('Usando URI (oculta parcialmente):', uri ? (uri.slice(0, 40) + (uri.length > 40 ? '...':'') ) : 'NO_DEFINIDA');

const opts = { serverSelectionTimeoutMS: 5000 };

mongoose.connect(uri, opts)
  .then(() => {
    console.log('✅ Conectado a MongoDB correctamente');
    return mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Error de conexión a MongoDB:');
    console.error(err && err.message ? err.message : err);
    // Imprime stack corto para más contexto
    if (err && err.stack) console.error(err.stack.split('\n').slice(0,5).join('\n'));
    process.exit(1);
  });
