import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import actions from './actions';
import InventoryLoader from './components/InventoryLoader';
import OmniSearchBox from './components/OmniSearchBox';

const App = ({}) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <OmniSearchBox haystackSelector="articles"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            Area de datos.
          </div>
        </div>
      </div>

      <InventoryLoader url='./inventory.json'/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
