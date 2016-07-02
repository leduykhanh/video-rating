import StarRatingComponent  from 'react-star-rating-component';
import React from 'react';
import LoginStore  from '../stores/LoginStore.jsx';
import VideoServices  from '../services/VideoServices.jsx';
export default class Rating extends React.Component {

 constructor(props) {
        super();

        this.state = {
            rating: props.value,
        };
    }

    onStarClick(name, value) {
		if(this.props.editing) {
			this.setState({rating: value});
			this.props.showModal();
			VideoServices.rateVideo(LoginStore.sessionId,this.props.name,name);
			}
        
    }


  render() {
	
    return (
	<div>
      <StarRatingComponent 
                    name={this.props.name} 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
					editing={this.props.editing}
                />
	</div>
    );
  }
}

