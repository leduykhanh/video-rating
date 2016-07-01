import VideoItem  from './VideoItem.jsx';
import VideoStore  from '../stores/VideoStore.jsx';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
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
        console.log("_onVideoStoreUpdateListener");
        this.setState({
            videosList: VideoStore.videosList,
        }); 
		
    }	
  render() {
    return (
		<div className='clearfix'>
			{this.state.videosList ? this.state.videosList.map(function (item, i) {
				return <Col key={i} xs={12} md={3} sm={6}> <VideoItem  video={item} /> </Col>;
				}):{}}
		</div>
    );
  }
}
