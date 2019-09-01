import axios from 'axios';
const apiPrefix = '/.netlify/functions/';

const fetchItem = async (id, callback) => {
  try {
    const result = await axios.get(apiPrefix + 'contacts/' + id);
    callback(result.data);
  } catch (e) {
    console.log('Error', e);
  }
};

export default fetchItem;
