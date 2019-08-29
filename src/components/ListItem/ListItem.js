import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ListItem = (props) => {
  const { data = {} } = props;
  const { company = {} } = data;
  return (
    <article className="flex-col items-start bg-white rounded-lg shadow mb-6 p-6 max-w-2xl mx-auto">
      <header className="text-gray-900 text-3xl">{data.name}</header>
      <section className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <div className="flex ml-3">
            <div className="w-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="ml-3 text-gray-800">{data.email}</div>
          </div>
          <div className="flex ml-3">
            <div className="w-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div className="ml-3 text-gray-800">{data.phone}</div>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="ml-3 font-bold text-gray-700 sm:text-right text-lg">
            {company.name}
          </div>
          <div className="ml-3 text-gray-700 sm:text-right text-xs">
            {company.catchPhrase}
          </div>
        </div>
      </section>
    </article>
  );
};

ListItem.propTypes = {
  data: PropTypes.object,
};

export default ListItem;
