import React from "react";
import { render } from "react-dom";
import createStore from "./create-store";
import { Provider, connect } from 'react-redux';

import JSONTree from 'react-json-tree'
import InventoryLoader from './components/InventoryLoader';
import OmniSearchBox from './components/OmniSearchBox';

/*
Si hago busqueda de 0, escribo en el searchbox y ejecuto action de search (por defecto)
  Al terminar el search, como location.query es undefined, hago push a history con el qs.

Si accedo con url+querystring, si el location.kind es load, cargo el searchbox y hago ejecuto action de search.
  Al terminar el search, como location.kind es load, no hago push de querystring
*/

// https://github.com/reduxjs/redux-devtools/tree/75322b15ee7ba03fddf10ac3399881e302848874/src/react/themes
const theme = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};

const store = createStore();

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = ({inventory, qs, findings}) => (
  <>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <OmniSearchBox haystack={inventory} defaultNeedle={qs}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
        <JSONTree 
          data={findings || inventory} 
          theme={theme} 
          hideRoot={true} 
          shouldExpandNode={(keyName, data, level) => (true)}/>
        </div>
      </div>
    </div>

    <InventoryLoader url='./inventory.json'/>
  </>
);

const mapStateToProps = (state) => {
  return {
    inventory: state.articles.inventory,
    findings: state.omniSearchBox.search.findings,
    qs: state.location.query && state.location.query.q
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
