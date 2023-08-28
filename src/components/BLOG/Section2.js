import React, { useState, useEffect } from 'react';
async function fetchVid() {
  const API_KEY = 'AIzaSyAMCyd-bir3PHApWkH8GXQcZeJQ1SY6MDo';
  const CHANNEL_ID = 'UC-GAShuXH58oh9GoaJ-f6Sg';

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video`
  );

  const data = await response.json();
  return data.items; // This array contains video information
}
export default function Section2() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const videoItems = await fetchVid();
      setVideos(videoItems);
    }

    loadVideos();
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-bold p-3' >YouTube Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map(video => (
          <div key={video.id.videoId} className="p-4">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p>{video.snippet.title}</p>
            </a>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
