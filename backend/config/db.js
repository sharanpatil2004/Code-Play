import dns from "dns";

dns.setServers(["8.8.8.8"]);

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DATABASE CONNECTION ERROR:", error);
    process.exit(1);
  }
};
