import userJsonFile from '../data.json'
 const fetchJsonData = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(userJsonFile); // Fetch the local JSON file
        const jsonData = await response.json(); // Convert the response to JSON
        dispatch({ type: 'FETCH_JSON_DATA_SUCCESS', payload: jsonData }); // Dispatch an action to store the JSON data in the Redux store
      } catch (error) {
        dispatch({ type: 'FETCH_JSON_DATA_ERROR', payload: error.message }); // Dispatch an action if there is an error fetching the JSON data
      }
    };
  };
  

export default fetchJsonData

