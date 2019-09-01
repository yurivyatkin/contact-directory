import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchItem } from '../../api';
import { ItemHeader, ItemView } from '../../components';

const ItemPage = (props) => {
  const { id } = props;

  const [contact, setContact] = useState({});

  useEffect(() => {
    fetchItem(id, (data) => {
      setContact(data);
    });
  }, [id]);

  return (
    <div className="flex flex-col bg-gray-200 px-3 h-screen overflow-hidden">
      <ItemHeader title={contact.name} />
      <ItemView details={contact} />
    </div>
  );
};

ItemPage.propTypes = {
  id: PropTypes.string,
};

export default ItemPage;
