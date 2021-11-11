import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            
              <Link
                to="/"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s3 brand-logo center black-text"
              >
                <i className="material-icons">code</i>
                SofiaBase
              </Link>
              <div className="row">
                <Link
                  to="/profile" 
                  className="col s1 right black-text"
                >
                  <button 
                    style={{ 
                      fontFamily: "monospace",
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }} 
                    className="btn waves-effect waves-light orange lighten-3 black-text">Profile</button>
                </Link>
                <Link
                  to="/"
                  style={{ fontFamily: "monospace" }}
                  className="col s1 right"
                >
                  <button 
                    style={{ 
                      fontFamily: "monospace",
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }} 
                    className="btn waves-effect waves-light orange lighten-3 black-text">test2</button>
                </Link>
                <Link
                  to="/book"
                  style={{ fontFamily: "monospace" }}
                  className="col s1 right black-text"
                >
                  <button 
                    style={{ 
                      fontFamily: "monospace",
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }} 
                    className="btn waves-effect waves-light orange lighten-3 black-text">Test1</button>
                </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;