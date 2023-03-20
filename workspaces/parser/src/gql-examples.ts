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
    code: 'CREATE GRAPH mySocialNetwork TYPED socialNetworkGraphType\n',
  },
  {
    name: 'Create closed graph from graph type (double colon)',
    code: 'CREATE GRAPH mySocialNetwork ::socialNetworkGraphType\n',
  },
  {
    name: 'Create closed graph from nested graph type (double colon)',
    code: 'CREATE GRAPH mySocialNetwork ::{(City :City {name STRING, state STRING, country STRING})}\n',
  },
  {
    name: 'Insert statement',
    code:
      "INSERT (:Person { firstname: 'Firstname', lastname: 'Lastname', joined: DATE '2023-01-01' })\n" +
      '        -[:MEMBER_SINCE { since: "2023-03-20" }]->\n' +
      "        (:Team { name: 'Teamname' })\n",
  },
  {
    name: 'Match + Insert example',
    code:
      "MATCH (a { firstname: 'Robert' }), (b { lastname: 'Kowalski' })\n" +
      'INSERT (a)-[:GRADUATED]->(b)\n',
  },
  {
    name: 'Example return statement',
    code:
      'SESSION SET VALUE $a=10\n' +
      'SESSION SET VALUE $b=12\n' +
      'RETURN mod($a, $b) * $a\n',
  },
  {
    name: 'Session set schema',
    code: 'SESSION SET SCHEMA ../SCHEMAS/CITY_SCHEMA\n',
  },
  {
    name: 'Session set graph to current graph',
    code: 'SESSION SET GRAPH CURRENT_GRAPH\n',
  },
  {
    name: 'Session set graph to current property graph',
    code: 'SESSION SET GRAPH CURRENT_PROPERTY_GRAPH\n',
  },
  {
    name: 'Session set graph',
    code: 'SESSION SET GRAPH {MATCH (p: Person)}\n',
  },
  {
    name: 'Session set time zone',
    code: 'SESSION SET TIME ZONE "utc"\n',
  },
  {
    name: 'Session set property as graph reference',
    code: 'SESSION SET GRAPH IF NOT EXISTS $exampleProperty = /GRAPHS/ GRAPH_EXAMPLE\n',
  },
  {
    name: 'Session set property as binding table reference',
    code: 'SESSION SET BINDING TABLE IF NOT EXISTS $exampleProperty = /BINDING_TABLES/ EXAMPLE_TABLE\n',
  },
  {
    name: 'Session set property as value',
    code: "SESSION SET VALUE IF NOT EXISTS $exampleProperty = DATE '2022-10-10'\n",
  },
];
