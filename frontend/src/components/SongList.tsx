import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, deleteSong } from '../redux/slices/songSlice';
import { RootState } from '../redux/store';
import { Song } from '../types';
import SongForm from './SongForm';
import { setGenre } from '../redux/slices/filterSlice';

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.song.songs);
  const selectedGenre = useSelector((state: RootState) => state.filter.selectedGenre);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteSong(id));
  };

  const handleEdit = (song: Song) => {
    setEditingSong(song);
  };

  const handleFormClose = () => {
    setEditingSong(null);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenre(e.target.value));
  };

  const filteredSongs = selectedGenre ? songs.filter(song => song.genre === selectedGenre) : songs;

  return (
    <div>
      <h2>Song List</h2>
      <div>
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre ? selectedGenre : ""} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          <option value="Begena">Begena</option>
          <option value="Hymn">Hymn</option>
          <option value="Krar">Krar</option>
          <option value="Masinko">Masinko</option>
        </select>
      </div>
      {editingSong && <SongForm existingSong={editingSong} onClose={handleFormClose} />}
      <ul>
        {filteredSongs.map((song: Song) => (
          <li key={song.id}>
            {song.title} by {song.artist}
            <button onClick={() => handleEdit(song)}>Edit</button>
            <button onClick={() => handleDelete(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
