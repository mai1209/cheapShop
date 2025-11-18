import mongoose from "mongoose";

let isConnected = false; // ✅ Evita múltiples conexiones

export const connectDB = async () => {
    if (isConnected) {
        console.log("🟢 Ya estás conectado a MongoDB");
        return;
    }

    try {
        const mongoURI = process.env.NODE_ENV === "production"
            ? process.env.MONGO_URI
            : process.env.MONGO_URI_DEV;

        if (!mongoURI) {
            console.error("❌ mongoURI está indefinida");
            throw new Error("Falta definir MONGO_URI o MONGO_URI_DEV");
        }

        console.log("🧪 Modo de ejecución:", process.env.NODE_ENV);
        console.log("🧪 URI que se está usando:", mongoURI);

        console.log("⏳ Conectando a MongoDB...");
        const db = await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 10000,
        });

        isConnected = true;
        console.log(`✅ Conectado a la base de datos en modo ${process.env.NODE_ENV}`);
    } catch (error) {
        // No hacemos `process.exit(1)` porque en entornos serverless (Vercel) esto mata la función
        // y causa fallos irreversibles. Mejor registramos el error y lo re-lanzamos para que el
        // handler pueda decidir cómo responder.
        console.error("❌ Error al conectarse a MongoDB:", error.message);
        // Añadimos más contexto para ayudar al diagnóstico
        if (error.stack) console.error(error.stack.split('\n').slice(0,3).join('\n'));
        // Re-lanzar el error para que el caller lo maneje (p. ej. devolver 500 en la request)
        throw error;
    }
};
