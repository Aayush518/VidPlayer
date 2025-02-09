import React, { useState } from "react";
import { VideoPlayer, VideoInfo, Playlist } from "./components";
import { Video } from "./types";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<Video>({
    id: "1",
    title: "How to Build a Video Player with React",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "12:34",
    author: "Coding Master",
    views: "1,234,567",
    uploadTime: "2 weeks ago",
    isLive: false,
    subscriber: "1M subscribers",
    description:
      "Learn how to build a modern video player using React and TypeScript. This tutorial covers everything from basic setup to advanced features like playlists and custom controls.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });

  const videos: Video[] = [
    {
      id: "1",
      title: "How to Build a Video Player with React",
      thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      duration: "12:34",
      author: "Coding Master",
      views: "1,234,567",
      uploadTime: "2 weeks ago",
      isLive: false,
      subscriber: "1M subscribers",
      description:
        "Learn how to build a modern video player using React and TypeScript.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      thumbnailUrl: "https://i.ytimg.com/vi/1jHUY3qoBu8/hqdefault.jpg",
      duration: "15:20",
      author: "React Guru",
      views: "987,654",
      uploadTime: "1 month ago",
      isLive: false,
      subscriber: "500K subscribers",
      description: "Explore advanced React patterns and techniques.",
      videoUrl: "https://www.youtube.com/watch?v=1jHUY3qoBu8",
    },
    {
      id: "3",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "4",
      title: "For Bigger Escape",
      thumbnailUrl:
        "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
    {
      id: "5",
      title: "Big Buck Bunny",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "6",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
    {
      id: "7",
      title: "For Bigger Escape",
      thumbnailUrl:
        "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "8",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl:
        "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
    {
      id: "8",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl:
        "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
  ];

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 to-primary p-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6"
        >
          <div className="space-y-6">
            <motion.div
              className="video-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <VideoPlayer videoUrl={currentVideo.videoUrl} />
            </motion.div>

            <motion.div
              className="video-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <VideoInfo
                title={currentVideo.title}
                views={currentVideo.views}
                uploadTime={currentVideo.uploadTime}
                isLive={currentVideo.isLive}
                author={currentVideo.author}
                subscriber={currentVideo.subscriber}
                description={currentVideo.description}
              />
            </motion.div>
          </div>

          <motion.div
            className="playlist-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Playlist
              videos={videos}
              currentVideoId={currentVideo.id}
              onVideoSelect={handleVideoSelect}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
