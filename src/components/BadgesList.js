import React from "react";
import "../components/styles/BadgesList.css";
import tw_logo from "../images/twitter-logo.png";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badges) => {
          return (
            <li key={badges.id} className="Badge__section-name-list">
              <img
                src={badges.avatarUrl}
                className="Badge__avatar-list"
                alt="Avatar"
              />

              <div>
                {badges.firstName} {badges.lastName}
                <br />
                {badges.title}
                <br />
                <img
                  src={tw_logo}
                  className="tw__logo"
                  alt="Logo"
                />
                <span className="twitter__blue_font">{badges.twitter}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
