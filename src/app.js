import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './app.css';

import AppStore from './stores/AppStore';
import AppActions from './actions/AppActions';

import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import TextBox from './components/TextBox';
import Table from './components/Table';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = AppStore.getState();
  }
  componentDidMount () {
    AppStore.addChangeListener(this.change.bind(this));
  }
  componentWillUnmount () {
    AppStore.removeChangeListener(this.Change.bind(this));
  }
  change () {
    this.setState(AppStore.getState());
  }
  render () {
    return (
      <div className="main">
        <Header/>
          <p className={this.state.message.cssClass}>
            {this.state.message.message}
          </p>
        <div className="container">
          <TextBox ref="textbox" onChange={(e) => {
            let text = this.refs.textbox.refs.input.value;
            AppActions.textChanged(text);
          }
          } rows={10}/>
        <Button label="Shred It!" onClick={(e) => {
          let text = this.refs.textbox.refs.input.value;
          AppActions.sendTextToShredder(text);
        }}/>
      <Table model={this.state.model}/>
      <div className="tally-container">
        <p>words = {this.state.wordCount}</p>
        <p>, = {this.state.commaCount}</p>
        <p>. = {this.state.periodCount}</p>
      </div>
    </div>
    <Footer/>
  </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
