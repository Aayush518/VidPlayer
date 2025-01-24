import React from "react";
import { motion } from "framer-motion";
import { Heart, Share2, MessageCircle, Bookmark } from "lucide-react";

interface VideoInfoProps {
  title: string;
  views: string;
  uploadTime: string;
  isLive: boolean;
  author: string;
  subscriber: string;
  description: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({
  title,
  views,
  uploadTime,
  isLive,
  author,
  subscriber,
  description,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect p-6 space-y-6"
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-bold title-gradient">{title}</h1>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <span>{views} views</span>
          <span>•</span>
          <span>{uploadTime}</span>
          {isLive && (
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 border border-red-500/20">
              LIVE
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
          <div>
            <h3 className="font-semibold text-white">{author}</h3>
            <p className="text-sm text-white/60">{subscriber}</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
        >
          Subscribe
        </motion.button>
      </div>

      <div className="flex items-center justify-between border-y border-white/10 py-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
        >
          <Heart className="w-5 h-5" />
          <span>23K</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Comments</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
        >
          <Bookmark className="w-5 h-5" />
          <span>Save</span>
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="text-white/80 text-sm whitespace-pre-line"
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default VideoInfo;