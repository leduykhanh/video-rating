import BaseServices from './BaseServices.jsx';
import Constants from '../constants/Constants.jsx';
import VideoStore from '../stores/VideoStore.jsx';
import VideosActions from '../actions/VideosActions.jsx';
import cookie from 'react-cookie';
import md5 from 'js-md5'
class VideoServices extends BaseServices {

    loadVideosList(sessionID){
		this.handleGet(Constants.VIDEO_URL+"?sessionId="+sessionID,{},function(response){
                if(response.status=="success"){
                    VideoStore.updateVideosList(response.data);
					VideosActions.loadList(response.data);
                }
            });
	}
}
export default new VideoServices()