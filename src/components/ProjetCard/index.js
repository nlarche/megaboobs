import React, { Component } from 'react';

import { Card, Image, Paragraph } from '../index.js';

import ProgressBar from '../ProgressBar';

export default class ProjetCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick (e) {
    console.log(e);
  }
  render() {

    const image = <Image src={this.props.imageUrl} />;

    const description = (
      <div>
      <Paragraph>{this.props.description}</Paragraph>
      <ProgressBar {...this.props} size="medium" />
      </div>
    );

    return (
      <Card style={ {margin : "25px"} }
        contentPad="medium"
        textSize="small"
        heading={this.props.nom}
        description={description}
        thumbnail={image}
        onClick={this.onClick} />
    );
  }
}