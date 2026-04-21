import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, logoutRequest, registerRequest, qrCodeBindRequest } from '../store/slices/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    return {
        ...auth,
        login: (payload) => dispatch(loginRequest(payload)),
        register: (payload) => dispatch(registerRequest(payload)),
        logout: () => dispatch(logoutRequest()),
        bindDevice: (payload) => dispatch(qrCodeBindRequest(payload)),
    };
};
