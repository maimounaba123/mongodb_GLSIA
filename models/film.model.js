module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        titre: String,
        realisateur: String,
        annesortie: Number,
        genre: String,
        synopsis: String,
        duree: Number,
        language: String,
        pays: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Film = mongoose.model("film", schema);
    return Film;
  };
  