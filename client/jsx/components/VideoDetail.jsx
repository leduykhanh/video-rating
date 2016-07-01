import VideoItem  from './VideoItem.jsx';
import VideoStore  from '../stores/VideoStore.jsx';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
export default class VideoDetail extends React.Component {

 constructor() {
        super();
		console.log("Detail");
        this.state = {
            videosList:[]
        };
    }
  componentWillMount() {
	        console.log("Detail");
		
    }
  _onVideoStoreUpdateListener() {


		
    }	
  render() {
    return (
		<div className='full-width left panel-border'>
			<h1>AAAAAAAAAAAAAAA</h1>

		</div>
    );
  }
}
