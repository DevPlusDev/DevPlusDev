import React from "react";
import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button } from "@material-ui/core";
// Import necessary styling components and designs from MaterialUI.
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    // Disable the audio track
    if (type === "audio") {
      // Change the state to the opposite of what the current state of audio is.
      await tracks[0].setEnabled(!trackState.audio);
      // Create the new state replacing the new audio state after muting.
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
      // Video muting logic follows the audio logic as above.
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
     // Client method to leave the channel with Agora.
    await client.leave();
    // All client.on() event listeners from VideoCall.js are removed.
    client.removeAllListeners();
    // Close the audio and video tracks.
    tracks[0].close();
    tracks[1].close();
    // Change the state of the user being in the video call.
    setStart(false);
    setInCall(false);
  };

  return (
    // This setups us a grid using MaterialUI with Flexbox under the hood. Three predominant grid items for the controls around video and audio.
    <Grid container spacing={2} alignItems="center" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Grid item>
        <Button
          variant="contained"
          // Change the color of the button if the audio is on or if it is off.
          color={trackState.audio ? "primary" : "secondary"}
          // When the button is clicked then mute the audio or the video, whichever string is passed in.
          onClick={() => mute("audio")}
        >
          {/* Show a different icon for the microphone if the user is muted. */}
          {trackState.audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
      </Grid>
      <Grid item>
         {/* This button is the same as the above grid item, instead of for controlling audio it is controlling video and changing the icons based on the state of the user. */}
        <Button
          variant="contained"
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
      </Grid>
      <Grid item>
        {/* Button to leave the channel/video call. */}
        <Button
          variant="contained"
          color="default"
          onClick={() => leaveChannel()}
        >
          Leave
          <ExitToAppIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
