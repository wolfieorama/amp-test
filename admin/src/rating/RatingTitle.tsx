import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Rating as TRating } from "../api/rating/Rating";

type Props = { id: string };

export const RatingTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    TRating,
    AxiosError,
    [string, string]
  >(["get-/api/ratings", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/ratings"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/ratings"}/${id}`} className="entity-id">
      {data?.id && data?.id.length ? data.id : data?.id}
    </Link>
  );
};
