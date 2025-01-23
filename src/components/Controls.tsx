import React from "react";
import { Play, Pause, Volume2, VolumeX, RotateCw, RotateCcw, Fullscreen, Minus, Plus, Settings } from "lucide-react";
import { motion } from "framer-motion";

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMuted: boolean;
  onMuteToggle: () => void;
  onSeek: (seconds: number) => void;
  progress: number;
  buffered: number;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  duration: number;
  currentTime: number;
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  onFullScreen: () => void;
  isFullScreen: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onPlayPause,
  volume,
  onVolumeChange,
  isMuted,
  onMuteToggle,
  onSeek,
  progress,
  buffered,
  onProgressChange,
  duration,
  currentTime,
  playbackRate,
  onPlaybackRateChange,
  onFullScreen,
}) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 backdrop-blur-lg bg-gradient-to-t from-black/80 to-black/40 rounded-b-3xl"
    >
      {/* Progress Bar */}
      <div className="group relative w-full h-2 mb-4">
        <div className="absolute inset-0 rounded-full bg-surface-secondary/30" />
        <div 
          className="absolute inset-0 rounded-full bg-surface-secondary/50"
          style={{ width: `${buffered * 100}%` }}
        />
        <motion.div 
          className="absolute inset-0 rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress}
          onChange={onProgressChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPlayPause}
          className="control-button"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </motion.button>

        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onMuteToggle}
            className="control-button"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
          <div className="group relative">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={onVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>

        {/* Time Display */}
        <span className="text-sm font-medium text-white/80">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Playback Speed */}
        <div className="flex items-center gap-2 ml-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPlaybackRateChange(playbackRate - 0.25)}
            className="control-button"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <span className="text-sm font-medium text-white/80 w-12 text-center">
            {playbackRate}x
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPlaybackRateChange(playbackRate + 0.25)}
            className="control-button"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Seek Buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSeek(-10)}
            className="control-button"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSeek(10)}
            className="control-button"
          >
            <RotateCw className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Settings & Fullscreen */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="control-button"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onFullScreen}
            className="control-button"
          >
            <Fullscreen className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Controls;