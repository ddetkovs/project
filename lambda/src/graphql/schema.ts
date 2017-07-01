/// <reference path="../typings/graphql.d.ts" />
import {buildASTSchema} from 'graphql';
import {makeExecutableSchema} from 'graphql-tools';

import * as Schema from './schema/Schema.graphql'
import Resolvers from './resolvers';
export default makeExecutableSchema({typeDefs: [Schema], resolvers: Resolvers});
