const mongoose = require("mongoose");

const connectdatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://namastheynodejs:Srir%40m10@cluster0.bmkcsgs.mongodb.net/devTinder"
  );
};

module.exports = connectdatabase;
