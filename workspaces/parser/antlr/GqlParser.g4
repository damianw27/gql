parser grammar GqlParser;

options {
	language = JavaScript;
	tokenVocab = GqlLexer;
}

gqlParser:
	(LEFT_BRACKET requestParameterSet* RIGHT_BRACKET)? gqlProgram;

requestParameterSet:
	parameterDefinition (COMMA parameterDefinition)*;

gqlProgram: preamble? mainActivity;

mainActivity:
	sessionActivity
	| (
		sessionActivity? (transactionActivity sessionActivity?)* sessionCloseCommand?
	)
	| sessionCloseCommand;

sessionActivity:
	sessionClearCommand (sessionParameterCommand)*
	| (sessionParameterCommand)+;

sessionParameterCommand:
	sessionSetCommand
	| sessionRemoveCommand;

transactionActivity:
	startTransactionCommand (
		procedureSpecification (endTransactionCommand)?
	)
	| procedureSpecification (endTransactionCommand)
	| endTransactionCommand;

preamble: preambleOption (COMMA preambleOption)*;

preambleOption:
	PROFILE
	| EXPLAIN
	| preambleOptionIdentifier ( EQUALS literal)?;

preambleOptionIdentifier: identifier;

sessionSetCommand:
	SESSION_SET LEFT_BRACE (
		sessionSetSchemaClause
		| sessionSetGraphClause
		| sessionSetTimeZoneClause
		| sessionSetParameterClause
	) RIGHT_BRACE;

sessionSetSchemaClause: SCHEMA schemaReference;

sessionSetGraphClause: graphResolutionExpression;

sessionSetTimeZoneClause: TIME_ZONE setTimeZoneValue;

setTimeZoneValue: stringValueExpression;

sessionSetParameterClause:
	sessionParameterFlag? sessionParameter (IF_NOT_EXISTS)?;

sessionParameterFlag: MUTABLE | FINAL;

sessionParameter: PARAMETER? parameterDefinition;

sessionRemoveCommand: SESSION? REMOVE identifier IF_EXISTS?;

sessionClearCommand: SESSION? CLEAR;

sessionCloseCommand: SESSION? CLOSE;

startTransactionCommand:
	START_TRANSACTION transactionCharacteristics;

endTransactionCommand: commitCommand | rollbackCommand;

transactionCharacteristics:
	transactionMode (COMMA transactionMode)*;

transactionMode:
	transactionAccessMode
	| implementationDefinedAccessMode;

transactionAccessMode: READ_ONLY | READ_WRITE;

implementationDefinedAccessMode:;
// See the Syntax Rules;

rollbackCommand: ROLLBACK;

commitCommand: COMMIT;

nestedProcedureSpecification:
	LEFT_BRACE procedureSpecification RIGHT_BRACE;

procedureSpecification:
	catalogModifyingProcedureSpecification
	| dataModifyingProcedureSpecification
	| querySpecification
	| functionSpecification;

nestedCatalogModifyingProcedureSpecification:
	LEFT_BRACE catalogModifyingProcedureSpecification RIGHT_BRACE;

catalogModifyingProcedureSpecification: procedureBody;

nestedDataModifyingProcedureSpecification:
	LEFT_BRACE dataModifyingProcedureSpecification RIGHT_BRACE;

dataModifyingProcedureSpecification: procedureBody;

nestedQuerySpecification:
	LEFT_BRACE querySpecification RIGHT_BRACE;

querySpecification: procedureBody;

nestedFunctionSpecification:
	LEFT_BRACE functionSpecification RIGHT_BRACE;

functionSpecification: procedureBody;

procedureBody:
	staticVariableDefinitionBlock? bindingVariableDefinitionBlock? statementBlock;

staticVariableDefinitionBlock: staticVariableDefinition+;

bindingVariableDefinitionBlock: bindingVariableDefinition+;

statementBlock: statement ( thenStatement+)?;

thenStatement: THEN (yieldClause)? statement;

staticVariableDefinition:
	procedureVariableDefinition
	| queryVariableDefinition
	| functionVariableDefinition;

procedureVariableDefinition: (CATALOG)? PROCEDURE identifier ofTypeSignature procedureInitializer;

procedureInitializer:
	AS_OR_EQUALS procedureReference
	| AS? nestedProcedureSpecification
	| COLON catalogProcedureReference;

queryVariableDefinition:
	QUERY identifier ofTypeSignature queryInitializer;

queryInitializer:
	AS_OR_EQUALS (queryResolutionExpression | qualifiedQueryName)
	| AS? nestedQuerySpecification
	| COLON catalogQueryReference;

functionVariableDefinition:
	FUNCTION regularIdentifier ofTypeSignature functionInitializer;

functionInitializer: (AS | EQUALS) (
		functionResolutionExpression
		| qualifiedFunctionName
	)
	| nestedFunctionSpecification
	| COLON catalogFunctionReference;

compactVariableDeclarationList:
	compactVariableDeclaration (COMMA compactVariableDeclaration)*;

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

compactValueVariableDefinitionList:
	compactValueVariableDefinition (
		COMMA compactValueVariableDefinition
	)*;

compactValueVariableDefinition:
	regularIdentifier EQUALS valueExpression;

bindingVariableDefinitionList:
	bindingVariableDefinition (COMMA bindingVariableDefinition)*;

bindingVariableDefinition:
	graphVariableDefinition
	| bindingTableVariableDefinition
	| valueVariableDefinition;

parameterDefinition:
	graphParameterDefinition
	| bindingTableParameterDefinition
	| valueParameterDefinition;

graphVariableDeclaration:
	PROPERTY? GRAPH graphVariable ofGraphType;

graphVariableDefinition:
	PROPERTY? GRAPH graphVariable ofGraphType graphInitializer;

graphParameterDefinition:
	PROPERTY? GRAPH parameterName IF_NOT_EXISTS? ofGraphType graphInitializer;

graphVariable: regularIdentifier;

graphInitializer: (AS | EQUALS) graphExpression
	| nestedGraphQuerySpecification
	| COLON catalogGraphReference;

bindingTableVariableDeclaration:
	BINDING? TABLE bindingTableVariable ofBindingTableType;

bindingTableVariableDefinition:
	BINDING? TABLE bindingTableVariable ofBindingTableType bindingTableInitializer;

bindingTableParameterDefinition:
	BINDING? TABLE identifier IF_NOT_EXISTS? ofBindingTableType bindingTableInitializer;

bindingTableVariable: regularIdentifier;

bindingTableInitializer: (AS | EQUALS) bindingTableReference
	| nestedQuerySpecification
	| COLON catalogBindingTableReference;

valueVariableDeclaration: VALUE regularIdentifier ofValueType?;

valueVariableDefinition:
	VALUE regularIdentifier ofValueType? valueInitializer;

valueParameterDefinition:
	VALUE identifier IF_NOT_EXISTS? ofValueType? valueInitializer;

valueInitializer: (AS | EQUALS) valueExpression
	| nestedFunctionSpecification
	| COLON catalogObjectReference;

primaryResultObjectExpression:
	graphExpression
	| bindingTableReference;

graphExpression:
	copyGraphExpression
	| graphSpecification
	| graphReference;

copyGraphExpression: COPY OF graphExpression;

graphTypeExpression:
	copyGraphTypeExpression
	| likeGraphExpression
	| graphTypeSpecification
	| graphTypeReference;

asGraphType:
	AS_OR_EQUALS graphTypeExpression
	| likeGraphExpressionShorthand
	| AS nestedGraphTypeSpecification;

copyGraphTypeExpression: COPY OF graphTypeReference;

likeGraphExpression:
	PROPERTY GRAPH TYPE likeGraphExpressionShorthand;

ofGraphType:
	ofTypePrefix graphTypeExpression
	| likeGraphExpressionShorthand
	| ofTypePrefix nestedGraphTypeSpecification;

likeGraphExpressionShorthand: LIKE graphExpression;

ofBindingTableType:
	ofTypePrefix bindingTableTypeExpression
	| likeBindingTableShorthand;

ofTypePrefix: DOUBLE_COLON | OF;

bindingTableTypeExpression:
	bindingTableType
	| likeBindingTableType;

bindingTableType: BINDING? TABLE recordValueType;

likeBindingTableType: BINDING? TABLE likeBindingTableShorthand;

likeBindingTableShorthand: LIKE bindingTableReference;

statement:
	atSchemaClause (
		linearCatalogModifyingStatement
		| dataModifyingStatement
		| queryStatement
	);

dataModifyingStatement:
	conditionalDataModifyingStatement
	| linearDataModifyingStatement;

queryStatement:
	compositeQueryExpression
	| conditionalQueryStatement;

callProcedureStatement: statementMode CALL procedureCall;

statementMode: OPTIONAL | MANDATORY;

simpleCatalogModifyingStatement:
	primitiveCatalogModifyingStatement
	| callCatalogModifyingProcedureStatement;

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

simpleDataReadingStatement: matchStatement | callQueryStatement;

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

linearCatalogModifyingStatement:
	simpleCatalogModifyingStatement*;

createSchemaStatement:
	CREATE SCHEMA catalogSchemaParentAndName (IF_NOT_EXISTS)?;

dropSchemaStatement:
	DROP SCHEMA catalogSchemaParentAndName (IF_EXISTS)?;

createGraphStatement: (CREATE | OR REPLACE) PROPERTY? GRAPH catalogGraphParentAndName IF_NOT_EXISTS?
		(
		ofGraphType
		| graphSource
	)?;

graphSource: AS copyGraphExpression;

graphSpecification:
	PROPERTY? GRAPH (
		nestedGraphQuerySpecification
		| nestedAmbientDataModifyingProcedureSpecification
	);

nestedGraphQuerySpecification: nestedQuerySpecification;

nestedAmbientDataModifyingProcedureSpecification:
	nestedDataModifyingProcedureSpecification;

dropGraphStatement:
	DROP GRAPH catalogGraphParentAndName (IF_EXISTS)?;

createGraphTypeStatement: (CREATE | OR REPLACE) PROPERTY? GRAPH TYPE catalogGraphTypeParentAndName
		IF_NOT_EXISTS? graphTypeInitializer;

graphTypeInitializer:
	asGraphType
	| COLON catalogGraphTypeReference;

graphTypeSpecification:
	PROPERTY? GRAPH TYPE nestedGraphTypeSpecification;

nestedGraphTypeSpecification:
	LEFT_BRACE graphTypeSpecificationBody RIGHT_BRACE;

graphTypeSpecificationBody: elementTypeDefinitionList;

elementTypeDefinitionList:
	elementTypeDefinition (COMMA elementTypeDefinition)*;

elementTypeDefinition: nodeTypeDefinition | edgeTypeDefinition;

nodeTypeDefinition:
	LEFT_PAREN identifier? nodeTypeFiller? RIGHT_PAREN
	| nodeSynonym TYPE identifier nodeTypeFiller;

nodeTypeFiller:
	nodeTypeLabelSetDefinition
	| nodeTypePropertyTypeSetDefinition
	| nodeTypeLabelSetDefinition nodeTypePropertyTypeSetDefinition;

nodeTypeLabelSetDefinition: labelSetDefinition;

nodeTypePropertyTypeSetDefinition: propertyTypeSetDefinition;

edgeTypeDefinition:
	fullEdgeTypePattern
	| abbreviatedEdgeTypePattern
	| edgeKind edgeSynonym TYPE identifier edgeTypeFiller endpointDefinition;

edgeTypeFiller:
	edgeTypeLabelSetDefinition
	| edgeTypePropertyTypeSetDefinition
	| edgeTypeLabelSetDefinition edgeTypePropertyTypeSetDefinition;

edgeTypeLabelSetDefinition: labelSetDefinition;

edgeTypePropertyTypeSetDefinition: propertyTypeSetDefinition;

fullEdgeTypePattern:
	fullEdgeTypePatternPointingRight
	| fullEdgeTypePatternPointingLeft
	| fullEdgeTypePatternAnyDirection;

fullEdgeTypePatternPointingRight:
	sourceNodeTypeReference arcTypePointingRight destinationNodeTypeReference;

fullEdgeTypePatternPointingLeft:
	destinationNodeTypeReference arcTypePointingLeft sourceNodeTypeReference;

fullEdgeTypePatternAnyDirection:
	sourceNodeTypeReference arcTypeAnyDirection destinationNodeTypeReference;

arcTypePointingRight:
	LEFT_ARROW_MIUNUS arcTypeFiller MINUS_RIGHT_ARROW;

arcTypePointingLeft:
	LEFT_ARROW_MIUNUS arcTypeFiller MINUS_RIGHT_ARROW;

arcTypeAnyDirection:
	TILDE_LEFT_BRACKET arcTypeFiller RIGHT_ARROW_TILDE;

arcTypeFiller: identifier? edgeTypeFiller?;

abbreviatedEdgeTypePattern:
	abbreviatedEdgeTypePatternPointingRight
	| abbreviatedEdgeTypePatternPointingLeft
	| abbreviatedEdgeTypePatternAnyDirection;

abbreviatedEdgeTypePatternPointingRight:
	sourceNodeTypeReference MINUS_RIGHT_ARROW destinationNodeTypeReference;

abbreviatedEdgeTypePatternPointingLeft:
	destinationNodeTypeReference LEFT_ARROW_MIUNUS sourceNodeTypeReference;

abbreviatedEdgeTypePatternAnyDirection:
	sourceNodeTypeReference TILDE destinationNodeTypeReference;

sourceNodeTypeReference:
	LEFT_PAREN identifier RIGHT_PAREN
	| LEFT_PAREN nodeTypeFiller? RIGHT_PAREN;

destinationNodeTypeReference:
	LEFT_PAREN identifier RIGHT_PAREN
	| LEFT_PAREN nodeTypeFiller? RIGHT_PAREN;

edgeKind: DIRECTED | UNDIRECTED;

endpointDefinition: CONNECTING endpointPairDefinition;

endpointPairDefinition:
	endpointPairDefinitionPointingRight
	| endpointPairDefinitionPointingLeft
	| endpointPairDefinitionAnyDirection
	| abbreviatedEdgeTypePattern;

endpointPairDefinitionPointingRight:
	LEFT_PAREN identifier connectorPointingRight identifier RIGHT_PAREN;

endpointPairDefinitionPointingLeft:
	LEFT_PAREN identifier LEFT_ARROW_MIUNUS identifier RIGHT_PAREN;

endpointPairDefinitionAnyDirection:
	LEFT_PAREN identifier connectorAnyDirection identifier RIGHT_PAREN;

connectorPointingRight: TO | MINUS_RIGHT_ARROW;

connectorAnyDirection: TO | TILDE;

labelSetDefinition:
	LABEL identifier
	| LABELS labelExpression
	| isLabelExpression;

propertyTypeSetDefinition:
	LEFT_BRACE propertyTypeDefinitionList? RIGHT_BRACE;

propertyTypeDefinitionList:
	propertyTypeDefinition (COMMA propertyTypeDefinition)*;

propertyTypeDefinition: identifier identifier;

dropGraphTypeStatement:
	DROP PROPERTY? GRAPH TYPE catalogGraphTypeParentAndName IF_EXISTS?;

createProcedureStatement: (CREATE | OR REPLACE) PROCEDURE catalogProcedureParentAndName
		ofTypeSignature IF_NOT_EXISTS? procedureInitializer;

dropProcedureStatement:
	DROP PROCEDURE catalogProcedureParentAndName IF_EXISTS?;

createQueryStatement: (CREATE | OR REPLACE) QUERY catalogQueryParentAndName ofTypeSignature
		IF_NOT_EXISTS? queryInitializer;

dropQueryStatement:
	DROP QUERY catalogQueryParentAndName IF_EXISTS?;

createFunctionStatement: (CREATE | OR REPLACE) FUNCTION catalogFunctionParentAndName ofTypeSignature
		IF_NOT_EXISTS? functionInitializer;

dropFunctionStatement:
	DROP FUNCTION catalogFunctionParentAndName IF_EXISTS?;

callCatalogModifyingProcedureStatement: callProcedureStatement;

linearDataModifyingStatement:
	focusedLinearDataModifyingStatement
	| ambientLinearDataModifyingStatement;

focusedLinearDataModifyingStatement:
	useGraphClause focusedLinearDataModifyingStatementBody+;

focusedLinearDataModifyingStatementBody:
	simpleLinearQueryStatement (
		useGraphClause simpleLinearQueryStatement
	)* simpleDataModifyingStatement simpleDataAccessingStatement (
		useGraphClause simpleDataAccessingStatement
	)* primitiveResultStatement
	| nestedDataModifyingProcedureSpecification;

ambientLinearDataModifyingStatement:
	simpleLinearQueryStatement simpleDataModifyingStatement simpleDataAccessingStatement
		primitiveResultStatement
	| nestedDataModifyingProcedureSpecification;

conditionalDataModifyingStatement:
	whenThenLinearDataModifyingStatementBranch+ elseLinearDataModifyingStatementBranch?;

whenThenLinearDataModifyingStatementBranch:
	whenClause THEN linearDataModifyingStatement
	| whenClause nestedDataModifyingProcedureSpecification;

elseLinearDataModifyingStatementBranch:
	ELSE linearDataModifyingStatement;

whenClause: WHEN searchCondition;

doStatement: DO nestedDataModifyingProcedureSpecification;

insertStatement:
	INSERT simpleGraphPattern
	| OPTIONAL INSERT simpleGraphPattern whenClause?;

mergeStatement: MERGE simpleGraphPattern;

setStatement: SET setItemList whenClause?;

setItemList: setItem (COMMA setItem)*;

setItem: setPropertyItem | setAllPropertiesItem | setLabelItem;

setPropertyItem:
	identifier PERIOD identifier EQUALS valueExpression;

setAllPropertiesItem: identifier EQUALS valueExpression;

setLabelItem: labelSetExpression;

labelSetExpression:
	AMPERSAND identifier+ (AMPERSAND identifier+)*;

removeStatement: REMOVE removeItemList whenClause?;

removeItemList: removeItem (COMMA removeItem)*;

removeItem: removePropertyItem | removeLabelItem;

removePropertyItem: identifier PERIOD identifier;

removeLabelItem: identifier COLON labelSetExpression;

deleteStatement: DETACH? DELETE deleteItemList whenClause?;

deleteItemList: valueExpression (COMMA valueExpression)*;

compositeQueryStatement: compositeQueryExpression;

conditionalQueryStatement:
	whenThenLinearQueryBranch+ (elseLinearQueryBranch)?;

whenThenLinearQueryBranch:
	whenClause THEN linearQueryStatement
	| whenClause nestedQuerySpecification;

elseLinearQueryBranch: ELSE linearQueryStatement;

compositeQueryExpression:
	compositeQueryExpression queryConjunction linearQueryStatement
	| linearQueryStatement;

queryConjunction: setOperator | OTHERWISE;

setOperator:
	UNION (setQuantifier)?
	| EXCEPT (setQuantifier)?
	| INTERSECT (setQuantifier)?;

linearQueryStatement:
	focusedLinearQueryStatement
	| ambientLinearQueryStatement;

ambientLinearQueryStatement:
	simpleLinearQueryStatement simpleDataAccessingStatement simpleDataAccessingStatement
		primitiveResultStatement
	| nestedQuerySpecification;

focusedLinearQueryStatement:
	fromGraphClause focusedLinearQueryStatementBody
	| selectStatement;

focusedLinearQueryStatementBody: (
		simpleLinearQueryStatement (
			fromGraphClause simpleLinearQueryStatement
		)*
	) primitiveResultStatement
	| nestedQuerySpecification;

simpleLinearQueryStatement: simpleQueryStatement;

matchStatement: (statementMode)? MATCH graphPattern;

callQueryStatement: callProcedureStatement;

mandatoryStatement: MANDATORY procedureCall;

optionalStatement: OPTIONAL procedureCall;

filterStatement: FILTER (whereClause | searchCondition);

letStatement:
	LET compactVariableDefinitionList
	| statementMode LET compactVariableDefinitionList whereClause;

aggregateStatement:
	AGGREGATE compactValueVariableDefinitionList whereClause;

forStatement:
	statementMode? FOR forItemList forOrdinalityOrIndex? whereClause?;

forItemList: forItem (AND forItem)*;

forItem: forItemAlias collectionValueExpression;

forItemAlias: identifier IN;

forOrdinalityOrIndex: WITH (ORDINALITY | INDEX) (identifier)?;

orderByAndPageStatement: (
		orderByClause (offsetClause limitClause?)?
	)?
	| (offsetClause limitClause?)?
	| limitClause;

callFunctionStatement: callProcedureStatement;

primitiveResultStatement: (
		returnStatement orderByAndPageStatement
	)?
	| projectStatement
	| END;

returnStatement: RETURN returnStatementBody;

returnStatementBody:
	setQuantifier? (ASTERISK | returnItemList) groupByClause?;

returnItemList: returnItem (COMMA returnItem)*;

returnItem: (valueExpression returnItemAlias?);

returnItemAlias: AS identifier;

selectStatement:
	SELECT setQuantifier? selectItemList selectStatementBody whereClause? groupByClause?
		havingClause? orderByClause? (offsetClause limitClause?)?;

selectItemList: selectItem (COMMA selectItem)*;

selectItem: (valueExpression selectItemAlias?);

selectItemAlias: AS identifier;

havingClause: HAVING searchCondition;

selectStatementBody: (FROM selectGraphMatchList)
	| (selectQuerySpecification);

selectGraphMatchList:
	selectGraphMatch (COMMA selectGraphMatch)*;

selectGraphMatch: graphExpression matchStatement;

selectQuerySpecification:
	FROM nestedQuerySpecification
	| fromGraphClause nestedQuerySpecification;

projectStatement: PROJECT valueExpression;

fromGraphClause: FROM graphExpression;

useGraphClause: USE graphExpression;

atSchemaClause: AT schemaReference;

ofTypeSignature: (ofTypePrefix typeSignature)?;

typeSignature: (
		parenthesizedFormalParameterList (
			ofTypePrefix procedureResultType
		)?
	);

parenthesizedFormalParameterList:
	LEFT_PAREN formalParameterList RIGHT_PAREN;

formalParameterList: (
		mandatoryFormalParameterList (
			COMMA optionalFormalParameterList
		)?
	)?
	| optionalFormalParameterList;

mandatoryFormalParameterList: formalParameterDeclarationList;

optionalFormalParameterList:
	OPTIONAL formalParameterDefinitionList;

formalParameterDeclarationList:
	formalParameterDeclaration (COMMA formalParameterDeclaration)*;

formalParameterDeclaration: (
		parameterCardinality compactVariableDeclaration
	);

formalParameterDefinitionList:
	formalParameterDefinition (COMMA formalParameterDefinition)*;

formalParameterDefinition: (
		parameterCardinality compactVariableDefinition
	);

parameterCardinality: (SINGLE | MULTI | MULTIPLE);

procedureResultType: valueType;

graphPattern: (
		pathPatternList (
			keepClause graphPatternWhereClause? yieldClause?
		)?
	);

pathPatternList: pathPattern (COMMA pathPattern)*;

pathPattern: (
		(regularIdentifier EQUALS)? (
			pathPatternPrefix pathPatternExpression
		)
	);

keepClause: KEEP pathPatternPrefix;

graphPatternWhereClause: WHERE searchCondition;

pathPatternExpression:
	pathTerm
	| pathMultisetAlternation
	| pathPatternUnion;

pathMultisetAlternation:
	pathTerm MULTISET_ALT_OPERATOR pathTerm (
		MULTISET_ALT_OPERATOR pathTerm
	)*;

pathPatternUnion:
	pathTerm VERTICAL_BAR pathTerm (VERTICAL_BAR pathTerm)*;

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

elementPattern: nodePattern | edgePattern;

nodePattern: LEFT_PAREN elementPatternFiller RIGHT_PAREN;

elementPatternFiller:
	regularIdentifier? isLabelExpression? elementPatternPredicate? elementPatternCostClause?;

isLabelExpression: IS | COLON labelExpression;

elementPatternPredicate:
	elementPatternWhereClause
	| elementPropertySpecification;

elementPatternWhereClause: WHERE searchCondition;

elementPropertySpecification:
	LEFT_BRACE propertyKeyValuePairList RIGHT_BRACE;

propertyKeyValuePairList:
	propertyKeyValuePair (COMMA propertyKeyValuePair)*;

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

fullEdgePointingLeft:
	LEFT_ARROW_RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

fullEdgeUndirected:
	TILDE_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgePointingRight:
	MINUS_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_RIGHT_ARROW;

fullEdgeLeftOrUndirected:
	LEFT_ARROW_TILDE RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgeUndirectedOrRight:
	TILDE RIGHT_BRACKET elementPatternFiller RIGHT_BRACKET TILDE_RIGHT_ARROW;

fullEdgeLeftOrRight:
	LEFT_ANGLE_BRACKET LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_RIGHT_ARROW;

fullEdgeAnyDirection:
	MINUS_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

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

generalQuantifier:
	LEFT_BRACE unsignedInteger? COMMA unsignedInteger? RIGHT_BRACE;

parenthesizedPathPatternExpression:
	LEFT_PAREN subpathVariableDeclaration? pathModePrefix? pathPatternExpression?
		parenthesizedPathPatternWhereClause? costClause? RIGHT_PAREN
	| LEFT_BRACKET subpathVariableDeclaration? pathModePrefix? pathPatternExpression?
		parenthesizedPathPatternWhereClause? costClause? RIGHT_BRACKET;

subpathVariableDeclaration: regularIdentifier EQUALS;

parenthesizedPathPatternWhereClause: WHERE searchCondition;

pathPatternPrefix: pathModePrefix | pathSearchPrefix;

pathModePrefix: PATH_MODE PATH?;

pathSearchPrefix:
	allPathSearch
	| anyPathSearch
	| shortestPathSearch;

allPathSearch: ALL PATH_MODE? PATH?;

anyPathSearch:
	ANY (unsignedIntegerSpecification)? PATH_MODE? PATH?;

shortestPathSearch:
	allShortestPathSearch
	| anyShortestPathSearch
	| countedShortestPathSearch
	| countedShortestGroupSearch;

allShortestPathSearch: ALL SHORTEST PATH_MODE? (PATH | PATHS)?;

anyShortestPathSearch: ANY SHORTEST PATH_MODE? (PATH | PATHS)?;

countedShortestPathSearch:
	SHORTEST unsignedIntegerSpecification PATH_MODE? PATH?;

countedShortestGroupSearch:
	SHORTEST unsignedIntegerSpecification PATH_MODE? PATH? {};

simpleGraphPattern: simplePathPatternList;

simplePathPatternList:
	simplePathPattern (COMMA simplePathPattern)*;

simplePathPattern: pathPatternExpression;

labelExpression:
	labelExpression VERTICAL_BAR labelTerm
	| labelTerm;

labelTerm: labelTerm AMPERSAND labelFactor | labelFactor;

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

simplifiedDefaultingLeft:
	LEFT_ARROW_MIUNUS simplifiedContents MINUS_RIGHT_ARROW;

simplifiedDefaultingUndirected:
	TILDE_SLASH simplifiedContents SLASH_TILDE;

simplifiedDefaultingRight:
	MINUS SOLIDUS simplifiedContents SOLIDUS MINUS;

simplifiedDefaultingLeftOrUndirected:
	LEFT_ARROW_TILDE SOLIDUS simplifiedContents SLASH_TILDE;

simplifiedDefaultingUndirectedOrRight:
	TILDE_SLASH simplifiedContents SLASH_TILDE MINUS;

simplifiedDefaultingLeftOrRight:
	LEFT_ARROW_TILDE SOLIDUS simplifiedContents SLASH_MINUS;

simplifiedDefaultingAnyDirection:
	MINUS SOLIDUS simplifiedContents MINUS_RIGHT_ARROW;

simplifiedContents:
	simplifiedTerm
	| simplifiedPathUnion
	| simplifiedMultisetAlternation;

simplifiedPathUnion:
	simplifiedTerm (VERTICAL_BAR simplifiedTerm)*;

simplifiedMultisetAlternation:
	simplifiedTerm (MULTISET_ALT_OPERATOR simplifiedTerm)*;

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

simplifiedOverrideLeft:
	LEFT_ARROW_MIUNUS simplifiedSecondary MINUS_RIGHT_ARROW;

simplifiedOverrideUndirected:
	TILDE_SLASH simplifiedSecondary SLASH_TILDE;

simplifiedOverrideRight:
	MINUS SOLIDUS simplifiedSecondary SLASH_MINUS;

simplifiedOverrideLeftOrUndirected:
	LEFT_ARROW_TILDE SOLIDUS simplifiedSecondary SLASH_TILDE;

simplifiedOverrideUndirectedOrRight:
	TILDE_SLASH simplifiedSecondary SLASH_TILDE MINUS;

simplifiedOverrideLeftOrRight:
	LEFT_ARROW_MIUNUS SOLIDUS simplifiedSecondary SLASH_MINUS;

simplifiedOverrideAnyDirection:
	MINUS SOLIDUS simplifiedSecondary MINUS_RIGHT_ARROW;

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

namedProcedureCall:
	procedureReference LEFT_PAREN procedureArgumentList RIGHT_PAREN yieldClause;

procedureArgumentList:
	procedureArgument (COMMA procedureArgument)*;

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

generalSetFunction:
	generalSetFunctionType LEFT_PAREN setQuantifier valueExpression RIGHT_PAREN;

binarySetFunction:
	binarySetFunctionType LEFT_PAREN dependentValueExpression COMMA independentValueExpression
		RIGHT_PAREN;

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

sortSpecificationList:
	sortSpecification (COMMA sortSpecification)*;

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

graphReference: graphResolutionExpression | localGraphReference;

graphResolutionExpression:
	LEFT_BRACKET RIGHT_BRACKET GRAPH catalogGraphReference;

catalogGraphReference:
	catalogGraphParentAndName
	| predefinedGraphParameter
	| externalObjectReference;

catalogGraphParentAndName:
	graphParentSpecification identifier
	| urlPathParameter;

graphParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

localGraphReference:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

graphTypeReference:
	graphTypeResolutionExpression
	| qualifiedGraphTypeName;

graphTypeResolutionExpression:
	LEFT_BRACKET RIGHT_BRACKET GRAPH TYPE catalogGraphTypeReference;

catalogGraphTypeReference:
	catalogGraphTypeParentAndName
	| externalObjectReference;

catalogGraphTypeParentAndName:
	graphTypeParentSpecification identifier
	| urlPathParameter;

graphTypeParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

qualifiedGraphTypeName:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

bindingTableReference:
	bindingTableResolutionExpression
	| localBindingTableReference;

bindingTableResolutionExpression:
	LEFT_BRACKET RIGHT_BRACKET TABLE catalogBindingTableReference;

catalogBindingTableReference:
	catalogBindingTableParentAndName
	| predefinedTableParameter
	| externalObjectReference;

catalogBindingTableParentAndName:
	bindingTableParentSpecification identifier
	| urlPathParameter;

bindingTableParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

localBindingTableReference: qualifiedBindingTableName;

qualifiedBindingTableName:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

procedureReference:
	PROCEDURE catalogProcedureReference
	| localProcedureReference;

catalogProcedureReference:
	catalogProcedureParentAndName
	| externalObjectReference;

catalogProcedureParentAndName:
	procedureParentSpecification identifier
	| urlPathParameter;

procedureParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

localProcedureReference: qualifiedProcedureName;

qualifiedProcedureName:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

queryResolutionExpression: QUERY catalogQueryReference;

catalogQueryReference:
	catalogQueryParentAndName
	| externalObjectReference;

catalogQueryParentAndName:
	queryParentSpecification identifier
	| urlPathParameter;

queryParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

qualifiedQueryName:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

functionResolutionExpression: FUNCTION catalogFunctionReference;

catalogFunctionReference:
	catalogFunctionParentAndName
	| externalObjectReference;

catalogFunctionParentAndName:
	functionParentSpecification identifier
	| urlPathParameter;

functionParentSpecification:
	LEFT_BRACKET parentCatalogObjectReference RIGHT_BRACKET LEFT_BRACKET qualifiedObjectName PERIOD
		RIGHT_BRACKET;

qualifiedFunctionName:
	LEFT_BRACKET qualifiedObjectName PERIOD RIGHT_BRACKET identifier;

catalogObjectReference: catalogUrlPath;

parentCatalogObjectReference:
	catalogObjectReference DOUBLE_SOLIDUS;

catalogUrlPath:
	absoluteUrlPath
	| relativeUrlPath
	| parameterizedUrlPath;
absoluteUrlPath:
	DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

relativeUrlPath:
	parentObjectRelativeUrlPath
	| simpleRelativeUrlPath
	| PERIOD;

parentObjectRelativeUrlPath:
	predefinedParentObjectParameter DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

simpleRelativeUrlPath:
	DOUBLE_PERIOD DOUBLE_SOLIDUS LEFT_BRACKET DOUBLE_PERIOD RIGHT_BRACKET DOUBLE_SOLIDUS
		LEFT_BRACKET simpleUrlPath RIGHT_BRACKET
	| simpleUrlPath;

parameterizedUrlPath:
	identifier DOUBLE_SOLIDUS LEFT_BRACKET simpleUrlPath RIGHT_BRACKET;

simpleUrlPath:
	identifier DOUBLE_SOLIDUS LEFT_BRACKET identifier RIGHT_BRACKET;

urlSegment: identifier;

qualifiedObjectName: qualifiedNamePrefix identifier;

qualifiedNamePrefix:
	LEFT_BRACKET identifier PERIOD RIGHT_BRACKET;

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

comparisonPredicate:
	nonParenthesizedValueExpressionPrimary comparisonPredicatePart2;

comparisonPredicatePart2:
	COMPARE_OPERATOR nonParenthesizedValueExpressionPrimary;

existsPredicate:
	EXISTS (
		LEFT_PAREN graphPattern RIGHT_PAREN
		| nestedQuerySpecification
	);

nullPredicate: valueExpressionPrimary nullPredicatePart2;

nullPredicatePart2: IS NOT? NULL;

normalizedPredicate:
	stringValueExpression normalizedPredicatePart2;

normalizedPredicatePart2: IS NOT? NORMAL_FORM? NORMALIZED;

directedPredicate: elementReference directedPredicatePart2;

directedPredicatePart2: IS? DIRECTED;

labeledPredicate: elementReference labeledPredicatePart2;

labeledPredicatePart2: IS? LABELED labelExpression;

sourceDestinationPredicate:
	elementReference sourcePredicatePart2
	| elementReference destinationPredicatePart2;

sourcePredicatePart2: IS NOT? SOURCE OF? elementReference;

destinationPredicatePart2:
	IS NOT? DESTINATION OF? elementReference;

allDifferentPredicate:
	ALL_DIFFERENT LEFT_PAREN elementReference COMMA elementReference (
		COMMA elementReference
	)* RIGHT_PAREN;

samePredicate:
	SAME LEFT_PAREN elementReference COMMA elementReference (
		COMMA elementReference
	)* RIGHT_PAREN;

valueSpecification: literal | parameterValueSpecification;

unsignedValueSpecification:
	unsignedLiteral
	| parameterValueSpecification;

unsignedIntegerSpecification: unsignedInteger | identifier;

parameterValueSpecification: identifier | predefinedParameter;

predefinedParameter:
	predefinedParentObjectParameter
	| predefinedTableParameter
	| CURRENT_USER;

predefinedParentObjectParameter:
	predefinedSchemaParameter
	| predefinedGraphParameter;

predefinedSchemaParameter: HOME_SCHEMA | CURRENT_SCHEMA;

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

booleanTerm: booleanFactor | booleanTerm AND booleanFactor;

booleanFactor: NOT? booleanTest;

booleanTest:
	booleanPrimary ((IS NOT? | EQUALS | NOT_EQUALS) TRUTH_VALUE)?;

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

charLengthExpression:
	CHARACTER_LENGTH LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

byteLengthExpression: (BYTE_LENGTH | OCTET_LENGTH) LEFT_PAREN stringValueExpression RIGHT_PAREN;

pathLengthExpression: LENGTH LEFT_PAREN identifier RIGHT_PAREN;

absoluteValueExpression:
	ABS LEFT_PAREN numericValueExpression RIGHT_PAREN;

modulusExpression:
	MOD LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

trigonometricFunction:
	TRYGONOMETRIC_FUNCTION_NAME LEFT_PAREN numericValueExpression RIGHT_PAREN;

generalLogarithmFunction:
	LOG LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

commonLogarithm:
	LOG10 LEFT_PAREN numericValueExpression RIGHT_PAREN;

naturalLogarithm:
	LN LEFT_PAREN numericValueExpression RIGHT_PAREN;

exponentialFunction:
	EXP LEFT_PAREN numericValueExpression RIGHT_PAREN;

powerFunction:
	POWER LEFT_PAREN numericValueExpression COMMA numericValueExpression RIGHT_PAREN;

squareRoot: SQRT LEFT_PAREN numericValueExpression RIGHT_PAREN;

floorFunction:
	FLOOR LEFT_PAREN numericValueExpression RIGHT_PAREN;

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
	SUBSTRING LEFT_PAREN characterStringValueExpression COMMA startPosition (
		COMMA stringLength
	)? RIGHT_PAREN
	| LEFT LEFT_PAREN characterStringValueExpression COMMA stringLength RIGHT_PAREN
	| RIGHT LEFT_PAREN characterStringValueExpression COMMA stringLength RIGHT_PAREN;

fold: (UPPER | TO_UPPER | LOWER | TO_LOWER) LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

trimFunction:
	TRIM LEFT_PAREN characterStringValueExpression (
		COMMA TRIM_SPEC (COMMA characterStringValueExpression)?
	)? RIGHT_PAREN
	| L_TRIM LEFT_PAREN characterStringValueExpression RIGHT_PAREN
	| R_TRIM LEFT_PAREN characterStringValueExpression RIGHT_PAREN;

normalizeFunction:
	NORMALIZE LEFT_PAREN characterStringValueExpression (
		COMMA normalForm
	)? RIGHT_PAREN;

normalForm: NFC | NFD | NFKC | NFKD;

byteStringFunction:
	byteSubstringFunction
	| byteStringTrimFunction;

byteSubstringFunction:
	SUBSTRING LEFT_PAREN byteStringValueExpression COMMA startPosition (
		COMMA stringLength
	)? RIGHT_PAREN
	| LEFT LEFT_PAREN byteStringValueExpression COMMA stringLength RIGHT_PAREN
	| RIGHT LEFT_PAREN byteStringValueExpression COMMA stringLength RIGHT_PAREN;

byteStringTrimFunction:
	TRIM LEFT_PAREN byteStringValueExpression (
		COMMA TRIM_SPEC (COMMA byteStringValueExpression)?
	)? RIGHT_PAREN
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

durationFunction:
	DURATION LEFT_PAREN durationFunctionParameters RIGHT_PAREN;

durationFunctionParameters:
	durationString
	| mapValueConstructor;

durationAbsoluteValueFunction:
	ABS LEFT_PAREN durationValueExpression RIGHT_PAREN;

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

tailListFunction:
	TAIL LEFT_PAREN listValueExpression RIGHT_PAREN;

trimListFunction:
	TRIM LEFT_PAREN listValueExpression COMMA numericValueExpression RIGHT_PAREN;

listValueConstructor: listValueConstructorByEnumeration;

listValueConstructorByEnumeration:
	listValueTypeName LEFT_BRACKET listElementList RIGHT_BRACKET;

listElementList: valueExpression (COMMA valueExpression)*;

multisetValueExpression:
	multisetTerm
	| multisetValueExpression (
		MULTISET UNION (ALL | DISTINCT)? multisetTerm
	)
	| multisetValueExpression (
		MULTISET EXCEPT (ALL | DISTINCT)? multisetTerm
	);

multisetTerm:
	multisetPrimary
	| multisetTerm (
		MULTISET INTERSECT (ALL | DISTINCT)? multisetPrimary
	);

multisetPrimary: multisetValueFunction | valueExpressionPrimary;

multisetValueFunction:
	SET LEFT_PAREN multisetValueConstructorByEnumeration RIGHT_PAREN;

multisetValueConstructorByEnumeration:
	MULTISET LEFT_BRACE multisetElementList RIGHT_BRACE;

multisetElementList: valueExpression (COMMA valueExpression)*;

setValueConstructor: setValueConstructorByEnumeration;

setValueConstructorByEnumeration:
	SET LEFT_BRACE setElementList RIGHT_BRACE;

setElementList: valueExpression (COMMA valueExpression)*;

orderedSetValueConstructorByEnumeration:
	ORDERED SET LEFT_BRACE orderedSetElementList RIGHT_BRACE
	| LEFT_BRACE orderedSetElementList RIGHT_BRACE
	| LEFT_BRACKET orderedSetElementList RIGHT_BRACKET;

orderedSetElementList: valueExpression (COMMA valueExpression)*;

mapValueConstructor: mapValueConstructorByEnumeration;

mapValueConstructorByEnumeration:
	MAP LEFT_BRACE mapElementList RIGHT_BRACE;

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

castSpecification:
	CAST LEFT_PAREN (valueExpression | NULL) AS predefinedType RIGHT_PAREN;

multisetSetFunction:
	SET LEFT_PAREN multisetValueExpression RIGHT_PAREN;

element_idFunction:
	ELEMENT_ID LEFT_PAREN elementReference RIGHT_PAREN;

literal: signedNumericLiteral | generalLiteral;

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

unsignedLiteral: unsignedNumericLiteral | generalLiteral;

characterStringLiteral:
	singleQuotedCharacterSequence
	| doubleQuotedCharacterSequence;

unbrokenCharacterStringLiteral:
	unbrokenSingleQuotedCharacterSequence
	| unbrokenDoubleQuotedCharacterSequence;

singleQuotedCharacterSequence:
	unbrokenSingleQuotedCharacterSequence (
		separator unbrokenSingleQuotedCharacterSequence
	)*;

doubleQuotedCharacterSequence:
	unbrokenDoubleQuotedCharacterSequence (
		separator unbrokenDoubleQuotedCharacterSequence
	)*;

unbrokenSingleQuotedCharacterSequence:
	QUOTE (characterRepresentation)* QUOTE;

unbrokenDoubleQuotedCharacterSequence:
	DOUBLE_QUOTE (characterRepresentation)* DOUBLE_QUOTE;

unbrokenAccentQuotedCharacterSequence:
	GRAVE_ACCENT (characterRepresentation)* GRAVE_ACCENT;

characterRepresentation:
	CIRCUMFLEX
	| CARRIAGE_RETURN
	| NEW_LINE
	| TAB
	| SPACE
	| ESCAPED_CHAR;

byteStringLiteral:
	BYTE_STRING_START QUOTE (SPACE)* (
		DIGIT16 (SPACE)* DIGIT16 (SPACE)*
	)* QUOTE (
		separator QUOTE (SPACE)* (
			DIGIT16 (SPACE)* DIGIT16 (SPACE)*
		)* QUOTE
	)*;

numericLiteral: signedNumericLiteral | unsignedNumericLiteral;

signedNumericLiteral: sign? unsignedNumericLiteral;

unsignedNumericLiteral:
	exactNumericLiteral
	| approximateNumericLiteral;

exactNumericLiteral:
	unsignedInteger
	| unsignedDecimalInteger PERIOD (unsignedDecimalInteger)?
	| PERIOD unsignedDecimalInteger;

sign: (PLUS | MINUS);

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

approximateNumericLiteral:
	exactNumericLiteral ESEPARATOR signedDecimalInteger;

temporalLiteral: dateLiteral | timeLiteral | datetimeLiteral;

dateLiteral: DATE dateString;

timeLiteral: TIME timeString;

datetimeLiteral: (DATETIME | TIMESTAMP) datetimeString;

dateString: unbrokenCharacterStringLiteral;

timeString: unbrokenCharacterStringLiteral;

datetimeString: unbrokenCharacterStringLiteral;

durationLiteral: DURATION durationString | intervalLiteral;

intervalLiteral:
	DIGIT10+ SPACE+ (yearMonthLiteral | dayTimeLiteral);

yearMonthLiteral: DIGIT10+ SPACE+ (YEAR | MONTH);

dayTimeLiteral:
	DIGIT10+ SPACE+ (DAY | HOUR | MINUTE | SECOND) fractionalSecondsLiteral?;

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
	BYTES (
		LEFT_PAREN (unsignedDecimalInteger COMMA)? unsignedDecimalInteger RIGHT_PAREN
	)?
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

decimalExactNumericType: (DECIMAL | DEC) LEFT_PAREN unsignedDecimalInteger (
		COMMA unsignedDecimalInteger
	)? RIGHT_PAREN;

approximateNumericType:
	FLOAT16
	| FLOAT32
	| FLOAT64
	| FLOAT128
	| FLOAT256
	| FLOAT LEFT_PAREN unsignedDecimalInteger (
		COMMA unsignedDecimalInteger
	)? RIGHT_PAREN
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

mapValueType:
	MAP LEFT_ANGLE_BRACKET mapKeyType COMMA valueType RIGHT_ANGLE_BRACKET;

mapKeyType: predefinedType;

recordValueType: RECORD LEFT_BRACE (fieldTypeList)? RIGHT_BRACE;

fieldTypeList: fieldType (COMMA fieldType)*;

fieldType: identifier (ofTypePrefix)? valueType;

parameterName: AMPERSAND separatedIdentifier;

identifier: regularIdentifier | delimitedIdentifier;

separatedIdentifier: extendedIdentifier | delimitedIdentifier;

token: nonDelimiterToken | delimiterToken;

nonDelimiterToken:
	regularIdentifier
	| parameterName
	| KEY_WORD
	| unsignedNumericLiteral
	| byteStringLiteral
	| MULTISET_ALT_OPERATOR;

nonDelimitedIdentifier: regularIdentifier | extendedIdentifier;

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

simpleComment: (DOUBLE_SOLIDUS | DOUBLE_MINUS) (
		GQL_TERMINAL_CHAR
	)* NEW_LINE;

bracketedComment:
	BRACKETED_COMMENT_START GQL_TERMINAL_CHAR BRACKETED_CoMMENT_END;

edgeSynonym: EDGE | RELATIONSHIP;

nodeSynonym: NODE | VERTEX;