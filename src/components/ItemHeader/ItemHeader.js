import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import { navigate } from 'hookrouter';

const redirectToList = () => {
  navigate('/');
};

const ItemHeader = (props) => {
  const { title } = props;
  return (
    <header className="sticky top-0 flex-col pb-6 overflow-y-visible">
      <nav className="flex flex-row items-start justify-between bg-gray-600 rounded-b-lg shadow p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl text-orange-400 font-semibold text-white">
          {title}
        </h1>
        <CloseButton onClick={redirectToList} />
      </nav>
    </header>
  );
};

ItemHeader.propTypes = {
  title: PropTypes.string,
};

export default ItemHeader;
