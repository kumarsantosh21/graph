import { gql } from "@apollo/client";

export const GET_GRAPH_DATA = gql`
  query GET_GRAPH_DATA {
    graphdata {
      _id
      x
      y
    }
  }
`;
