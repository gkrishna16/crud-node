const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;

// mongoose
//   .connect(connectUrl, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("connected to DB"))
//   .catch((error) => {
//     console.log(error);
//   });
