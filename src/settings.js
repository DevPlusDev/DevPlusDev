// import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

// const appId = "a0c5b211bfaa4092972eb225f76e13a7";
// const token = "007eJxTYHDlr7N8tbP7/fnG82yHDgRpiT6buvWmYc99nz/zbF9L9PUoMCQaJJsmGRkaJqUlJpoYWBpZmhulJhkZmaaZm6UaGieay+U0JjcEMjJ4ft3MysgAgSA+C0NuYmYeAwMAyCYg6Q==";

// export const config = {
//     mode: "rtc",
//     codec: "vp8",
//     appId: appId,
//     token: token
// };
// export const useClient = createClient(config);
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const channelName = "main";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a0c5b211bfaa4092972eb225f76e13a7";
const token = "007eJxTYHDlr7N8tbP7/fnG82yHDgRpiT6buvWmYc99nz/zbF9L9PUoMCQaJJsmGRkaJqUlJpoYWBpZmhulJhkZmaaZm6UaGieay+U0JjcEMjJ4ft3MysgAgSA+C0NuYmYeAwMAyCYg6Q==";

export const config = {
    mode: "rtc",
    codec: "vp8",
    appId: appId,
    token: token
};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";