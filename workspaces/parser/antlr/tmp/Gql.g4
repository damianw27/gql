grammar Gql;

options {
	language = JavaScript;
}

gqlProgram:
  programActivity WS? sessionCloseCommand? EOF
  | sessionCloseCommand EOF;

programActivity:
  sessionActivity
  | transactionActivity;

sessionActivity: (sessionActivityCommand)+;

sessionActivityCommand:
  sessionSetCommand
  | sessionResetCommand
  | sessionRemoveCommand
  | sessionClearCommand;

transactionActivity:
	startTransactionCommand WS? (procedureBody WS? endTransactionCommand?)?
	| procedureBody WS? endTransactionCommand?
	| endTransactionCommand;

sessionSetCommand: SESSION WS SET WS? (
  sessionSetSchemaClause
  | sessionSetGraphClause
  | sessionSetTimeZoneClause
  | sessionSetParameterClause
);

sessionSetSchemaClause: SCHEMA WS schemaReference;

sessionSetGraphClause: graphResolutionExpression;

sessionSetTimeZoneClause: TIME WS ZONE WS stringValueExpression;

sessionSetParameterClause: sessionParameterFlag? WS? sessionParameter WS? (IF_NOT_EXISTS)?;

sessionParameterFlag: MUTABLE | FINAL;

sessionParameter: PARAMETER? WS? parameterDefinition;

sessionResetCommand: SESSION? WS? RESET WS sessionResetArguments;

sessionResetArguments:
  ALL? WS? (PARAMETERS | CHARACTERISTICS)
  | SCHEMA
  | PROPERTY? WS? GRAPH
  | TIME_ZONE
  | PARAMETER WS parameterName;

sessionRemoveCommand: SESSION? WS REMOVE identifier IF_EXISTS?;

sessionClearCommand: SESSION? WS CLEAR;

sessionCloseCommand: SESSION? WS CLOSE;

startTransactionCommand: START_TRANSACTION WS transactionCharacteristics;

endTransactionCommand:
  COMMIT
  | ROLLBACK;

transactionCharacteristics: transactionMode WS? (COMMA WS transactionMode)*;

transactionMode:
  transactionAccessMode
	| implementationDefinedAccessMode;

transactionAccessMode:
  READ_ONLY
  | READ_WRITE;

implementationDefinedAccessMode:;
// See the Syntax Rules;

nestedProcedureSpecification: LEFT_BRACE WS? procedureBody WS? RIGHT_BRACE;

nestedDataModifyingProcedureSpecification: LEFT_BRACE WS? procedureBody WS? RIGHT_BRACE;

nestedQuerySpecification: LEFT_BRACE WS? procedureBody WS? RIGHT_BRACE;

nestedFunctionSpecification: LEFT_BRACE WS? procedureBody WS? RIGHT_BRACE;

procedureBody: staticVariableDefinitionBlock? WS? bindingVariableDefinitionBlock? WS? statementBlock;

staticVariableDefinitionBlock: staticVariableDefinition+;

statementBlock: statement WS? thenStatement?;

thenStatement: THEN WS? (yieldClause)? WS statement;

staticVariableDefinition:
	procedureVariableDefinition
	| queryVariableDefinition
	| functionVariableDefinition;

procedureVariableDefinition: (CATALOG)? WS? PROCEDURE WS identifier WS ofTypeSignature WS procedureInitializer;

procedureInitializer:
	AS_OR_EQUALS WS procedureReference
	| AS? WS? nestedProcedureSpecification
	| COLON catalogProcedureReference;

queryVariableDefinition:
	QUERY WS identifier WS ofTypeSignature WS queryInitializer;

queryInitializer:
	AS_OR_EQUALS WS (queryResolutionExpression | qualifiedQueryName)
	| AS? WS? nestedQuerySpecification
	| COLON WS catalogQueryReference;

functionVariableDefinition: FUNCTION WS regularIdentifier WS ofTypeSignature WS functionInitializer;

functionInitializer:
  (AS | EQUALS) WS (functionResolutionExpression | qualifiedFunctionName)
	| nestedFunctionSpecification
	| COLON WS catalogFunctionReference;

compactVariableDeclarationList: compactVariableDeclaration WS? (COMMA WS compactVariableDeclaration)*;

compactVariableDeclaration:
	bindingVariableDeclaration
	| regularIdentifier;

bindingVariableDeclaration:
	graphVariableDeclaration
	| bindingTableVariableDeclaration
	| valueVariableDeclaration;

compactVariableDefinitionList:
	compactVariableDefinition (COMMA compactVariableDefinition)*;

compactVariableDefinition:
	compactValueVariableDefinition
	| bindingVariableDefinition;

compactValueVariableDefinitionList: compactValueVariableDefinition (COMMA compactValueVariableDefinition)*;

compactValueVariableDefinition: regularIdentifier EQUALS valueExpression;

bindingVariableDefinitionBlock: bindingVariableDefinition+;

bindingVariableDefinition:
	graphVariableDefinition
	| bindingTableVariableDefinition
	| valueVariableDefinition;

parameterDefinition:
	graphParameterDefinition
	| bindingTableParameterDefinition
	| valueParameterDefinition;

graphVariableDeclaration: PROPERTY? WS? GRAPH WS regularIdentifier WS ofGraphType;

graphVariableDefinition: PROPERTY? WS? GRAPH WS regularIdentifier WS ofGraphType WS graphInitializer;

graphParameterDefinition: PROPERTY? WS? GRAPH WS parameterName WS? IF_NOT_EXISTS? WS ofGraphType WS graphInitializer;

graphInitializer:
  (AS | EQUALS) WS graphExpression
	| nestedGraphQuerySpecification
	| COLON WS catalogGraphReference;

bindingTableVariableDeclaration: BINDING? WS? TABLE WS regularIdentifier WS ofBindingTableType;

bindingTableVariableDefinition: BINDING? WS? TABLE WS regularIdentifier WS ofBindingTableType WS bindingTableInitializer;

bindingTableParameterDefinition: BINDING? WS? TABLE WS identifier WS? IF_NOT_EXISTS? WS ofBindingTableType WS bindingTableInitializer;

bindingTableInitializer:
  (AS | EQUALS) WS bindingTableReference
	| nestedQuerySpecification
	| COLON WS catalogBindingTableReference;

valueVariableDeclaration: VALUE WS regularIdentifier WS? ofValueType?;

valueVariableDefinition: VALUE WS regularIdentifier WS? ofValueType? WS valueInitializer;

valueParameterDefinition: VALUE WS identifier WS? IF_NOT_EXISTS? WS? ofValueType? WS valueInitializer;

valueInitializer:
  (AS | EQUALS) WS valueExpression
	| nestedFunctionSpecification
	| COLON WS catalogObjectReference;

primaryResultObjectExpression:
	graphExpression
	| bindingTableReference;

graphExpression:
	copyGraphExpression
	| graphSpecification
	| graphReference;

copyGraphExpression: COPY WS OF WS graphExpression;

graphTypeExpression:
	copyGraphTypeExpression
	| likeGraphExpression
	| graphTypeSpecification
	| graphTypeReference;

asGraphType:
	AS_OR_EQUALS WS graphTypeExpression
	| likeGraphExpressionShorthand
	| AS WS nestedGraphTypeSpecification;

copyGraphTypeExpression: COPY WS OF WS graphTypeReference;

likeGraphExpression: PROPERTY WS GRAPH WS TYPE WS likeGraphExpressionShorthand;

ofGraphType:
	ofTypePrefix WS graphTypeExpression
	| likeGraphExpressionShorthand
	| ofTypePrefix WS nestedGraphTypeSpecification;

likeGraphExpressionShorthand: LIKE WS graphExpression;

ofBindingTableType:
	ofTypePrefix WS bindingTableTypeExpression
	| likeBindingTableShorthand;

ofTypePrefix:
  DOUBLE_COLON
  | OF;

bindingTableTypeExpression:
	bindingTableType
	| likeBindingTableType;

bindingTableType: BINDING? WS? TABLE WS recordValueType;

likeBindingTableType: BINDING? WS? TABLE WS likeBindingTableShorthand;

likeBindingTableShorthand: LIKE WS bindingTableReference;

statement:
	atSchemaClause? WS? (
		linearCatalogModifyingStatement
		| dataModifyingStatement
		| queryStatement
	);

dataModifyingStatement:
	conditionalDataModifyingStatement
	| linearDataModifyingStatement;

queryStatement:
	compositeQueryStatement
	| conditionalQueryStatement;

callProcedureStatement: statementMode WS CALL WS procedureCall;

statementMode:
  OPTIONAL
  | MANDATORY;

simpleCatalogModifyingStatement:
	primitiveCatalogModifyingStatement
	| callCatalogModifyingProcedureStatement
	| createSchemaStatement
	| dropSchemaStatement;

primitiveCatalogModifyingStatement:
	createGraphStatement
	| createGraphTypeStatement
	| createProcedureStatement
	| createQueryStatement
	| createFunctionStatement
	| dropGraphStatement
	| dropGraphTypeStatement
	| dropProcedureStatement
	| dropQueryStatement
	| dropFunctionStatement;

simpleDataAccessingStatement:
	simpleQueryStatement
	| simpleDataModifyingStatement;

simpleDataModifyingStatement:
	primitiveDataModifyingStatement
	| doStatement
	| callProcedureStatement;

primitiveDataModifyingStatement:
	insertStatement
	| mergeStatement
	| setStatement
	| removeStatement
	| deleteStatement;

simpleQueryStatement:
	simpleDataTransformingStatement
	| simpleDataReadingStatement;

simpleDataReadingStatement:
  matchStatement
  | callQueryStatement;

simpleDataTransformingStatement:
	primitiveDataTransformingStatement
	| callFunctionStatement;

primitiveDataTransformingStatement:
	optionalStatement
	| mandatoryStatement
	| letStatement
	| forStatement
	| aggregateStatement
	| filterStatement
	| orderByAndPageStatement;

linearCatalogModifyingStatement: (simpleCatalogModifyingStatement)+;

createSchemaStatement: CREATE WS SCHEMA WS catalogSchemaParentAndName WS? IF_NOT_EXISTS?;

dropSchemaStatement: DROP WS SCHEMA WS catalogSchemaParentAndName WS? IF_EXISTS?;

createGraphStatement: (CREATE | OR WS REPLACE) WS? PROPERTY? WS GRAPH WS catalogGraphParentAndName WS? IF_NOT_EXISTS? WS (ofGraphType | graphSource)?;

graphSource: AS WS copyGraphExpression;

graphSpecification: PROPERTY? WS? GRAPH WS (nestedGraphQuerySpecification | nestedAmbientDataModifyingProcedureSpecification);

nestedGraphQuerySpecification: nestedQuerySpecification;

nestedAmbientDataModifyingProcedureSpecification: nestedDataModifyingProcedureSpecification;

dropGraphStatement: DROP WS GRAPH WS catalogGraphParentAndName WS? IF_EXISTS?;

createGraphTypeStatement: (CREATE | OR WS REPLACE) WS? PROPERTY? WS GRAPH WS TYPE WS catalogGraphTypeParentAndName WS? IF_NOT_EXISTS? WS graphTypeInitializer;

graphTypeInitializer:
	asGraphType
	| COLON WS catalogGraphTypeReference;

graphTypeSpecification: PROPERTY? WS? GRAPH WS TYPE WS nestedGraphTypeSpecification;

nestedGraphTypeSpecification: LEFT_BRACE WS graphTypeSpecificationBody WS RIGHT_BRACE;

graphTypeSpecificationBody: elementTypeDefinitionList;

elementTypeDefinitionList: elementTypeDefinition WS? (COMMA WS elementTypeDefinition)*;

elementTypeDefinition:
  nodeTypeDefinition
  | edgeTypeDefinition;

nodeTypeDefinition:
	LEFT_PAREN WS? identifier? WS? nodeTypeFiller? RIGHT_PAREN
	| nodeSynonym WS TYPE WS identifier WS nodeTypeFiller;

nodeTypeFiller:
	nodeTypeLabelSetDefinition
	| nodeTypePropertyTypeSetDefinition
	| nodeTypeLabelSetDefinition WS nodeTypePropertyTypeSetDefinition;

nodeTypeLabelSetDefinition: labelSetDefinition;

nodeTypePropertyTypeSetDefinition: propertyTypeSetDefinition;

edgeTypeDefinition:
	fullEdgeTypePattern
	| abbreviatedEdgeTypePattern
	| edgeKind WS edgeSynonym WS TYPE WS identifier WS edgeTypeFiller WS endpointDefinition;

edgeTypeFiller:
	edgeTypeLabelSetDefinition
	| edgeTypePropertyTypeSetDefinition
	| edgeTypeLabelSetDefinition WS edgeTypePropertyTypeSetDefinition;

edgeTypeLabelSetDefinition: labelSetDefinition;

edgeTypePropertyTypeSetDefinition: propertyTypeSetDefinition;

fullEdgeTypePattern:
	fullEdgeTypePatternPointingRight
	| fullEdgeTypePatternPointingLeft
	| fullEdgeTypePatternAnyDirection;

fullEdgeTypePatternPointingRight:
	sourceNodeTypeReference WS arcTypePointingRight WS destinationNodeTypeReference;

fullEdgeTypePatternPointingLeft:
	destinationNodeTypeReference WS arcTypePointingLeft WS sourceNodeTypeReference;

fullEdgeTypePatternAnyDirection:
	sourceNodeTypeReference WS arcTypeAnyDirection WS destinationNodeTypeReference;

arcTypePointingRight:
	LEFT_ARROW_MIUNUS WS? arcTypeFiller WS? MINUS_RIGHT_ARROW;

arcTypePointingLeft:
	LEFT_ARROW_MIUNUS WS? arcTypeFiller WS? MINUS_RIGHT_ARROW;

arcTypeAnyDirection:
	TILDE_LEFT_BRACKET WS? arcTypeFiller WS? RIGHT_ARROW_TILDE;

arcTypeFiller: identifier? WS? edgeTypeFiller?;

abbreviatedEdgeTypePattern:
	abbreviatedEdgeTypePatternPointingRight
	| abbreviatedEdgeTypePatternPointingLeft
	| abbreviatedEdgeTypePatternAnyDirection;

abbreviatedEdgeTypePatternPointingRight:
	sourceNodeTypeReference WS? MINUS_RIGHT_ARROW WS? destinationNodeTypeReference;

abbreviatedEdgeTypePatternPointingLeft:
	destinationNodeTypeReference WS? LEFT_ARROW_MIUNUS WS? sourceNodeTypeReference;

abbreviatedEdgeTypePatternAnyDirection:
	sourceNodeTypeReference WS? TILDE WS? destinationNodeTypeReference;

sourceNodeTypeReference:
	LEFT_PAREN identifier RIGHT_PAREN
	| LEFT_PAREN nodeTypeFiller? RIGHT_PAREN;

destinationNodeTypeReference:
	LEFT_PAREN WS? identifier WS? RIGHT_PAREN
	| LEFT_PAREN WS? nodeTypeFiller? WS? RIGHT_PAREN;

edgeKind:
  DIRECTED
  | UNDIRECTED;

endpointDefinition: CONNECTING WS endpointPairDefinition;

endpointPairDefinition:
	endpointPairDefinitionPointingRight
	| endpointPairDefinitionPointingLeft
	| endpointPairDefinitionAnyDirection
	| abbreviatedEdgeTypePattern;

endpointPairDefinitionPointingRight:
	LEFT_PAREN WS? identifier WS connectorPointingRight WS identifier WS? RIGHT_PAREN;

endpointPairDefinitionPointingLeft:
	LEFT_PAREN WS? identifier WS? LEFT_ARROW_MIUNUS WS? identifier WS? RIGHT_PAREN;

endpointPairDefinitionAnyDirection:
	LEFT_PAREN WS? identifier WS connectorAnyDirection WS identifier WS? RIGHT_PAREN;

connectorPointingRight:
  TO
  | MINUS_RIGHT_ARROW;

connectorAnyDirection:
  TO
  | TILDE;

labelSetDefinition:
	LABEL WS identifier
	| LABELS WS labelExpression
	| isLabelExpression;

propertyTypeSetDefinition: LEFT_BRACE WS? propertyTypeDefinitionList? WS? RIGHT_BRACE;

propertyTypeDefinitionList: propertyTypeDefinition WS? (COMMA WS propertyTypeDefinition)*;

propertyTypeDefinition: identifier WS identifier;

dropGraphTypeStatement: DROP WS? PROPERTY? WS GRAPH WS TYPE WS catalogGraphTypeParentAndName WS? IF_EXISTS?;

createProcedureStatement: (CREATE | OR WS REPLACE) WS PROCEDURE WS catalogProcedureParentAndName WS ofTypeSignature WS? IF_NOT_EXISTS? WS procedureInitializer;

dropProcedureStatement: DROP WS PROCEDURE WS catalogProcedureParentAndName WS? IF_EXISTS?;

createQueryStatement: (CREATE | OR WS REPLACE) WS QUERY WS catalogQueryParentAndName WS ofTypeSignature WS? IF_NOT_EXISTS? WS? queryInitializer;

dropQueryStatement: DROP WS QUERY WS catalogQueryParentAndName WS? IF_EXISTS?;

createFunctionStatement: (CREATE | OR WS REPLACE) WS FUNCTION WS catalogFunctionParentAndName WS ofTypeSignature WS? IF_NOT_EXISTS? WS functionInitializer;

dropFunctionStatement: DROP WS FUNCTION WS catalogFunctionParentAndName WS? IF_EXISTS?;

callCatalogModifyingProcedureStatement: callProcedureStatement;

linearDataModifyingStatement:
	focusedLinearDataModifyingStatement
	| ambientLinearDataModifyingStatement;

focusedLinearDataModifyingStatement: useGraphClause focusedLinearDataModifyingStatementBody+;

focusedLinearDataModifyingStatementBody:
	simpleLinearQueryStatement (useGraphClause simpleLinearQueryStatement)* simpleDataModifyingStatement simpleDataAccessingStatement (useGraphClause simpleDataAccessingStatement)* primitiveResultStatement
	| nestedDataModifyingProcedureSpecification;

ambientLinearDataModifyingStatement:
	simpleLinearQueryStatement simpleDataModifyingStatement simpleDataAccessingStatement primitiveResultStatement
	| nestedDataModifyingProcedureSpecification;

conditionalDataModifyingStatement: whenThenLinearDataModifyingStatementBranch+ elseLinearDataModifyingStatementBranch?;

whenThenLinearDataModifyingStatementBranch:
	whenClause THEN linearDataModifyingStatement
	| whenClause nestedDataModifyingProcedureSpecification;

elseLinearDataModifyingStatementBranch: ELSE linearDataModifyingStatement;

whenClause: WHEN searchCondition;

doStatement: DO nestedDataModifyingProcedureSpecification;

insertStatement:
	INSERT simpleGraphPattern
	| OPTIONAL INSERT simpleGraphPattern whenClause?;

mergeStatement: MERGE simpleGraphPattern;

setStatement: SET setItemList whenClause?;

setItemList: setItem (COMMA setItem)*;

setItem:
  setPropertyItem
  | setAllPropertiesItem
  | labelSetExpression;

setPropertyItem: identifier PERIOD identifier EQUALS valueExpression;

setAllPropertiesItem: identifier EQUALS valueExpression;

labelSetExpression: AMPERSAND identifier+ (AMPERSAND identifier+)*;

removeStatement: REMOVE removeItemList whenClause?;

removeItemList: removeItem (COMMA removeItem)*;

removeItem:
  removePropertyItem
  | removeLabelItem;

removePropertyItem: identifier PERIOD identifier;

removeLabelItem: identifier COLON labelSetExpression;

deleteStatement: DETACH? DELETE deleteItemList whenClause?;

deleteItemList: valueExpression (COMMA valueExpression)*;

compositeQueryStatement: compositeQueryExpression;

conditionalQueryStatement: whenThenLinearQueryBranch+ (elseLinearQueryBranch)?;

whenThenLinearQueryBranch:
	whenClause THEN linearQueryStatement
	| whenClause nestedQuerySpecification;

elseLinearQueryBranch: ELSE linearQueryStatement;

compositeQueryExpression:
	compositeQueryExpression WS queryConjunction WS linearQueryStatement
	| linearQueryStatement;

queryConjunction:
  setOperator
  | OTHERWISE;

setOperator:
	UNION WS? (setQuantifier)?
	| EXCEPT WS? (setQuantifier)?
	| INTERSECT WS? (setQuantifier)?;

linearQueryStatement:
	focusedLinearQueryStatement
	| ambientLinearQueryStatement;

focusedLinearQueryStatement:
	fromGraphClause WS focusedLinearQueryStatementBody
	| selectStatement;

ambientLinearQueryStatement:
	simpleLinearQueryStatement WS simpleDataAccessingStatement WS simpleDataAccessingStatement WS primitiveResultStatement
	| nestedQuerySpecification;

focusedLinearQueryStatementBody:
  (simpleLinearQueryStatement WS (fromGraphClause WS? simpleLinearQueryStatement)*) WS primitiveResultStatement
	| nestedQuerySpecification;

simpleLinearQueryStatement: simpleQueryStatement;

matchStatement: statementMode? WS? MATCH WS? separator? WS graphPattern;

callQueryStatement: callProcedureStatement;

mandatoryStatement: MANDATORY WS procedureCall;

optionalStatement: OPTIONAL WS procedureCall;

filterStatement: FILTER WS (whereClause | searchCondition);

letStatement:
	LET WS compactVariableDefinitionList
	| statementMode WS LET WS compactVariableDefinitionList WS whereClause;

aggregateStatement:
	AGGREGATE WS compactValueVariableDefinitionList WS whereClause;

forStatement: statementMode? WS? FOR WS forItemList WS? forOrdinalityOrIndex? WS? whereClause?;

forItemList: forItem WS? (AND WS forItem)*;

forItem: forItemAlias WS collectionValueExpression;

forItemAlias: identifier WS IN;

forOrdinalityOrIndex: WITH WS (ORDINALITY | INDEX) WS? (identifier)?;

orderByAndPageStatement:
  orderByClause WS? offsetClause? WS? limitClause?
	| offsetClause WS? limitClause?
	| limitClause;

callFunctionStatement: callProcedureStatement;

primitiveResultStatement:
  returnStatement WS? orderByAndPageStatement?
	| projectStatement
	| END;

returnStatement: RETURN WS returnStatementBody;

returnStatementBody: setQuantifier? WS? (ASTERISK | returnItemList) WS? groupByClause?;

returnItemList: returnItem WS (COMMA WS? returnItem)*;

returnItem: valueExpression WS? returnItemAlias?;

returnItemAlias: AS WS identifier;

selectStatement: SELECT WS? setQuantifier? WS selectItemList WS selectStatementBody WS? whereClause? WS? groupByClause? WS? havingClause? WS? orderByClause? WS? (offsetClause WS? limitClause?)?;

selectItemList: selectItem (COMMA selectItem)*;

selectItem: (valueExpression selectItemAlias?);

selectItemAlias: AS identifier;

havingClause: HAVING searchCondition;

selectStatementBody:
  FROM selectGraphMatchList
	| selectQuerySpecification;

selectGraphMatchList: selectGraphMatch (COMMA selectGraphMatch)*;

selectGraphMatch: graphExpression matchStatement;

selectQuerySpecification:
	FROM nestedQuerySpecification
	| fromGraphClause nestedQuerySpecification;

projectStatement: PROJECT valueExpression;

fromGraphClause: FROM graphExpression;

useGraphClause: USE graphExpression;

atSchemaClause: AT schemaReference;

ofTypeSignature: (ofTypePrefix typeSignature)?;

typeSignature: parenthesizedFormalParameterList (ofTypePrefix procedureResultType)?;

parenthesizedFormalParameterList: LEFT_PAREN formalParameterList RIGHT_PAREN;

formalParameterList:
  (mandatoryFormalParameterList (COMMA optionalFormalParameterList)?)?
	| optionalFormalParameterList;

mandatoryFormalParameterList: formalParameterDeclarationList;

optionalFormalParameterList: OPTIONAL formalParameterDefinitionList;

formalParameterDeclarationList: formalParameterDeclaration (COMMA formalParameterDeclaration)*;

formalParameterDeclaration: parameterCardinality compactVariableDeclaration;

formalParameterDefinitionList: formalParameterDefinition (COMMA formalParameterDefinition)*;

formalParameterDefinition: parameterCardinality compactVariableDefinition;

parameterCardinality:
  SINGLE
  | MULTI
  | MULTIPLE;

procedureResultType: valueType;

graphPattern: pathPatternList (keepClause graphPatternWhereClause? yieldClause?)?;

pathPatternList: pathPattern separator? (COMMA separator? pathPattern)*;

pathPattern: (regularIdentifier EQUALS)? pathPatternPrefix pathPatternExpression;

keepClause: KEEP pathPatternPrefix;

graphPatternWhereClause: WHERE searchCondition;

pathPatternExpression:
	pathTerm
	| pathMultisetAlternation
	| pathPatternUnion;

pathMultisetAlternation: pathTerm MULTISET_ALT_OPERATOR pathTerm (MULTISET_ALT_OPERATOR pathTerm)*;

pathPatternUnion: pathTerm VERTICAL_BAR pathTerm (VERTICAL_BAR pathTerm)*;

pathTerm: pathFactor | pathTerm pathFactor;

pathFactor:
	pathPrimary
	| quantifiedPathPrimary
	| questionedPathPrimary;

quantifiedPathPrimary: pathPrimary graphPatternQuantifier;

questionedPathPrimary: pathPrimary QUESTION_MARK;

pathPrimary:
	elementPattern
	| parenthesizedPathPatternExpression
	| simplifiedPathPatternExpression;

elementPattern:
  nodePattern
  | edgePattern;

nodePattern: LEFT_PAREN elementPatternFiller RIGHT_PAREN;

elementPatternFiller: regularIdentifier? isLabelExpression? elementPatternPredicate? elementPatternCostClause?;

isLabelExpression: (IS | COLON) labelExpression;

elementPatternPredicate:
	elementPatternWhereClause
	| elementPropertySpecification;

elementPatternWhereClause: WHERE searchCondition;

elementPropertySpecification: LEFT_BRACE propertyKeyValuePairList RIGHT_BRACE;

propertyKeyValuePairList: propertyKeyValuePair (COMMA propertyKeyValuePair)*;

propertyKeyValuePair: identifier COLON valueExpression;

elementPatternCostClause: costClause;

costClause: COST valueExpression (DEFAULT valueExpression)?;

edgePattern: fullEdgePattern | abbreviatedEdgePattern;

fullEdgePattern:
	fullEdgePointingLeft
	| fullEdgeUndirected
	| fullEdgePointingRight
	| fullEdgeLeftOrUndirected
	| fullEdgeUndirectedOrRight
	| fullEdgeLeftOrRight
	| fullEdgeAnyDirection;

fullEdgePointingLeft: LEFT_ARROW_RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

fullEdgeUndirected: TILDE_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgePointingRight: MINUS_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_RIGHT_ARROW;

fullEdgeLeftOrUndirected: LEFT_ARROW_TILDE RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgeUndirectedOrRight: TILDE RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET TILDE_RIGHT_ARROW;

fullEdgeLeftOrRight: LEFT_ANGLE_BRACKET LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_RIGHT_ARROW;

fullEdgeAnyDirection: MINUS_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

abbreviatedEdgePattern:
	LEFT_ANGLE_BRACKET
	| TILDE
	| RIGHT_ANGLE_BRACKET
	| LEFT_ARROW_TILDE
	| TILDE_RIGHT_ARROW
	| NOT_EQUALS
	| MINUS;

graphPatternQuantifier:
	ASTERISK
	| PLUS
	| fixedQuantifier
	| generalQuantifier;

fixedQuantifier: LEFT_BRACE unsignedInteger RIGHT_BRACE;

generalQuantifier: LEFT_BRACE unsignedInteger? COMMA unsignedInteger? RIGHT_BRACE;

parenthesizedPathPatternExpression:
	LEFT_PAREN subpathVariableDeclaration? pathModePrefix? pathPatternExpression? parenthesizedPathPatternWhereClause? costClause? RIGHT_PAREN
	| LEFT_BRACKET subpathVariableDeclaration? pathModePrefix? pathPatternExpression? parenthesizedPathPatternWhereClause? costClause? RIGHT_BRACKET;

subpathVariableDeclaration: regularIdentifier EQUALS;

parenthesizedPathPatternWhereClause: WHERE searchCondition;

pathPatternPrefix:
  pathModePrefix
  | pathSearchPrefix;

pathModePrefix: PATH_MODE PATH?;

pathSearchPrefix:
	allPathSearch
	| anyPathSearch
	| shortestPathSearch;

allPathSearch: ALL PATH_MODE? PATH?;

anyPathSearch: ANY (unsignedIntegerSpecification)? PATH_MODE? PATH?;

shortestPathSearch:
	allShortestPathSearch
	| anyShortestPathSearch
	| countedShortestPathSearch
	| countedShortestGroupSearch;

allShortestPathSearch: ALL SHORTEST PATH_MODE? (PATH | PATHS)?;

anyShortestPathSearch: ANY SHORTEST PATH_MODE? (PATH | PATHS)?;

countedShortestPathSearch: SHORTEST unsignedIntegerSpecification PATH_MODE? PATH?;

countedShortestGroupSearch: SHORTEST unsignedIntegerSpecification PATH_MODE? PATH? {};

simpleGraphPattern: simplePathPatternList;

simplePathPatternList: simplePathPattern (COMMA simplePathPattern)*;

simplePathPattern: pathPatternExpression;

labelExpression:
	labelExpression VERTICAL_BAR labelTerm
	| labelTerm;

labelTerm:
  labelTerm AMPERSAND labelFactor
  | labelFactor;

labelFactor:
	identifier
	| PERCENT
	| parenthesizedLabelExpression;

parenthesizedLabelExpression:
	LEFT_PAREN labelExpression RIGHT_PAREN
	| LEFT_BRACKET labelExpression RIGHT_BRACKET;

simplifiedPathPatternExpression:
	simplifiedDefaultingLeft
	| simplifiedDefaultingUndirected
	| simplifiedDefaultingRight
	| simplifiedDefaultingLeftOrUndirected
	| simplifiedDefaultingUndirectedOrRight
	| simplifiedDefaultingLeftOrRight
	| simplifiedDefaultingAnyDirection;

simplifiedDefaultingLeft: LEFT_ARROW_MIUNUS simplifiedContents MINUS_RIGHT_ARROW;

simplifiedDefaultingUndirected: TILDE_SLASH simplifiedContents SLASH_TILDE;

simplifiedDefaultingRight: MINUS SOLIDUS simplifiedContents SOLIDUS MINUS;

simplifiedDefaultingLeftOrUndirected: LEFT_ARROW_TILDE SOLIDUS simplifiedContents SLASH_TILDE;

simplifiedDefaultingUndirectedOrRight: TILDE_SLASH simplifiedContents SLASH_TILDE MINUS;

simplifiedDefaultingLeftOrRight: LEFT_ARROW_TILDE SOLIDUS simplifiedContents SLASH_MINUS;

simplifiedDefaultingAnyDirection: MINUS SOLIDUS simplifiedContents MINUS_RIGHT_ARROW;

simplifiedContents:
	simplifiedTerm
	| simplifiedPathUnion
	| simplifiedMultisetAlternation;

simplifiedPathUnion: simplifiedTerm (VERTICAL_BAR simplifiedTerm)*;

simplifiedMultisetAlternation: simplifiedTerm (MULTISET_ALT_OPERATOR simplifiedTerm)*;

simplifiedTerm:
	simplifiedTerm simplifiedFactorLow
	| simplifiedFactorLow;

simplifiedFactorLow:
	simplifiedFactorHigh
	| simplifiedFactorLow AMPERSAND simplifiedFactorHigh;

simplifiedFactorHigh:
	simplifiedTertiary
	| simplifiedQuantified
	| simplifiedQuestioned;

simplifiedQuantified: simplifiedTertiary graphPatternQuantifier;

simplifiedQuestioned: simplifiedTertiary QUESTION_MARK;

simplifiedTertiary:
	simplifiedDirectionOverride
	| simplifiedSecondary;

simplifiedDirectionOverride:
	simplifiedOverrideLeft
	| simplifiedOverrideUndirected
	| simplifiedOverrideRight
	| simplifiedOverrideLeftOrUndirected
	| simplifiedOverrideUndirectedOrRight
	| simplifiedOverrideLeftOrRight
	| simplifiedOverrideAnyDirection;

simplifiedOverrideLeft: LEFT_ARROW_MIUNUS simplifiedSecondary MINUS_RIGHT_ARROW;

simplifiedOverrideUndirected: TILDE_SLASH simplifiedSecondary SLASH_TILDE;

simplifiedOverrideRight: MINUS SOLIDUS simplifiedSecondary SLASH_MINUS;

simplifiedOverrideLeftOrUndirected: LEFT_ARROW_TILDE SOLIDUS simplifiedSecondary SLASH_TILDE;

simplifiedOverrideUndirectedOrRight: TILDE_SLASH simplifiedSecondary SLASH_TILDE MINUS;

simplifiedOverrideLeftOrRight: LEFT_ARROW_MIUNUS SOLIDUS simplifiedSecondary SLASH_MINUS;

simplifiedOverrideAnyDirection: MINUS SOLIDUS simplifiedSecondary MINUS_RIGHT_ARROW;

simplifiedSecondary: simplifiedPrimary | simplifiedNegation;

simplifiedNegation: EXCLAMATION simplifiedPrimary;

simplifiedPrimary:
	identifier
	| LEFT_PAREN simplifiedContents RIGHT_PAREN
	| LEFT_BRACKET simplifiedContents RIGHT_BRACKET;

whereClause: WHERE searchCondition;

procedureCall:
	nestedProcedureSpecification
	| namedProcedureCall;

namedProcedureCall: procedureReference LEFT_PAREN procedureArgumentList RIGHT_PAREN yieldClause;

procedureArgumentList: procedureArgument (COMMA procedureArgument)*;

procedureArgument: valueExpression;

yieldClause: YIELD yieldItemList;

yieldItemList: yieldItem (COMMA yieldItem)*;

yieldItem: identifier AS regularIdentifier;

groupByClause: GROUP BY groupingElementList;

groupingElementList:
	identifier (COMMA identifier)*
	| emptyGroupingSet;

emptyGroupingSet: LEFT_PAREN RIGHT_PAREN;

orderByClause: ORDER BY sortSpecificationList;

aggregateFunction:
	COUNT LEFT_PAREN ASTERISK RIGHT_PAREN
	| generalSetFunction
	| binarySetFunction;

generalSetFunction: generalSetFunctionType LEFT_PAREN setQuantifier valueExpression RIGHT_PAREN;

binarySetFunction: binarySetFunctionType LEFT_PAREN dependentValueExpression COMMA independentValueExpression RIGHT_PAREN;

generalSetFunctionType:
	AVG
	| COUNT
	| MAX
	| MIN
	| SUM
	| PRODUCT
	| COLLECT
	| ST_DEV
	| ST_DEV_P;

setQuantifier: DISTINCT | ALL;

binarySetFunctionType: PERCENTILE_CONT | PERCENTILE_DIST;

dependentValueExpression: setQuantifier numericValueExpression;

independentValueExpression: numericValueExpression;

sortSpecificationList: sortSpecification (COMMA sortSpecification)*;

sortSpecification: valueExpression (ASC | DESC) nullOrdering;

nullOrdering: NULLS FIRST | NULLS LAST;

limitClause: LIMIT unsignedIntegerSpecification;

offsetClause: (OFFSET | SSKIP) unsignedIntegerSpecification;

schemaReference:
	predefinedSchemaParameter
	| catalogSchemaParentAndName
	| externalObjectReference;

catalogSchemaParentAndName:
	LEFT_BRACKET absoluteUrlPath RIGHT_BRACKET DOUBLE_SOLIDUS identifier
	| urlPathParameter;

graphReference:
  graphResolutionExpression
  | localGraphReference;

localGraphReference: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

graphResolutionExpression: (LEFT_BRACKET RIGHT_BRACKET)? GRAPH catalogGraphReference;

catalogGraphReference:
	catalogGraphParentAndName
	| predefinedGraphParameter
	| externalObjectReference;

catalogGraphParentAndName:
	graphParentSpecification identifier
	| urlPathParameter;

graphParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

graphTypeReference:
	graphTypeResolutionExpression
	| qualifiedGraphTypeName;

graphTypeResolutionExpression: LEFT_BRACKET RIGHT_BRACKET GRAPH TYPE catalogGraphTypeReference;

catalogGraphTypeReference:
	catalogGraphTypeParentAndName
	| externalObjectReference;

catalogGraphTypeParentAndName:
	graphTypeParentSpecification identifier
	| urlPathParameter;

graphTypeParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

qualifiedGraphTypeName: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

bindingTableReference:
	bindingTableResolutionExpression
	| localBindingTableReference;

bindingTableResolutionExpression: LEFT_BRACKET RIGHT_BRACKET TABLE catalogBindingTableReference;

catalogBindingTableReference:
	catalogBindingTableParentAndName
	| predefinedTableParameter
	| externalObjectReference;

catalogBindingTableParentAndName:
	bindingTableParentSpecification identifier
	| urlPathParameter;

bindingTableParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

localBindingTableReference: qualifiedBindingTableName;

qualifiedBindingTableName: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

procedureReference:
	PROCEDURE catalogProcedureReference
	| localProcedureReference;

catalogProcedureReference:
	catalogProcedureParentAndName
	| externalObjectReference;

catalogProcedureParentAndName:
	procedureParentSpecification identifier
	| urlPathParameter;

procedureParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

localProcedureReference: qualifiedProcedureName;

qualifiedProcedureName: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

queryResolutionExpression: QUERY catalogQueryReference;

catalogQueryReference:
	catalogQueryParentAndName
	| externalObjectReference;

catalogQueryParentAndName:
	queryParentSpecification identifier
	| urlPathParameter;

queryParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

qualifiedQueryName: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

functionResolutionExpression: FUNCTION catalogFunctionReference;

catalogFunctionReference:
	catalogFunctionParentAndName
	| externalObjectReference;

catalogFunctionParentAndName:
	functionParentSpecification identifier
	| urlPathParameter;

functionParentSpecification: LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET;

qualifiedFunctionName: LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

catalogObjectReference: catalogUrlPath;

parentCatalogObjectReference: catalogObjectReference DOUBLE_SOLIDUS;

catalogUrlPath:
	absoluteUrlPath
	| relativeUrlPath
	| parameterizedUrlPath;

absoluteUrlPath: DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

relativeUrlPath:
	parentObjectRelativeUrlPath
	| simpleRelativeUrlPath
	| PERIOD;

parentObjectRelativeUrlPath: predefinedParentObjectParameter DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

simpleRelativeUrlPath:
	DOUBLE_PERIOD DOUBLE_SOLIDUS LEFT_BRACKET DOUBLE_PERIOD RIGHT_BRACKET DOUBLE_SOLIDUS
		LEFT_BRACKET simpleUrlPath RIGHT_BRACKET
	| simpleUrlPath;

parameterizedUrlPath: identifier DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

simpleUrlPath: identifier DOUBLE_SOLIDUS LEFT_BRACKET identifier RIGHT_BRACKET;

qualifiedObjectName: qualifiedNamePrefix identifier;

qualifiedNamePrefix: LEFT_BRACKET identifier PERIOD RIGHT_BRACKET;

urlPathParameter: identifier;

externalObjectReference: externalObjectUrl;

externalObjectUrl:;
// See the Syntax Rules.;

elementReference: regularIdentifier;

searchCondition: booleanValueExpression;

predicate:
	comparisonPredicate
	| existsPredicate
	| nullPredicate
	| normalizedPredicate
	| directedPredicate
	| labeledPredicate
	| sourceDestinationPredicate
	| allDifferentPredicate
	| samePredicate;

comparisonPredicate: nonParenthesizedValueExpressionPrimary comparisonPredicatePart2;

comparisonPredicatePart2: COMPARE_OPERATOR nonParenthesizedValueExpressionPrimary;

existsPredicate: EXISTS (LEFT_PAREN graphPattern RIGHT_PAREN | nestedQuerySpecification);

nullPredicate: valueExpressionPrimary nullPredicatePart2;

nullPredicatePart2: IS NOT? NULL;

normalizedPredicate: stringValueExpression normalizedPredicatePart2;

normalizedPredicatePart2: IS NOT? NORMAL_FORM? NORMALIZED;

directedPredicate: elementReference directedPredicatePart2;

directedPredicatePart2: IS? DIRECTED;

labeledPredicate: elementReference labeledPredicatePart2;

labeledPredicatePart2: IS? LABELED labelExpression;

sourceDestinationPredicate:
	elementReference sourcePredicatePart2
	| elementReference destinationPredicatePart2;

sourcePredicatePart2: IS NOT? SOURCE OF? elementReference;

destinationPredicatePart2: IS NOT? DESTINATION OF? elementReference;

allDifferentPredicate: ALL_DIFFERENT LEFT_PAREN elementReference COMMA elementReference (COMMA elementReference)* RIGHT_PAREN;

samePredicate: SAME LEFT_PAREN elementReference COMMA elementReference (COMMA elementReference)* RIGHT_PAREN;

valueSpecification:
  literal
  | parameterValueSpecification;

unsignedValueSpecification:
	unsignedLiteral
	| parameterValueSpecification;

unsignedIntegerSpecification:
  unsignedInteger
  | identifier;

parameterValueSpecification:
  identifier
  | predefinedParameter;

predefinedParameter:
	predefinedParentObjectParameter
	| predefinedTableParameter
	| CURRENT_USER;

predefinedParentObjectParameter:
	predefinedSchemaParameter
	| predefinedGraphParameter;

predefinedSchemaParameter:
  HOME_SCHEMA
  | CURRENT_SCHEMA;

predefinedGraphParameter:
	EMPTY_PROPERTY_GRAPH
	| EMPTY_GRAPH
	| HOME_PROPERTY_GRAPH
	| HOME_GRAPH
	| CURRENT_PROPERTY_GRAPH
	| CURRENT_GRAPH;

predefinedTableParameter:
	EMPTY_BINDING_TABLE
	| EMPTY_TABLE
	| UNIT_BINDING_TABLE
	| UNIT_TABLE;

valueExpression: untypedValueExpression (ofValueType)?;

untypedValueExpression:
	commonValueExpression
	| booleanValueExpression;

commonValueExpression:
	numericValueExpression
	| stringValueExpression
	| datetimeValueExpression
	| durationValueExpression
	| collectionValueExpression
	| mapValueExpression
	| valueExpressionPrimary
	| referenceValueExpression;

referenceValueExpression:
	primaryResultObjectExpression
	| graphElementPrimary;

collectionValueExpression:
	listValueExpression
	| multisetValueExpression
	| setValueExpression
	| orderedSetValueExpression;

setValueExpression: valueExpressionPrimary;

orderedSetValueExpression: valueExpressionPrimary;

mapValueExpression: valueExpressionPrimary;

booleanValueExpression:
	booleanTerm
	| booleanValueExpression OR booleanTerm
	| booleanValueExpression XOR booleanTerm;

booleanTerm:
  booleanFactor
  | booleanTerm AND booleanFactor;

booleanFactor: NOT? booleanTest;

booleanTest: booleanPrimary ((IS NOT? | EQUALS | NOT_EQUALS) TRUTH_VALUE)?;

booleanPrimary: predicate | booleanPredicand;

booleanPredicand:
	LEFT_PAREN booleanValueExpression RIGHT_PAREN
	| nonParenthesizedValueExpressionPrimary;

numericValueExpression:
	term
	| numericValueExpression PLUS term
	| numericValueExpression MINUS term;

term: factor | term ASTERISK factor | term SOLIDUS factor;

factor: (sign)? numericPrimary;

numericPrimary: valueExpressionPrimary | numericValueFunction;

valueExpressionPrimary:
	LEFT_PAREN valueExpression RIGHT_PAREN
	| nonParenthesizedValueExpressionPrimary;

nonParenthesizedValueExpressionPrimary:
	graphElementPrimary PERIOD identifier
	| identifier
	| parameterValueSpecification
	| unsignedValueSpecification
	| aggregateFunction
	| collectionValueConstructor
	| VALUE nestedQuerySpecification
	| caseExpression
	| castSpecification
	| multisetSetFunction
	| element_idFunction;

numericValueFunction:
	lengthExpression
	| absoluteValueExpression
	| modulusExpression
	| trigonometricFunction
	| generalLogarithmFunction
	| commonLogarithm
	| naturalLogarithm
	| exponentialFunction
	| powerFunction
	| squareRoot
	| floorFunction
	| ceilingFunction
	| inDegreeFunction
	| outDegreeFunction;

lengthExpression:
	charLengthExpression
	| byteLengthExpression
	| pathLengthExpression;

charLengthExpression: CHARACTER_LENGTH LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

byteLengthExpression: (BYTE_LENGTH | OCTET_LENGTH) LEFT_PAREN stringValueExpression RIGHT_PAREN;

pathLengthExpression: LENGTH LEFT_PAREN identifier RIGHT_PAREN;

absoluteValueExpression: ABS LEFT_PAREN numericValueExpression RIGHT_PAREN;

modulusExpression: MOD LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

trigonometricFunction: TRYGONOMETRIC_FUNCTION_NAME LEFT_PAREN numericValueExpression RIGHT_PAREN;

generalLogarithmFunction: LOG LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

commonLogarithm: LOG10 LEFT_PAREN numericValueExpression RIGHT_PAREN;

naturalLogarithm: LN LEFT_PAREN numericValueExpression RIGHT_PAREN;

exponentialFunction: EXP LEFT_PAREN numericValueExpression RIGHT_PAREN;

powerFunction: POWER LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

squareRoot: SQRT LEFT_PAREN numericValueExpression RIGHT_PAREN;

floorFunction: FLOOR LEFT_PAREN numericValueExpression RIGHT_PAREN;

ceilingFunction: (CEIL | CEILING) LEFT_PAREN numericValueExpression RIGHT_PAREN;

inDegreeFunction: IN_DEGREE LEFT_PAREN identifier RIGHT_PAREN;

outDegreeFunction: OUT_DEGREE LEFT_PAREN identifier RIGHT_PAREN;

stringValueExpression:
	characterStringValueExpression
	| byteStringValueExpression;

characterStringValueExpression:
	characterStringValueExpression CONCATENATION_OPERATOR characterStringPrimary
	| characterStringPrimary;

characterStringPrimary:
	valueExpressionPrimary
	| stringValueFunction;

byteStringValueExpression:
	byteStringValueExpression CONCATENATION_OPERATOR byteStringPrimary
	| byteStringPrimary;

byteStringPrimary: valueExpressionPrimary | stringValueFunction;

stringValueFunction:
	characterStringFunction
	| byteStringFunction;

characterStringFunction:
	substringFunction
	| fold
	| trimFunction
	| normalizeFunction;

substringFunction:
	SUBSTRING LEFT_PAREN characterStringValueExpression COMMA startPosition (COMMA stringLength)? RIGHT_PAREN
	| LEFT LEFT_PAREN characterStringValueExpression COMMA stringLength RIGHT_PAREN
	| RIGHT LEFT_PAREN characterStringValueExpression COMMA stringLength RIGHT_PAREN;

fold: (UPPER | TO_UPPER | LOWER | TO_LOWER) LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

trimFunction:
	TRIM LEFT_PAREN characterStringValueExpression (COMMA TRIM_SPEC (COMMA characterStringValueExpression)?)? RIGHT_PAREN
	| L_TRIM LEFT_PAREN characterStringValueExpression RIGHT_PAREN
	| R_TRIM LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

normalizeFunction: NORMALIZE LEFT_PAREN characterStringValueExpression (COMMA normalForm)? RIGHT_PAREN;

normalForm:
  NFC
  | NFD
  | NFKC
  | NFKD;

byteStringFunction:
	byteSubstringFunction
	| byteStringTrimFunction;

byteSubstringFunction:
	SUBSTRING LEFT_PAREN byteStringValueExpression COMMA startPosition (COMMA stringLength)? RIGHT_PAREN
	| LEFT LEFT_PAREN byteStringValueExpression COMMA stringLength RIGHT_PAREN
	| RIGHT LEFT_PAREN byteStringValueExpression COMMA stringLength RIGHT_PAREN;

byteStringTrimFunction:
	TRIM LEFT_PAREN byteStringValueExpression (COMMA TRIM_SPEC (COMMA byteStringValueExpression)?)? RIGHT_PAREN
	| L_TRIM LEFT_PAREN byteStringValueExpression RIGHT_PAREN
	| R_TRIM LEFT_PAREN byteStringValueExpression RIGHT_PAREN;

startPosition: numericValueExpression;

stringLength: numericValueExpression;

datetimeValueExpression:
	datetimePrimary
	| durationValueExpression PLUS datetimePrimary
	| datetimeValueExpression PLUS datetimePrimary
	| datetimeValueExpression MINUS datetimePrimary;

datetimePrimary: valueExpressionPrimary | datetimeValueFunction;

datetimeValueFunction:
	dateFunction
	| timeFunction
	| datetimeFunction
	| localTimeFunction
	| localDatetimeFunction;

dateFunction:
	CURRENT_DATE
	| DATE LEFT_PAREN dateFunctionParameters? RIGHT_PAREN;

timeFunction:
	CURRENT_TIME
	| TIME LEFT_PAREN timeFunctionParameters? RIGHT_PAREN;

localTimeFunction:
	LOCALTIME
	| LOCALTIME LEFT_PAREN timeFunctionParameters? RIGHT_PAREN;

datetimeFunction:
	CURRENT_TIMESTAMP
	| DATETIME LEFT_PAREN datetimeFunctionParameters? RIGHT_PAREN;

localDatetimeFunction:
	LOCALTIMESTAMP
	| LOCALDATETIME LEFT_PAREN datetimeFunctionParameters? RIGHT_PAREN;

dateFunctionParameters: dateString | mapValueConstructor;

timeFunctionParameters: timeString | mapValueConstructor;

datetimeFunctionParameters:
	datetimeString
	| mapValueConstructor;

durationValueExpression:
	durationTerm
	| durationValueExpression PLUS durationTerm
	| durationValueExpression MINUS durationTerm
	| LEFT_PAREN datetimeValueExpression MINUS datetimePrimary RIGHT_PAREN;

durationTerm:
	durationFactor
	| durationTerm ASTERISK factor
	| durationTerm SOLIDUS factor
	| term ASTERISK durationFactor;

durationFactor: SIGN? durationPrimary;

durationPrimary: valueExpressionPrimary | durationValueFunction;

durationValueFunction:
	durationFunction
	| durationAbsoluteValueFunction;

durationFunction: DURATION LEFT_PAREN durationFunctionParameters RIGHT_PAREN;

durationFunctionParameters:
	durationString
	| mapValueConstructor;

durationAbsoluteValueFunction: ABS LEFT_PAREN durationValueExpression RIGHT_PAREN;

graphElementPrimary: startNodeFunction | endNodeFunction;

startNodeFunction: START_NODE LEFT_PAREN identifier RIGHT_PAREN;

endNodeFunction: END_NODE LEFT_PAREN identifier RIGHT_PAREN;

collectionValueConstructor:
	listValueConstructor
	| setValueConstructor
	| orderedSetValueConstructorByEnumeration
	| mapValueConstructor
	| recordValueConstructor;

listValueExpression:
	listValueExpression CONCATENATION_OPERATOR listPrimary
	| listPrimary;

listPrimary: listValueFunction | valueExpressionPrimary;

listValueFunction: tailListFunction | trimListFunction;

tailListFunction: TAIL LEFT_PAREN listValueExpression RIGHT_PAREN;

trimListFunction: TRIM LEFT_PAREN listValueExpression COMMA numericValueExpression RIGHT_PAREN;

listValueConstructor: listValueConstructorByEnumeration;

listValueConstructorByEnumeration: listValueTypeName LEFT_BRACKET listElementList RIGHT_BRACKET;

listElementList: valueExpression (COMMA valueExpression)*;

multisetValueExpression:
	multisetTerm
	| multisetValueExpression (MULTISET UNION (ALL | DISTINCT)? multisetTerm)
	| multisetValueExpression (MULTISET EXCEPT (ALL | DISTINCT)? multisetTerm);

multisetTerm:
	multisetPrimary
	| multisetTerm (MULTISET INTERSECT (ALL | DISTINCT)? multisetPrimary);

multisetPrimary: multisetValueFunction | valueExpressionPrimary;

multisetValueFunction: SET LEFT_PAREN multisetValueConstructorByEnumeration RIGHT_PAREN;

multisetValueConstructorByEnumeration: MULTISET LEFT_BRACE multisetElementList RIGHT_BRACE;

multisetElementList: valueExpression (COMMA valueExpression)*;

setValueConstructor: setValueConstructorByEnumeration;

setValueConstructorByEnumeration: SET LEFT_BRACE setElementList RIGHT_BRACE;

setElementList: valueExpression (COMMA valueExpression)*;

orderedSetValueConstructorByEnumeration:
	ORDERED SET LEFT_BRACE orderedSetElementList RIGHT_BRACE
	| LEFT_BRACE orderedSetElementList RIGHT_BRACE
	| LEFT_BRACKET orderedSetElementList RIGHT_BRACKET;

orderedSetElementList: valueExpression (COMMA valueExpression)*;

mapValueConstructor: mapValueConstructorByEnumeration;

mapValueConstructorByEnumeration: MAP LEFT_BRACE mapElementList RIGHT_BRACE;

mapElementList: mapElement (COMMA mapElement)*;

mapElement: mapKey valueExpression;

mapKey: valueExpression COLON;

recordValueConstructor:
	recordValueConstructorByEnumeration
	| UNIT;

recordValueConstructorByEnumeration:
	RECORD LEFT_BRACE fieldList RIGHT_BRACE
	| LEFT_BRACE fieldList RIGHT_BRACE;

fieldList: field (COMMA field)*;

field: identifier fieldValue;

fieldValue: valueExpression;

caseExpression: caseAbbreviation | simpleCase | searchedCase;

caseAbbreviation:
	NULLIF LEFT_PAREN valueExpression COMMA valueExpression RIGHT_PAREN
	| COALESCE LEFT_PAREN valueExpression (COMMA valueExpression)* RIGHT_PAREN;

simpleCase: CASE caseOperand simpleWhenClause* elseClause? END;

searchedCase: CASE searchedWhenClause* elseClause? END;

simpleWhenClause: WHEN whenOperandList THEN result;

searchedWhenClause: WHEN searchCondition THEN result;

elseClause: ELSE result;

caseOperand:
	nonParenthesizedValueExpressionPrimary
	| elementReference;

whenOperandList: whenOperand (COMMA whenOperand)*;

whenOperand:
	nonParenthesizedValueExpressionPrimary
	| comparisonPredicatePart2
	| nullPredicatePart2
	| directedPredicatePart2
	| labeledPredicatePart2
	| sourcePredicatePart2
	| destinationPredicatePart2;

result: valueExpression | NULL;

castSpecification: CAST LEFT_PAREN (valueExpression | NULL) AS predefinedType RIGHT_PAREN;

multisetSetFunction: SET LEFT_PAREN multisetValueExpression RIGHT_PAREN;

element_idFunction: ELEMENT_ID LEFT_PAREN elementReference RIGHT_PAREN;

literal:
  signedNumericLiteral
  | generalLiteral;

generalLiteral:
	predefinedTypeLiteral
	| listLiteral
	| setLiteral
	| multisetLiteral
	| orderedSetLiteral
	| mapLiteral
	| recordLiteral;

predefinedTypeLiteral:
	TRUTH_VALUE
	| characterStringLiteral
	| byteStringLiteral
	| temporalLiteral
	| durationLiteral
	| NULL;

unsignedLiteral:
  unsignedNumericLiteral
  | generalLiteral;

characterStringLiteral:
	singleQuotedCharacterSequence
	| doubleQuotedCharacterSequence;

unbrokenCharacterStringLiteral:
	unbrokenSingleQuotedCharacterSequence
	| unbrokenDoubleQuotedCharacterSequence;

singleQuotedCharacterSequence: unbrokenSingleQuotedCharacterSequence (separator unbrokenSingleQuotedCharacterSequence)*;

doubleQuotedCharacterSequence: unbrokenDoubleQuotedCharacterSequence (separator unbrokenDoubleQuotedCharacterSequence)*;

unbrokenSingleQuotedCharacterSequence: QUOTE (characterRepresentation)* QUOTE;

unbrokenDoubleQuotedCharacterSequence: DOUBLE_QUOTE (characterRepresentation)* DOUBLE_QUOTE;

unbrokenAccentQuotedCharacterSequence: GRAVE_ACCENT (characterRepresentation)* GRAVE_ACCENT;

characterRepresentation:
	CIRCUMFLEX
	| CARRIAGE_RETURN
	| NEW_LINE
	| TAB
	| SPACE
	| ESCAPED_CHAR;

byteStringLiteral: BYTE_STRING_START QUOTE (SPACE)* (DIGIT16 (SPACE)* DIGIT16 (SPACE)*)* QUOTE (separator QUOTE (SPACE)* (DIGIT16 (SPACE)* DIGIT16 (SPACE)*)* QUOTE)*;

numericLiteral:
  signedNumericLiteral
  | unsignedNumericLiteral;

signedNumericLiteral: sign? unsignedNumericLiteral;

unsignedNumericLiteral:
	exactNumericLiteral
	| approximateNumericLiteral;

exactNumericLiteral:
	unsignedInteger
	| unsignedDecimalInteger PERIOD (unsignedDecimalInteger)?
	| PERIOD unsignedDecimalInteger;

sign:
  PLUS
  | MINUS;

unsignedInteger:
	unsignedDecimalInteger
	| unsignedHexadecimalInteger
	| unsignedOctalInteger
	| unsignedBinaryInteger;

unsignedDecimalInteger: DIGIT10 ((UNDERSCORE? DIGIT10)*);

unsignedBinaryInteger: START2 ((UNDERSCORE? DIGIT2)*);

unsignedOctalInteger: START8 ((UNDERSCORE? DIGIT8)*);

unsignedHexadecimalInteger: START16 ((UNDERSCORE? DIGIT16)*);

signedDecimalInteger: (sign)? unsignedDecimalInteger;

approximateNumericLiteral: exactNumericLiteral ESEPARATOR signedDecimalInteger;

temporalLiteral: dateLiteral | timeLiteral | datetimeLiteral;

dateLiteral: DATE dateString;

timeLiteral: TIME timeString;

datetimeLiteral: (DATETIME | TIMESTAMP) datetimeString;

dateString: unbrokenCharacterStringLiteral;

timeString: unbrokenCharacterStringLiteral;

datetimeString: unbrokenCharacterStringLiteral;

durationLiteral: DURATION durationString | intervalLiteral;

intervalLiteral: DIGIT10+ SPACE+ (yearMonthLiteral | dayTimeLiteral);

yearMonthLiteral: DIGIT10+ SPACE+ (YEAR | MONTH);

dayTimeLiteral: DIGIT10+ SPACE+ (DAY | HOUR | MINUTE | SECOND) fractionalSecondsLiteral?;

fractionalSecondsLiteral: PERIOD DIGIT10+;

durationString: unbrokenCharacterStringLiteral;

listLiteral: listValueConstructorByEnumeration;

setLiteral: setValueConstructorByEnumeration;

multisetLiteral: multisetValueConstructorByEnumeration;

orderedSetLiteral: orderedSetValueConstructorByEnumeration;

mapLiteral: mapValueConstructorByEnumeration;

recordLiteral: recordValueConstructorByEnumeration;

valueType:
	ANY
	| predefinedType
	| graphElementType
	| valueType (LIST | ARRAY)
	| valueType MULTISET
	| valueType SET
	| valueType ORDERED SET
	| mapValueType
	| recordValueType
	| graphTypeExpression
	| bindingTableTypeExpression
	| NOTHING;

ofValueType: (DOUBLE_COLON | OF)? valueType;

predefinedType:
	BOOL_TYPE
	| characterStringType
	| byteStringType
	| numericType
	| temporalType;

characterStringType:
	STRING_TYPE (LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN)?;

byteStringType:
	BYTES (LEFT_PAREN (unsignedDecimalInteger COMMA)? unsignedDecimalInteger RIGHT_PAREN)?
	| BINARY (LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN)?
	| VARBINARY (LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN)?;

numericType: exactNumericType | approximateNumericType;

exactNumericType:
	binaryExactNumericType
	| decimalExactNumericType;

binaryExactNumericType:
	binaryExactSignedNumericType
	| binaryExactUnsignedNumericType;

binaryExactSignedNumericType:
	INT8
	| INT16
	| INT32
	| INT64
	| INT128
	| INT256
	| SMALLINT
	| INT (LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN)?
	| BIGINT
	| (SIGNED)? verboseBinaryExactNumericType;

binaryExactUnsignedNumericType:
	UINT8
	| UINT16
	| UINT32
	| UINT64
	| UINT128
	| UINT256
	| UINT LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN
	| UNSIGNED verboseBinaryExactNumericType;

verboseBinaryExactNumericType:
	INTEGER8
	| INTEGER16
	| INTEGER32
	| INTEGER64
	| INTEGER128
	| INTEGER256
	| INTEGER LEFT_PAREN unsignedDecimalInteger RIGHT_PAREN;

decimalExactNumericType: (DECIMAL | DEC) LEFT_PAREN unsignedDecimalInteger (COMMA unsignedDecimalInteger)? RIGHT_PAREN;

approximateNumericType:
	FLOAT16
	| FLOAT32
	| FLOAT64
	| FLOAT128
	| FLOAT256
	| FLOAT LEFT_PAREN unsignedDecimalInteger (COMMA unsignedDecimalInteger)? RIGHT_PAREN
	| REAL
	| DOUBLE PRECISION;

temporalType:
	DATETIME
	| LOCALDATETIME
	| DATE
	| TIME
	| LOCALTIME
	| DURATION;

graphElementType: NODE | VERTEX | EDGE | RELATIONSHIP;

listValueTypeName: LIST | ARRAY;

mapValueType: MAP LEFT_ANGLE_BRACKET mapKeyType COMMA valueType RIGHT_ANGLE_BRACKET;

mapKeyType: predefinedType;

recordValueType: RECORD LEFT_BRACE (fieldTypeList)? RIGHT_BRACE;

fieldTypeList: fieldType (COMMA fieldType)*;

fieldType: identifier (ofTypePrefix)? valueType;

parameterName: AMPERSAND separatedIdentifier;

identifier:
  regularIdentifier
  | delimitedIdentifier;

separatedIdentifier:
  extendedIdentifier
  | delimitedIdentifier;

token: nonDelimiterToken | delimiterToken;

nonDelimiterToken:
	regularIdentifier
	| parameterName
	| KEY_WORD
	| unsignedNumericLiteral
	| byteStringLiteral
	| MULTISET_ALT_OPERATOR;

nonDelimitedIdentifier:
  regularIdentifier
  | extendedIdentifier;

regularIdentifier: LETTER (GQL_LANGUAGE_CHAR)*;

extendedIdentifier: (GQL_LANGUAGE_CHAR)+;

delimiterToken:
	GQL_SPECIAL_CHAR
	| BRACKER_MINUS_RIGHT_ARROW
	| BRACKET_TILDE_RIGHT_ARROW
	| CONCATENATION_OPERATOR
	| DOUBLE_COLON
	| DOUBLE_MINUS
	| DOUBLE_PERIOD
	| GRATER_THEN_OPERATOR
	| GREATER_THEN_OR_EQUALS
	| LEFT_ARROW_MIUNUS
	| LEFT_ARROW_MINUS_RIGHT_BRACKET
	| LEFT_ARROW_TILDE
	| LEFT_ARROW_RIGHT_BRACKET
	| LEFT_MINUS_RIGHT
	| LEFT_MINUS_SLASH
	| LEFT_TILDE_SLASH
	| LESS_THEN
	| LESS_THEN_OR_EQUALS
	| MINUS_LEFT_BRACKET
	| MINUS_SLESH
	| NOT_EQUALS
	| RIGHT_ANGLE_BRACKET
	| RIGHT_BRACKET_MINUS
	| RIGHT_BRACKET_TILDE
	| SLASH_MINUS
	| SLASH_MINUS_RIGHT
	| SLASH_TILDE
	| SLASH_TILDE_RIGHT
	| TILDE_LEFT_BRACKET
	| TILDE_RIGHT_ARROW
	| TILDE_SLASH
	| characterStringLiteral
	| dateString
	| datetimeString
	| delimitedIdentifier
	| durationString
	| timeString;

delimitedIdentifier:
	doubleQuotedCharacterSequence
	| unbrokenAccentQuotedCharacterSequence;

separator: (comment | WHITESPACE)+;

comment: simpleComment | bracketedComment;

simpleComment: (DOUBLE_SOLIDUS | DOUBLE_MINUS) (GQL_TERMINAL_CHAR)* NEW_LINE;

bracketedComment: BRACKETED_COMMENT_START GQL_TERMINAL_CHAR BRACKETED_CoMMENT_END;

edgeSynonym: EDGE | RELATIONSHIP;

nodeSynonym: NODE | VERTEX;

// Lexer

GQL_TERMINAL_CHAR:
	GQL_LANGUAGE_CHAR
	| ~[\u0000-\u007F\uD800-\uDBFF]
	| [\uD800-\uDBFF] [\uDC00-\uDFFF];

GQL_LANGUAGE_CHAR:
  LETTER
  | DIGIT10
  | GQL_SPECIAL_CHAR;

GQL_SPECIAL_CHAR:
	SPACE
	| AMPERSAND
	| ASTERISK
	| COLON
	| EQUALS
	| COMMA
	| DOLLAR
	| DOUBLE_QUOTE
	| EXCLAMATION
	| GRAVE_ACCENT
	| RIGHT_ANGLE_BRACKET
	| LEFT_BRACE
	| LEFT_BRACKET
	| LEFT_PAREN
	| LEFT_ANGLE_BRACKET
	| MINUS
	| PERIOD
	| PLUS
	| QUESTION_MARK
	| QUOTE
	| REVERS_SOLIDUS
	| RIGHT_BRACE
	| RIGHT_BRACKET
	| RIGHT_PAREN
	| SEMICOLON
	| SOLIDUS
	| UNDERSCORE
	| VERTICAL_BAR
	| PERCENT
	| CIRCUMFLEX
	| TILDE;

COMPARE_OPERATOR:
	EQUALS
	| NOT_EQUALS
	| LESS_THEN
	| GRATER_THEN_OPERATOR
	| LESS_THEN_OR_EQUALS
	| GREATER_THEN_OR_EQUALS;

QUOTE: '\'';
DOUBLE_QUOTE: '"';
GRAVE_ACCENT: '`';
REVERS_SOLIDUS: '\\';
PLUS: '+';
MINUS: '-';
DOUBLE_MINUS: MINUS MINUS;
AMPERSAND: '&';
ASTERISK: '*';
CIRCUMFLEX: '^';
COLON: ':';
DOUBLE_COLON: COLON COLON;
COMMA: ',';
DOLLAR: '$';
EQUALS: '=';
EXCLAMATION: '!';
LEFT_ANGLE_BRACKET: '<';
RIGHT_ANGLE_BRACKET: '>';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
QUESTION_MARK: '?';
SEMICOLON: ';';
SOLIDUS: '/';
DOUBLE_SOLIDUS: SOLIDUS SOLIDUS;
TILDE: '~';
UNDERSCORE: '_';
VERTICAL_BAR: '|';
PERCENT: '%';
PERIOD: '.';
DOUBLE_PERIOD: PERIOD PERIOD;
CARRIAGE_RETURN: '\u000D';
RETURN: '\u000A';
NEW_LINE: RETURN CARRIAGE_RETURN;

// SPECIAL OPERANDS

BRACKETED_COMMENT_START: SOLIDUS ASTERISK;
BRACKETED_CoMMENT_END: ASTERISK SOLIDUS;
BRACKER_MINUS_RIGHT_ARROW: LEFT_BRACKET MINUS RIGHT_ANGLE_BRACKET;
BRACKET_TILDE_RIGHT_ARROW: LEFT_BRACKET TILDE RIGHT_ANGLE_BRACKET;
CONCATENATION_OPERATOR: VERTICAL_BAR VERTICAL_BAR;
GRATER_THEN_OPERATOR: RIGHT_ANGLE_BRACKET;
GREATER_THEN_OR_EQUALS: RIGHT_ANGLE_BRACKET EQUALS;
LEFT_ARROW_MIUNUS: LEFT_ANGLE_BRACKET MINUS;
LEFT_ARROW_TILDE: RIGHT_ANGLE_BRACKET TILDE;
LEFT_ARROW_MINUS_RIGHT_BRACKET: LEFT_ARROW_MIUNUS RIGHT_BRACKET;
LEFT_ARROW_RIGHT_BRACKET: LEFT_ARROW_TILDE RIGHT_BRACKET;
LEFT_MINUS_RIGHT: LEFT_ANGLE_BRACKET MINUS RIGHT_ANGLE_BRACKET;
LEFT_MINUS_SLASH: LEFT_ANGLE_BRACKET MINUS SOLIDUS;
LEFT_TILDE_SLASH: LEFT_ARROW_TILDE SOLIDUS;
LESS_THEN: LEFT_ANGLE_BRACKET;
LESS_THEN_OR_EQUALS: LEFT_ANGLE_BRACKET EQUALS;
MINUS_LEFT_BRACKET: MINUS LEFT_BRACKET;
MINUS_SLESH: MINUS SOLIDUS;
MINUS_RIGHT_ARROW: MINUS RIGHT_ANGLE_BRACKET;
NOT_EQUALS: LEFT_ANGLE_BRACKET RIGHT_ANGLE_BRACKET;
RIGHT_BRACKET_MINUS: RIGHT_BRACKET MINUS;
RIGHT_BRACKET_TILDE: RIGHT_BRACKET TILDE;
RIGHT_BRACKET_RIGHT_ARROW: RIGHT_BRACKET RIGHT_ANGLE_BRACKET;
RIGHT_ARROW_TILDE: RIGHT_ANGLE_BRACKET TILDE;
SLASH_MINUS: SOLIDUS MINUS;
SLASH_MINUS_RIGHT: SOLIDUS MINUS RIGHT_ANGLE_BRACKET;
SLASH_TILDE: SOLIDUS TILDE;
SLASH_TILDE_RIGHT: SOLIDUS TILDE RIGHT_ANGLE_BRACKET;
TILDE_LEFT_BRACKET: TILDE LEFT_BRACKET;
TILDE_RIGHT_ARROW: TILDE RIGHT_ANGLE_BRACKET;
TILDE_SLASH: TILDE SOLIDUS;
MULTISET_ALT_OPERATOR: VERTICAL_BAR PLUS VERTICAL_BAR;

// ESCAPED CHARS

ESCAPED_CHAR:
	ESCAPED_REVERSE_SOLIDUS
	| ESCAPED_QUOTE
	| ESCAPED_DOUBLE_QUOTE
	| ESCAPED_TAB
	| ESCAPED_BACKSPACE
	| ESCAPED_NEWLINE
	| ESCAPED_CARRIAGE_RETURN
	| ESCAPED_FORM_FEED
	| UNICODE_ESCAPED_VALUE
	| ESCAPED_GRAVE_ACCENT;

ESCAPED_REVERSE_SOLIDUS: DOUBLE_SOLIDUS DOUBLE_SOLIDUS;
ESCAPED_QUOTE: DOUBLE_SOLIDUS QUOTE;
ESCAPED_DOUBLE_QUOTE: DOUBLE_SOLIDUS DOUBLE_QUOTE;
ESCAPED_TAB: DOUBLE_SOLIDUS 't';
ESCAPED_BACKSPACE: DOUBLE_SOLIDUS 'b';
ESCAPED_NEWLINE: DOUBLE_SOLIDUS 'n';
ESCAPED_CARRIAGE_RETURN: DOUBLE_SOLIDUS 'r';
ESCAPED_FORM_FEED: DOUBLE_SOLIDUS 'f';

UNICODE_ESCAPED_VALUE:
	UNICODE4_ESCAPED_VALUE
	| UNICODE6_ESCAPED_VALUE;

UNICODE4_ESCAPED_VALUE:
	DOUBLE_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16;

UNICODE6_ESCAPED_VALUE:
	DOUBLE_SOLIDUS 'U' DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16;

ESCAPED_GRAVE_ACCENT:
	REVERS_SOLIDUS GRAVE_ACCENT
	| GRAVE_ACCENT GRAVE_ACCENT;

// WORDS

KEY_WORD:
	RESERVED_WORD
	| IN_DEGREE
	| OUT_DEGREE
	| ST_DEV
	| ST_DEV_P
	| PERCENTILE_CONT
	| PERCENTILE_DIST
	| L_TRIM
	| R_TRIM
	| START_NODE
	| END_NODE
	| TAIL
	| TO_LOWER
	| TO_UPPER
	| NORMAL_FORM;

RESERVED_WORD:
	ABS
	| ACOS
	| ADD
	| AGGREGATE
	| ALIAS
	| ALL
	| ALL_DIFFERENT
	| AND
	| ANY
	| ARRAY
	| AS
	| ASC
	| ASCENDING
	| ASIN
	| AT
	| ATAN
	| AVG
	| BINARY
	| BIGINT
	| BOOL
	| BOOLEAN
	| BOTH
	| BY
	| BYTE_LENGTH
	| BYTES
	| CALL
	| CASE
	| CAST
	| CATALOG
	| CEIL
	| CEILING
	| CHARACTER
	| CHARACTER_LENGTH
	| CLEAR
	| CLONE
	| CLOSE
	| COALESCE
	| COLLECT
	| COMMIT
	| CONSTRAINT
	| CONSTANT
	| CONSTRUCT
	| COPY
	| COS
	| COSH
	| COST
	| COT
	| COUNT
	| CURRENT_DATE
	| CURRENT_GRAPH
	| CURRENT_PROPERTY_GRAPH
	| CURRENT_ROLE
	| CURRENT_SCHEMA
	| CURRENT_TIME
	| CURRENT_TIMESTAMP
	| CURRENT_USER
	| CREATE
	| DATA
	| DATE
	| DATETIME
	| DEC
	| DECIMAL
	| DEFAULT
	| DEGREES
	| DELETE
	| DETACH
	| DESC
	| DESCENDING
	| DIRECTORIES
	| DIRECTORY
	| DISTINCT
	| DO
	| DOUBLE
	| DROP
	| DURATION
	| ELEMENT_ID
	| ELSE
	| END
	| ENDS
	| EMPTY_BINDING_TABLE
	| EMPTY_GRAPH
	| EMPTY_PROPERTY_GRAPH
	| EMPTY_TABLE
	| EXCEPT
	| EXISTS
	| EXISTING
	| EXP
	| EXPLAIN
	| FALSE
	| FILTER
	| FLOAT
	| FLOAT16
	| FLOAT32
	| FLOAT64
	| FLOAT128
	| FLOAT256
	| FLOOR
	| FOR
	| FROM
	| FUNCTION
	| FUNCTIONS
	| GQLSTATUS
	| GRANT
	| GROUP
	| HAVING
	| HOME_GRAPH
	| HOME_PROPERTY_GRAPH
	| HOME_SCHEMA
	| IN
	| INSERT
	| INT
	| INTEGER
	| INT8
	| INTEGER8
	| INT16
	| INTEGER16
	| INT32
	| INTEGER32
	| INT64
	| INTEGER64
	| INT128
	| INTEGER128
	| INT256
	| INTEGER256
	| INTERSECT
	| IF
	| IS
	| KEEP
	| LEADING
	| LEFT
	| LENGTH
	| LET
	| LIKE
	| LIKE_REGEX
	| LIMIT
	| LIST
	| LN
	| LOCALDATETIME
	| LOCALTIME
	| LOCALTIMESTAMP
	| LOG
	| LOG10
	| LOWER
	| MANDATORY
	| MAP
	| MATCH
	| MERGE
	| MAX
	| MIN
	| MOD
	| MULTI
	| MULTIPLE
	| MULTISET
	| NEW
	| NOT
	| NORMALIZE
	| NOTHING
	| NULL
	| NULLS
	| NULLIF
	| NUMERIC
	| OCCURRENCES_REGEX
	| OCTET_LENGTH
	| OF
	| OFFSET
	| ON
	| OPTIONAL
	| OR
	| ORDER
	| ORDERED
	| OTHERWISE
	| PARAMETER
	| PATH
	| PATHS
	| PARTITION
	| POSITION_REGEX
	| POWER
	| PRECISION
	| PROCEDURE
	| PROCEDURES
	| PRODUCT
	| PROFILE
	| PROJECT
	| QUERIES
	| QUERY
	| RADIANS
	| REAL
	| RECORD
	| RECORDS
	| REFERENCE
	| REMOVE
	| RENAME
	| REPLACE
	| REQUIRE
	| RESET
	| RESULT
	| RETURN
	| REVOKE
	| RIGHT
	| ROLLBACK
	| SAME
	| SCALAR
	| SCHEMA
	| SCHEMAS
	| SCHEMATA
	| SELECT
	| SESSION
	| SET
	| SSKIP
	| SIGNED
	| SIN
	| SINGLE
	| SINH
	| SMALLINT
	| SQRT
	| START
	| STARTS
	| STRING
	| SUBSTRING
	| SUBSTRING_REGEX
	| SUM
	| TAN
	| TANH
	| THEN
	| TIME
	| TIMESTAMP
	| TRAILING
	| TRANSLATE_REGEX
	| TRIM
	| TRUE
	| TRUNCATE
	| UINT
	| UINT8
	| UINT16
	| UINT32
	| UINT64
	| UINT128
	| UINT256
	| UNION
	| UNIT
	| UNIT_BINDING_TABLE
	| UNIT_TABLE
	| UNIQUE
	| UNNEST
	| UNKNOWN
	| UNSIGNED
	| UNWIND
	| UPPER
	| USE
	| VALUE
	| VALUES
	| VARBINARY
	| VARCHAR
	| WHEN
	| WHERE
	| WITH
	| WITHOUT
	| XOR
	| YIELD
	| ZERO;

NON_RESERVED_WORD:
	ACYCLIC
	| BINDING
	| CLASS_ORIGIN
	| COMMAND_FUNCTION
	| COMMAND_FUNCTION_CODE
	| CONDITION_NUMBER
	| CONNECTING
	| DESTINATION
	| DIRECTED
	| EDGE
	| EDGES
	| FINAL
	| FIRST
	| GRAPH
	| GRAPHS
	| GROUPS
	| INDEX
	| LAST
	| LABEL
	| LABELED
	| LABELS
	| MESSAGE_TEXT
	| MMORE
	| MUTABLE
	| NFC
	| NFD
	| NFKC
	| NFKD
	| NODE
	| NODES
	| NORMALIZED
	| NUMBER
	| ONLY
	| ORDINALITY
	| PATTERN
	| PATTERNS
	| PROPERTY
	| PROPERTIES
	| READ
	| RELATIONSHIP
	| RELATIONSHIPS
	| RETURNED_GQLSTATUS
	| SHORTEST
	| SIMPLE
	| SOURCE
	| SUBCLASS_ORIGIN
	| TABLE
	| TABLES
	| TIES
	| TO
	| TRAIL
	| TRANSACTION
	| TYPE
	| TYPES
	| UNDIRECTED
	| VERTEX
	| VERTICES
	| WALK
	| WRITE
	| ZONE;

TRYGONOMETRIC_FUNCTION_NAME:
	SIN
	| COS
	| TAN
	| COT
	| SINH
	| COSH
	| TANH
	| COTH
	| ASIN
	| ACOS
	| ATAN
	| ACOT
	| DEGREES
	| RADIANS;

SESSION: S E S S I O N;
SET: S E T;
SCHEMA: S C H E M E;
PARAMETER: P A R A M E T E R;
REMOVE: R E M O V E;
NOT: N O T;
EXISTS: E X I S T S;
CLEAR: C L E A R;
READ: R E A D;
ROLLBACK: R O L L B A C K;
COMMIT: C O M M I T;
TRUE: T R U E;
FALSE: F A L S E;
UNKNOWN: U N K N O W N;
DATE: D A T E;
DATETIME: D A T E T I M E;
TIME: T I M E;
TIMESTAMP: T I M E S T A M P;
TIME_ZONE: T I M E WS Z O N E;
DURATION: D U R A T I O N;
NULL: N U L L;
EDGE: E D G E;
RELATIONSHIP: R E L A T I O N S H I P;
EDGES: E D G E S;
RELATIONSHIPS: R E L A T I O N S H I P S;
NODE: N O D E;
VERTEX: V E R T E X;
LIST: L I S T;
ARRAY: A R R A Y;
MAP: M A P;
RECORD: R E C O R D;
MUTABLE: M U T A B L E;
FINAL: F I N A L;
CATALOG: C A T A L O G;
PROCEDURE: P R O C E D U R E;
QUERY: Q U E R Y;
GRAPH: G R A P H;
TABLE: T A B L E;
DETACH: D E T A C H;
REPLACE: R E P L A C E;
PROPERTY: P R O P E R T Y;
TYPE: T Y P E;
LABEL: L A B E L;
LABELS: L A B E L S;
FUNCTION: F U N C T I O N;
THEN: T H E N;
ELSE: E L S E;
WHEN: W H E N;
INSERT: I N S E R T;
OPTIONAL: O P T I O N A L;
MERGE: M E R G E;
OTHERWISE: O T H E R W I S;
UNION: U N I O N;
EXCEPT: E X C E P T;
INTERSECT: I N T E R S E C T;
COST: C O S T;
DEFAULT: D E F A U L T;
PROFILE: P R O F I L E;
EXPLAIN: E X P L A I N;
PATH: (P A T H) | (P A T H S);
WALK: W A L K;
TRAIL: T R A I L;
SIMPLE: S I M P L E;
ACYCLIC: A C Y C L I C;
BOOL: B O O L;
BOOLEAN: B O O L E A N;
STRING: S T R I N G;
VARCHAR: V A R C H A R;
BYTES: B Y T E S;
BINARY: B I N A R Y;
VARBINARY: V A R B I N A R Y;
ANY: A N Y;
NOTHING: N O T H I N G;
INT: I N T;
INT8: INT '8';
INT16: INT '16';
INT32: INT '32';
INT64: INT '64';
INT128: INT '128';
INT256: INT '256';
SMALLINT: S M A L L WS INT;
BIGINT: B I G WS INT;
SIGNED: S I G N E D;
DESTINATION: D E S T I N A T I O N;
SOURCE: S O U R C E;
DIRECTED: D I R E C T E D;
UNDIRECTED: U N D I R E C T E D;
CONNECTING: C O N N E C T I N G;
LABELED: L A B E L E D;
NORMALIZED: N O R M A L I Z E D;
ALL_DIFFERENT: A L L UNDERSCORE D I F F E R E N T;
SAME: S A M E;
LEADING: L E A D I N G;
TRAILING: T R A I L I N G;
BOTH: B O T H;
MULTISET: M U L T I S E T;
ALL: A L L;
DISTINCT: D I S T I N C T;
ORDERED: O R D E R E D;
UNIT: U N I T;
VALUE: V A L U E;
NULLIF: N U L L I F;
COALESCE: C O A L E S C E;
CASE: C A S E;
END: E N D;
CAST: C A S T;
ELEMENT_ID: E L E M E N T UNDERSCORE I D;
BINDING: B I N D I N G;
CLASS_ORIGIN: C L A S S UNDERSCORE O R I G I N;
COMMAND_FUNCTION: C O M M A N D UNDERSCORE F U N C T I O N;
COMMAND_FUNCTION_CODE: C O M M A N D UNDERSCORE F U N C T I O N UNDERSCORE C O D E;
CONDITION_NUMBER: C O N D I T I O N UNDERSCORE N U M B E R;
FIRST: F I R S T;
GRAPHS: G R A P H S;
GROUPS: G R O U P S;
INDEX: I N D E X;
LAST: L A S T;
MESSAGE_TEXT: M E S S A G E UNDERSCORE T E X T;
MMORE: M O R E;
NFC: N F C;
NFD: N F D;
NFKC: N F K C;
NFKD: N F K D;
NODES: N O D E S;
NUMBER: N U M B E R;
ONLY: O N L Y;
ORDINALITY: O R D I N A L I T Y;
PATTERN: P A T T E R N;
PATTERNS: P A T T E R N S;
PROPERTIES: P R O P E R T I E S;
RETURNED_GQLSTATUS: R E T U R N E D UNDERSCORE G Q L S T A T U S;
ZONE: Z O N E;
WRITE: W R I T E;
VERTICES: V E R T I C E S;
TYPES: T Y P E S;
TRANSACTION: T R A N S A C T I O N;
TIES: T I E S;
TABLES: T A B L E S;
SUBCLASS_ORIGIN: S U B C L A S S UNDERSCORE O R I G I N;
SHORTEST: S H O R T E S T;
ZERO: Z E R O;
YIELD: Y I E L D;
XOR: X O R;
WITHOUT: W I T H O U T;
WITH: W I T H;
WHERE: W H E R E;
VALUES: V A L U E S;
USE: U S E;
UPPER: U P P E R;
UNWIND: U N W I N D;
UNSIGNED: U N S I G N E D;
UNNEST: U N N E S T;
UNIQUE: U N I Q U E;
UNIT_TABLE: UNIT UNDERSCORE TABLE;
UNIT_BINDING_TABLE: UNIT UNDERSCORE BINDING UNDERSCORE TABLE;
TRUNCATE: T R U N C A T E;
TRIM: T R I M;
REGEX: R E G E X;
TRANSLATE_REGEX: T R A N S L A T E UNDERSCORE REGEX;
SUM: S U M;
SUBSTRING: S U B S T R I N G;
SUBSTRING_REGEX: S U B S T R I N G UNDERSCORE REGEX;
START: S T A R T;
START_TRANSACTION: S T A R T WS T R A N S A C T I O N;
STARTS: S T A R T S;
SINGLE: S I N G L E;
SSKIP: S K I P;
SELECT: S E L E C T;
SCHEMAS: S C H E M A S;
SCHEMATA: S C H E M A T A;
SCALAR: S C A L A R;
RIGHT: R I G H T;
REVOKE: R E V O K E;
RESULT: R E S U L T;
RESET: R E S E T;
REQUIRE: R E Q U I R E;
RENAME: R E N A M E;
REFERENCE: R E F E R E N C E;
RECORDS: R E C O R D S;
REAL: R E A L;
QUERIES: Q U E R I E S;
PROJECT: P R O J E C T;
PRODUCT: P R O D U C T;
PROCEDURES: P R O C E D U R E S;
PARAMETERS: P A R A M E T E R S;
CHARACTERISTICS: C H A R A C T E R I S T I C S;
PRECISION: P R E C I S I O N;
POSITION_REGEX: P O S I T I O N UNDERSCORE REGEX;
PARTITION: P A R T I T I O N;
PATHS: P A T H S;
ORDER: O R D E R;
ON: O N;
OFFSET: O F F S E T;
OCCURRENCES_REGEX: O C C U R R E N C E S UNDERSCORE REGEX;
NUMERIC: N U M E R I C;
NULLS: N U L L S;
NORMALIZE: N O R M A L I Z E;
NEW: N E W;
MULTIPLE: M U L T I P L E;
MULTI: M U L T I;
MIN: M I N;
MAX: M A X;
MATCH: M A T C H;
MANDATORY: M A N D A T O R Y;
LOWER: L O W E R;
LOCALTIMESTAMP: L O C A L T I M E S T A M P;
LOCALTIME: L O C A L T I M E;
LOCALDATETIME: L O C A L D A T E T I M E;
LIMIT: L I M I T;
LIKE: L I K E;
LIKE_REGEX: LIKE UNDERSCORE REGEX;
LET: L E T;
LEFT: L E F T;
KEEP: K E E P;
IN: I N;
ADD: A D D;
AGGREGATE: A G G R E G A T E;
ALIAS: A L I A S;
AND: A N D;
ASC: A S C;
ASCENDING: A S C E N D I N G;
AVG: A V G;
BY: B Y;
CALL: C A L L;
CEILING: C E I L I N G;
CHARACTER: C H A R A C T E R;
CLONE: C L O N E;
CLOSE: C L O S E;
COLLECT: C O L L E C T;
CONSTRAINT: C O N S T R A I N T;
CONSTANT: C O N S T A N T;
CONSTRUCT: C O N S T R U C T;
COPY: C O P Y;
COUNT: C O U N T;
CURRENT: C U R R E N T;
CURRENT_DATE: CURRENT UNDERSCORE DATE;
CURRENT_GRAPH: CURRENT UNDERSCORE GRAPH;
CURRENT_PROPERTY_GRAPH: CURRENT UNDERSCORE PROPERTY UNDERSCORE GRAPH;
CURRENT_ROLE: CURRENT UNDERSCORE R O L E;
CURRENT_SCHEMA: CURRENT UNDERSCORE SCHEMA;
CURRENT_TIME: CURRENT UNDERSCORE TIME;
CURRENT_TIMESTAMP: CURRENT UNDERSCORE TIMESTAMP;
CURRENT_USER: CURRENT UNDERSCORE U S E R;
CREATE: C R E A T E;
DATA: D A T A;
DEC: D E C;
DECIMAL: D E C I M A L;
DELETE: D E L E T E;
DESC: D E S C;
DESCENDING: D E S C E N D I N G;
DIRECTORIES: D I R E C T O R I E S;
DIRECTORY: D I R E C T O R Y;
DOUBLE: D O U B L E;
DROP: D R O P;
ENDS: E N D S;
EMPTY: E M P T Y;
IF_EXISTS: I F WS E X I S T S;
IF_NOT_EXISTS: I F WS N O T WS E X I S T S;
EMPTY_BINDING_TABLE: EMPTY UNDERSCORE BINDING UNDERSCORE TABLE;
EMPTY_GRAPH: EMPTY UNDERSCORE GRAPH;
EMPTY_PROPERTY_GRAPH: EMPTY UNDERSCORE PROPERTY UNDERSCORE GRAPH;
EMPTY_TABLE: EMPTY UNDERSCORE TABLE;
EXISTING: E X I S T I N G;
FILTER: F I L T E R;
FLOAT: F L O A T;
FLOAT16: FLOAT '16';
FLOAT32: FLOAT '32';
FLOAT64: FLOAT '64';
FLOAT128: FLOAT '128';
FLOAT256: FLOAT '256';
FOR: F O R;
FROM: F R O M;
FUNCTIONS: F U N C T I O N S;
GQLSTATUS: G Q L S T A T U S;
GRANT: G R A N T;
GROUP: G R O U P;
HAVING: H A V I N G;
HOME: H O M E;
READ_ONLY: R E A D WS O N L Y;
READ_WRITE: R E A D WS W R I T E;
HOME_GRAPH: HOME UNDERSCORE GRAPH;
HOME_PROPERTY_GRAPH: HOME UNDERSCORE PROPERTY UNDERSCORE GRAPH;
HOME_SCHEMA: HOME UNDERSCORE SCHEMA;
INTEGER: I N T E G E R;
INTEGER8: INTEGER '8';
INTEGER16: INTEGER '16';
INTEGER32: INTEGER '32';
INTEGER64: INTEGER '64';
INTEGER128: INTEGER '128';
INTEGER256: INTEGER '256';
UINT: U I N T;
UINT8: UINT '8';
UINT16: UINT '16';
UINT32: UINT '32';
UINT64: UINT '64';
UINT128: UINT '128';
UINT256: UINT '256';
AT: A T;
AS: A S;
DO: D O;
IS: I S;
IF: I F;
OF: O F;
OR: O R;
TO: T O;
PATH_MODE: WALK | TRAIL | SIMPLE | ACYCLIC;
BOOL_TYPE: BOOL | BOOLEAN;
STRING_TYPE: STRING | VARCHAR;
AS_OR_EQUALS: AS | EQUALS;
TRUTH_VALUE: TRUE | FALSE | UNKNOWN | NULL;
TRIM_SPEC: LEADING | TRAILING | BOTH;
LENGTH: L E N G T H;
BYTE_LENGTH: B Y T E UNDERSCORE LENGTH;
OCTET_LENGTH: O C T E T UNDERSCORE LENGTH;
CHARACTER_LENGTH: C H A R A C T E R UNDERSCORE LENGTH;
ABS: A B S;
MOD: M O D;
LOG10: LOG '10';
LOG: L O G;
LN: L N;
EXP: E X P;
POWER: P O W E R;
SQRT: S Q R T;
FLOOR: F L O O R;
CEIL: (C E I L) | (C E I L I N G);
SIN: S I N;
COS: C O S;
TAN: T A N;
COT: C O T;
SINH: S I N H;
COSH: C O S H;
TANH: T A N H;
COTH: C O S H;
ASIN: A S I N;
ACOS: A C O S;
ATAN: A T A N;
ACOT: A C O T;
DEGREES: D E G R E E S;
RADIANS: R A D I A N S;
YEAR: (Y E A R) | (Y E A R S);
MONTH: (M O N T H) | (M O N T H S);
DAY: (D A Y) | (D A Y S);
HOUR: (H O U R) | (H O U R S);
MINUTE: (M I N U T E) | (M I N U T E S);
SECOND: (S E C O N D) | (S E C O N D S);
SIGN: PLUS | MINUS;
IN_DEGREE: 'inDegree';
OUT_DEGREE: 'outDegree';
ST_DEV: 'stDev';
ST_DEV_P: 'stDevP';
PERCENTILE_CONT: 'percentileCont';
PERCENTILE_DIST: 'percentileDist';
L_TRIM: 'lTrim';
R_TRIM: 'rTrim';
START_NODE: 'startNode';
END_NODE: 'endNode';
TAIL: 'tail';
TO_LOWER: 'toLower';
TO_UPPER: 'toUpper';
NORMAL_FORM: 'normalForm';
START2: '0b';
START8: '0o';
START16: '0x';
ESEPARATOR: 'E';
BYTE_STRING_START: 'X';
DIGIT16: [0-9a-fA-F];
DIGIT10: [0-9];
DIGIT8: [0-7];
DIGIT2: [0-1];
LETTER: [a-zA-Z];
WS: (WHITESPACE)+;

WHITESPACE
  : SPACE
  | TAB
  | LF
  | VT
  | FF
  | CR
  | FS
  | GS
  | RS
  | US
  | '\u1680'
  | '\u180e'
  | '\u2000'
  | '\u2001'
  | '\u2002'
  | '\u2003'
  | '\u2004'
  | '\u2005'
  | '\u2006'
  | '\u2008'
  | '\u2009'
  | '\u200a'
  | '\u2028'
  | '\u2029'
  | '\u205f'
  | '\u3000'
  | '\u00a0'
  | '\u2007'
  | '\u202f';

URI: URI_SCHEME? '://'? HOSTNAME ':' PORT ( '/' SEGMENT )*;
URI_SCHEME:	[a-zA-Z][a-zA-Z0-9+\-.]*;
HOSTNAME:	[a-zA-Z0-9\-.]+;
PORT:	[0-9]+;
SEGMENT: [a-zA-Z0-9\-._~!$&'()*+,;=:@]+;

fragment A: [aA];
fragment B: [bB];
fragment C: [dD];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];
fragment FF: [\f];
fragment RS: [\u001E];
fragment GS: [\u001D];
fragment FS: [\u001C];
fragment CR: [\r];
fragment SPACE: [ ];
fragment TAB: [\t];
fragment LF: [\n];
fragment VT: [\u000B];
fragment US: [\u001F];