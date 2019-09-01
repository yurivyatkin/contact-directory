import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const noop = () => {};

const CloseButton = (props) => {
  const { onClick = noop } = props;
  return (
    <div
      className="rounded-full h-16 w-16 flex justify-center items-center text-2xl hover:bg-gray-500 text-white cursor-pointer"
      onClick={onClick}
    >
      <FontAwesomeIcon className="block" icon={faTimes} />
    </div>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;
