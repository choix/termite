import alt from '../alt'

import TerminalActions from '../actions/terminal_actions'

class TerminalStore {
  constructor() {
    this.bindActions(TerminalActions);

    this.id = 0;
    this.elements = [
      {id: 0, type: 'stdin', value: '', readOnly: false},
    ];
  }

  onAddStdout(stdout) {
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdout', value: stdout});
  }

  onAddStdin() {
    // Mark current stdin as readonly
    // this.elements[this.elements.length - 1].readOnly = true;
    this.elements.forEach((elem) => {
      elem.readOnly = true;
    });

    // Add new stdin
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdin', value: '', readOnly: false});
  }
}

export default alt.createStore(TerminalStore, 'TerminalStore')
