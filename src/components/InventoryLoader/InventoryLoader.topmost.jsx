import React from 'react';
import { connect } from 'react-redux';
import { actions } from './InventoryLoader.module';

const ArticleInventoryLoader = ({ fetchInventory }) => {
  return (
    <>
      <p>Loading</p>
      { fetchInventory() }
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInventory: () => {
      dispatch(actions.fetchInventoryAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInventoryLoader);
