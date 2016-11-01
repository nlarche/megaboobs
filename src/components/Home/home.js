import React, { Component } from 'react';
import Scroll from 'react-scroll';

import ProjetDuMois from './ProjetDuMois';
import ProjetPopulaire from './ProjetPopulaire';

import './index.css';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi
                  tempus quis placerat ut, porta nec
                  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                  gravida purus diam, et dictum felis venenatis efficitur.
                  Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
                  arcu et sollicitudin porttitor, tortor urna tempor ligula,
                  id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.`;


export default class Home extends Component {
  constructor() {
    super();

    this.goSection = this.goSection.bind(this);
  }
  goSection() {
    Scroll.animateScroll.scrollTo(this.refs.section2.offsetTop + 200);
  }
  render() {
    return (
      <div >
        <section className="container section1" >
          <div className="columns info-bulle" >
            <div className="column" >
              <article className="message is-primary">
                <div className="message-header">
                  Découvrir les projets
                </div>
                <div className="message-body">
                  {lorem}
                </div>
              </article>
            </div>
            <div className="column" >
              <article className="message is-info">
                <div className="message-header">
                  Démarrer un projet
                </div>
                <div className="message-body">
                  {lorem}
                </div>
              </article>
            </div>
          </div>
          <div className="content has-text-centered scroll-button" >
            <a className="button is-large" onClick={this.goSection} >
              <i className="fa fa-arrow-down"></i>
            </a>
          </div>
        </section>
        <section ref="section2" className="section2">
          <ProjetDuMois {...this.props.projetDuMois} />
          <ProjetPopulaire listeProjet={this.props.listeProjet} />
        </section>
      </div>
    );
  }
}