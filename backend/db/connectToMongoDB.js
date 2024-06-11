import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected with mongoDb")
  } catch (error) {
    console.log("Error connecting with database", error.message);
  }
};


export default connectToMongoDB;
