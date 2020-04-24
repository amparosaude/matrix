import React from "react";
import Popper from "@material-ui/core/Popper";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPlayer from "react-player"
import Fade from "@material-ui/core/Fade";

// eslint-disable-next-line react/prop-types
const LofiPopper = ({ open, onClose }) => {

  return (
      <Popper open={open} transition>
      {({ TransitionProps }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Fade {...TransitionProps} timeout={350}>
          <div style={{ width: "40px", height: "70px" }}>
            <IconButton
              color="inherit"
              style={{ position: "absolute", right: "5px", top: "5px" }}
              onClick={onClose}
            >
              <Close />
            </IconButton>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=5qap5aO4i9A"
              volume="0.305"

            />
          </div>
        </Fade>
      )}
    </Popper>
  );
}

export default LofiPopper;
