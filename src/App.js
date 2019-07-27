import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import actions from './actions';
import ArticleInventoryLoader from './components/InventoryLoader';
import OmniSearchBox from './components/OmniSearchBox';

const App = ({ testProp, testActionProp }) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <OmniSearchBox inventorySelector="articles"/>
            <button onClick={() => { testActionProp('hola!!!'); }}>Click me</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            Area de datos.
          </div>
        </div>
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
