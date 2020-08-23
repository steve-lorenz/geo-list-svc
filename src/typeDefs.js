import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        listItems: [ListItem!]!
        listItem(id: ID!): ListItem!
    }

    type ListItem {
        id: ID!
        description: String!
        isPurchased: Boolean!
    }

    type Mutation {
        createListItem(description: String!, isPurchased: Boolean!): ListItem!
        removeListItem(id: ID!): ListItem!
        updateListItem(id: ID!, isPurchased: Boolean, description: String): ListItem!
    }
`;
