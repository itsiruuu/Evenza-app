import React, { useState } from "react";
import PlayBtn from "../assets/video-section-play-button.png";
import videoBG from "../assets/event-promo-video.mp4";
import click from '../assets/video-section-play-icon.png'
import Modal from "@mui/material/Modal";
import Zoom from "@mui/material/Zoom";
import Backdrop from "@mui/material/Backdrop";

const Video = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[url(./assets/video-section-background.png)] bg-cover bg-center bg-no-repeat py-56">


      <style>{`
    @keyframes heartbeatGlow {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
      50% { transform: scale(1.08); box-shadow: 0 0 0 14px rgba(59,130,246,0); }
    }
  `}</style>
      <div
        className="bg-primary w-24 h-24 rounded-full mx-auto flex items-center justify-center"
        style={{ animation: 'heartbeatGlow 2s ease-in-out infinite' }}
      >
        <img
          src={click}
          alt="Play Video"
          onClick={handleOpen}
          className="block mx-auto cursor-pointer hover:scale-110 transition duration-300"
        />
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="flex justify-center items-center"
      >
        <Zoom in={open}>
          <div className="outline-none">
            <video
              key={open}
              src={videoBG}
              controls
              autoPlay
              className="w-[90vw] max-w-225 rounded-2xl shadow-2xl"
            />
          </div>
        </Zoom>
      </Modal>
    </div>
  );
};

export default Video;