import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';

const NotFoundPage = (props) => {
  useEffect(() => {
    navigate('/');
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-200">
    </div>
  );
};

// NotFoundPage.propTypes = {

// };

export default NotFoundPage;
