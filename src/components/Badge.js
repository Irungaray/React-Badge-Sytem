import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        const {firstName, lastName, jobTitle, twitter, avatarUrl} = this.props;
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="LCDTH ESLINT"/>
                </div>

                <div className="Badge__section--name">
                    <img
                        className="Badge__avatar"
                        src={avatarUrl}
                        alt="LCDTH ESLINT"
                    />
                    <h1>{firstName} <br/> {lastName}</h1>
                </div>

                <div className="Badge__section--info">
                <h3>{jobTitle}</h3>
                    <div>{twitter}</div>
                </div>
            </div>
        )
    }
}

export default Badge;