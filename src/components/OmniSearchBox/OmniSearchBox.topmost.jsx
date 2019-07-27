import React, { useState } from 'react';
import { connect } from 'react-redux';
import './OmniSearchBox.style.css';
import { actions } from './OmniSearchBox.module';

const OmniBoxSearch = ({ inventorySelector, search }) => {
  const [q, setQ] = useState('');

  const onChange = React.useCallback((e) => {
      const partialQ = e.target.value;
      setQ(partialQ);
    },
    [setQ],
  );

  return (
    <>
      <div className='container'>
        <div className='row omni-search-box'>
          <div className='col-11'>
            <input type='text' onChange={onChange}/>
          </div>
          <div className='col-1'>
            <button onClick={() => search(q, inventorySelector)}>Go</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (q, inventorySelector) => {
      return dispatch(actions.searchAction(q, inventorySelector))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OmniBoxSearch);
