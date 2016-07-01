import StarRatingComponent  from 'react-star-rating-component';
import React from 'react';
export default class Rating extends React.Component {

 constructor(props) {
        super();

        this.state = {
            rating: props.value,
        };
    }

    onStarClick(name, value) {
        this.setState({rating: value});
    }


  render() {
    return (
      <StarRatingComponent 
                    name={this.props.name} 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
    );
  }
}

