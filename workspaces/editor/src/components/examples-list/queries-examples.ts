import { Example } from './types/example';

export const queriesExamples: Example[] = [
  {
    title: 'Fraud graph example',
    query:
      'CREATE GRAPH TYPE FraudGraphType LOOSE {\n' +
      '  (PersonType: Person {name STRING}),\n' +
      '  (CustomerType: PersonType & Customer {c_id INT32}),\n' +
      '  (CreditCardType: CreditCard {cc_num STRING}),\n' +
      '  (TransactionType: Transaction {cc_num STRING}),\n' +
      '  (AccountType: Account {acct_id INT32}),\n' +
      '  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType),\n' +
      '  (:CustomerType)-[UsesCreditCardType: uses]->(:CreditCardType),\n' +
      '  (:TransactionType)-[ChargesCreditCardType: charge {amount DOUBLE}]->(:CreditCardType),\n' +
      '  (:TransactionType)-[ActivityType: deposit|withdraw {time DATETIME}]->(:AccountType)\n' +
      '}\n',
  },
  {
    title: 'Catalog graph example',
    query:
      'CREATE GRAPH TYPE CatalogGraphType STRICT {\n' +
      '  (CatalogType: Catalog {id INT}),\n' +
      '  (DataResourceType: DataResource),\n' +
      '  (DatabaseType: DataResourceType {path STRING, owner STRING}),\n' +
      '  (TableType: DataResourceType {id INT, name STRING}),\n' +
      '  (ColumnType: DataResourceType {id INT, name STRING, dataType STRING}),\n' +
      '  (GraphType: DataResourceType {id INT, name STRING}),\n' +
      '  (:CatalogType)-[HasResourceType: hasResource {since DATE}]->(:DataResourceType),\n' +
      '  (:DataResourceType)-[DerivedFromType: derivedFrom {since DATE}]->(:DataResourceType),\n' +
      '  (:DatabaseType)-[HasTableType: hasTable {since DATE}]->(:TableType),\n' +
      '  (:TableType)-[HasColumnType: hasColumn {since DATE}]->(:ColumnType)\n' +
      '}\n',
  },
  {
    title: 'Create graph example with optional in node',
    query:
      'CREATE GRAPH TYPE Test STRICT {\n' +
      '  (PersonType: Person\n' +
      '    {name STRING, OPTIONAL birthday DATE})\n' +
      '}\n',
  },
  {
    title: 'Buddy edge example',
    query:
      'CREATE GRAPH TYPE Test STRICT {\n' +
      '  (:EmployeeType)-[BuddyType: FriendType {since DATE, casual BOOL}]->(:EmployeeType)\n' +
      '}\n',
  },
  {
    title: 'Friend edge type with & and | pipes example',
    query:
      'CREATE GRAPH TYPE Test LOOSE {\n' +
      '  (:PersonType|CustomerType)-[FriendType: Knows & Likes {since DATE}]->(:PersonType|CustomerType)\n' +
      '}\n',
  },
  {
    title: 'Person customer inheritance example',
    query:
      'CREATE GRAPH TYPE Test LOOSE {\n' +
      '  (CustomerType: Person & Customer\n' +
      '    {name STRING, OPTIONAL since DATE})\n' +
      '}\n',
  },
  {
    title: 'Imports example',
    query:
      'CREATE GRAPH TYPE fraudGraphType STRICT IMPORTS socialGraphType {}\n\n',
  },
  {
    title: 'Edge type example',
    query:
      'CREATE EDGE TYPE\n' +
      '  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType)\n',
  },
  {
    title: 'Abstract node example',
    query: 'CREATE NODE TYPE ABSTRACT (salariedType { salary INT })\n\n',
  },
  {
    title: 'Node type example',
    query:
      'CREATE NODE TYPE (personType: Person {name STRING , OPTIONAL birthday DATE})\n\n',
  },
];
