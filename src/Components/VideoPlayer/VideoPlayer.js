import React, { useRef } from 'react'
import './VideoPlayer.css'
import intro from '../../assets/intro.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
  const player=useRef(null);
   const closePlayer=(e)=>{
    if(e.target === player.current){
      setPlayState(false)
      console.log("e ",e.target);
      console.log("player ",player.current);
    }
   }
  return (
    <div className={`video-player ${playState?'':'hide'}`} onClick={closePlayer} ref={player}>
      <video src={intro} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
