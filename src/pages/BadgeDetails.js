import React from "react";
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";

import Badge from "../components/Badge";

import "./styles/BadgeDetails.css";

import logo from "../images/platziconf-logo.svg";

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="logo" />
            </div>

            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>

          <div className="col">
            <h2>Actions</h2>
            <>
              <div>
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className="btn btn-primary mb-4"
                >
                  Edit
                </Link>
              </div>

              <Link to="/badges" className="btn btn-primary mb-4">
                Go Back
              </Link>

              <div>
                <button className="btn btn-danger">Delete</button>
                {/* {ReactDOM.createPortal(<h1>La concha de la madre</h1>, document.getElementById('modal'))} */}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
