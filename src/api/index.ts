import { useEffect, useState } from "react";

const useGetUser = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.items);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return { data, loading, error };
};

export default useGetUser;
