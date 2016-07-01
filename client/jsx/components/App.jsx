import React from 'react';	
import VideosList from './VideosList.jsx';
import LoginForm from './LoginForm.jsx';
import LoginStore from '../stores/LoginStore.jsx';
import VideoServices from '../services/VideoServices.jsx';
import { Input, Row, Col, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
export default class App extends React.Component {

  constructor(){
    super();
	this.state = {
		videosList : [],
		sessionId : null,
	};
  }
    refresh(videosList){
		this.setState({videosList:videosList});
  }
  componentWillMount(){
	if(LoginStore.isLoggedIn()){
		VideoServices.loadVideosList(LoginStore.sessionId);
		}
	LoginStore.addChangeListener(this._onLoginListener.bind(this));
  }

  _onLoginListener(){
	this.setState({sessionId:LoginStore.sessionId});
  }
  render() {
	var testData = {username:'ali',password:'password'};
    var itemToRender = <LoginForm data={testData} refresh={this.refresh.bind(this)} />;
	
	if(this.state.sessionId){
		itemToRender = <div>
				<Row>Log out</Row>
				<Row><VideosList /></Row>
				</div>;
		}
    return (
	<div>
		{itemToRender}
	</div>
    );
  }
};