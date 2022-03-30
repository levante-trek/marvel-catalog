import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);
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
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, isLoading };
}
