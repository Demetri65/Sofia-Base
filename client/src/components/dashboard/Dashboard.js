import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
      <div style={{ paddingTop: "25vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into{" "}
                <span style={{ fontFamily: "monospace" }}>SofiaBase</span>
              </p>
            </h4> 
          </div>
        </div>
      </div>
      <div className="container valign-wrapper">
        <div style={{  }} className="row">
          <div className="col center s12">
            <Link
              to="/dashboard" 
              className="black-text"
            >
              <button 
                style={{ 
                  fontFamily: "monospace",
                  width: "200px",
                  height: "50px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} 
                className="btn waves-effect waves-light orange lighten-3 black-text">Testing</button>
            </Link>
          </div>
          <div style={{ paddingTop: "5vh" }} className="col center s12">
            <Link
              to="/dashboard" 
              className="black-text"
            >
              <button 
                style={{ 
                  fontFamily: "monospace",
                  width: "200px",
                  height: "50px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} 
                className="btn waves-effect waves-light orange lighten-3 black-text">Test</button>
            </Link>
          </div>
          <div style={{ paddingTop: "5vh" }} className="col center s12">
            <Link
              to="/profile" 
              className="black-text"
            >
              <button 
                style={{ 
                  fontFamily: "monospace",
                  width: "200px",
                  height: "50px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} 
                className="btn waves-effect waves-light orange lighten-3 black-text">Profile</button>
            </Link>
          </div>
       </div>
     </div>
    </div> 
        
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);