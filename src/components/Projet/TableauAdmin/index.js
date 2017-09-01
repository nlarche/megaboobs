import React, { Component, PropTypes } from 'react';

import {
  Table,
  TableHeader,
  TableRow,
  Button,
} from '../..';

import {updateStatut} from "../../../service/projet/index";

export default class TableauAdmin extends Component {
  constructor() {
    super();
    this.state = {
      sortIndex: 0,
      sortAscending: false
    };
    this.sort = this.sort.bind(this);
  }
  sort(index, ascending) {
    this.setState({
      sortIndex: index,
      sortAscending: ascending
    });
  }

  acceder(e) {
    e.preventDefault();
    window.location.href = window.location.origin + "/projet/" + this;
  }

  editerPublication(e) {
    e.preventDefault();
    window.location.href = window.location.origin + "/publier/" + this;
  }

  updateStatut(e) {
    e.preventDefault();

    var statut = prompt('Nouveau statut ? (entrer exactement CREE, REFUSE, PUBLIE, FINANCE ou NON_FINANCE)');
    updateStatut(this, statut)
  }

  render() {

    // const { sortIndex, sortAscending } = this.state;

    return (
      <Table>
        <TableHeader labels={['Statut', 'Date de dernière modification', 'Projet', 'Créateur', 'Actions']}
          sortIndex={this.sortIndex}
          sortAscending={this.sortAscending}
          onSort={this.sort}
        />
        { this.props.projets ?
          <tbody>
          {this.props.projets.map((p, i) => {
            return (<TableRow key={i}>
              <td>
                {p.statut.statutProjet}
              </td>
              <td>
                {p.statut.dateDebut}
              </td>
              <td>
                {p.nom}
              </td>
              <td>
                {p.createur.nom + " " + p.createur.prenom}
              </td>
              <td>
                {(p.statut.statutProjet !== 'CREE' &&
                  p.statut.statutProjet !== 'REFUSE') &&
                <Button id="123"
                        label='CONSULTER'
                        type='button'
                        primary={false}
                        onClick={this.acceder.bind(p.id)} />
                }
                {(p.statut.statutProjet === 'CREE' ||
                  p.statut.statutProjet === 'PUBLIE') &&
                <Button label='EDITER PUBLICATION'
                        type='button'
                        primary={false}
                        onClick={this.editerPublication.bind(p.id)} />
                }
                  <Button label='CHANGER STATUT'
                  type='button'
                  primary={false}
                  onClick={this.updateStatut.bind(p.id)} />
              </td>
            </TableRow>);
            })}
        </tbody>
          : null }
      </Table>
    );
  }
}

TableauAdmin.contextTypes = {
  router: PropTypes.object,
};
