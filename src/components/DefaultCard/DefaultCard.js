import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const DefaultCard = (props) => {
  const {
    company = '',
    tagline = '',
    name = '',
    email = '',
    phone = '',
    address = {
      suite: '',
      street: '',
      city: '',
      zipcode: '',
    },
  } = props;
  return (
    <div className="flex flex-col bg-orange-200 rounded-lg shadow-xl sm:w-4/5 p-6">
      <div className="flex flex-col items-end mb-6">
        <div className="text-4xl uppercase">{company}</div>
        <div className="font-light">{tagline}</div>
      </div>
      <div className="flex flex-row">
        <div className="w-2/3">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex">
            <div className="w-4">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="ml-3 text-gray-800">{email}</div>
          </div>
          <div className="flex">
            <div className="w-4">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div className="ml-3 text-gray-800">{phone}</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-xs">{address.suite}</div>
          <div className="text-xs">{address.street}</div>
          <div className="text-xs">{address.city}</div>
          <div className="text-xs">{address.zipcode}</div>
        </div>
      </div>
    </div>
  );
};

DefaultCard.propTypes = {
  company: PropTypes.string,
  tagline: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object,
};

export default DefaultCard;
