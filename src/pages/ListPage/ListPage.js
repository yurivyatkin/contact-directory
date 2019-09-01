import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { ItemList, ListHeader } from '../../components';
import { fetchList } from '../../api';

const ListPage = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchList((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="flex flex-col bg-gray-200 px-3 h-screen overflow-hidden">
      <ListHeader />
      <ItemList items={items} />
    </div>
  );
};

// ListPage.propTypes = {

// };

export default ListPage;
