import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {inputValue: ''}

  onEnterWord = event => {
    const {value} = event.target

    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="left-card">
            <h1 className="head">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="input"
              placeholder="Enter the phrase"
              value={inputValue}
              onChange={this.onEnterWord}
              className="search-input"
            />
            <div className="result-card">
              <h1 className="head-count">No.of letters: {inputValue.length}</h1>
            </div>
          </div>
          <div className="right-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="pic"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LetterCalculator
