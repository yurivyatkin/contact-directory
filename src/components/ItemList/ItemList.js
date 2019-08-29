import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

const ItemList = (props) => {
  return (
    <main className="flex-col container mx-auto p-3">
      {props.items.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </main>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
