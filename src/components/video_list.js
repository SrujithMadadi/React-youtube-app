import React from 'react'
import VideoListItem from './video_list_item'

const VideoList=(props)=>{
  const onVideoSelect=props.onVideoClick;
  const Videos=props.videos.map((video)=>{
    return <VideoListItem onVideoSelect={props.onVideoSelect}key={video.etag} video={video}/>
  });
  return (
    <ul className="col-lg-4 list-group">
    {Videos}
    </ul>
  );
}

export default VideoList;
