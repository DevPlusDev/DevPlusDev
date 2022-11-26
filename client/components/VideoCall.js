import React from "react";
import { useState, useEffect } from 'react';
import { config, useClient, useMicrophoneAndCameraTracks, channelName } from "./settings.js";
import { Grid } from "@material-ui/core";
import Controls from './Controls.js';
import Video from './Video.js';

export default function VideoCall(props) {
    const { setInCall } = props;
    const [users, setUsers] = useState([]);
    const [ start, setStart ] = useState(false);

    // Returns to us a client object that allows us to connect to the video call.
    const client = useClient();
    // Gives us a video and audio track and whether they are ready to be used. Intialize audio/video. Handles asking the user for audio/video permissions.
    const { ready, tracks } = useMicrophoneAndCameraTracks();

    useEffect(() => {
        let init = async (name) => {
            // See here for implementing the channel logic for the event listeners for each client is listed below and in the documentation at this link: https://docs.agora.io/en/video-calling/get-started/get-started-sdk?platform=web
            // If a user enables their mic or video they are publishing from a stream.
            client.on("user-published", async(user, mediaType) => {
                await client.subscribe(user, mediaType);
                if (mediaType === 'video') {
                    // Get the previous users and add the new users.
                    setUsers((prevUsers) => {
                        return [...prevUsers, user];
                    });
                };
                // Enable audio for the user.
                if (mediaType === 'audio') {
                    user.audioTrack.play();
                };
            });

            // If a user disables their mic or video they are unpublishing from a stream.
            client.on("user-unpublished", (user, mediaType) => {
                if (mediaType === 'audio') {
                   if (user.audioTrack) user.audioTrack.stop();
                };
                if (mediaType === 'video') {
                    // Remove the user from the users state once they unsubscribe from sharing their video.
                    setUsers((prevUsers) => {
                        // Create a new array of users that includes everyone but the user that unpublished.
                        return prevUsers.filter((User) => User.uid !== user.uid)
                    });
                };
            });

            client.on("user-left", (user) => {
                // Same as above, if the user has left then remove them from the users state.
                setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid)
                    });
            });

            try {
                // The last argument is null to automatically generate an uid (unique ID) for the user joining the call.
                await client.join(config.appId, name, config.token, null);
            } catch (error) {
                console.log(`Error: ${error}`)
            }

            // Check if we have any tracks, if we do then audio and video has been initialized.
            if (tracks) await client.publish(tracks[0], tracks[1]);
            setStart(true);
        };

        if (ready && tracks) {
            try {
                // We are trying to initialize the video stream with the given channel name from the Agora config, in this case it is "main".
                init(channelName);
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        // When any of the below changes the useEffect function will run.
    }, [channelName, client, ready, tracks])

    return (
        // Use the MaterialUI grid layout to display.
        <Grid container direction="column" style={{ height: "100%" }}>
            {/* Render the controls on screen. */}
            <Grid item style={{ height: "5%" }}>
                {/* We should only show controls for our video if our video is enabled and permissions are completed successfully. */}
                {ready && tracks && (<Controls tracks={tracks} setStart={start} setInCall={setInCall} />
                )}
            </Grid>
            {/* Render the video panel. */}
             <Grid item style={{ height: "95%" }}>
                {/* Start is telling us that we can now view other people's videos even though we may or may not have given permission to our video. */}
                {start && tracks && (<Video tracks={tracks} users={users} />
                )}
            </Grid>
        </Grid>
    );
};