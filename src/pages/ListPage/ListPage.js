import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import ItemList from '../../components/ItemList';

const ListPage = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios.get('/.netlify/functions/contacts');
        setItems(result.data);
      } catch (e) {
        console.log('Error', e);
      }
    };

    fetchItems();
  }, []);

  return <ItemList items={items} />;
};

// ListPage.propTypes = {

// };

export default ListPage;
