import React, { Component } from 'react';

import { Box, Image, Paragraph, Heading, Responsive } from '../index.js';

import ProgressBar from '../ProgressBar';

export default class ProjetDuMois extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limitImageSize: false
    };

    this.onResponsive = this.onResponsive.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.responsive = Responsive.start(this.onResponsive);
  }

  componentWillUnmount () {
    this.responsive.stop();
  }

  onResponsive (small) {
    this.setState({ limitImageSize: small ? true : false });
  }

  onClick (e) {
    console.log(e);
  }

  render() {

    let imageSize = "large";
    if (this.state.limitImageSize) {
      imageSize = "small";
    }

    return (
      <Box appCentered={true} align="center" justify="center" primary={true} pad="small"  >
        <Heading>Projet du Mois</Heading>
        <Box direction="row" onClick={this.onClick} >
          <Image src={this.props.imageUrl} size={imageSize} />
          <Box pad="medium" >
            <Heading>{this.props.nom}</Heading>
            <Paragraph>{this.props.description}</Paragraph>
            <ProgressBar {...this.props} />
          </Box>
        </Box>
      </Box>
    );
  }
}
