import React from 'react';
import PropTypes from 'prop-types';
import ContactCard from '../ContactCard';

const ItemView = (props) => {
  const { details } = props;
  return (
    <main
      className="flex-col flex-grow overflow-y-scroll"
      style={{ scrollbarWidth: 'none' }}
    >
      <article className="flex-col items-start bg-white rounded-lg shadow mb-6 p-6 max-w-2xl mx-auto">
        <ContactCard details={details} />
      </article>
    </main>
  );
};

ItemView.propTypes = {
  details: PropTypes.object,
};

export default ItemView;
