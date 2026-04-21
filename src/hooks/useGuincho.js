import { useDispatch, useSelector } from 'react-redux';
import { fetchGuinchoRequest, sendCommandRequest, listenTelemetryRequest } from '../store/slices/guinchoSlice';

export const useGuincho = () => {
    const dispatch = useDispatch();
    const guincho = useSelector((state) => state.guincho);

    return {
        ...guincho,
        fetchGuincho: () => dispatch(fetchGuinchoRequest()),
        sendCommand: (payload) => dispatch(sendCommandRequest(payload)),
        listenTelemetry: () => dispatch(listenTelemetryRequest()),
    };
};
