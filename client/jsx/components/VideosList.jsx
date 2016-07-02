import VideoItem  from './VideoItem.jsx';
import VideoStore  from '../stores/VideoStore.jsx';
import LoginStore  from '../stores/LoginStore.jsx';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import VideoServices from '../services/VideoServices.jsx';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import LazyLoad from 'react-lazy-load';
export default class VideoList extends React.Component {

 constructor() {
        super();

        this.state = {
            videosList:[]
        };
    }
  componentWillMount() {
        this.setState({
            videosList: VideoStore.videosList,
        }); 
		VideoStore.addChangeListener(this._onVideoStoreUpdateListener.bind(this));
    }
  _onVideoStoreUpdateListener() {
        this.setState({
            videosList: VideoStore.videosList,
        }); 
		
    }
  fetchMoreVideos(){
	VideoServices.loadVideosList(LoginStore.sessionId,this.state.videosList.length,4);
  }
  render() {
    return (
		<div className='clearfix row'>
			{this.state.videosList ? this.state.videosList.map(function (item, i) {
				return <Col key={i} xs={12} md={3} sm={6} className="video-list"> 
						  <LinkContainer to={'detail?videoId='+item._id}>
							<VideoItem type="list" width={200} height={200} editing={false} video={item} />
						  </LinkContainer>
						</Col>;
				}):{}}
			<LazyLoad
				height={300}
				onContentVisible={this.fetchMoreVideos.bind(this)}
				>
				<div>Fetching more videos...</div>
			</LazyLoad>
		</div>
    );
  }
}
