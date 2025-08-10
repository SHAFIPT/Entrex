import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';
import formRoutes from './interfaces/routes/formSubmissionRoutes';
import { connectMongo } from './infrastructure/database';
import { errorHandler } from './interfaces/middleware/errorHandler';

async function startServer() {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(express.json());

  // Routes
  app.use("/api/forms", formRoutes);

  // Health check
  app.get("/health", (_req, res) => res.json({ status: "ok" }));

  await connectMongo();
  
  app.use(errorHandler);

  // Start server
  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
}

startServer().catch((err) => {
  console.error("❌ Failed to start server", err);
});
