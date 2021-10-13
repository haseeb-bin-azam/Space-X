import gql from "graphql-tag";

const LAUNCHES_INFO_QUERY = gql`
  query LaunchInfo($id: String!) {
    launch(id: $id) {
      mission_name
      launch_success
      details
      launch_year
      launch_site {
        site_name
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
