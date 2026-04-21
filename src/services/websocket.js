import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const createStompClient = ({ onConnect, onDisconnect, onError } = {}) => {
    let retries = 0;
    let reconnectTimer = null;

    const client = new Client({
        webSocketFactory: () => new SockJS(import.meta.env.VITE_WS_URL || 'http://localhost:8080/ws'),
        reconnectDelay: 0,
        onConnect: (frame) => {
            retries = 0;
            onConnect?.(frame, client);
        },
        onDisconnect: () => {
            onDisconnect?.();
        },
        onStompError: (frame) => {
            onError?.(frame);
        },
    });

    const scheduleReconnect = () => {
        if (retries >= 5) {
            return;
        }

        const delay = Math.min(1000 * 2 ** retries, 16000);
        retries += 1;
        reconnectTimer = setTimeout(() => {
            if (!client.active) {
                client.activate();
            }
        }, delay);
    };

    client.onWebSocketClose = scheduleReconnect;
    client.onWebSocketError = scheduleReconnect;

    const disconnect = async () => {
        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
        }
        if (client.active) {
            await client.deactivate();
        }
    };

    return {
        client,
        connect: () => client.activate(),
        disconnect,
    };
};
