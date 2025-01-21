import React from "react";

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  author: string;
  views: string;
}

interface PlaylistProps {
  videos: Video[];
  currentVideoId: string;
  onVideoSelect: (video: Video) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  videos,
  currentVideoId,
  onVideoSelect,
}) => {
  return (
    <div className="bg-dark-secondary rounded-xl p-4 shadow-custom">
      <h2 className="text-xl font-bold mb-4 text-text-primary font-main">Up Next</h2>
      <div className="space-y-4 overflow-y-auto max-h-[600px]">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`flex gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-custom ${
              currentVideoId === video.id ? "bg-gray-700" : ""
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-40 h-24 object-cover rounded-lg"
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2 text-text-primary font-main">{video.title}</h3>
              <p className="text-text-secondary text-xs mt-1 font-secondary">{video.author}</p>
              <p className="text-text-secondary text-xs font-secondary">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;