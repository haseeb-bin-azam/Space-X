import React from "react";
import { LaunchesQuery, useLaunchesQuery } from "../../generated/graphql";
import { LaunchList } from "./LaunchList";

export const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return <h1 style={{color: "white"}}>Loading...</h1>;
  }

  if (error || !data) {
    return <h3>Error</h3>;
  }

  return <LaunchList data={data} />;
};
