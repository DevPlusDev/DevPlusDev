import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a0c5b211bfaa4092972eb225f76e13a7";
const token = "007eJxTYLATXtETfidrzYmTXR8/JdyKf7amdL6n7Lzc/emvNiesWxqlwJBokGyaZGRomJSWmGhiYGlkaW6UmmRkZJpmbpZqaJxo/vZ8S3JDICPD9YvCTIwMEAjiszDkJmbmMTAAAEHjIuw=";

export const config = {
    mode: "rtc",
    codec: "vp8",
    appId: appId,
    token: token
};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";