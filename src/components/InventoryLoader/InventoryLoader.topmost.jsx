import React from 'react';
import { connect } from 'react-redux';
import { creators } from './InventoryLoader.module';

const InventoryLoader = ({ url, fetchInventory }) => {
  return (
    <>
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
      dispatch(creators.fetchInventoryAction(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryLoader);
