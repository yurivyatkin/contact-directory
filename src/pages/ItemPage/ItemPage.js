import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';

import { fetchItem } from '../../api';
import { ItemHeader, ItemView } from '../../components';

const ItemPage = (props) => {
  const { id } = props;

  const [contact, setContact] = useState({});

  useEffect(() => {
    fetchItem(id, (data) => {
      // TODO: FIXME: Use a more adequate response format:
      if (!data || Object.keys(data).length === 0) {
        navigate('/');
      } else {
        setContact(data);
      }
    });
  }, [id]);

  return (
    <div className="flex flex-col bg-gray-200 px-3 h-screen overflow-hidden">
      {contact.name ? (
        <div>
          <ItemHeader title={contact.name} />
          <ItemView details={contact} />
        </div>
      ) : null}
    </div>
  );
};

ItemPage.propTypes = {
  id: PropTypes.string,
};

export default ItemPage;
