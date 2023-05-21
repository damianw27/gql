parser grammar GqlParser;

options {
	language = JavaScript;
	tokenVocab = GqlLexer;
}

// program grammar
gqlProgram: activity* EOF;

activity: programActivity sessionCloseCommand?;

programActivity: sessionActivity | transactionActivity;

// session management grammar
sessionActivity: sessionSetCommand | sessionResetCommand;

sessionSetCommand:
	SESSION SET (
		sessionSetSchemaClause
		| sessionSetGraphClause
		| sessionSetTimeZoneClause
		| sessionSetParameterClause
	);

sessionSetSchemaClause: SCHEMA schemaRef;

sessionSetGraphClause: PROPERTY? GRAPH graphExpr;

sessionSetTimeZoneClause: TIME ZONE setTimeZoneValue;

setTimeZoneValue: stringValueExpr;

sessionSetParameterClause:
	sessionSetGraphParameterClause
	| sessionSetBindingTableParameterCalues
	| sessionSetValuesParameterClause;

sessionSetGraphParameterClause:
	PROPERTY? GRAPH sessionSetParameterName optTypedGraphInit;

sessionSetBindingTableParameterCalues:
	BINDING? TABLE sessionSetParameterName optTypedBindingTableInit;

sessionSetValuesParameterClause:
	VALUE sessionSetParameterName optTypedValueInit;

sessionSetParameterName: IF_NOT_EXISTS? parameterName;

sessionResetCommand: SESSION? RESET sessionResetArguments;

sessionResetArguments:
	ALL? (PARAMETERS | CHARACTERISTICS)
	| SCHEMA
	| PROPERTY? GRAPH
	| TIME ZONE
	| PARAMETER parameterName;

sessionCloseCommand: SESSION? CLOSE;

// transaction grammar
transactionActivity:
	transactionStartCommand (
		procedureSpec transactionEndCommand?
	)?
	| procedureSpec transactionEndCommand?
	| transactionEndCommand;

transactionStartCommand:
	START TRANSACTION transactionCharacteristics?;

transactionEndCommand: ROLLBACK | COMMIT;

transactionCharacteristics:
	transactionMode (COMMA transactionMode)+;

transactionMode: transactionAccessMode | implDefinedAccessMode;

transactionAccessMode: READ ONLY | READ WRITE;

implDefinedAccessMode:;

// procedures grammar
nestedProcedureSpec: LEFT_BRACE procedureSpec RIGHT_BRACE;

procedureSpec: procedureBody;

nestedDataModProcedureSpec:
	LEFT_BRACE procedureBody RIGHT_BRACE;

nestedQuerySpec: LEFT_BRACE procedureBody RIGHT_BRACE;

procedureBody:
	atSchemaClause? bindingVarDefBlock? statmentBlock;

bindingVarDefBlock: bindingVarDef+;

bindingVarDef: graphVarDef | bindingTableVarDef | valueVarDef;

statmentBlock: statement nextStatment*;

statement:
	linearCatalogModStatment
	| linearDataModStatment
	| compositeQueryStatment;

nextStatment: NEXT yieldClause? statement;

// var def grammar
graphVarDef: PROPERTY? GRAPH graphVar optTypedGraphInit;

optTypedGraphInit: (typed? graphRefValueType)? graphInit;

graphInit: EQUALS graphExpr;

bindingTableVarDef:
	BINDING? TABLE bindingTableVar optTypedBindingTableInit;

optTypedBindingTableInit:
	(typed? bindingTableRefValueType)? bindingTableInit;

bindingTableInit: EQUALS bindingTableExpr;

valueVarDef: VALUE valueVar optTypedValueInit;

optTypedValueInit: (typed? valueType)? valueInit;

valueInit: EQUALS valueExpr;

// object expressions grammar
graphExpr:
	nestedGraphQuerySpec
	| objectExprPrimary
	| graphRef
	| objectNameOrBindingVar
	| currentGraph;

currentGraph: CURRENT_PROPERTY_GRAPH | CURRENT_GRAPH;

nestedGraphQuerySpec: nestedQuerySpec;

bindingTableExpr:
	nestedBindingTableQuerySpec
	| objectExprPrimary
	| bindingTableRef
	| objectNameOrBindingVar;

nestedBindingTableQuerySpec: nestedQuerySpec;

objectExprPrimary:
	VARIABLE valueExprPrimary
	| parenthesizedValueExpr
	| propertyRef
	| unsignedValueSpec
	| aggregateFunction
	| collectionValueConstructor
	| valueQueryExpr
	| caseExpr;

// catalog-mod statments grammar
linearCatalogModStatment: simpleCatalogModStatment+;

simpleCatalogModStatment:
	primitiveCatalogModStatment
	| callCatalogModProcedureStatment;

primitiveCatalogModStatment:
	createSchemeStatment
	| createGraphStatment
	| createGraphTypeStatment
	| dropSchemeStatment
	| dropGraphStatment
	| dropGraphTypeStatment;

createSchemeStatment:
	CREATE SCHEMA IF_NOT_EXISTS? catalogSchemaParentAndName;

dropSchemeStatment:
	DROP SCHEMA IF_EXISTS? catalogSchemaParentAndName;

createGraphStatment:
	createOnlyGraphStatment
	| createOrReplaceGraphStatment;

createOnlyGraphStatment:
	CREATE PROPERTY? GRAPH IF_NOT_EXISTS? catalogGraphParentAndName (
		openGraphType
		| ofGraphType
	) graphSource?;

createOrReplaceGraphStatment:
	CREATE OR REPLACE PROPERTY? GRAPH catalogGraphParentAndName (
		openGraphType
		| ofGraphType
	) graphSource?;

openGraphType: OPEN (PROPERTY? GRAPH)? TYPE;

ofGraphType:
	graphTypeLikeGraph
	| typed? graphTypeRef
	| typed? nestedGraphTypeSpec;

graphTypeLikeGraph: LIKE graphExpr;

graphSource: AS COPY OF graphExpr;

dropGraphStatment:
	DROP PROPERTY? GRAPH IF_EXISTS? catalogGraphParentAndName;

createGraphTypeStatment:
	CREATE (
		(PROPERTY? GRAPH TYPE IF_NOT_EXISTS?)
		| (OR REPLACE PROPERTY? GRAPH TYPE)
	) catalogGraphTypeParentAndName graphTypeSource;

graphTypeSource:
	AS? copyOfGraphType
	| graphTypeLikeGraph
	| AS? nestedGraphTypeSpec;

copyOfGraphType: COPY OF (graphTypeRef | externalObjectRef);

dropGraphTypeStatment:
	DROP PROPERTY? GRAPH TYPE IF_EXISTS? catalogGraphTypeParentAndName;

callCatalogModProcedureStatment: callProcedureStatment;

// data mod statments grammar
linearDataModStatment:
	focusedLinearDataModStatment
	| ambientLinearDataModStatment;

focusedLinearDataModStatment:
	focusedLinearDataModStatmentBody
	| focusedNestedDataModProcedureSpec;

focusedLinearDataModStatmentBody:
	useGraphClause simpleLinearDataAccessingStatment (
		primitiveResultStatment
	)?;

focusedNestedDataModProcedureSpec:
	useGraphClause nestedDataModProcedureSpec;

ambientLinearDataModStatment:
	ambientLinearDataModStatmentBody
	| nestedDataModProcedureSpec;

ambientLinearDataModStatmentBody:
	simpleLinearDataAccessingStatment primitiveResultStatment?;

simpleLinearDataAccessingStatment: simpleDataAccessingStatment+;

simpleDataAccessingStatment:
	simpleQueryStatment
	| simpleDataModStatment;

simpleDataModStatment:
	primitiveDataModStatment
	| callDataModProcedureStatment;

primitiveDataModStatment:
	insertStatment
	| setStatment
	| removeStatment
	| deleteStatment;

insertStatment: INSERT insertGraphPattern;

setStatment: SET setItemList;

setItemList: setItem (COMMA setItem)+;

setItem: setPropertyItem | setAllPropertiesItem | setLabelItem;

setPropertyItem:
	bindingVarRef PERIOD propertyName EQUALS valueExpr;

setAllPropertiesItem:
	bindingVarRef EQUALS LEFT_BRACE propertyKeyValuePairList? RIGHT_BRACE;

setLabelItem: bindingVarRef isOrColon labelSetSpec;

labelSetSpec: labelName (AMPERSAND labelName)*;

removeStatment: REMOVE removeItemList;

removeItemList: removeItem (COMMA removeItem)+;

removeItem: removePropertyItem | removeLabelItem;

removePropertyItem: bindingVarRef PERIOD propertyName;

removeLabelItem: bindingVarRef isOrColon labelSetSpec;

deleteStatment: (DETACH | NODETACH) DELETE deleteItemList;

deleteItemList: deleteItem (COMMA deleteItem)+;

deleteItem: valueExpr;

callDataModProcedureStatment: callProcedureStatment;

// query statments grammar
compositeQueryStatment: compositeQueryExpr;

compositeQueryExpr:
	compositeQueryExpr queryConjunction compositeQueryPrimary
	| compositeQueryPrimary;

queryConjunction: setOperator | OTHERWISE;

setOperator: (UNION | EXCEPT | INTERSECT) setQuantifier;

compositeQueryPrimary: linearQueryStatment;

linearQueryStatment:
	focusedLinearQueryStatment
	| ambientLinearQueryStatment;

focusedLinearQueryStatment:
	(focusedLinearQueryStatmentPart)+ focusedLinearQueryAndPrimitiveResultStatmentPart
	| focusedPrimitiveResultStatment
	| focusedNestedQuerySpec
	| selectStatment;

focusedLinearQueryStatmentPart:
	useGraphClause simpleLinearQueryStatment;

focusedLinearQueryAndPrimitiveResultStatmentPart:
	useGraphClause simpleLinearQueryStatment primitiveResultStatment;

focusedPrimitiveResultStatment:
	useGraphClause primitiveResultStatment;

focusedNestedQuerySpec: useGraphClause nestedQuerySpec;

ambientLinearQueryStatment:
	simpleLinearQueryStatment? primitiveResultStatment
	| nestedQuerySpec;

simpleLinearQueryStatment:
	simpleQueryStatment (simpleQueryStatment)*;

simpleQueryStatment: primitiveQueryStatment | callQueryStatment;

primitiveQueryStatment:
	matchStatment
	| letStatment
	| forStatment
	| filterStatment
	| orderByAndPageStatment;

matchStatment: simpleMatchStatment | optionalMatchStatment;

simpleMatchStatment: MATCH graphPatternBindingTable;

optionalMatchStatment: OPTIONAL optionalOperand;

optionalOperand:
	simpleMatchStatment
	| LEFT_BRACE matchStatmentBlock RIGHT_BRACE
	| LEFT_PAREN matchStatmentBlock RIGHT_PAREN;

matchStatmentBlock: (matchStatment)+;

callQueryStatment: callProcedureStatment;

filterStatment: FILTER (whereClause | searchCondition);

letStatment: LET letVarDefList;

letVarDefList: letVarDef (COMMA letVarDef)+;

letVarDef: valueVarDef | valueVar EQUALS valueExpr;

forStatment: FOR forItem forOrdinalityOrOffset?;

forItem: forItemAlias listValueExpr;

forItemAlias: identifier IN;

forOrdinalityOrOffset: WITH (ORDINALITY | OFFSET) identifier;

orderByAndPageStatment:
	orderByClause offsetClause? limitClause?
	| offsetClause limitClause?
	| limitClause;

primitiveResultStatment:
	returnStatment orderByAndPageStatment?
	| FINISH;

returnStatment: RETURN returnStatmentBody;

returnStatmentBody:
	setQuantifier? (ASTERISK | returnItemList) groupByClause?
	| NO BINDINGS;

returnItemList: returnItem (COMMA returnItem)*;

returnItem: aggregatingValueExpr returnItemAlias?;

returnItemAlias: AS identifier;

selectStatment:
	SELECT setQuantifier? (selectItemList | ASTERISK) (
		selectStatmentBody whereClause? groupByClause? (
			havingClause
		)? orderByClause? offsetClause? limitClause?
	)?;

selectItemList: selectItem (COMMA selectItem)+;

selectItem: aggregatingValueExpr selectItemAlias?;

selectItemAlias: AS identifier;

havingClause: HAVING searchCondition;

selectStatmentBody: FROM selectGraphMatchList | selectQuerySpec;

selectGraphMatchList:
	selectGraphMatch (COMMA selectGraphMatch)*;

selectGraphMatch: graphExpr matchStatment;

selectQuerySpec:
	FROM nestedQuerySpec
	| FROM graphExpr nestedQuerySpec;

// common statments grammar
callProcedureStatment: OPTIONAL? CALL procedureCall;

procedureCall: inlineProcedureCall | namedProcedureCall;

inlineProcedureCall: varScopeClause? nestedProcedureSpec;

varScopeClause: LEFT_PAREN bindingVarRefList? RIGHT_PAREN;

bindingVarRefList: bindingVarRef (COMMA bindingVarRef)+;

namedProcedureCall:
	procedureRef LEFT_PAREN procedureArgList? RIGHT_PAREN;

procedureArgList: procedureArg (COMMA procedureArg)+;

procedureArg: valueExpr;

// common elements grammar
useGraphClause: USE graphExpr;

atSchemaClause: AT schemaRef;

bindingVarRef: bindingVar;

elementVarRef: bindingVarRef;

pathVarRef: bindingVarRef;

parameter: parameterName;

graphPatternBindingTable: graphPattern graphPatternYieldClause?;

graphPatternYieldClause: YIELD graphPatternYieldItemList;

graphPatternYieldItemList:
	graphPatternYieldItem (COMMA graphPatternYieldItem)+;

graphPatternYieldItem: elementVarRef pathVarRef;

graphPattern:
	matchMode? pathPatternList keepClause? (
		graphPatternWhereClause
	)?;

matchMode:
	repeatableElementsMatchMode
	| differentEdgesMatchMode;

repeatableElementsMatchMode:
	REPEATABLE elementBindingsOrElements;

differentEdgesMatchMode: DIFFERENT edgeBindingsOrEdges;

elementBindingsOrElements: ELEMENT BINDINGS? | ELEMENTS;

edgeBindingsOrEdges: edgeSynonym BINDINGS? | edgesSynonym;

pathPatternList: pathPattern (COMMA pathPattern)*;

pathPattern:
	pathVarDeclaration? pathPatternPrefix? (pathPatternExpr)+;

pathVarDeclaration: pathVar EQUALS;

keepClause: KEEP pathPatternPrefix;

graphPatternWhereClause: WHERE searchCondition;

pathPatternPrefix: pathModePrefix | pathSearchPrefix;

pathModePrefix: pathMode pathOrPaths?;

pathMode: WALK | TRAIL | SIMPLE | ACYCLIC;

pathSearchPrefix:
	allPathSearch
	| anyPathSearch
	| shortestPathSearch;

allPathSearch: ALL pathMode? pathOrPaths?;

pathOrPaths: PATH | PATHS;

anyPathSearch: ANY numberOfPaths? pathMode? pathOrPaths?;

numberOfPaths: unsignedIntSpec;

shortestPathSearch:
	allShortestPathSearch
	| anyShortestPathSearch
	| countedShortestPathSearch
	| countedShortestGroupSearch;

allShortestPathSearch: ALL SHORTEST pathMode? pathOrPaths?;

anyShortestPathSearch: ANY SHORTEST pathMode? pathOrPaths?;

countedShortestPathSearch:
	SHORTEST numberOfPaths pathMode? pathOrPaths?;

countedShortestGroupSearch:
	SHORTEST numberOfGroups pathMode? pathOrPaths? groupOrGroups;

groupOrGroups: GROUP | GROUPS;

numberOfGroups: unsignedIntSpec;

pathPatternExpr:
	pathTerm
	| pathMultisetAlternation
	| pathPatternUnion;

pathMultisetAlternation:
	pathTerm (MULTISET_ALTERNATION pathTerm)*;

pathPatternUnion: pathTerm (VERTICAL_BAR pathTerm)*;

pathTerm: pathFactor (pathFactor)*;

pathFactor:
	pathPrimary
	| quantifiedPathPrimary
	| questionedPathPrimary;

quantifiedPathPrimary: pathPrimary graphPatternQuantifier;

questionedPathPrimary: pathPrimary QUESTION_MARK;

pathPrimary:
	elementPattern
	| parenthesizedPathPatternExpr
	| simplifiedPathPatternExpr;

elementPattern: nodePattern | edgePattern;

nodePattern: LEFT_PAREN elementPatternFiller RIGHT_PAREN;

elementPatternFiller:
	elementVarDeclaration? isLabelExpr? (elementPatternPredicate)?;

elementVarDeclaration: TEMP? elementVar;

isLabelExpr: isOrColon labelExpr;

isOrColon: (IS) | COLON;

elementPatternPredicate:
	elementPatternWhereClause
	| elementPropertySpec;

elementPatternWhereClause: WHERE searchCondition;

elementPropertySpec:
	LEFT_BRACE propertyKeyValuePairList RIGHT_BRACE;

propertyKeyValuePairList:
	propertyKeyValuePair (COMMA propertyKeyValuePair)*;

propertyKeyValuePair: propertyName COLON valueExpr;

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
	LEFT_ARROW_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

fullEdgeUndirected:
	TILDE_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgePointingRight:
	MINUS_LEFT_BRACKET elementPatternFiller BRACKET_RIGHT_ARROW;

fullEdgeLeftOrUndirected:
	LEFT_ARROW_TILDE_BRACKET elementPatternFiller RIGHT_BRACKET_TILDE;

fullEdgeUndirectedOrRight:
	TILDE_LEFT_BRACKET elementPatternFiller BRACKET_RIGHT_ARROW;

fullEdgeLeftOrRight:
	LEFT_ARROW_BRACKET elementPatternFiller BRACKET_RIGHT_ARROW;

fullEdgeAnyDirection:
	MINUS_LEFT_BRACKET elementPatternFiller RIGHT_BRACKET_MINUS;

abbreviatedEdgePattern:
	LEFT_ARROW
	| TILDE
	| RIGHT_ARROW
	| LEFT_ARROW_TILDE
	| TILDE_RIGHT_ARROW
	| LEFT_MINUS_RIGHT
	| MINUS;

parenthesizedPathPatternExpr:
	LEFT_PAREN subpathVarDeclaration? pathModePrefix? pathPatternExpr (
		parenthesizedPathPatternWhereClause
	)? RIGHT_PAREN;

subpathVarDeclaration: subpathVar EQUALS;

parenthesizedPathPatternWhereClause: WHERE searchCondition;

insertGraphPattern: insertGraphPatternList;

insertGraphPatternList:
	insertPathPattern (COMMA insertPathPattern)*;

insertPathPattern:
	insertNodePattern (insertEdgePattern insertNodePattern)*;

insertNodePattern:
	LEFT_PAREN insertElementPatternFiller? RIGHT_PAREN;

insertEdgePattern:
	insertEdgePointingLeft
	| insertEdgePointingRight
	| insertEdgeUndirected;

insertEdgePointingLeft:
	LEFT_ARROW_BRACKET insertElementPatternFiller RIGHT_BRACKET_MINUS;

insertEdgePointingRight:
	MINUS_LEFT_BRACKET insertElementPatternFiller BRACKET_RIGHT_ARROW;

insertEdgeUndirected:
	TILDE_LEFT_BRACKET insertElementPatternFiller RIGHT_BRACKET_TILDE;

insertElementPatternFiller:
	elementVarDeclaration labelAndPropertySetSpec?
	| elementVarDeclaration? labelAndPropertySetSpec;

labelAndPropertySetSpec:
	isOrColon labelSetSpec elementPropertySpec?
	| isOrColon labelSetSpec? elementPropertySpec;

labelExpr: labelTerm (VERTICAL_BAR labelTerm)*;

labelTerm: labelFactor (AMPERSAND labelFactor)*;

labelFactor: labelPrimary | labelNegation;

labelNegation: EXCLAMATION labelPrimary;

labelPrimary:
	labelName
	| wildcardLabel
	| parenthesizedLabelExpr;

wildcardLabel: PERCENT;

parenthesizedLabelExpr: LEFT_PAREN labelExpr RIGHT_PAREN;

graphPatternQuantifier:
	ASTERISK
	| PLUS
	| fixedQuantifier
	| generalQuantifier;

fixedQuantifier: LEFT_BRACE UNSIGNED_INT RIGHT_BRACE;

generalQuantifier:
	LEFT_BRACE lowerBound? COMMA upperBound? RIGHT_BRACE;

lowerBound: UNSIGNED_INT;

upperBound: UNSIGNED_INT;

simplifiedPathPatternExpr:
	simplifiedDefaultingLeft
	| simplifiedDefaultingUndirected
	| simplifiedDefaultingRight
	| simplifiedDefaultingLeftOrUndirected
	| simplifiedDefaultingUndirectedOrRight
	| simplifiedDefaultingLeftOrRight
	| simplifiedDefaultingAnyDirection;

simplifiedDefaultingLeft:
	LEFT_MINUS_SLASH simplifiedContents SLASH_MINUS;

simplifiedDefaultingUndirected:
	TILDE_SLASH simplifiedContents SLASH_TILDE;

simplifiedDefaultingRight:
	MINUS_SLASH simplifiedContents SLASH_MINUS_RIGHT;

simplifiedDefaultingLeftOrUndirected:
	LEFT_TILDE_SLASH simplifiedContents SLASH_TILDE;

simplifiedDefaultingUndirectedOrRight:
	TILDE_SLASH simplifiedContents SLASH_TILDE_RIGHT;

simplifiedDefaultingLeftOrRight:
	LEFT_MINUS_SLASH simplifiedContents SLASH_MINUS_RIGHT;

simplifiedDefaultingAnyDirection:
	MINUS_SLASH simplifiedContents SLASH_MINUS;

simplifiedContents:
	simplifiedTerm
	| simplifiedPathUnion
	| simplifiedMultisetAlternation;

simplifiedPathUnion:
	simplifiedTerm (VERTICAL_BAR simplifiedTerm)*;

simplifiedMultisetAlternation:
	simplifiedTerm (MULTISET_ALTERNATION simplifiedTerm)*;

simplifiedTerm: simplifiedFactorLow (simplifiedFactorLow)*;

simplifiedFactorLow:
	simplifiedFactorHigh (AMPERSAND simplifiedFactorHigh)*;

simplifiedFactorHigh:
	simplifiedTertiary
	| simplifiedQuntified
	| simplifiedQuestioned;

simplifiedQuntified: simplifiedTertiary graphPatternQuantifier;

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

simplifiedOverrideLeft: LEFT_ANGLE_BRACKET simplifiedSecondary;

simplifiedOverrideUndirected: TILDE simplifiedSecondary;

simplifiedOverrideRight:
	simplifiedSecondary RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrUndirected:
	LEFT_ARROW_TILDE simplifiedSecondary;

simplifiedOverrideUndirectedOrRight:
	TILDE simplifiedSecondary RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrRight:
	LEFT_ANGLE_BRACKET simplifiedSecondary RIGHT_ANGLE_BRACKET;

simplifiedOverrideAnyDirection: MINUS simplifiedSecondary;

simplifiedSecondary: simplifiedPrimary | simplifiedNegation;

simplifiedNegation: EXCLAMATION simplifiedPrimary;

simplifiedPrimary:
	labelName
	| LEFT_PAREN simplifiedContents RIGHT_PAREN;

whereClause: WHERE searchCondition;

yieldClause: YIELD yieldItemList;

yieldItemList: yieldItem (COMMA yieldItem)+;

yieldItem: yieldItemName yieldItemAlias?;

yieldItemName: fieldName;

yieldItemAlias: AS bindingVar;

groupByClause: GROUP BY groupingElementList;

groupingElementList:
	groupingElement (COMMA groupingElement)+
	| emptyGroupingSet;

groupingElement: bindingVarRef;

emptyGroupingSet: LEFT_PAREN RIGHT_PAREN;

orderByClause: ORDER BY sortSpecList;

aggregateFunction:
	COUNT LEFT_PAREN ASTERISK RIGHT_PAREN
	| generalSetFunction
	| binarySetFunction;

generalSetFunction:
	generalSetFunctionType LEFT_PAREN setQuantifier? valueExpr RIGHT_PAREN;

generalSetFunctionType:
	AVG
	| COUNT
	| MAX
	| MIN
	| SUM
	| COLLECT
	| STDDEV_SAMP
	| STDDEV_POP;

setQuantifier: DISTINCT | ALL;

binarySetFunction: PERCENTILE_CONT | PERCENTILE_DISC;

dependantValueExpr: setQuantifier? numericValueExpr;

independentValueExpr: numericValueExpr;

sortSpecList: sortSpec (COMMA sortSpec)+;

sortSpec: sortKey orderingSpec? nullOrdering?;

sortKey: aggregatingValueExpr;

orderingSpec: ASC | ASCENDING | DESC | DESCENDING;

nullOrdering: NULLS FIRST | NULLS LAST;

limitClause: LIMIT unsignedIntSpec;

offsetClause: offsetSynonym unsignedIntSpec;

offsetSynonym: OFFSET | SKIP_;

// type elements grammar
graphTypeSpec: PROPERTY? GRAPH TYPE nestedGraphTypeSpec;

nestedGraphTypeSpec: LEFT_BRACE graphTypeSpecBody RIGHT_BRACE;

graphTypeSpecBody: elementTypeDefList;

elementTypeDefList: elementTypeDef (COMMA elementTypeDef)*;

elementTypeDef: nodeTypeDef | edgeTypeDef;

nodeTypeDef: nodeTypePattern | nodeSynonym nodeTypePhrase;

nodeTypePattern:
	LEFT_PAREN nodeTypeName nodeTypeFiller RIGHT_PAREN;

nodeTypePhrase:
	TYPE? nodeTypeName nodeTypeFiller?
	| nodeTypeFiller;

nodeTypeName: elementTypeName;

nodeTypeFiller:
	nodeTypeLabelSetDef
	| nodeTypePropertyTypeSetDef
	| nodeTypeLabelSetDef nodeTypePropertyTypeSetDef;

nodeTypeLabelSetDef: labelSetDef;

nodeTypePropertyTypeSetDef: propertyTypeSetDef;

edgeTypeDef:
	edgeTypePattern
	| edgeKind? edgeSynonym edgeTypePhrase;

edgeTypePattern:
	fullEdgeTypePattern
	| abbreviatedEdgeTypePattern;

edgeTypePhrase:
	TYPE? edgeTypeName (edgeTypeFiller endpointDef)
	| edgeTypeFiller endpointDef;

edgeTypeName: elementTypeName;

edgeTypeFiller:
	edgeTypeLabelSetDef
	| edgeTypePropertyTypeSetDef
	| edgeTypeLabelSetDef edgeTypePropertyTypeSetDef;

edgeTypeLabelSetDef: labelSetDef;

edgeTypePropertyTypeSetDef: propertyTypeSetDef;

fullEdgeTypePattern:
	fullEdgeTypePatternPointingRight
	| fullEdgeTypePatternPointingLeft
	| fullEdgeTypePatternUndirected;

fullEdgeTypePatternPointingRight:
	sourceNodeTypeRef arcTypePointingRight destinationNodeTypeRef;

fullEdgeTypePatternPointingLeft:
	destinationNodeTypeRef arcTypePointingLeft sourceNodeTypeRef;

fullEdgeTypePatternUndirected:
	sourceNodeTypeRef arcTypeUndirected destinationNodeTypeRef;

arcTypePointingRight:
	MINUS_LEFT_BRACKET arcTypeFiller BRACKET_RIGHT_ARROW;

arcTypePointingLeft:
	LEFT_ARROW_BRACKET arcTypeFiller RIGHT_BRACKET_MINUS;

arcTypeUndirected:
	TILDE_LEFT_BRACKET arcTypeFiller RIGHT_BRACKET_TILDE;

arcTypeFiller: edgeTypeName edgeTypeFiller;

abbreviatedEdgeTypePattern:
	abbreviatedEdgeTypePatternPointingRight
	| abbreviatedEdgeTypePatternPointingLeft
	| abbreviatedEdgeTypePatternUndirected;

abbreviatedEdgeTypePatternPointingRight:
	sourceNodeTypeRef RIGHT_ARROW destinationNodeTypeRef;

abbreviatedEdgeTypePatternPointingLeft:
	destinationNodeTypeRef LEFT_ARROW sourceNodeTypeRef;

abbreviatedEdgeTypePatternUndirected:
	sourceNodeTypeRef TILDE destinationNodeTypeRef;

nodeTypeRef: sourceNodeTypeRef | destinationNodeTypeRef;

sourceNodeTypeRef:
	LEFT_PAREN sourceNodeTypeName RIGHT_PAREN
	| LEFT_PAREN nodeTypeFiller? RIGHT_PAREN;

destinationNodeTypeRef:
	LEFT_PAREN destinationNodeTypeName RIGHT_PAREN
	| LEFT_PAREN nodeTypeFiller? RIGHT_PAREN;

edgeKind: DIRECTED | UNDIRECTED;

endpointDef: CONNECTING enpointPairDef;

enpointPairDef:
	endpointPairDefPointingRight
	| endpointPairDefPointingLeft
	| endpointPairDefUndirected
	| abbreviatedEdgeTypePattern;

endpointPairDefPointingRight:
	LEFT_PAREN sourceNodeTypeName connectorPointingRight destinationNodeTypeName RIGHT_PAREN;

endpointPairDefPointingLeft:
	LEFT_PAREN destinationNodeTypeName connectorPointingLeft sourceNodeTypeName RIGHT_PAREN;

endpointPairDefUndirected:
	LEFT_PAREN sourceNodeTypeName connectorUndirected destinationNodeTypeName RIGHT_PAREN;

connectorPointingRight: TO | RIGHT_ARROW;

connectorPointingLeft: LEFT_ARROW;

connectorUndirected: TO | TILDE;

sourceNodeTypeName: elementTypeName;

destinationNodeTypeName: elementTypeName;

labelSetDef:
	LABEL labelName
	| LABELS labelSetSpec
	| IS labelSetSpec
	| COLON labelSetSpec;

propertyTypeSetDef: LEFT_BRACE propertyTypeDefList? RIGHT_BRACE;

propertyTypeDefList: propertyTypeDef (COMMA propertyTypeDef)*;

propertyTypeDef: propertyName typed? propertyValueType;

propertyValueType: valueType;

bindingTableType: BINDING? TABLE fieldTypesSpec;

valueType: predefinedType | constructedType | dynamicUnionType;

typed: DOUBLE_COLON | (TYPED);

predefinedType:
	booleanType
	| charStringType
	| byteStringType
	| numericType
	| temporalType
	| refValueType
	| pathValueType;

booleanType: (BOOL | BOOLEAN) notNull?;

charStringType:
	(STRING | VARCHAR) (LEFT_PAREN maxLength RIGHT_PAREN)? (
		notNull
	)?;

byteStringType:
	BYTES (LEFT_PAREN minLength COMMA? maxLength RIGHT_PAREN)? (
		notNull
	)?
	| BINARY (LEFT_PAREN fixedLength RIGHT_PAREN)? notNull?
	| VARBINARY (LEFT_PAREN maxLength RIGHT_PAREN)? notNull?;

minLength: UNSIGNED_INT;

maxLength: UNSIGNED_INT;

fixedLength: UNSIGNED_INT;

numericType: exactNumericType | approximateNumericType;

exactNumericType:
	binaryExactNumericType
	| decimalExactNumericType;

binaryExactNumericType:
	signedBinaryExactNumericType
	| unsignedBinaryExactNumericType;

signedBinaryExactNumericType:
	INT8 notNull?
	| INT16 notNull?
	| INT32 notNull?
	| INT64 notNull?
	| INT128 notNull?
	| INT256 notNull?
	| SMALLINT notNull?
	| INT (LEFT_PAREN precision RIGHT_PAREN)? notNull?
	| BIGINT notNull?
	| SIGNED? verboseBinaryExactNumericType;

unsignedBinaryExactNumericType:
	UINT8 notNull?
	| UINT16 notNull?
	| UINT32 notNull?
	| UINT64 notNull?
	| UINT128 notNull?
	| UINT256 notNull?
	| USMALLINT notNull?
	| UINT (LEFT_PAREN precision RIGHT_PAREN)? notNull?
	| UBIGINT notNull?
	| UNSIGNED verboseBinaryExactNumericType;

verboseBinaryExactNumericType:
	INTEGER8 notNull?
	| INTEGER16 notNull?
	| INTEGER32 notNull?
	| INTEGER64 notNull?
	| INTEGER128 notNull?
	| INTEGER256 notNull?
	| SMALL INTEGER notNull?
	| INTEGER (LEFT_PAREN precision RIGHT_PAREN)? notNull?
	| BIG INTEGER notNull?;

decimalExactNumericType:
	(DECIMAL | DEC) (
		LEFT_PAREN precision COMMA scale? RIGHT_PAREN
	)? notNull?;

precision: UNSIGNED_DECIMAL_INT;

scale: UNSIGNED_DECIMAL_INT;

approximateNumericType:
	FLOAT16 notNull?
	| FLOAT32 notNull?
	| FLOAT64 notNull?
	| FLOAT128 notNull?
	| FLOAT256 notNull?
	| FLOAT (LEFT_PAREN precision COMMA scale? RIGHT_PAREN)? (
		notNull
	)?
	| REAL notNull?
	| DOUBLE PRECISION? (notNull);

temporalType: temporalInstantType | temporalDurationType;

temporalInstantType:
	dateTimeType
	| localDateTimeType
	| dateType
	| timeType
	| localTimeType;

temporalDurationType: durationType;

dateTimeType:
	ZONED DATETIME notNull?
	| TIMESTAMP WITH TIMEZONE notNull?;

localDateTimeType:
	LOCAL DATETIME notNull?
	| TIMESTAMP (WITHOUT TIMEZONE) notNull?;

dateType: DATE notNull?;

timeType: ZONED TIME notNull? | TIME WITH TIMEZONE notNull?;

localTimeType:
	LOCAL TIME notNull?
	| TIME WITHOUT TIMEZONE notNull?;

durationType: DURATION notNull?;

refValueType:
	graphRefValueType
	| bindingTableRefValueType
	| nodeRefValueType
	| edgeRefValueType;

graphRefValueType:
	openGraphRefValueType
	| closedGraphRefValueType;

openGraphRefValueType: OPEN PROPERTY? GRAPH notNull?;

closedGraphRefValueType: graphTypeSpec notNull?;

bindingTableRefValueType: bindingTableType notNull?;

nodeRefValueType: openNodeRefValueType | closedNodeRefValueType;

openNodeRefValueType: OPEN? nodeSynonym notNull?;

closedNodeRefValueType: edgeTypeDef notNull?;

edgeRefValueType: openEdgeRefValueType | closedEdgeRefValueType;

openEdgeRefValueType: OPEN? edgeSynonym notNull?;

closedEdgeRefValueType: edgeTypeDef notNull?;

constructedType: listValueType | recordType;

listValueType:
	listValueTypeName LEFT_ANGLE_BRACKET predefinedType RIGHT_ANGLE_BRACKET (
		LEFT_BRACKET maxLength RIGHT_BRACKET
	)? notNull?
	| predefinedType listValueTypeName (
		LEFT_BRACKET maxLength RIGHT_BRACKET
	)? notNull?;

listValueTypeName: GROUP? listValueTypeNameSynonym;

listValueTypeNameSynonym: LIST | ARRAY;

recordType:
	OPEN? RECORD notNull?
	| RECORD? fieldTypesSpec notNull?;

fieldTypesSpec: LEFT_BRACE fieldTypeList? RIGHT_BRACE;

fieldTypeList: fieldType (COMMA fieldType)+;

dynamicUnionType:
	openDynamicUnionType
	| dynamicPropertyValueType
	| closedDynamicUnionType;

openDynamicUnionType: ANY;

dynamicPropertyValueType: ANY? PROPERTY VALUE;

closedDynamicUnionType:
	ANY LEFT_ANGLE_BRACKET componentTypeList RIGHT_ANGLE_BRACKET;

componentTypeList: componentType (VERTICAL_BAR componentType)*;

componentType: valueType;

pathValueType: PATH;

notNull: NOT NULL;

fieldType: fieldName (typed) valueType;

schemaRef:
	absoluteCatalogSchemaRef
	| relativeCatalogSchemaRef
	| refParameter;

absoluteCatalogSchemaRef:
	SOLIDUS
	| absoluteDirectoryPath schemaName;

catalogSchemaParentAndName: absoluteDirectoryPath schemaName;

relativeCatalogSchemaRef:
	predefinedSchemaRef
	| relativeDirectoryPath schemaName;

predefinedSchemaRef: HOME_SCHEMA | CURRENT_SCHEMA | PERIOD;

absoluteDirectoryPath: SOLIDUS simpleDirectoryPath?;

relativeDirectoryPath:
	DOUBLE_PERIOD (
		(SOLIDUS DOUBLE_PERIOD)* SOLIDUS simpleDirectoryPath?
	)?;

simpleDirectoryPath: (directoryName SOLIDUS)+;

graphRef:
	catalogObjectParentRef graphName
	| delimitedGraphName
	| homeGraph
	| refParameter;

catalogGraphParentAndName: catalogObjectParentRef? graphName;

homeGraph: HOME_PROPERTY_GRAPH | HOME_GRAPH;

graphTypeRef: catalogGraphTypeParentAndName | refParameter;

catalogGraphTypeParentAndName:
	catalogObjectParentRef? graphTypeName;

bindingTableRef:
	catalogObjectParentRef bindingTableName
	| delimitedBindingTableName
	| refParameter;

catalogBindingTableParentAndName:
	catalogObjectParentRef? bindingTableName;

procedureRef: catalogProcedureParentAndName | refParameter;

catalogProcedureParentAndName:
	catalogObjectParentRef? procedureName;

catalogObjectParentRef:
	schemaRef SOLIDUS? (objectName PERIOD)*
	| (objectName PERIOD)+;

refParameter: parameter;

externalObjectRef:; // TODO

// predicates grammar
searchCondition: booleanValueExpr;

predicate:
	comparisonPredicate
	| existsPredicate
	| nullPredicate
	| valueTypePredicate
	| normalizedPredicate
	| directedPredicate
	| labeledPredicate
	| sourceOrDestinationPredicate
	| allDifferentPredicate
	| samePredicate
	| propertyExistsPredicate;

comparisonPredicate:
	comparisonPredicand comparisonPredicatePart2;

comparisonPredicatePart2:
	comparisonOperator comparisonPredicand;

comparisonOperator:
	equals
	| notEquals
	| lessThen
	| greaterThan
	| lessThanOrEquals
	| graterThanOrEquals;

equals: EQUALS;

notEquals: LEFT_ANGLE_BRACKET RIGHT_ANGLE_BRACKET;

lessThen: LEFT_ANGLE_BRACKET;

greaterThan: RIGHT_ANGLE_BRACKET;

lessThanOrEquals: LEFT_ANGLE_BRACKET EQUALS;

graterThanOrEquals: RIGHT_ANGLE_BRACKET EQUALS;

comparisonPredicand: commonValueExpr | booleanPredicand;

existsPredicate:
	EXISTS (
		LEFT_BRACE graphPattern RIGHT_BRACE
		| LEFT_PAREN graphPattern RIGHT_PAREN
		| LEFT_BRACE matchStatmentBlock RIGHT_BRACE
		| LEFT_PAREN matchStatmentBlock RIGHT_PAREN
		| nestedQuerySpec
	);

nullPredicate: valueExprPrimary nullPredicatePart2;

nullPredicatePart2: IS NOT? NULL;

valueTypePredicate: valueExprPrimary valueTypePredicatePart2;

valueTypePredicatePart2: IS NOT? typed valueType;

normalizedPredicate: stringValueExpr normalizedPredicatePart2;

normalizedPredicatePart2: IS NOT? normalForm? NORMALIZED;

directedPredicate: elementVarRef directedPredicate;

directedPredicatePart2: IS NOT? DIRECTED;

labeledPredicate: elementVarRef;

labeledPredicatePart2: isLabeledOrColon labelExpr;

isLabeledOrColon: IS NOT? LABELED | COLON;

sourceOrDestinationPredicate:
	nodeRef sourcePredicatePart2
	| nodeRef destinationPredicatePart2;

nodeRef: elementVarRef;

sourcePredicatePart2: IS NOT? SOURCE OF edgeRef;

destinationPredicatePart2: IS NOT? DESTINATION OF edgeRef;

edgeRef: elementVarRef;

allDifferentPredicate:
	ALL_DIFFERENT LEFT_PAREN elementVarRef (COMMA elementVarRef)+ RIGHT_PAREN;

samePredicate:
	SAME LEFT_PAREN elementVarRef (COMMA elementVarRef)+ RIGHT_PAREN;

propertyExistsPredicate:
	PROPERTY_EXISTS LEFT_PAREN elementVarRef COMMA propertyName RIGHT_PAREN;

// value expression grammar
valueSpec: literal | parameterValueSpec;

unsignedValueSpec: unsignedLiteral | parameterValueSpec;

unsignedIntSpec: UNSIGNED_INT | parameter;

parameterValueSpec: parameter | predefinedParameter;

predefinedParameter: CURRENT_USER;

valueExpr: commonValueExpr | booleanValueExpr;

commonValueExpr:
	numericValueExpr
	| stringValueExpr
	| dateTimeValueExpr
	| durationValueExpr
	| listValueExpr
	| recordValueExpr
	| pathValueExpr
	| refValueExpr
	| propertyName (PERIOD propertyName)+;

refValueExpr:
	graphRefValueExpr
	| bindingTableRefValueExpr
	| nodeRefValueExpr
	| edgeRefValueExpr;

graphRefValueExpr: PROPERTY? GRAPH graphExpr | valueExprPrimary;

bindingTableRefValueExpr:
	BINDING? TABLE bindingTableExpr
	| valueExprPrimary;

nodeRefValueExpr: valueExprPrimary;

edgeRefValueExpr: valueExprPrimary;

recordValueExpr: valueExprPrimary;

aggregatingValueExpr: valueExpr;

booleanValueExpr:
	booleanTerm
	| booleanTerm OR booleanValueExpr
	| booleanTerm XOR booleanValueExpr;

booleanTerm: booleanFactor | booleanTerm AND booleanFactor;

booleanFactor: NOT? booleanTest;

booleanTest: booleanPrimary (IS NOT? truthValue)?;

truthValue: TRUE | FALSE | UNKNOWN;

booleanPrimary: predicate | booleanPredicand;

booleanPredicand:
	paranthisedBooleanValueExpr
	| nonParenthesizedValueExprPrimary;

paranthisedBooleanValueExpr:
	LEFT_PAREN booleanValueExpr RIGHT_PAREN;

numericValueExpr:
	term
	| term PLUS numericValueExpr
	| term MINUS numericValueExpr;

term: factor | factor ASTERISK term | factor SOLIDUS term;

factor: SIGN? numericPrimary;

numericPrimary: valueExprPrimary | numericValueFunction;

valueExprPrimary:
	parenthesizedValueExpr
	| nonParenthesizedValueExprPrimary;

parenthesizedValueExpr: LEFT_PAREN valueExpr RIGHT_PAREN;

nonParenthesizedValueExprPrimary:
	nonParenthesizedValueExprPrimarySpecialCase
	| bindingVarRef;

nonParenthesizedValueExprPrimarySpecialCase:
	unsignedValueSpec
	| aggregateFunction
	| collectionValueConstructor
	| valueQueryExpr
	| caseExpr
	| letValueExpr
	| castSpec
	| elementIdFunction;

collectionValueConstructor:
	listValueConstructor
	| recordValueConstructor
	| pathValueConstructor;

numericValueFunction:
	lengthExpr
	| absoluteValueExpr
	| modulusExpr
	| trigonometricFunction
	| logarithmFunction
	| exponentialFunction
	| powerFunction
	| squareRootFunciton
	| floorFunction
	| ceilingFunction;

lengthExpr: charLengthExpr | byteLengthExpr | pathLengthExpr;

charLengthExpr:
	(CHAR_LENGTH | CHARACTER_LENGTH) LEFT_PAREN charStringValueExpr RIGHT_PAREN;

byteLengthExpr:
	(BYTE_LENGTH | OCTET_LENGTH) LEFT_PAREN byteStringValueExpr RIGHT_PAREN;

pathLengthExpr:
	PATH_LENGTH LEFT_PAREN pathValueExpr RIGHT_PAREN;

absoluteValueExpr: ABS LEFT_PAREN numericValueExpr RIGHT_PAREN;

modulusExpr:
	MOD LEFT_PAREN numericValueExprDividen COMMA numericValueExprDivisor RIGHT_PAREN;

numericValueExprDividen: numericValueExpr;

numericValueExprDivisor: numericValueExpr;

trigonometricFunction:
	trigonometricFunctionName LEFT_PAREN numericValueExpr RIGHT_PAREN;

trigonometricFunctionName:
	SIN
	| COS
	| TAN
	| COT
	| SINH
	| COSH
	| TANH
	| ASIN
	| ACOS
	| ATAN
	| DEGREES
	| RADIANS;

logarithmFunction:
	generalLogarithmFunction
	| commonLogarithmFunction
	| naturalLogarithmFunction;

generalLogarithmFunction:
	MOD LEFT_PAREN generalLogarithmBase COMMA generalLogarithmArgument RIGHT_PAREN;

generalLogarithmBase: numericValueExpr;

generalLogarithmArgument: numericValueExpr;

commonLogarithmFunction:
	LOG10 LEFT_PAREN numericValueExpr RIGHT_PAREN;

naturalLogarithmFunction:
	LN LEFT_PAREN numericValueExpr RIGHT_PAREN;

exponentialFunction:
	EXP LEFT_PAREN numericValueExpr RIGHT_PAREN;

powerFunction:
	POWER LEFT_PAREN numericValueExprBase COMMA numericValueExprExponent RIGHT_PAREN;

numericValueExprBase: numericValueExpr;

numericValueExprExponent: numericValueExpr;

squareRootFunciton:
	SQRT LEFT_PAREN numericValueExpr RIGHT_PAREN;

floorFunction: FLOOR LEFT_PAREN numericValueExpr RIGHT_PAREN;

ceilingFunction:
	(CEIL | CEILING) LEFT_PAREN numericValueExpr RIGHT_PAREN;

stringValueExpr: charStringValueExpr | byteStringValueExpr;

charStringValueExpr: charStringConcatenation | charStringFactor;

charStringConcatenation:
	charStringFactor CONCATENATION charStringValueExpr;

charStringFactor: charStringPrimary;

charStringPrimary: valueExprPrimary | stringValueFunction;

byteStringValueExpr: byteStringConcatenation | byteStringFactor;

byteStringFactor: byteStringPrimary;

byteStringPrimary: valueExprPrimary | stringValueFunction;

byteStringConcatenation:
	byteStringFactor CONCATENATION byteStringValueExpr;

stringValueFunction: charStringFunction | byteStringFunction;

charStringFunction:
	foldFunction
	| trimFunction
	| normalizeFunction;

foldFunction:
	(UPPER | LOWER) LEFT_PAREN charStringValueExpr RIGHT_PAREN;

trimFunction: singleCharTrimFunction | multiCharTrimFunction;

singleCharTrimFunction:
	TRIM LEFT_PAREN trimOperands RIGHT_PAREN;

multiCharTrimFunction:
	(BTRIM | LTRIM | RTRIM) LEFT_PAREN trimSource (
		COMMA trimCharString
	) RIGHT_PAREN;

trimOperands: (trimSpec? trimCharString? FROM)? trimSource;

trimSource: charStringValueExpr;

trimSpec: LEADING | TRAILING | BOTH;

trimCharString: charStringValueExpr;

normalizeFunction:
	NORMALIZE LEFT_PAREN charStringValueExpr (COMMA normalForm) RIGHT_PAREN;

normalForm: NFC | NFD | NFKC | NFKD;

byteStringFunction: byteStrinTrimFunction;

byteStrinTrimFunction:
	TRIM LEFT_PAREN byteStringTrimOperands RIGHT_PAREN;

byteStringTrimOperands:
	(trimSpec? trimByteString? FROM)? byteStringTrimSource;

byteStringTrimSource: byteStringValueExpr;

trimByteString: byteStringValueExpr;

stringLength: numericValueExpr;

dateTimeValueExpr:
	dateTimeTerm
	| durationValueExpr PLUS dateTimeTerm
	| dateTimeValueExpr PLUS durationTerm
	| dateTimeValueExpr MINUS durationTerm;

dateTimeTerm: dateTimeFactor;

dateTimeFactor: dateTimePrimary;

dateTimePrimary: valueExprPrimary | dateTimeValueFunction;

dateTimeValueFunction:
	dateFunction
	| timeFunction
	| dateTimeFunction
	| localTimeFunction
	| localDatetimeFunction;

dateFunction:
	CURRENT_DATE
	| DATE LEFT_PAREN dateFunctionParameters? RIGHT_PAREN;

timeFunction:
	CURRENT_TIME
	| ZONED_TIME LEFT_PAREN timeFunctionParameters? RIGHT_PAREN;

localTimeFunction:
	LOCAL_TIME LEFT_PAREN timeFunctionParameters? RIGHT_PAREN?;

dateTimeFunction:
	CURRENT_TIMESTAMP
	| ZONED_DATETIME LEFT_PAREN dateTimeFunctionParameters? RIGHT_PAREN;

localDatetimeFunction:
	LOCAL_TIMESTAMP
	| LOCAL_DATETIME LEFT_PAREN dateTimeFunctionParameters? RIGHT_PAREN;

dateFunctionParameters: dateString | recordValueConstructor;

timeFunctionParameters: timeString | recordValueConstructor;

dateTimeFunctionParameters:
	dateTimeString
	| recordValueConstructor;

durationValueExpr:
	durationTerm
	| durationValueExpr PLUS durationTerm
	| durationValueExpr MINUS durationTerm
	| dateTimeSubtraction;

dateTimeSubtraction:
	DURATION_BETWEEN LEFT_PAREN dateTimeSubtractionParameters RIGHT_PAREN;

dateTimeSubtractionParameters:
	dateTimeValueExpr COMMA dateTimeValueExpr;

durationTerm:
	durationFactor
	| durationTerm ASTERISK factor
	| durationTerm SOLIDUS factor
	| term ASTERISK durationFactor;

durationFactor: SIGN? durationPrimary;

durationPrimary: valueExprPrimary | durationValueFunction;

durationValueExpr1: durationValueExpr;

durationTerm1: durationTerm;

durationTerm2: durationTerm;

dateTimeValueExpr1: dateTimeValueExpr;

dateTimeValueExpr2: dateTimeValueExpr;

durationValueFunction:
	durationFunction
	| durationAbsoluteValueFunction;

durationFunction:
	DURATION LEFT_PAREN durationFunctionParameters RIGHT_PAREN;

durationFunctionParameters:
	durationString
	| recordValueConstructor;

durationAbsoluteValueFunction:
	ABS LEFT_PAREN durationValueExpr RIGHT_PAREN;

listValueExpr: listConcatenation | listPrimary;

listConcatenation: listPrimary CONCATENATION listValueExpr;

listPrimary: listValueFunction | valueExprPrimary;

listValueFunction: trimListFunction elementsFunction;

trimListFunction:
	TRIM LEFT_PAREN listValueExpr COMMA numericValueExpr RIGHT_PAREN;

elementsFunction: ELEMENTS LEFT_PAREN pathValueExpr RIGHT_PAREN;

listValueConstructor: listValueConstructorByEnumeration;

listValueConstructorByEnumeration:
	LEFT_BRACKET listValueTypeName RIGHT_BRACKET LEFT_BRACKET listElementList RIGHT_BRACKET;

listElementList: listElement (COMMA listElement)*;

listElement: valueExpr;

recordValueConstructor: RECORD? fieldsSpec;

fieldsSpec: LEFT_BRACE fieldList? RIGHT_BRACE;

fieldList: field (COMMA field)*;

field: fieldName COLON valueExpr;

pathValueExpr: pathValueConcatenation | pathValuePrimary;

pathValueConcatenation:
	pathValuePrimary CONCATENATION pathValueExpr;

pathValuePrimary: valueExprPrimary;

pathValueConstructor: pathValueConstructorByEnumeration;

pathValueConstructorByEnumeration:
	PATH LEFT_PAREN pathElementList RIGHT_PAREN;

pathElementList: pathElementListStart pathElementListStep?;

pathElementListStart: nodeRefValueExpr;

pathElementListStep:
	COMMA edgeRefValueExpr COMMA nodeRefValueExpr;

propertyRef: propertySource PERIOD propertyName;

propertySource:
	nodeRefValueExpr
	| edgeRefValueExpr
	| recordValueExpr;

valueQueryExpr: VALUE nestedQuerySpec;

caseExpr: caseAbbreviation | caseSpecification;

caseAbbreviation:
	NULLIF LEFT_PAREN valueExpr COMMA valueExpr RIGHT_PAREN
	| COALESCE LEFT_PAREN valueExpr (COMMA valueExpr)* RIGHT_PAREN;

caseSpecification: simpleCase | searchedCase;

simpleCase: CASE caseOperand simpleWhenClause elseClause? END;

searchedCase: CASE searchedWhenClause elseClause? END;

simpleWhenClause: WHEN whenOperandList THEN result;

searchedWhenClause: WHEN searchCondition THEN result;

elseClause: ELSE result;

caseOperand: nonParenthesizedValueExprPrimary | elementVarRef;

whenOperandList: whenOperand (COMMA whenOperand)*;

whenOperand:
	nonParenthesizedValueExprPrimary
	| comparisonPredicatePart2
	| nullPredicatePart2
	| valueTypePredicatePart2
	| directedPredicatePart2
	| labeledPredicatePart2
	| sourcePredicatePart2
	| destinationPredicatePart2;

result: resultExpr | NULL;

resultExpr: valueExpr;

castSpec: CAST LEFT_PAREN castOperand AS castTarget RIGHT_PAREN;

castOperand: valueExpr;

castTarget: valueType;

elementIdFunction:
	ELEMENT_ID LEFT_PAREN elementVarRef RIGHT_PAREN;

letValueExpr: LET letVarDefList IN valueExpr END;

// lexical grammar

literal: SIGNED_NUMERIC_LITERAL | generalLiteral;

generalLiteral:
	predefinedTypeLiteral
	| listLiteral
	| recordLiteral;

predefinedTypeLiteral:
	booleanLiteral
	| characterStringLiteral
	| BYTE_STRING_LITERAL
	| temporalLiteral
	| durationLiteral
	| nullLiteral;

unsignedLiteral: UNSIGNED_NUMERIC_LITERAL | generalLiteral;

booleanLiteral: TRUE | FALSE | UNKNOWN;

characterStringLiteral:
	singleQuotedCharacterSequence
	| doubleQuotedCharacterSequence
	| accentQuotedCharacterSequence;

unbrokenCharacterStringLiteral:
	noEscape? unbrokenSingleQuotedCharacterSequence
	| noEscape? unbrokenDoubleQuotedCharacterSequence;

singleQuotedCharacterSequence:
	noEscape? unbrokenSingleQuotedCharacterSequence (
		VERTICAL_BAR unbrokenSingleQuotedCharacterSequence
	)*;

doubleQuotedCharacterSequence:
	noEscape? unbrokenDoubleQuotedCharacterSequence (
		VERTICAL_BAR unbrokenDoubleQuotedCharacterSequence
	)*;

accentQuotedCharacterSequence:
	noEscape? unbrokenAccentQuotedCharacterSequence (
		VERTICAL_BAR unbrokenAccentQuotedCharacterSequence
	)*;

noEscape: COMMERCIAL_AT;

unbrokenSingleQuotedCharacterSequence:
	SINGLE_QUOTED_STRING_LITERAL;

unbrokenDoubleQuotedCharacterSequence:
	DOUBLE_QUOTED_STRING_LITERAL;

unbrokenAccentQuotedCharacterSequence:
	ACCENT_QUOTED_STRING_LITERAL;

temporalLiteral:
	dateLiteral
	| timeLiteral
	| dateTimeLiteral
	| sqlDateTimeLiteral;

dateLiteral: DATE unbrokenCharacterStringLiteral;

timeLiteral: TIME unbrokenCharacterStringLiteral;

dateTimeLiteral:
	DATETIME unbrokenCharacterStringLiteral
	| TIMESTAMP unbrokenCharacterStringLiteral;

dateString: unbrokenCharacterStringLiteral;

timeString: unbrokenCharacterStringLiteral;

dateTimeString: unbrokenCharacterStringLiteral;

sqlDateTimeLiteral:
	DATE QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT QUOTE
	| TIME QUOTE DOUBLE_DIGIT COLON DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE
	| TIMESTAMP QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT DOUBLE_DIGIT COLON
		DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE
	| DATETIME QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT DOUBLE_DIGIT COLON
		DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE;

durationLiteral: DURATION durationString | sqlIntervalLiteral;

durationString: unbrokenCharacterStringLiteral;

sqlIntervalLiteral: UNSIGNED_INT sqlIntervalType;

sqlIntervalType:
	INTERVAL_DAY
	| INTERVAL_WEEK
	| INTERVAL_MONTH
	| INTERVAL_YEAR;

nullLiteral: NULL;

listLiteral: listValueConstructorByEnumeration;

recordLiteral: recordValueConstructor;

objectName: identifier;

objectNameOrBindingVar: REGULAR_IDENTIFIER;

directoryName: identifier;

schemaName: identifier;

graphName: REGULAR_IDENTIFIER | delimitedGraphName;

delimitedGraphName: delimitedIdentifier;

graphTypeName: identifier;

elementTypeName: identifier;

bindingTableName:
	REGULAR_IDENTIFIER
	| delimitedBindingTableName;

delimitedBindingTableName: delimitedIdentifier;

procedureName: identifier;

labelName: identifier;

propertyName: identifier;

fieldName: identifier;

parameterName: DOLLAR separatedIdentifier;

var:
	graphVar
	| graphPatternVar
	| bindingTableVar
	| valueVar
	| bindingVar;

graphVar: bindingVar;

graphPatternVar: elementVar | pathOrSubpathVar;

pathOrSubpathVar: pathVar | subpathVar;

elementVar: bindingVar;

pathVar: bindingVar;

subpathVar: REGULAR_IDENTIFIER;

bindingTableVar: bindingVar;

valueVar: bindingVar;

bindingVar: REGULAR_IDENTIFIER;

token: nonDelimiterToken | delimiterToken;

nonDelimiterToken:
	REGULAR_IDENTIFIER
	| parameterName
	| keyWord
	| UNSIGNED_NUMERIC_LITERAL
	| BYTE_STRING_LITERAL
	| MULTISET_ALTERNATION;

identifier: REGULAR_IDENTIFIER | delimitedIdentifier;

separatedIdentifier: REGULAR_IDENTIFIER | delimitedIdentifier;

nonDelimitedIdentifier:
	REGULAR_IDENTIFIER
	| EXTENDED_IDENTIFIER;

delimitedIdentifier:
	doubleQuotedCharacterSequence
	| accentQuotedCharacterSequence;

keyWord: reservedWord | nonReservedWord;

reservedWord:
	preReservedWord
	| ABS
	| ACOS
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
	| BIG
	| BIGINT
	| BINARY
	| BOOL
	| BOOLEAN
	| BOTH
	| BTRIM
	| BY
	| BYTE_LENGTH
	| BYTES
	| CALL
	| CASE
	| CAST
	| CEIL
	| CEILING
	| CHAR_LENGTH
	| CHARACTER_LENGTH
	| CHARACTERISTICS
	| CLOSE
	| COALESCE
	| COLLECT
	| COMMIT
	| COPY
	| COS
	| COSH
	| COT
	| COUNT
	| CREATE
	| CURRENT_DATE
	| CURRENT_GRAPH
	| CURRENT_PROPERTY_GRAPH
	| CURRENT_SCHEMA
	| CURRENT_TIME
	| CURRENT_TIMESTAMP
	| CURRENT_USER
	| DATE
	| DATETIME
	| DAY
	| DEC
	| DECIMAL
	| DEGREES
	| DELETE
	| DESC
	| DESCENDING
	| DETACH
	| DISTINCT
	| DOUBLE
	| DROP
	| DURATION
	| DURATION_BETWEEN
	| ELEMENT_ID
	| ELSE
	| END
	| EXCEPT
	| EXISTS
	| EXP
	| FALSE
	| FILTER
	| FINISH
	| FLOAT
	| FLOAT16
	| FLOAT32
	| FLOAT64
	| FLOAT128
	| FLOAT256
	| FLOOR
	| FOR
	| FROM
	| GROUP
	| HAVING
	| HOME_GRAPH
	| HOME_PROPERTY_GRAPH
	| HOME_SCHEMA
	| HOUR
	| IF
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
	| INTERVAL
	| IS
	| LEADING
	| LET
	| LIKE
	| LIMIT
	| LIST
	| LN
	| LOCAL
	| LOCAL_DATETIME
	| LOCAL_TIME
	| LOCAL_TIMESTAMP
	| LOG
	| LOG10
	| LOWER
	| LTRIM
	| MATCH
	| MAX
	| MIN
	| MINUTE
	| MOD
	| MONTH
	| NEXT
	| NODETACH
	| NORMALIZE
	| NOT
	| NULL
	| NULLS
	| NULLIF
	| OCTET_LENGTH
	| OF
	| OFFSET
	| OPEN
	| OPTIONAL
	| OR
	| ORDER
	| OTHERWISE
	| PARAMETER
	| PARAMETERS
	| PATH
	| PATH_LENGTH
	| PATHS
	| PERCENTILE_CONT
	| PERCENTILE_DISC
	| POWER
	| PRECISION
	| PROPERTY_EXISTS
	| RADIANS
	| REAL
	| RECORD
	| REMOVE
	| REPLACE
	| RESET
	| RETURN
	| ROLLBACK
	| RTRIM
	| SAME
	| SCHEMA
	| SECOND
	| SELECT
	| SESSION
	| SET
	| SIGNED
	| SIN
	| SINH
	| SKIP_
	| SMALL
	| SMALLINT
	| SQRT
	| START
	| STDDEV_POP
	| STDDEV_SAMP
	| STRING
	| SUM
	| TAN
	| TANH
	| THEN
	| TIME
	| TIMESTAMP
	| TRAILING
	| TRIM
	| TRUE
	| TYPED
	| UBIGINT
	| UINT
	| UINT8
	| UINT16
	| UINT32
	| UINT64
	| UINT128
	| UINT256
	| UNION
	| UNKNOWN
	| UNSIGNED
	| UPPER
	| USE
	| USMALLINT
	| VALUE
	| VARBINARY
	| VARCHAR
	| VARIABLE
	| WHEN
	| WHERE
	| WITH
	| XOR
	| YEAR
	| YIELD
	| ZONED
	| ZONED_DATETIME
	| ZONED_TIME;

preReservedWord:
	AGGREGATE
	| AGGREGATES
	| ALTER
	| CATALOG
	| CLEAR
	| CLONE
	| CONSTRAINT
	| CURRENT_ROLE
	| DATA
	| DIRECTORY
	| EXACT
	| EXISTING
	| FUNCTION
	| GQLSTATUS
	| GRANT
	| INSTANT
	| LEFT
	| NOTHING
	| NUMERIC
	| ON
	| PARTITION
	| PROCEDURE
	| PRODUCT
	| PROJECT
	| QUERY
	| RECORDS
	| REFERENCE
	| RENAME
	| REVOKE
	| RIGHT
	| SUBSTRING
	| TEMPORAL
	| UNIQUE
	| UNIT
	| VALUES;

nonReservedWord:
	ACYCLIC
	| BINDING
	| BINDINGS
	| CONNECTING
	| DESTINATION
	| DIFFERENT
	| DIRECTED
	| EDGE
	| EDGES
	| ELEMENT
	| ELEMENTS
	| FIRST
	| GRAPH
	| GROUPS
	| KEEP
	| LABEL
	| LABELED
	| LABELS
	| LAST
	| NFC
	| NFD
	| NFKC
	| NFKD
	| NO
	| NODE
	| NORMALIZED
	| ONLY
	| ORDINALITY
	| PROPERTY
	| READ
	| RELATIONSHIP
	| RELATIONSHIPS
	| REPEATABLE
	| SHORTEST
	| SIMPLE
	| SOURCE
	| TABLE
	| TEMP
	| TIMEZONE
	| TO
	| TRAIL
	| TRANSACTION
	| TYPE
	| UNDIRECTED
	| VERTEX
	| WALK
	| WITHOUT
	| WRITE
	| ZONE;

delimiterToken:
	GQL_SPECIAL_CHAR
	| characterStringLiteral
	| dateString
	| dateTimeString
	| delimitedIdentifier
	| durationString
	| timeString
	| CONCATENATION
	| DOUBLE_COLON
	| DOUBLE_MINUS
	| DOUBLE_PERIOD
	| notEquals
	| lessThen
	| graterThanOrEquals
	| lessThanOrEquals
	| graterThanOrEquals
	| LEFT_ARROW
	| LEFT_ARROW_TILDE
	| LEFT_ARROW_BRACKET
	| LEFT_ARROW_TILDE_BRACKET
	| LEFT_MINUS_RIGHT
	| LEFT_MINUS_SLASH
	| LEFT_TILDE_SLASH
	| MINUS_LEFT_BRACKET
	| MINUS_SLASH
	| RIGHT_ARROW
	| RIGHT_BRACKET_MINUS
	| RIGHT_BRACKET_TILDE
	| BRACKET_RIGHT_ARROW
	| BRACKET_TILDE_RIGHT_ARROW
	| SLASH_MINUS
	| SLASH_MINUS_RIGHT
	| SLASH_TILDE
	| SLASH_TILDE_RIGHT
	| TILDE_LEFT_BRACKET
	| TILDE_RIGHT_ARROW
	| TILDE_SLASH;

edgeSynonym: EDGE | RELATIONSHIP;

edgesSynonym: EDGES | RELATIONSHIPS;

nodeSynonym: NODE | VERTEX;
