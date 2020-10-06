import React from "react";
import { Link } from "react-router-dom";

class BadgeForm extends React.Component {
  //   state = {};

  //   handleChange = (e) => {
  //     console.log({
  //         name: e.target.name,
  //         value: e.target.value
  //     });

  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  handleClick = (e) => {
    console.log("Btn clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Btn submitted");
  //   console.log(this.state);
  // };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>

          <Link to="/badges" className="btn btn-primary ml-4">
            Go Back
          </Link>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </>
    );
  }
}

export default BadgeForm;
