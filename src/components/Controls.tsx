import React from "react";
import { Play, Pause, Volume2, VolumeX, RotateCw, RotateCcw } from "lucide-react";

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
}) => {
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  return (
    <div className="mt-4 flex flex-col bg-dark-secondary p-4 rounded-xl shadow-custom">
      <div className="flex items-center gap-4">
        <button
          onClick={onPlayPause}
          className="p-2 hover:bg-gray-700 rounded-full transition-custom"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-accent-primary" />
          ) : (
            <Play className="w-6 h-6 text-accent-primary" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onMuteToggle}
            className="p-2 hover:bg-gray-700 rounded-full transition-custom"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-accent-primary" />
            ) : (
              <Volume2 className="w-6 h-6 text-accent-primary" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={onVolumeChange}
            className="w-24 accent-accent-primary"
          />
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => onSeek(-10)}
            className="p-2 hover:bg-gray-700 rounded-full transition-custom"
          >
            <RotateCcw className="w-6 h-6 text-accent-primary" />
          </button>
          <button
            onClick={() => onSeek(10)}
            className="p-2 hover:bg-gray-700 rounded-full transition-custom"
          >
            <RotateCw className="w-6 h-6 text-accent-primary" />
          </button>
              <span className="text-sm text-text-secondary font-secondary">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
        </div>
      </div>
      <div className="mt-2 relative w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="absolute bg-gray-500 h-full"
          style={{ width: `${buffered * 100}%` }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress}
          onChange={onProgressChange}
          className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent cursor-pointer accent-accent-primary"
          style={{
            background: `linear-gradient(to right, var(--tw-accent-primary) ${
              progress * 100
            }%, transparent ${progress * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Controls;