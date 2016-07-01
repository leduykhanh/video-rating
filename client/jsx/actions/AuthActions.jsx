import AppDispatcher from '../dispatchers/AppDispatcher.js';

export default {

    login: (sessionId) =>{
        var actionType="LOGIN";
        AppDispatcher.dispatch({
            actionType: actionType,
            sessionId: sessionId,
        });
    }
	}