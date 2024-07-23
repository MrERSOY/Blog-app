import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://cersoy:1234123400@cluster0.lvtkphb.mongodb.net/"
  );

  console.log("DB Connected");
};
