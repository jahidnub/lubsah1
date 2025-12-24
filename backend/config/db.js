import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lubsah:5*****me@cluster0.vsysdgq.mongodb.net/e-commerce"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
