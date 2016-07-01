import AppDispatcher from '../dispatchers/AppDispatcher.js';

export default {

    loadList: (list) =>{
        var actionType="LOADLIST";
        AppDispatcher.dispatch({
            actionType: actionType,
            list: list,
        });
    }
	}