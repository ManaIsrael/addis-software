const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/songmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

const Song = mongoose.model('Song', songSchema);

// Create a new song
app.post('/songs', async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.status(201).send(song);
});

// List all songs
app.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.send(songs);
});

// Update a song
app.put('/songs/:id', async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(song);
});

// Delete a song
app.delete('/songs/:id', async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Get statistics
app.get('/statistics', async (req, res) => {
  const totalSongs = await Song.countDocuments();
  const artists = await Song.distinct('artist');
  const albums = await Song.distinct('album');
  const genres = await Song.distinct('genre');
  
  const genreCount = await Song.aggregate([
    { $group: { _id: "$genre", count: { $sum: 1 } } }
  ]);
  
  const artistStats = await Song.aggregate([
    { $group: { _id: "$artist", songCount: { $sum: 1 }, albumCount: { $addToSet: "$album" } } },
    { $project: { artist: "$_id", songCount: 1, albumCount: { $size: "$albumCount" } } }
  ]);

  const albumStats = await Song.aggregate([
    { $group: { _id: "$album", songCount: { $sum: 1 } } }
  ]);

  res.send({
    totalSongs,
    totalArtists: artists.length,
    totalAlbums: albums.length,
    totalGenres: genres.length,
    genreCount,
    artistStats,
    albumStats
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
