const { default: mongoose } = require("mongoose");

mongoose.set("toJSON", { getters: true });

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.CONNECTION);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error connecting to MongoDB:", error);
    }
  },
};

module.exports = {
  db,
};
