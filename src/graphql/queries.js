import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;


 
const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql `
query GETaUTHORiNO($slug: String!){
  author(where: {slug: $slug }) {
    id
    name
    field
    avatar {
      url
    }
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
`

export { GET_BLOGS_INFO , GET_AUTHORS_INFO , GET_AUTHOR_INFO};
