import React, { useState } from 'react';
import { connect } from 'react-redux';
import './OmniSearchBox.style.css';
import { actions } from './OmniSearchBox.module';

const OmniBoxSearch = ({ haystackSelector, search }) => {
  const [needle, setNeedle] = useState('');
debugger
  const onChange = React.useCallback((e) => {
      const partialNeedle = e.target.value;
      setNeedle(partialNeedle);
    },
    [setNeedle],
  );

  return (
    <>
      <div className='container'>
        <div className='row omni-search-box'>
          <div className='col-11'>
            <input type='text' onChange={onChange}/>
          </div>
          <div className='col-1'>
            <button onClick={() => search(needle, haystackSelector)}>Go</button>
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
    search: (needle, haystackSelector) => {
      return dispatch(actions.searchAction(needle, haystackSelector))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OmniBoxSearch);
