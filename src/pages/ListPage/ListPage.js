import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import ItemList from '../../components/ItemList';

const ListPage = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios.get('/api/contacts');
        setItems(result.data);
      } catch (e) {
        console.log('Error', e);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="bg-gray-200 py-6">
      <ItemList items={items} />
    </div>
  );
};

// ListPage.propTypes = {

// };

export default ListPage;
