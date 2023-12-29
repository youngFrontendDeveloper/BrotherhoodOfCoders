"use client";

import useSWR from "swr";
import { URL } from "@/constants/url";

const fetcher = (url) => fetch( url ).then( res => res.json() );

export const usePosts = () => {
  const { data, isLoading, error, } = useSWR( URL, fetcher );

  return {
    data,
    isLoading,
    error,
  };
};