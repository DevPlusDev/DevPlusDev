import React from "react";
// Import the video player for the Agora wrapper that was installed.
import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  // We need to change the spacing for each video panel of the person in the video call room.
  const [gridSpacing, setGridSpacing] = useState(12);

  // Once there are more than three people in a row we readjust the spacing.
  useEffect(() => {
    // Users.length + 1 to account for the user itself in the total count.
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
    // Only do this when the count of users changes or when the audio/video tracks change.
  }, [users, tracks]);

  return (
    // The Agora Video Player as the parent must have a height otherwise it defaults to 0% and the children containers won't be visible.
    <Grid container style={{ height: "100%" }}>
        {/* When the screen is XS then the grid item will take up the number of squares associated with the gridSpacing value from the state. */}
      <Grid item xs={gridSpacing}>
        {/* This is the client's video player. */}
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </Grid>
      {/* To create another video player for each participant in the call from the users state count. */}
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Grid item xs={gridSpacing}>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100%", width: "100%" }}
                />
              </Grid>
            );
            // If we have no users then don't render anything.
          } else return null;
        })}
    </Grid>
  );
}