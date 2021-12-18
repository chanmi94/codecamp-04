import { gql } from "@apollo/client";

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      price
      createdAt
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USEDITEM_IPICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      price
      seller {
        name
      }
      buyer {
        name
      }
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      price
      images
      soldAt
      createdAt
      seller {
        name
      }
    }
  }
`;
