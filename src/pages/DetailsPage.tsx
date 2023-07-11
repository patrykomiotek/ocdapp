import { useParams, useNavigate } from "react-router-dom";
import { Text } from "@ui/atoms";
import { useEffect } from "react";

export const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log({ params });

  useEffect(() => {
    // api call
    if (params.foo === '13') {
      navigate('/');
    }
  }, [params]);

  return (
    <>
      <Text bgColor="#ff0000">
        Url param value: {params.foo}
      </Text>
    </>
  );
}