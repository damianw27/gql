parser grammar PGSParser;

options {
	tokenVocab = PGSLexer;
}

root: createType* EOF;

createType: createNodeType | createEdgeType | createGraphType;

createNodeType: CREATE NODE TYPE (ABSTRACT)? nodeType;

createEdgeType: CREATE EDGE TYPE (ABSTRACT)? edgeType;

createGraphType: CREATE GRAPH TYPE graphType;

graphType: typeName typeForm? graphTypeDefinition;

typeForm: STRICT | LOOSE;

graphTypeDefinition: (IMPORTS typeName)? LBRACE elementTypes? RBRACE;

elementTypes: elementType (COMMA elementType)*;

elementType: typeName | nodeType | edgeType;

nodeType: LPAREN typeName labelPropertySpec RPAREN;

edgeType: endpointType DASH middleType DASH ARROW endpointType;

middleType: LBRACK typeName labelPropertySpec RBRACK;

endpointType: LPAREN labelPropertySpec RPAREN;

labelPropertySpec: (COLON labelSpec)? OPEN? propertySpec?;

labelSpec: LPAREN labelSpec RPAREN
         | LBRACK labelSpec RBRACK
         | labelSpec BAR labelSpec
         | labelSpec AMPERSAND labelSpec
         | labelSpec QUESTION
         | labelName
         | typeName;

propertySpec: LBRACE properties (COMMA OPEN)? RBRACE
             | LBRACE OPEN? RBRACE;

properties: property (COMMA property)*;

property: (OPTIONAL)? key propertyType?;

propertyType: StringLiteral;

key: StringLiteral;

labelName: StringLiteral;

typeName: StringLiteral;
