import React from 'react';
import PropTypes from 'prop-types';

const ItemList = props => {
  return (
    <div>
      {JSON.stringify(props.items)}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
