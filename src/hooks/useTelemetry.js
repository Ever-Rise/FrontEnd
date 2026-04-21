import { useDispatch, useSelector } from 'react-redux';
import { connectWebSocketRequest } from '../store/slices/telemetrySlice';

export const useTelemetry = () => {
    const dispatch = useDispatch();
    const telemetry = useSelector((state) => state.telemetry);

    return {
        ...telemetry,
        connect: () => dispatch(connectWebSocketRequest()),
    };
};
