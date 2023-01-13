const mongoose = require("mongoose");
const { MONGO_URI } = require("./app.config");

exports.connectToDB = async() => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`[DummyAPI::Mongoose]: Successfully connected to Database at ${MONGO_URI}`);
  } catch (err) {
    console.error(`[DummyAPI::Mongoose]: Could not connect to Database! Error: ${err}`);
  }
};

exports.closeDB = async () => {
  await mongoose.disconnect();
}

