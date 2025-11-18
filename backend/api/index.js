import app from "../server.js";

// Vercel necesita exportar una función handler
export default function handler(req, res) {
  return app(req, res);
}
