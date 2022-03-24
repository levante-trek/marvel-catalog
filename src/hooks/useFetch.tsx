import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      //función asíncrona para poder capturar el error
      try {
        //La variable res espera a la petición fetch
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(
            `Status: ${res.status} // StatusText: ${res.statusText}`
          );
        }
        const json = await res.json();

        //Si no se generó un mensaje de error por parte de AbortController
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error: any) {
        if (signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
