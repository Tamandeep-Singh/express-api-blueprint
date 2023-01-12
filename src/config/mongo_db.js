const mongoose = require("mongoose");

exports.connectToDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`[DummyAPI::Mongoose]: Successfully connected to Database at ${mongoUri}`);
  } catch (err) {
    console.error(`[DummyAPI::Mongoose]: Could not connect to Database! Error: ${err}`);
  }
};
