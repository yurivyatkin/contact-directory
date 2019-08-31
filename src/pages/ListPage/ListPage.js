import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { ItemList, PageHeader } from '../../components';

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

  return (
    <div className="flex flex-col bg-gray-200 px-3 h-screen overflow-hidden">
      <PageHeader />
      <ItemList items={items} />
    </div>
  );
};

// ListPage.propTypes = {

// };

export default ListPage;
