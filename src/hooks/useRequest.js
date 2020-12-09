import axios from 'axios';
import { useState, useEffect } from 'react';
import { api } from '../res/api';
import toQueryStr from '../utils/toQueryStr';

const useRequest = ({
  url = null,
  method = 'GET',
  route = '',
  data = null,
  config = null,
  query = {},
  toggleVar = false,
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      axios({
        url: url || api + route + toQueryStr(query),
        method: 'get',
        data,
      })
        .then((_response) => {
          setResponse(_response);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [method, route, data, config, toggleVar]);

  return {
    response, error, isLoading,
  };
};

export default useRequest;
