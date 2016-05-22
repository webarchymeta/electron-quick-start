// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict';

const RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;


window.onload = () => {
    console.log('ok loaded ...');
    let opts = {
            optional: [
                { RtpDataChannels: false },
                { DtlsSrtpKeyAgreement: true }
            ]
        };
    let iceList = [{ url: 'stun:stun.services.mozilla.com' }];
    let peerConn = new RTCPeerConnection({ iceServers: iceList }, opts);
    peerConn.createDataChannel('test');
};