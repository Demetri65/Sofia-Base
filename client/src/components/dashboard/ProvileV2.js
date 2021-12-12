import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";



const Profile = ({auth: user}) => {
  const [profession, setProfession] = useState("Computer Scientist");
  const [interests, setIntererests] = useState(undefined);
  const [history, setHistory] = useState(undefined);

  return (
    <div>
      <div style={{  }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Update Profile? </b> {user.name}
            </h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Update</b> your profession
              </h4>
              {/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p> */}
            </div>
            <form noValidate
              // onSubmit={this.onSubmit}
            >
              <div className="input-field col s12">

                <input
                  //   onChange={this.onChange}
                  //   value={this.state.email}
                  //   error={errors.email}
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  id="profession"
                  type="text"
                  //   className={classnames("", {
                  //     invalid: errors.email || errors.emailnotfound
                  //   })}
                />
                {/* <label htmlFor="profession">Profession</label> */}
                {/* <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span> */}
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable orange lighten-3"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Add</b> your interests
              </h4>
              {/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p> */}
            </div>
            <form noValidate
              // onSubmit={this.onSubmit}
            >
              <div className="input-field col s12">
                <input
                  //   onChange={this.onChange}
                  //   value={this.state.email}
                  //   error={errors.email}
                  onChange={(event) => setIntererests(event.target.value)}
                  id="interests"
                  type="text"
                  //   className={classnames("", {
                  //     invalid: errors.email || errors.emailnotfound
                  //   })}
                />
                {/* <label htmlFor="profession">Profession</label> */}
                {/* <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span> */}
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable orange lighten-3"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>View</b> your history
              </h4>
              {/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p> */}
            </div>
            <form noValidate
              // onSubmit={this.onSubmit}
            >
              <div className="input-field col s12">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, {logoutUser})(Profile);