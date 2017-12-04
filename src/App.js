import React, { Component } from 'react';

class App extends Component {
  state = {
    numbers: [],
    different: true,
    min: 1,
    max: 15,
    total: 10
  };

  generateNumbers = () => {
    let numberArray = [];
    let { min, max, total } = this.state;

    for (var i = 0; i < total; i++) {
      let number = 0;

      do {
        number = Math.floor(Math.random() * (max - min) + min);
        //TODO: je už v poli?
      } while (false);

      numberArray.push(number);
      console.log(numberArray);
    }

    numberArray.sort((a, b) => a - b);
    this.setState({
      numbers: numberArray
    });
  };

  render() {
    return (
      <main>
        <section className="button-container">
          <button className="button-text" onClick={this.generateNumbers}>
            Give me my numbers!
          </button>
        </section>
        <p>MIN:</p>
        <p>
          <input type="number" value={this.state.min} />
        </p>
        <p>MAX:</p>
        <p>
          <input type="number" value={this.state.max} />
        </p>
        <p>TOTAL:</p>
        <p>
          <input type="number" value={this.state.total} />
        </p>
        <p>NUMBERS:</p>
        <p>{this.state.numbers.join(' ')}</p>
      </main>
    );
  }
}

export default App;
