import React, { Component, PropTypes } from 'react';
import ProgressBar from '../ProgressBar';

import './index.css';

export default class ApercuProjet extends Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }
  click() {
    this.context.router.push(`/projet/${this.props.id}`);
  }
  render() {
    return (
      <div className="card apercu-projet" onClick={this.click} >
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={this.props.imageUrl} alt={this.props.nom} />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{this.props.nom}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.description}
          </div>
          <ProgressBar {...this.props} />
        </div>
      </div>
    );
  }
}

ApercuProjet.contextTypes = {
  router: PropTypes.object,
};
