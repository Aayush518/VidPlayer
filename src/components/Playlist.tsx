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
    <div className="bg-lightbg rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-textPrimary">Up Next</h2>
      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`flex gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors ${
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
              <h3 className="font-medium text-sm line-clamp-2 text-textPrimary">{video.title}</h3>
              <p className="text-textSecondary text-xs mt-1">{video.author}</p>
              <p className="text-textSecondary text-xs">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;