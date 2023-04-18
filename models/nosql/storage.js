const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

//use mongoose-delete for soft delete on mongoDB
StorageSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("storage", StorageSchema);