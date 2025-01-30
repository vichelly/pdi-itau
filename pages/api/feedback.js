// pages/api/feedback.js
import { Pool } from "pg";
import { v4 } from "uuid";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { feedback } = req.body;
      if (!feedback) {
        return res.status(400).json({ error: "O feedback é obrigatório." });
      }
      
      // Salvar no banco de dados
      const result = await pool.query(
        "INSERT INTO feedback (id, message) VALUES ($1, $2) RETURNING *",
        [v4(), feedback]
      );

      res.status(201).json({ message: "Feedback enviado com sucesso!", feedback: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Método ${req.method} não permitido` });
  }
}
