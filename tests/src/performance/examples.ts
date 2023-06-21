import { TestExample } from '$performance/types/test-example';

export const examples: TestExample[] = [
  {
    name: 'create-graph-type-0',
    code:
      'CREATE GRAPH TYPE IF NOT EXISTS example_graph_type\n' +
      '   AS {\n' +
      '        (Person :Person { "lastname" STRING, "firstname" STRING, "joined" DATE}),\n' +
      '        (City :City { "name" STRING, "state" STRING, "country" STRING}),\n' +
      '        (Pet :Pet { "name" STRING, "type" STRING}),\n' +
      '        (Person)-[LivesIn :LIVES_IN { "since" DATE }]->(City),\n' +
      '        (Person)-[Knows :KNOWS]->(Person)' +
      '   }',
    isValid: true,
  },
  {
    name: 'create-graph-0',
    code: 'create graph test_graph like example_graph_type',
    isValid: true,
  },
  {
    name: 'create-graph-1',
    code: 'create graph test_graph typed example_graph_type',
    isValid: true,
  },
  {
    name: 'create-graph-2',
    code: 'create graph test_graph typed example_graph_type',
    isValid: true,
  },
  {
    name: 'create-graph-3',
    code: 'create graph test_graph open type',
    isValid: true,
  },
  {
    name: 'create-graph-4',
    code: 'CREATE GRAPH mySocialNetwork ::{(City :City {name STRING, state STRING, country STRING})}',
    isValid: true,
  },
  {
    name: 'insert-0',
    code: 'INSERT (:Person)-[:LIVES_IN { "since": DATE "1980-07-15" }]->(:City)',
    isValid: true,
  },
  {
    name: 'insert-1',
    code: 'INSERT (:Pet { "name": "Winnifred", "type": "Dog" })',
    isValid: true,
  },
  {
    name: 'insert-2',
    code: 'INSERT (a)-[:HasPet]->(d)',
    isValid: true,
  },
  {
    name: 'match-0',
    code: 'MATCH (a { "firstname": "Keith" }), (d { "name": "Winnifred" })',
    isValid: true,
  },
  {
    name: 'match-1',
    code:
      'MATCH (p:Person)-[r:IS_FRIENDS_WITH]->(friend:Person)\n' +
      'WHERE EXISTS (MATCH (p)-[:WORKS_FOR]->(:Company { name: "GQL, Inc."}) )\n' +
      'RETURN p, r, friend',
    isValid: true,
  },
];
