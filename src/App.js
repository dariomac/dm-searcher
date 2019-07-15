import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import actions from './actions';
import ArticleInventoryLoader from './components/InventoryLoader';

const App = ({ testProp, testActionProp }) => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload. ({testProp})
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <button onClick={() => { testActionProp('hola!!!'); }}>Click me</button>
        </header>
      </div>

      <ArticleInventoryLoader />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    testProp: state.test.testValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testActionProp: (val) => {
      dispatch(actions.testAction(val));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
