import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, deleteSong } from '../redux/slices/songSlice';
import { RootState } from '../redux/store';
import { Song } from '../types';
import SongForm from './SongForm';

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.song.songs);
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

  return (
    <div>
      <h2>Song List</h2>
      {editingSong && <SongForm existingSong={editingSong} onClose={handleFormClose} />}
      <ul>
        {songs.map((song: Song) => (
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
