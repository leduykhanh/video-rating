import React from 'react';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from './Rating.jsx';
import ReactPlayer from 'react-player'
export default class VideoItem extends React.Component {

	 constructor() {
			super();

			this.state = {
				
			};
		}
	 
	 //To calculate the rating based on ratings array
	 caculateRating(rates){
		var total = 0;
		for(var i = 0; i < rates.length; i++) {
			total += rates[i];
		}
		//console.log(total / rates.length);
		return total / rates.length;
	 }
	 
	 //To display long description in ..
	  _getDisplayValue(realValue, maxLength) {
			if (realValue.length <= maxLength) {
				return realValue;
			} else {
				return (
					<span>{realValue.substring(0, maxLength) + '...'}</span>
				);
			}
		}
		
	  render() {
		return (
		  <div className="video-item">
			<LinkContainer to={'detail?videoId='+this.props.video._id}>
				<div className="video-title">{this.props.video.name}</div>
			</LinkContainer>
			 <div>
				<ReactPlayer 
					url={this.props.video.url} 
					playing={false} 
					controls={true} 
					width={200}
					height={200}/>
			 </div>
			 <Rating 
				value={this.caculateRating(this.props.video.ratings)} 
				editing={false}
				name={this.props.video._id}/>
			 <div>{this._getDisplayValue(this.props.video.description,200)}</div>
		  </div>
		);
	  }
}
