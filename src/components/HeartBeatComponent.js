import React, { Component } from 'react';
import HeartBeatChart from './HeartBeatChart';
import ApiService from '../services/ApiService';
import HeartBeatVariationList from './HeartBeatVariationList';
import { StopHeartBeatCount } from '../LoadHeartBeat';
import { Link } from "react-router-dom";
import HeartBeatVariationCount from './HeartBeatVariationCount';

class HeartBeatComponent extends Component {
  state = {
    startHeartBeat: false,
    sessionId: null
  };
  
  apiService = new ApiService();

  constructor(props) {
      super(props);
      this.apiService.generateSessionId().then((res) => {
        this.setState({ 
            sessionId:res,
            startHeartBeat:true
        });
      }).catch(e => {
          console.log(e);
      });
  }

  render() {
      
    if(!this.state.startHeartBeat) {
        return <div/>;
    }
    return (
        <div className="mt-2">
          <div className="container">
            <div className="pt-2">
              <Link to="/" className="btn btn-success float-left">Back</Link> 
              <button className="btn btn-danger float-right" onClick={ e => StopHeartBeatCount()}>Stop Session</button>
            </div>
            <div className="clearfix"></div>
            <div className="row mt-3">
              <div className="col-sm-8">
                <HeartBeatChart sessionId={this.state.sessionId}></HeartBeatChart>
                <div className="">
                  <HeartBeatVariationList></HeartBeatVariationList>
                </div>
              </div>
              <div className="col-sm-4">
              <HeartBeatVariationCount></HeartBeatVariationCount>
              </div>
            </div>
          </div>  
        </div>
    );
  }
}

export default HeartBeatComponent;
