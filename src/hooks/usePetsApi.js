import React from 'react';
import api from '../tools/api';

export default function usePetsApi(options) {
  const [data, setData] = React.useState(null);
  const {path, params} = options;



  React.useEffect(() => {

    api
      .get(path, {params})
      // Ensure that the id used is not the largest possible int64 value (id datatype). This is only
      // because the number of pets stored in the API has already exceeded it and any DELETE requests
      // made to pets with this id will fail, since it's not a valid id.
      .then((response) => setData(response.data.filter(p => p.id < 9222968140497253000)))
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }, []);

  return data;
}