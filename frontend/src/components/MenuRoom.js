import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Share from "@material-ui/icons/Share";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Tooltip from "@material-ui/core/Tooltip";

import ThemeCheckbox from "./ThemeCheckbox";
import NotificationCheckbox from "./NotificationCheckbox";
import { SettingsPropType } from "../morpheus/store/models";

const MenuRoom = ({
  onExitRoom,
  onShare,
  onOpenLofi,
  onChangeSettings,
  onChangeTheme,
  settings
}) => (
  <>
    <ThemeCheckbox onChange={onChangeTheme} />
    <NotificationCheckbox
      isDisabled={settings.notificationDisabled}
      onChange={event => {
        onChangeSettings("notificationDisabled", event.target.checked);
      }}
    />
    <Tooltip title="Turn on Lo-fi">
      <IconButton
        aria-label="Turn on Lo-fi"
        aria-controls="menu-appbar"
        onClick={onOpenLofi}
        color="inherit"
      >
        <LibraryMusic />
      </IconButton>
    </Tooltip>
    <Tooltip title="Share room link">
      <IconButton
        aria-label="Share room link"
        aria-controls="menu-appbar"
        onClick={onShare}
        color="inherit"
      >
        <Share />
      </IconButton>
    </Tooltip>
    <Tooltip title="Exit room">
      <IconButton
        aria-label="Exit room"
        aria-controls="menu-appbar"
        onClick={onExitRoom}
        color="inherit"
      >
        <ExitToApp />
      </IconButton>
    </Tooltip>
  </>
);

MenuRoom.propTypes = {
  onExitRoom: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onOpenLofi: PropTypes.func.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
  settings: SettingsPropType.isRequired
};

export default MenuRoom;
