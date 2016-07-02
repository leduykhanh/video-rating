import BaseServices from './BaseServices.jsx';
import Constants from '../constants/Constants.jsx';
import VideoStore from '../stores/VideoStore.jsx';
import VideosActions from '../actions/VideosActions.jsx';
import cookie from 'react-cookie';
import md5 from 'js-md5'
class VideoServices extends BaseServices {

    loadVideosList(sessionID,skip=0,limit=8){
		this.handleGet(Constants.VIDEO_LIST_URL+"?sessionId="+sessionID+"&skip="+skip+"&limit="+limit,
		{},function(response){
                if(response.status=="success"){
                    //VideoStore.updateVideosList(response.data);
					VideosActions.loadList(response.data);
                }
            });
	}
	
	loadVideoDetail(sessionID,videoID){
		this.handleGet(Constants.VIDEO_URL+"?sessionId="+sessionID+"&videoId="+videoID,{},function(response){
                if(response.status=="success"){
					VideosActions.loadVideoDetail(response.data);
                }
            });
	}
	
	rateVideo(sessionID,videoId,rating){
		this.handlePost(Constants.VIDEO_RATING_URL+"?sessionId="+sessionID,
		    {"videoId":videoId,"rating":rating},
			 function(response){
                if(response.status=="success"){
                    console.log(response.data);
                }
            });
	}
}
export default new VideoServices()