import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/authSlice';
import guincho from './slices/guinchoSlice';
import telemetry from './slices/telemetrySlice';
import chatbot from './slices/chatbotSlice';
import ui from './slices/uiSlice';

const rootReducer = combineReducers({
    auth,
    guincho,
    telemetry,
    chatbot,
    ui,
});

export default rootReducer;
