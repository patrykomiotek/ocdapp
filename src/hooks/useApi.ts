import { useEffect, useState } from "react";

const API_TOKEN = 'patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0';

// good luck!
type AppStatus<T> = {
  // resolved
  data: T;
  isLoading: false;
  hasError: false;
} | {
  // pending
  data: [];
  isLoading: true;
  hasError: false;
} | {
  // rejected
  data: undefined;
  isLoading: false;
  hasError: true;
}

interface ApiResponse<T> {
  records: T
}

export const useApi = <S>(url: string) => {
  const [status, setStatus] = useState<AppStatus<S>>({
    data: [],
    isLoading: true,
    hasError: false,
  });


  const loadData = async () => {

      try {
        const response: Response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        });

        // TODO: modify
        const responseData: ApiResponse<S> = (await response.json()) as ApiResponse<S>;

        setStatus({
          data: responseData.records,
          isLoading: false,
          hasError: false,
        });
      } catch {
        setStatus({
          data: undefined,
          isLoading: false,
          hasError: true,
        });
      }
  }

  useEffect(() => {
    void loadData();
  }, []);

  return {
    data: status.data,
    isLoading: status.isLoading,
    hasError: status.hasError,
  }
}