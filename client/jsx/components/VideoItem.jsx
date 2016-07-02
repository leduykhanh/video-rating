import React from 'react';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from './Rating.jsx';
import ReactPlayer from 'react-player'
export default class VideoItem extends React.Component {

	 constructor() {
			super();
			this.state = {
				playing:false,
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
			console.log(this.props.type);
			if (realValue.length <= maxLength || this.props.type=="detail") {
				return realValue;
			} else {
				return (
					<span>{realValue.substring(0, maxLength) + '...'}</span>
				);
			}
		}
	
	  //When start will pause the rest
	  _onStart(){
	  
	  }
	  
	  showModal() {
		this.props.showModal();
		}
	  render() {
	  console.log("item",this.props.video);
		return (
		  <div className="video-item">
			<LinkContainer to={'detail?videoId='+this.props.video._id}>
				<div className="video-title">{this.props.video.name}</div>
			</LinkContainer>
			 <div>
				<ReactPlayer 
					url={this.props.video.url} 
					playing={this.state.playing} 
					controls={true} 
					width={this.props.width}
					height={this.props.height}/>
			 </div>
			 <Rating 
				value={this.caculateRating(this.props.video.ratings)} 
				editing={this.props.editing}
				name={this.props.video._id}
				showModal={this.showModal.bind(this)}/>
				<span>({this.props.video.ratings.length} votes)</span>
			 <div>{this._getDisplayValue(this.props.video.description,200)}</div>
		  </div>
		);
	  }
}
