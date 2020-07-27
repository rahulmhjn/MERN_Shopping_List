const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      `Mongodb connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch {
    (err) => {
      console.log(`Error: ${err.message}`.red);
      process.exit(1);
    };
  }
};

module.exports = connectDb;
