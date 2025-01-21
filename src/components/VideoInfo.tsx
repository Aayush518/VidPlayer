import React from "react";

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
    <div className="mt-6">
      <h1 className="text-2xl font-bold text-textPrimary">{title}</h1>
      <div className="mt-2 flex items-center gap-4 text-textSecondary">
        <span>{views} views</span>
        <span>•</span>
        <span>{uploadTime}</span>
        {isLive && (
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">
            LIVE
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-textPrimary">{author}</h3>
        <p className="text-sm text-textSecondary">{subscriber}</p>
      </div>
      <p className="mt-4 text-textSecondary whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default VideoInfo;