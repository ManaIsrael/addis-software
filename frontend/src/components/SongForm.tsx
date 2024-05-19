import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, updateSong } from '../redux/slices/songSlice';
import { Song } from '../types';

interface SongFormProps {
  existingSong?: Song;
  onClose?: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ existingSong, onClose }) => {
  const [song, setSong] = useState<Song>(existingSong || { id: '', title: '', artist: '', album: '', genre: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (existingSong) {
      setSong(existingSong);
    }
  }, [existingSong]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (song.id) {
      dispatch(updateSong(song));
    } else {
      dispatch(addSong(song));
    }
    setSong({ id: '', title: '', artist: '', album: '', genre: '' });
    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={song.title} onChange={handleChange} placeholder="Title" required />
      <input name="artist" value={song.artist} onChange={handleChange} placeholder="Artist" required />
      <input name="album" value={song.album} onChange={handleChange} placeholder="Album" required />
      <input name="genre" value={song.genre} onChange={handleChange} placeholder="Genre" required />
      <button type="submit">{song.id ? 'Update Song' : 'Add Song'}</button>
      {onClose && <button type="button" onClick={onClose}>Cancel</button>}
    </form>
  );
};

export default SongForm;
