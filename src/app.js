
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles   from './App.css';
import Header   from './components/Header';
import Footer   from './components/Footer';
import Button   from './components/Button';
import TextBox  from './components/TextBox';
import Table    from './components/Table';

class App extends Component {
render() {
  return (
    <div>
      <Header/>
      <div className="ContactPage">
        <TextBox onChange={()=>{}} rows="10"/>
        <Button label="Shred It!" onClick={()=>{}}/>
        <Table model={{}}/>
      </div>
      <Footer/>
    </div>
  );
}
}

ReactDOM.render(<App/>, document.getElementById('app'));

