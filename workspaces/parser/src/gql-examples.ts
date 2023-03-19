import { GqlExample } from './type/gql-example';

export const gqlExamples: GqlExample[] = [
  {
    name: 'Create graph type',
    code:
      'CREATE GRAPH TYPE IF NOT EXISTS socialNetworkGraphType\n' +
      'AS {\n' +
      '    (Person :Person {lastname STRING, firstname STRING, joined DATE}),\n' +
      '    (City :City {name STRING, state STRING, country STRING}),\n' +
      '    (Pet :Pet {name STRING, _type STRING}),\n' +
      '    (Person)-[LivesIn:LIVES_IN {since DATE}]->(City),\n' +
      '    (Person)-[Knows :KNOWS]->(Person)\n' +
      '}\n',
  },
  {
    name: 'Create closed graph from graph type (lexical)',
    code: 'CREATE GRAPH mySocialNetwork TYPED socialNetworkGraphType;\n',
  },
  {
    name: 'Create closed graph from graph type (double colon)',
    code: 'CREATE GRAPH mySocialNetwork ::socialNetworkGraphType;\n',
  },
  {
    name: 'Create closed graph from nested graph type (double colon)',
    code: 'CREATE GRAPH mySocialNetwork ::{(City :City {name STRING, state STRING, country STRING})};\n',
  },
];
