const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Yah Mongodb is connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  // without the async
  // mongoose
  //   .connect(db, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //   })
  //   .then(() => console.log('Yah Mongodb is connected'))
  //   .catch((err) => {
  //     console.error(err.message);
  //     process.exit(1);
  //   });
};

module.exports = connectDB;
