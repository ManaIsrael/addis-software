import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../types';

interface SongState {
  songs: Song[];
  statistics: any;
}

const initialState: SongState = {
  songs: [],
  statistics: {},
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    fetchSongs: (state) => {},
    setSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },
    fetchStatistics: (state) => {},
    setStatistics: (state, action: PayloadAction<any>) => {
      state.statistics = action.payload;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
  },
});

export const { fetchSongs, setSongs, fetchStatistics, setStatistics, addSong, updateSong, deleteSong } = songSlice.actions;

export default songSlice.reducer;
