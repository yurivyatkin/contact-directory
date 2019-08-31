import React from 'react';
// import PropTypes from 'prop-types';
import SearchInput from '../SearchInput';

const PageHeader = (props) => {
  return (
    <header className="sticky top-0 flex-col pb-6 overflow-y-visible">
      <nav className="flex flex-col sm:flex-row items-start justify-between bg-gray-600 rounded-b-lg shadow p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Contact Directory</h1>
        <SearchInput />
      </nav>
    </header>
  );
};

// PageHeader.propTypes = {

// };

export default PageHeader;
