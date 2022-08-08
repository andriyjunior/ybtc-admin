import { useEffect, useState } from "react";

interface IState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useQuerry = <T>(querry, params?: string) => {
  const [data, setData] = useState<IState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await querry(params);

      if (response.status === 200) {
        setData({ data: response.data.data, isLoading: false, error: null });
      } else {
        setData({ data: null, isLoading: false, error: response.data.error });
      }
    };

    fetchData();

    return () => {
      setData({ data: null, isLoading: true, error: null });
    };
  }, [querry, params]);

  return data;
};
