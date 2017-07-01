import { graphql } from 'graphql';
import Schema from './schema';
import {addMockFunctionsToSchema} from 'graphql-tools';
import { MockList } from 'graphql-tools';
import * as faker from 'faker';


addMockFunctionsToSchema({
  schema: Schema,
  mocks: {
    EventsConnection: () => ({
      edges: () => new MockList([5, 10])
    }),
    Event: () => ({
      price: () => faker.commerce.price(1, 200),
      rating: () => faker.random.number({min: 0, max: 5}),
      reviewCount: () => faker.random.number(100),
      description: () => faker.lorem.text(30),
      tagline: () => faker.company.catchPhrase(),
      thumbnail: () =>  faker.random.image()
    })
  },
  // preserveResolvers: true
});

export default (query, variables) => (
  graphql(Schema, query, {}, {}, variables)
);
