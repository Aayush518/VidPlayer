import React from "react";
import { motion } from "framer-motion";
import { Video } from "../types";
import { Play } from "lucide-react";

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
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-effect p-6"
    >
      <h2 className="text-xl font-bold mb-6 title-gradient">Up Next</h2>
      <div className="space-y-4">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onVideoSelect(video)}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
              currentVideoId === video.id ? "ring-2 ring-accent" : ""
            }`}
          >
            <div className="relative aspect-video">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium">
                {video.duration}
              </div>
              {currentVideoId === video.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-accent/20">
                  <Play className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm line-clamp-2 group-hover:text-accent transition-colors">
                {video.title}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
                <span>{video.author}</span>
                <span>•</span>
                <span>{video.views} views</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Playlist;