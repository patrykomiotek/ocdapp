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
  data: undefined;
  isLoading: true;
  hasError: false;
} | {
  // rejected
  data: undefined;
  isLoading: false;
  hasError: true;
}

export interface ApiResponse<T> {
  records: T
}

export const useApi = <S>(url: string) => {
  const [status, setStatus] = useState<AppStatus<S>>({
    data: undefined,
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
        // { records: [Product, Product, Product ] }
        // { Product }

        // const responseData: ApiResponse<S> = (await response.json()) as ApiResponse<S>;
        const responseData: S = (await response.json()) as S;

        // const data = responseData.records ? responseData.records : responseData;

        setStatus({
          data: responseData,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: status.data,
    isLoading: status.isLoading,
    hasError: status.hasError,
  }
}