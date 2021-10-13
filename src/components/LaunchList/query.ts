import gql from "graphql-tag";
export const LAUNCHES_QUERY = gql`
  query Launches {
    launches {
      mission_name
      launch_year
      flight_number
      links {
        flickr_images
      }
    }
  }
`;
