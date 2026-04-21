import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connectWebSocketRequest } from '../store/slices/telemetrySlice';

export const useWebSocket = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(connectWebSocketRequest());
    }, [dispatch]);
};
