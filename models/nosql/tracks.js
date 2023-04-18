const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

/**
 * Implementar metod propio con relacion a storage
 */
TracksSchema.statics.findAllData = function () {
  const joinData = this.aggregate([
    //tracks
    {
      $lookup: {
        from: "storage", //tracks => storage
        localField: "mediaId", //tracks.mediaId
        foreignField: "_id", // storage._id
        as: "audio", //alias
      },
    },
    {
      $unwind: "$audio",
    },
  ]);
  return joinData;
};

TracksSchema.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    { //tracks
      $lookup: {
        from: "storage", //tracks => storage
        localField: "mediaId", //tracks.mediaId
        foreignField: "_id", // storage._id
        as: "audio", //alias
      },
    },
    {
      $unwind: "$audio",
    },
  ]);
  return joinData;
};

//use mongoose-delete for soft delete on mongoDB
TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });

//Export model
module.exports = mongoose.model("tracks", TracksSchema);
