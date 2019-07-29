import React from 'react';
import { connect } from 'react-redux';
import { actions } from './InventoryLoader.module';

const InventoryLoader = ({ url, fetchInventory }) => {
  return (
    <>
      <p>Loading</p>
      { fetchInventory(url) }
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInventory: (url) => {
      dispatch(actions.fetchInventoryAction(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryLoader);
