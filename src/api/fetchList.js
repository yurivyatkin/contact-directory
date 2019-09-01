import axios from 'axios';
const apiPrefix = '/.netlify/functions/';

const fetchList = async (callback) => {
  try {
    const result = await axios.get(apiPrefix + 'contacts');
    callback(result.data);
  } catch (e) {
    console.log('Error', e);
  }
};

export default fetchList;
