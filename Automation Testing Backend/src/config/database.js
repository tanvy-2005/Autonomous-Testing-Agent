import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('db is connected successfully');
  } catch (error) {
    console.error(`Error connecting to db: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
