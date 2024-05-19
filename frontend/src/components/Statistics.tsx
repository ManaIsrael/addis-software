import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../redux/slices/songSlice';
import { RootState } from '../redux/store';

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector((state: RootState) => state.song.statistics);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Songs: {statistics.totalSongs}</p>
      <p>Total Artists: {statistics.totalArtists}</p>
      <p>Total Albums: {statistics.totalAlbums}</p>
      <p>Total Genres: {statistics.totalGenres}</p>
    </div>
  );
};

export default Statistics;
