import { TestExample } from '$performance/types/test-example';

export const examples: TestExample[] = [
  {
    name: 'p-1',
    code:
      'CREATE GRAPH TYPE IF NOT EXISTS example_graph_type\n' +
      '   AS {\n' +
      '        (Person :Person {\n' +
      '           "lastname" STRING,\n' +
      '           "firstname" STRING,\n' +
      '           "joined" DATE\n' +
      '        }),\n' +
      '        (City :City {"name" STRING, "state" STRING, "country" STRING}),\n' +
      '        (Pet :Pet {"name" STRING, "type" STRING}),\n' +
      '        (Person)-[LivesIn :LIVES_IN {"since" DATE}]->(City),\n' +
      '        (Person)-[Knows :KNOWS]->(Person)\n' +
      '   }',
    isValid: true,
  },
  {
    name: 'p-2',
    code: 'create graph test_graph like example_graph_type',
    isValid: true,
  },
  {
    name: 'p-3',
    code: 'CREATE GRAPH mySocialNetwork ::{(City :City {name STRING, state STRING, country STRING})}',
    isValid: true,
  },
  {
    name: 'p-4',
    code: 'INSERT (:Person)-[:LIVES_IN {"since": DATE "1980-07-15"}]->(:City)',
    isValid: true,
  },
  {
    name: 'p-5',
    code: 'INSERT (:Pet {"name": "Winnifred", "type": "Dog"})',
    isValid: true,
  },
  {
    name: 'p-6',
    code: 'MATCH (a {"firstname": "Keith"}), (d {"name": "Winnifred"})',
    isValid: true,
  },
  {
    name: 'p-7',
    code:
      'MATCH (p:Person)-[r:IS_FRIENDS_WITH]->(friend:Person)\n' +
      'WHERE EXISTS (MATCH (p)-[:WORKS_FOR]->(:Company {name: "GQL, Inc."}))\n' +
      'RETURN p, r, friend',
    isValid: true,
  },
  {
    name: 'p-8',
    code: 'SESSION SET VALUE $a=10\nSESSION SET VALUE $b=12\nRETURN mod($a, $b)',
    isValid: true,
  },
  {
    name: 'p-9',
    code:
      'MATCH (p:Person)-[r:IS_FRIENDS_WITH]->(friend:Person)\n' +
      'WHERE EXISTS (MATCH (p)-[:WORKS_FOR]->(:Company {name: "GQL, Inc."}))\n' +
      'RETURN p, r, friend',
    isValid: true,
  },
  {
    name: 'p-10',
    code:
      'MATCH (p:Person)-[r1:IS_FRIENDS_WITH]->(friend:Person), (p:Person)-[r2:LIVES_IN]->(c:City)\n' +
      'WHERE EXISTS (MATCH (p)-[:WORKS_FOR]->(:Company {name: "GQL, Inc."}))\n' +
      'RETURN p, c, r1, r2',
    isValid: true,
  },
  {
    name: 'p-11',
    code:
      'CREATE GRAPH mySocialNetwork OPEN TYPE\n' +
      'INSERT (:Person {"firstname": "A", "lastname": "B", "joined": DATE "2022-08-23"})\n' +
      '-[:LIVES_IN {"since": DATE "1980-07-15"}]->\n' +
      '(:City {"name":"H", "state":"H", "country": "H"})\n' +
      'INSERT (:Pet {"name": "C", "type": "Dog"})',
    isValid: true,
  },
  {
    name: 'p-12',
    code:
      'CREATE GRAPH mySocialNetwork OPEN TYPE\n' +
      'INSERT (:Person {"firstname": "A", "lastname": "B", "joined": DATE "2022-08-23"})\n' +
      '-[:LIVES_IN {"since": DATE "1980-07-15"}]->\n' +
      '(:City {"name":"H", "state":"H", "country": "H"})\n' +
      'INSERT (:Pet {"name": "C", "type": "Dog"})\n' +
      'MATCH (a {"firstname": "Keith"}), (d {"name": "Winnifred"})\n' +
      'INSERT (a)-[:HasPet]->(d)',
    isValid: true,
  },
];
