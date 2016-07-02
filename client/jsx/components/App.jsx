import React from 'react';	
import VideosList from './VideosList.jsx';
import LoginForm from './LoginForm.jsx';
import LoginStore from '../stores/LoginStore.jsx';
import VideoServices from '../services/VideoServices.jsx';
import AuthenticationServices from '../services/AuthenticationServices.jsx';
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
  
  logout(){
	AuthenticationServices.logout(this.state.sessionId);
  }
  render() {
	var testData = {username:'ali',password:'password'};
    var itemToRender = <LoginForm data={testData} refresh={this.refresh.bind(this)} />;
	
	if(this.state.sessionId){
		itemToRender = <div>
				<Button onClick={this.logout.bind(this)} className="pull-right">Log out</Button>
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