// MusicPlayer.js
import React, { useState, useEffect } from 'react';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs from Django API
    fetch('http://your-django-api/songs/')
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error('Error fetching songs:', error));
  }, []);

  return (
    <div>
      <h2>Music Player</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MusicPlayer;