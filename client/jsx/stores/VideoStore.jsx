import React from 'react';
import cookie from 'react-cookie';
import BaseStore from './BaseStore.jsx'

class VideoStore extends BaseStore  {

    constructor() {
		super();
        this.subscribe(() => this._registerToActions.bind(this));
		var v = {
			_id : "5775d296fab257f410ce633f",
			name : "[1] Google Cardboard Assembly",
			description : "Google Cardboard Assembly Step by Step Instructions [HD]",
			url : "videos/Google_Cardboard_Assembly.mp4",
			ratings : [ 
				4, 
				5, 
				5, 
				5, 
				3, 
				5, 
				4, 
				5
			]
		};
        this._videosList = [v,v];
    }
	_registerToActions(action) {
        switch (action.actionType) {
            case "LOADLIST":
				this._videosList = action.list;
				this.emitChange();
				break;
				}
		}
				
	get videosList() {
        return this._videosList;
    }
	updateVideosList(l){
		this._videosList = l;
		//console.log(this._videosList);
	}
}

export default new VideoStore();
