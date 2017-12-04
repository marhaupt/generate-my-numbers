import React, { Component } from 'react';

class App extends Component {
  state = {
    numbers: [],
    different: true,
    min: 1,
    max: 100,
    total: 10
  };

  handleInput = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value === '' ? '' : Number(target.value);
    this.setState({
      [name]: value
    });
  };

  okay = () => {
    const { min, max, total } = this.state;
    return max > min && max - min + 1 >= total;
  };

  generateNumbers = () => {
    let numberArray = [];
    let { min, max, total } = this.state;

    if (this.okay()) {
      for (var i = 0; i < total; i++) {
        let number = 0;

        do {
          number = Math.floor(Math.random() * (max - min + 1) + min);
        } while (numberArray.includes(number));

        numberArray.push(number);
      }

      numberArray.sort((a, b) => a - b);
      this.setState({
        numbers: numberArray
      });
    }
  };

  render() {
    const { min, max, total, numbers } = this.state;

    return (
      <main>
        <section className="button-container">
          <button className="button-text" onClick={this.generateNumbers}>
            Give me my numbers!
          </button>
        </section>
        <p className="settings-label">MIN:</p>
        <p>
          <input
            name="min"
            type="number"
            value={min}
            onChange={this.handleInput}
            className={!this.okay() ? 'number-trouble' : ''}
          />
        </p>
        <p className="settings-label">MAX:</p>
        <p>
          <input
            name="max"
            type="number"
            value={max}
            onChange={this.handleInput}
            className={!this.okay() ? 'number-trouble' : ''}
          />
        </p>
        <p className="settings-label">TOTAL:</p>
        <p>
          <input
            name="total"
            type="number"
            value={total}
            onChange={this.handleInput}
            className={!this.okay() ? 'number-trouble' : ''}
          />
        </p>
        <p className="numbers-label">Generated numbers</p>
        <ul className="numbers">
          {numbers.map(number => <li key={number}>{number}</li>)}
        </ul>
      </main>
    );
  }
}

export default App;
