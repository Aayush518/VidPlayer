import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { Controls } from "./index";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      setVolume(0.8);
    } else {
      setVolume(0);
    }
  };

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + seconds);
    }
  };

    const handleDuration = (duration: number) => {
        setDuration(duration);
    };

  const handleProgress = (state: any) => {
    setProgress(state.played);
    setBuffered(state.loaded);
      setCurrentTime(state.playedSeconds)
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.target.value));
      setProgress(parseFloat(e.target.value));
    }
  };
    useEffect(() => {
        if(playerRef.current){
            setDuration(playerRef.current.getDuration())
        }
    },[videoUrl])

  return (
    <div>
      <div className="relative aspect-video bg-lightbg rounded-xl overflow-hidden shadow-md">
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          playing={isPlaying}
          volume={volume}
          muted={isMuted}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          onProgress={handleProgress}
            onDuration={handleDuration}
        />
      </div>
      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        isMuted={isMuted}
        onMuteToggle={handleMuteToggle}
        onSeek={handleSeek}
        progress={progress}
        buffered={buffered}
        onProgressChange={handleProgressChange}
          duration={duration}
          currentTime={currentTime}
      />
    </div>
  );
};

export default VideoPlayer;