import "dotenv/config";
import app from "./app.js";
import pool from "./config/database.js";

const PORT = Number(process.env.PORT) || 5000;

async function startServer(): Promise<void> {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL database connected successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`FlowBoard API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MySQL connection failed:", error);
    process.exitCode = 1;
  }
}

startServer();
