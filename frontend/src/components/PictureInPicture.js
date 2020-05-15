import React, { useState, useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";
import PictureInPictureAltIcon from "@material-ui/icons/PictureInPictureAlt";

const PictureInPicture = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isPipOpen, setIsPipOpen] = useState(false)
  useEffect(() => {
    if (!("pictureInPictureEnabled" in document)) {
      setIsDisabled(true)
    }
  }, [])

  const togglePictureInPicture = async () => {
    if (!isPipOpen) {
      await document.querySelector("#largeVideo").requestPictureInPicture()
      setIsPipOpen(true)
      return
    }
    await document.querySelector("#largeVideo").exitPictureInPicture()
    setIsPipOpen(false)
  }

  return (
    <IconButton
      color="inherit"
      onClick={togglePictureInPicture}
      disabled={isDisabled}
    >
      <PictureInPictureAltIcon />
    </IconButton>
  )
}

export default PictureInPicture;
