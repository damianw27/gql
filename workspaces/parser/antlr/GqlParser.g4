parser grammar GqlParser;

options {
	language = JavaScript;
	tokenVocab = GqlLexer;
}

// program grammar
gqlProgram: (separator? activity separator? ';'?)* EOF;

activity: programActivity (separator sessionCloseCommand)?;

programActivity: sessionActivity | transactionActivity;

// session management grammar
sessionActivity: sessionSetCommand | sessionResetCommand;

sessionSetCommand:
	SESSION separator SET separator (
		sessionSetSchemaClause
		| sessionSetGraphClause
		| sessionSetTimeZoneClause
		| sessionSetParameterClause
	);

sessionSetSchemaClause: SCHEMA separator schemaRef;

sessionSetGraphClause:
	(PROPERTY separator)? GRAPH separator graphExpr;

sessionSetTimeZoneClause:
	TIME separator ZONE separator setTimeZoneValue;

setTimeZoneValue: stringValueExpr;

sessionSetParameterClause:
	sessionSetGraphParameterClause
	| sessionSetBindingTableParameterCalues
	| sessionSetValuesParameterClause;

sessionSetGraphParameterClause:
	(PROPERTY separator)? GRAPH sessionSetParameterName optTypedGraphInit;

sessionSetBindingTableParameterCalues:
	(BINDING separator)? TABLE sessionSetParameterName optTypedBindingTableInit;

sessionSetValuesParameterClause:
	VALUE sessionSetParameterName optTypedValueInit;

sessionSetParameterName:
	parameterName (separator IF_NOT_EXISTS)?;

sessionResetCommand:
	(SESSION separator)? RESET separator sessionResetArguments;

sessionResetArguments:
	(ALL separator)? (PARAMETERS | CHARACTERISTICS)
	| SCHEMA
	| (PROPERTY separator)? GRAPH
	| TIME separator ZONE
	| PARAMETER separator parameterName;

sessionCloseCommand: SESSION? separator CLOSE;

// transaction grammar
transactionActivity:
	transactionStartCommand (
		separator procedureSpec (separator transactionEndCommand)?
	)?
	| procedureSpec (separator transactionEndCommand)?
	| transactionEndCommand;

transactionStartCommand:
	START separator TRANSACTION (
		separator transactionCharacteristics
	)?;

transactionEndCommand: ROLLBACK | COMMIT;

transactionCharacteristics:
	transactionMode separator? (
		COMMA separator? transactionMode separator?
	)+;

transactionMode: transactionAccessMode | implDefinedAccessMode;

transactionAccessMode:
	READ separator ONLY
	| READ separator WRITE;

implDefinedAccessMode:;

// procedures grammar
nestedProcedureSpec:
	LEFT_BRACE separator? procedureSpec separator? RIGHT_BRACE;

procedureSpec: procedureBody;

nestedDataModProcedureSpec:
	LEFT_BRACE separator? procedureBody separator? RIGHT_BRACE;

nestedQuerySpec:
	LEFT_BRACE separator? procedureBody separator? RIGHT_BRACE;

procedureBody:
	(atSchemaClause separator)? (bindingVarDefBlock separator)? statmentBlock;

bindingVarDefBlock: (bindingVarDef separator?)+;

bindingVarDef: graphVarDef | bindingTableVarDef | valueVarDef;

statmentBlock: statement (separator nextStatment)*;

statement:
	linearCatalogModStatment
	| linearDataModStatment
	| compositeQueryStatment;

nextStatment: NEXT (separator yieldClause)? separator statement;

// var def grammar
graphVarDef:
	(PROPERTY separator)? GRAPH separator graphVar optTypedGraphInit;

optTypedGraphInit:
	(((typed separator)? graphRefValueType) separator)? graphInit;

graphInit: EQUALS separator? graphExpr;

bindingTableVarDef:
	(BINDING separator)? TABLE separator bindingTableVar separator optTypedBindingTableInit;

optTypedBindingTableInit:
	(((typed separator)? bindingTableRefValueType) separator)? bindingTableInit;

bindingTableInit: EQUALS separator? bindingTableExpr;

valueVarDef:
	VALUE separator valueVar separator optTypedValueInit;

optTypedValueInit:
	(((typed separator)? valueType) separator)? valueInit;

valueInit: EQUALS separator valueExpr;

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
	VARIABLE separator valueExprPrimary
	| parenthesizedValueExpr
	| propertyRef
	| unsignedValueSpec
	| aggregateFunction
	| collectionValueConstructor
	| valueQueryExpr
	| caseExpr;

// catalog-mod statments grammar
linearCatalogModStatment: (simpleCatalogModStatment)+;

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
	CREATE separator SCHEMA (separator IF_NOT_EXISTS)? separator catalogSchemaParentAndName;

dropSchemeStatment:
	DROP separator SCHEMA (separator IF_EXISTS)? separator catalogSchemaParentAndName;

createGraphStatment:
	createOnlyGraphStatment
	| createOrReplaceGraphStatment;

createOnlyGraphStatment:
	CREATE separator (PROPERTY separator)? GRAPH (
		separator IF_NOT_EXISTS
	)? separator catalogGraphParentAndName separator (
		openGraphType
		| ofGraphType
	) (separator graphSource)?;

createOrReplaceGraphStatment:
	CREATE separator OR separator REPLACE (separator PROPERTY)? separator GRAPH separator
		catalogGraphParentAndName separator (
		openGraphType
		| ofGraphType
	) (separator graphSource)?;

openGraphType:
	OPEN ((separator PROPERTY)? separator GRAPH)? separator TYPE;

ofGraphType:
	graphTypeLikeGraph
	| (typed)? graphTypeRef
	| (typed)? nestedGraphTypeSpec;

graphTypeLikeGraph: LIKE separator graphExpr;

graphSource: AS separator COPY separator OF separator graphExpr;

dropGraphStatment:
	DROP (separator PROPERTY)? separator GRAPH (
		separator IF_EXISTS
	)? separator catalogGraphParentAndName;

createGraphTypeStatment:
	CREATE separator (
		(
			(PROPERTY separator)? GRAPH separator TYPE (
				separator IF_NOT_EXISTS
			)?
		)
		| (
			OR separator REPLACE (separator PROPERTY)? separator GRAPH separator TYPE
		)
	) separator catalogGraphTypeParentAndName separator graphTypeSource;

graphTypeSource:
	(AS separator)? copyOfGraphType
	| graphTypeLikeGraph
	| (AS separator)? nestedGraphTypeSpec;

copyOfGraphType:
	COPY separator OF separator (
		graphTypeRef
		| externalObjectRef
	);

dropGraphTypeStatment:
	DROP (separator PROPERTY)? separator GRAPH separator TYPE (
		separator IF_EXISTS
	)? separator catalogGraphTypeParentAndName;

callCatalogModProcedureStatment: callProcedureStatment;

// data mod statments grammar
linearDataModStatment:
	focusedLinearDataModStatment
	| ambientLinearDataModStatment;

focusedLinearDataModStatment:
	focusedLinearDataModStatmentBody
	| focusedNestedDataModProcedureSpec;

focusedLinearDataModStatmentBody:
	useGraphClause separator simpleLinearDataAccessingStatment (
		separator primitiveResultStatment
	)?;

focusedNestedDataModProcedureSpec:
	useGraphClause separator nestedDataModProcedureSpec;

ambientLinearDataModStatment:
	ambientLinearDataModStatmentBody
	| nestedDataModProcedureSpec;

ambientLinearDataModStatmentBody:
	simpleLinearDataAccessingStatment (
		separator primitiveResultStatment
	)?;

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

insertStatment: INSERT separator insertGraphPattern;

setStatment: SET separator setItemList;

setItemList:
	setItem separator? (COMMA separator? setItem separator?)+;

setItem: setPropertyItem | setAllPropertiesItem | setLabelItem;

setPropertyItem:
	bindingVarRef separator? PERIOD separator? propertyName separator? EQUALS separator? valueExpr;

setAllPropertiesItem:
	bindingVarRef separator? EQUALS separator LEFT_BRACE (
		separator propertyKeyValuePairList
	)? separator? RIGHT_BRACE;

setLabelItem: bindingVarRef (IS | COLON) labelSetSpec;

labelSetSpec:
	labelName (separator? AMPERSAND separator? labelName)*;

removeStatment: REMOVE separator removeItemList;

removeItemList:
	removeItem separator (COMMA separator? removeItem separator?)+;

removeItem: removePropertyItem | removeLabelItem;

removePropertyItem: bindingVarRef PERIOD propertyName;

removeLabelItem:
	bindingVarRef separator (IS | COLON) separator labelSetSpec;

deleteStatment:
	(DETACH | NODETACH) separator DELETE separator deleteItemList;

deleteItemList:
	deleteItem separator? (
		COMMA separator? deleteItem separator?
	)+;

deleteItem: valueExpr;

callDataModProcedureStatment: callProcedureStatment;

// query statments grammar
compositeQueryStatment: compositeQueryExpr;

compositeQueryExpr:
	compositeQueryExpr separator queryConjunction separator compositeQueryPrimary
	| compositeQueryPrimary;

queryConjunction: setOperator | OTHERWISE;

setOperator:
	(UNION | EXCEPT | INTERSECT) separator setQuantifier;

compositeQueryPrimary: linearQueryStatment;

linearQueryStatment:
	focusedLinearQueryStatment
	| ambientLinearQueryStatment;

focusedLinearQueryStatment:
	(focusedLinearQueryStatmentPart separator)+ focusedLinearQueryAndPrimitiveResultStatmentPart
	| focusedPrimitiveResultStatment
	| focusedNestedQuerySpec
	| selectStatment;

focusedLinearQueryStatmentPart:
	useGraphClause separator simpleLinearQueryStatment;

focusedLinearQueryAndPrimitiveResultStatmentPart:
	useGraphClause separator simpleLinearQueryStatment separator primitiveResultStatment;

focusedPrimitiveResultStatment:
	useGraphClause separator primitiveResultStatment;

focusedNestedQuerySpec:
	useGraphClause separator nestedQuerySpec;

ambientLinearQueryStatment:
	(simpleLinearQueryStatment separator)? primitiveResultStatment
	| nestedQuerySpec;

simpleLinearQueryStatment:
	simpleQueryStatment (separator simpleQueryStatment)*;

simpleQueryStatment: primitiveQueryStatment | callQueryStatment;

primitiveQueryStatment:
	matchStatment
	| letStatment
	| forStatment
	| filterStatment
	| orderByAndPageStatment;

matchStatment: simpleMatchStatment | optionalMatchStatment;

simpleMatchStatment: MATCH separator graphPatternBindingTable;

optionalMatchStatment: OPTIONAL separator optionalOperand;

optionalOperand:
	simpleMatchStatment
	| LEFT_BRACE separator? matchStatmentBlock separator? RIGHT_BRACE
	| LEFT_PAREN separator? matchStatmentBlock separator? RIGHT_PAREN;

matchStatmentBlock: (separator? matchStatment)+;

callQueryStatment: callProcedureStatment;

filterStatment:
	FILTER separator (whereClause | searchCondition);

letStatment: LET separator letVarDefList;

letVarDefList:
	letVarDef separator? (COMMA separator? letVarDef separator?)+;

letVarDef:
	valueVarDef
	| valueVar separator? EQUALS separator? valueExpr;

forStatment:
	FOR separator forItem separator? forOrdinalityOrOffset?;

forItem: forItemAlias separator listValueExpr;

forItemAlias: identifier separator IN;

forOrdinalityOrOffset:
	WITH separator (ORDINALITY | OFFSET) separator identifier;

orderByAndPageStatment:
	orderByClause (separator offsetClause)? (
		separator limitClause
	)?
	| offsetClause (separator limitClause)?
	| limitClause;

primitiveResultStatment:
	returnStatment (separator orderByAndPageStatment)?
	| FINISH;

returnStatment: RETURN separator returnStatmentBody;

returnStatmentBody:
	(setQuantifier separator)? (ASTERISK | returnItemList) (
		separator groupByClause
	)?
	| NO separator BINDINGS;

returnItemList:
	returnItem (separator? COMMA separator? returnItem)*;

returnItem: aggregatingValueExpr (separator returnItemAlias)?;

returnItemAlias: AS separator identifier;

selectStatment:
	SELECT separator? setQuantifier? separator (
		selectItemList
		| ASTERISK
	) (
		separator selectStatmentBody (separator whereClause)? (
			separator groupByClause
		)? (separator havingClause)? (separator orderByClause)? (
			separator offsetClause
		)? (separator limitClause)?
	)?;

selectItemList:
	selectItem separator? (
		COMMA separator? selectItem separator?
	)+;

selectItem: aggregatingValueExpr (separator selectItemAlias)?;

selectItemAlias: AS separator identifier;

havingClause: HAVING searchCondition;

selectStatmentBody: FROM selectGraphMatchList | selectQuerySpec;

selectGraphMatchList:
	selectGraphMatch (
		separator? COMMA separator? selectGraphMatch
	)*;

selectGraphMatch: graphExpr separator matchStatment;

selectQuerySpec:
	FROM separator nestedQuerySpec
	| FROM separator graphExpr separator nestedQuerySpec;

// common statments grammar
callProcedureStatment: (OPTIONAL separator)? CALL procedureCall;

procedureCall: inlineProcedureCall | namedProcedureCall;

inlineProcedureCall:
	(varScopeClause separator)? nestedProcedureSpec;

varScopeClause:
	LEFT_PAREN separator? bindingVarRefList? separator? RIGHT_PAREN;

bindingVarRefList:
	bindingVarRef separator? (
		COMMA separator? bindingVarRef separator?
	)+;

namedProcedureCall:
	procedureRef separator LEFT_PAREN separator? procedureArgList? separator? RIGHT_PAREN;

procedureArgList:
	procedureArg separator? (
		COMMA separator? procedureArg separator?
	)+;

procedureArg: valueExpr;

// common elements grammar
useGraphClause: USE separator graphExpr;

atSchemaClause: AT separator schemaRef;

bindingVarRef: bindingVar;

elementVarRef: bindingVarRef;

pathVarRef: bindingVarRef;

parameter: parameterName;

graphPatternBindingTable:
	graphPattern (separator graphPatternYieldClause)?;

graphPatternYieldClause: YIELD graphPatternYieldItemList;

graphPatternYieldItemList:
	graphPatternYieldItem separator? (
		COMMA separator? graphPatternYieldItem separator?
	)+;

graphPatternYieldItem: elementVarRef separator pathVarRef;

graphPattern:
	(matchMode separator)? pathPatternList (separator keepClause)? (
		separator graphPatternWhereClause
	)?;

matchMode:
	repeatableElementsMatchMode
	| differentEdgesMatchMode;

repeatableElementsMatchMode:
	REPEATABLE separator elementBindingsOrElements;

differentEdgesMatchMode: DIFFERENT edgeBindingsOrEdges;

elementBindingsOrElements:
	ELEMENT (separator BINDINGS)?
	| ELEMENTS;

edgeBindingsOrEdges:
	edgeSynonym (separator BINDINGS)?
	| edgesSynonym;

pathPatternList:
	pathPattern (separator? COMMA separator? pathPattern)*;

pathPattern:
	(pathVarDeclaration separator)? (pathPatternPrefix separator)? (
		pathPatternExpr
	)+;

pathVarDeclaration: pathVar separator? EQUALS;

keepClause: KEEP separator pathPatternPrefix;

graphPatternWhereClause: WHERE separator searchCondition;

pathPatternPrefix: pathModePrefix | pathSearchPrefix;

pathModePrefix: pathMode (separator pathOrPaths)?;

pathMode: WALK | TRAIL | SIMPLE | ACYCLIC;

pathSearchPrefix:
	allPathSearch
	| anyPathSearch
	| shortestPathSearch;

allPathSearch:
	ALL (separator pathMode)? (separator pathOrPaths)?;

pathOrPaths: PATH | PATHS;

anyPathSearch:
	ANY (separator numberOfPaths)? (separator pathMode)? (
		separator pathOrPaths
	)?;

numberOfPaths: unsignedIntSpec;

shortestPathSearch:
	allShortestPathSearch
	| anyShortestPathSearch
	| countedShortestPathSearch
	| countedShortestGroupSearch;

allShortestPathSearch:
	ALL separator SHORTEST (separator pathMode)? (
		separator pathOrPaths
	)?;

anyShortestPathSearch:
	ANY separator SHORTEST (separator pathMode)? (
		separator pathOrPaths
	)?;

countedShortestPathSearch:
	SHORTEST separator numberOfPaths (separator pathMode)? (
		separator pathOrPaths
	)?;

countedShortestGroupSearch:
	SHORTEST separator numberOfGroups (separator pathMode)? (
		separator pathOrPaths
	)? separator groupOrGroups;

groupOrGroups: GROUP | GROUPS;

numberOfGroups: unsignedIntSpec;

pathPatternExpr:
	pathTerm
	| pathMultisetAlternation
	| pathPatternUnion;

pathMultisetAlternation:
	pathTerm (separator MULTISET_ALTERNATION separator pathTerm)*;

pathPatternUnion:
	pathTerm separator? (
		VERTICAL_BAR separator? pathTerm separator?
	)*;

pathTerm: pathFactor (separator pathFactor)*;

pathFactor:
	pathPrimary
	| quantifiedPathPrimary
	| questionedPathPrimary;

quantifiedPathPrimary:
	pathPrimary separator graphPatternQuantifier;

questionedPathPrimary: pathPrimary QUESTION_MARK;

pathPrimary:
	elementPattern
	| parenthesizedPathPatternExpr
	| simplifiedPathPatternExpr;

elementPattern: nodePattern | edgePattern;

nodePattern:
	LEFT_PAREN separator? elementPatternFiller separator? RIGHT_PAREN;

elementPatternFiller:
	elementVarDeclaration? (separator? isLabelExpr)? (
		separator? elementPatternPredicate
	)?;

elementVarDeclaration: (TEMP separator)? elementVar;

isLabelExpr:
	IS separator labelExpr
	| COLON separator? labelExpr;

elementPatternPredicate:
	elementPatternWhereClause
	| elementPropertySpec;

elementPatternWhereClause: WHERE separator searchCondition;

elementPropertySpec:
	LEFT_BRACE separator? propertyKeyValuePairList separator? RIGHT_BRACE;

propertyKeyValuePairList:
	propertyKeyValuePair separator? (
		COMMA separator? propertyKeyValuePair separator?
	)*;

propertyKeyValuePair:
	propertyName separator? COLON separator? valueExpr;

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
	LEFT_ARROW_BRACKET separator? elementPatternFiller separator? RIGHT_BRACKET_MINUS;

fullEdgeUndirected:
	TILDE_LEFT_BRACKET separator? elementPatternFiller separator? RIGHT_BRACKET_TILDE;

fullEdgePointingRight:
	MINUS_LEFT_BRACKET separator? elementPatternFiller separator? BRACKET_RIGHT_ARROW;

fullEdgeLeftOrUndirected:
	LEFT_ARROW_TILDE_BRACKET separator? elementPatternFiller separator? RIGHT_BRACKET_TILDE;

fullEdgeUndirectedOrRight:
	TILDE_LEFT_BRACKET separator? elementPatternFiller separator? BRACKET_RIGHT_ARROW;

fullEdgeLeftOrRight:
	LEFT_ARROW_BRACKET separator? elementPatternFiller separator? BRACKET_RIGHT_ARROW;

fullEdgeAnyDirection:
	MINUS_LEFT_BRACKET separator? elementPatternFiller separator? RIGHT_BRACKET_MINUS;

abbreviatedEdgePattern:
	LEFT_ARROW
	| TILDE
	| RIGHT_ARROW
	| LEFT_ARROW_TILDE
	| TILDE_RIGHT_ARROW
	| LEFT_MINUS_RIGHT
	| MINUS;

parenthesizedPathPatternExpr:
	LEFT_PAREN separator? (subpathVarDeclaration separator)? (
		pathModePrefix separator
	)? pathPatternExpr (
		separator parenthesizedPathPatternWhereClause
	)? separator? RIGHT_PAREN;

subpathVarDeclaration: subpathVar separator? EQUALS;

parenthesizedPathPatternWhereClause:
	WHERE separator searchCondition;

insertGraphPattern: insertGraphPatternList;

insertGraphPatternList:
	insertPathPattern (
		separator? COMMA separator? insertPathPattern separator?
	)*;

insertPathPattern:
	insertNodePattern (
		separator? insertEdgePattern separator insertNodePattern separator?
	)*;

insertNodePattern:
	LEFT_PAREN separator? insertElementPatternFiller? separator? RIGHT_PAREN;

insertEdgePattern:
	insertEdgePointingLeft
	| insertEdgePointingRight
	| insertEdgeUndirected;

insertEdgePointingLeft:
	LEFT_ARROW_BRACKET separator? insertElementPatternFiller separator? RIGHT_BRACKET_MINUS;

insertEdgePointingRight:
	MINUS_LEFT_BRACKET separator? insertElementPatternFiller separator? BRACKET_RIGHT_ARROW;

insertEdgeUndirected:
	TILDE_LEFT_BRACKET separator? insertElementPatternFiller separator? RIGHT_BRACKET_TILDE;

insertElementPatternFiller:
	elementVarDeclaration (separator labelAndPropertySetSpec)?
	| (elementVarDeclaration separator)? labelAndPropertySetSpec;

labelAndPropertySetSpec:
	labelSetSpec (separator elementPropertySpec)?
	| (labelSetSpec separator)? elementPropertySpec;

labelExpr:
	labelTerm (separator? VERTICAL_BAR separator? labelTerm)*;

labelTerm:
	labelFactor (separator? AMPERSAND separator? labelFactor)*;

labelFactor: labelPrimary | labelNegation;

labelNegation: EXCLAMATION separator? labelPrimary;

labelPrimary:
	labelName
	| wildcardLabel
	| parenthesizedLabelExpr;

wildcardLabel: PERCENT;

parenthesizedLabelExpr:
	LEFT_PAREN separator? labelExpr separator? RIGHT_PAREN;

graphPatternQuantifier:
	ASTERISK
	| PLUS
	| fixedQuantifier
	| generalQuantifier;

fixedQuantifier:
	LEFT_BRACE separator? UNSIGNED_INT separator? RIGHT_BRACE;

generalQuantifier:
	LEFT_BRACE separator? (lowerBound separator)? COMMA (
		separator upperBound
	)? separator? RIGHT_BRACE;

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
	LEFT_MINUS_SLASH separator? simplifiedContents separator? SLASH_MINUS;

simplifiedDefaultingUndirected:
	TILDE_SLASH separator? simplifiedContents separator? SLASH_TILDE;

simplifiedDefaultingRight:
	MINUS_SLASH separator? simplifiedContents separator? SLASH_MINUS_RIGHT;

simplifiedDefaultingLeftOrUndirected:
	LEFT_TILDE_SLASH separator? simplifiedContents separator? SLASH_TILDE;

simplifiedDefaultingUndirectedOrRight:
	TILDE_SLASH separator? simplifiedContents separator? SLASH_TILDE_RIGHT;

simplifiedDefaultingLeftOrRight:
	LEFT_MINUS_SLASH separator? simplifiedContents separator? SLASH_MINUS_RIGHT;

simplifiedDefaultingAnyDirection:
	MINUS_SLASH separator? simplifiedContents separator? SLASH_MINUS;

simplifiedContents:
	simplifiedTerm
	| simplifiedPathUnion
	| simplifiedMultisetAlternation;

simplifiedPathUnion:
	simplifiedTerm (
		separator? VERTICAL_BAR separator? simplifiedTerm
	)*;

simplifiedMultisetAlternation:
	simplifiedTerm (
		separator? MULTISET_ALTERNATION separator? simplifiedTerm
	)*;

simplifiedTerm:
	simplifiedFactorLow (separator simplifiedFactorLow)*;

simplifiedFactorLow:
	simplifiedFactorHigh (
		separator? AMPERSAND separator? simplifiedFactorHigh
	)*;

simplifiedFactorHigh:
	simplifiedTertiary
	| simplifiedQuntified
	| simplifiedQuestioned;

simplifiedQuntified:
	simplifiedTertiary separator graphPatternQuantifier;

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
	LEFT_ANGLE_BRACKET separator? simplifiedSecondary;

simplifiedOverrideUndirected:
	TILDE separator? simplifiedSecondary;

simplifiedOverrideRight:
	simplifiedSecondary separator? RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrUndirected:
	LEFT_ARROW_TILDE separator? simplifiedSecondary;

simplifiedOverrideUndirectedOrRight:
	TILDE separator? simplifiedSecondary separator? RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrRight:
	LEFT_ANGLE_BRACKET separator? simplifiedSecondary separator? RIGHT_ANGLE_BRACKET;

simplifiedOverrideAnyDirection:
	MINUS separator? simplifiedSecondary;

simplifiedSecondary: simplifiedPrimary | simplifiedNegation;

simplifiedNegation: EXCLAMATION simplifiedPrimary;

simplifiedPrimary:
	labelName
	| LEFT_PAREN separator? simplifiedContents separator? RIGHT_PAREN;

whereClause: WHERE separator searchCondition;

yieldClause: YIELD separator yieldItemList;

yieldItemList:
	yieldItem (separator? COMMA separator? yieldItem)+;

yieldItem: yieldItemName (separator yieldItemAlias)?;

yieldItemName: fieldName;

yieldItemAlias: AS bindingVar;

groupByClause: GROUP separator BY separator groupingElementList;

groupingElementList:
	groupingElement (separator? COMMA separator? groupingElement)+
	| emptyGroupingSet;

groupingElement: bindingVarRef;

emptyGroupingSet: LEFT_PAREN separator? RIGHT_PAREN;

orderByClause: ORDER separator BY separator sortSpecList;

aggregateFunction:
	COUNT LEFT_PAREN ASTERISK RIGHT_PAREN
	| generalSetFunction
	| binarySetFunction;

generalSetFunction:
	generalSetFunctionType LEFT_PAREN separator? (
		setQuantifier separator
	)? valueExpr separator? RIGHT_PAREN;

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

dependantValueExpr: (setQuantifier separator)? numericValueExpr;

independentValueExpr: numericValueExpr;

sortSpecList: sortSpec (separator? COMMA separator? sortSpec)+;

sortSpec:
	sortKey (separator orderingSpec)? (separator nullOrdering)?;

sortKey: aggregatingValueExpr;

orderingSpec: ASC | ASCENDING | DESC | DESCENDING;

nullOrdering: NULLS separator FIRST | NULLS separator LAST;

limitClause: LIMIT unsignedIntSpec;

offsetClause: offsetSynonym separator unsignedIntSpec;

offsetSynonym: OFFSET | SKIP_;

// type elements grammar
graphTypeSpec:
	(PROPERTY separator)? GRAPH separator TYPE separator nestedGraphTypeSpec;

nestedGraphTypeSpec:
	LEFT_BRACE separator? graphTypeSpecBody separator? RIGHT_BRACE;

graphTypeSpecBody: elementTypeDefList;

elementTypeDefList:
	elementTypeDef (separator? COMMA separator? elementTypeDef)*;

elementTypeDef: nodeTypeDef | edgeTypeDef;

nodeTypeDef:
	nodeTypePattern
	| nodeSynonym separator nodeTypePhrase;

nodeTypePattern:
	LEFT_PAREN separator? nodeTypeName separator nodeTypeFiller separator? RIGHT_PAREN;

nodeTypePhrase:
	(TYPE separator)? nodeTypeName (separator nodeTypeFiller)?
	| nodeTypeFiller;

nodeTypeName: elementTypeName;

nodeTypeFiller:
	nodeTypeLabelSetDef
	| nodeTypePropertyTypeSetDef
	| nodeTypeLabelSetDef separator nodeTypePropertyTypeSetDef;

nodeTypeLabelSetDef: labelSetDef;

nodeTypePropertyTypeSetDef: propertyTypeSetDef;

edgeTypeDef:
	edgeTypePattern
	| (edgeKind separator)? edgeSynonym separator edgeTypePhrase;

edgeTypePattern:
	fullEdgeTypePattern
	| abbreviatedEdgeTypePattern;

edgeTypePhrase:
	(TYPE separator)? edgeTypeName (
		separator edgeTypeFiller separator endpointDef
	)
	| edgeTypeFiller separator endpointDef;

edgeTypeName: elementTypeName;

edgeTypeFiller:
	edgeTypeLabelSetDef
	| edgeTypePropertyTypeSetDef
	| edgeTypeLabelSetDef separator edgeTypePropertyTypeSetDef;

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
	MINUS_LEFT_BRACKET separator? arcTypeFiller separator? BRACKET_RIGHT_ARROW;

arcTypePointingLeft:
	LEFT_ARROW_BRACKET separator? arcTypeFiller separator? RIGHT_BRACKET_MINUS;

arcTypeUndirected:
	TILDE_LEFT_BRACKET separator? arcTypeFiller separator? RIGHT_BRACKET_TILDE;

arcTypeFiller: edgeTypeName separator? edgeTypeFiller;

abbreviatedEdgeTypePattern:
	abbreviatedEdgeTypePatternPointingRight
	| abbreviatedEdgeTypePatternPointingLeft
	| abbreviatedEdgeTypePatternUndirected;

abbreviatedEdgeTypePatternPointingRight:
	sourceNodeTypeRef separator? RIGHT_ARROW separator? destinationNodeTypeRef;

abbreviatedEdgeTypePatternPointingLeft:
	destinationNodeTypeRef separator? LEFT_ARROW separator? sourceNodeTypeRef;

abbreviatedEdgeTypePatternUndirected:
	sourceNodeTypeRef separator? TILDE separator? destinationNodeTypeRef;

nodeTypeRef: sourceNodeTypeRef | destinationNodeTypeRef;

sourceNodeTypeRef:
	LEFT_PAREN separator? sourceNodeTypeName separator? RIGHT_PAREN
	| LEFT_PAREN separator? nodeTypeFiller? separator? RIGHT_PAREN;

destinationNodeTypeRef:
	LEFT_PAREN separator? destinationNodeTypeName separator? RIGHT_PAREN
	| LEFT_PAREN separator? nodeTypeFiller? separator? RIGHT_PAREN;

edgeKind: DIRECTED | UNDIRECTED;

endpointDef: CONNECTING enpointPairDef;

enpointPairDef:
	endpointPairDefPointingRight
	| endpointPairDefPointingLeft
	| endpointPairDefUndirected
	| abbreviatedEdgeTypePattern;

endpointPairDefPointingRight:
	LEFT_PAREN separator? sourceNodeTypeName separator? connectorPointingRight separator?
		destinationNodeTypeName separator? RIGHT_PAREN;

endpointPairDefPointingLeft:
	LEFT_PAREN separator? destinationNodeTypeName separator? connectorPointingLeft separator?
		sourceNodeTypeName separator? RIGHT_PAREN;

endpointPairDefUndirected:
	LEFT_PAREN separator? sourceNodeTypeName separator? connectorUndirected separator?
		destinationNodeTypeName separator? RIGHT_PAREN;

connectorPointingRight: TO | RIGHT_ARROW;

connectorPointingLeft: LEFT_ARROW;

connectorUndirected: TO | TILDE;

sourceNodeTypeName: elementTypeName;

destinationNodeTypeName: elementTypeName;

labelSetDef:
	LABEL separator labelName
	| LABELS separator labelSetSpec
	| IS separator labelSetSpec
	| COLON separator? labelSetSpec;

propertyTypeSetDef:
	LEFT_BRACE separator? propertyTypeDefList? separator? RIGHT_BRACE;

propertyTypeDefList:
	propertyTypeDef (separator? COMMA separator? propertyTypeDef)*;

propertyTypeDef:
	propertyName (separator typed)? separator propertyValueType;

propertyValueType: valueType;

bindingTableType:
	(BINDING separator)? TABLE separator fieldTypesSpec;

valueType: predefinedType | constructedType | dynamicUnionType;

typed: DOUBLE_COLON | (TYPED separator);

predefinedType:
	booleanType
	| charStringType
	| byteStringType
	| numericType
	| temporalType
	| refValueType
	| pathValueType;

booleanType: (BOOL | BOOLEAN) (separator notNull)?;

charStringType:
	(STRING | VARCHAR) (
		LEFT_PAREN separator? maxLength separator? RIGHT_PAREN
	)? (separator notNull)?;

byteStringType:
	BYTES (
		LEFT_PAREN separator? (
			minLength separator? COMMA separator?
		)? maxLength separator? RIGHT_PAREN
	)? (separator notNull)?
	| BINARY (
		LEFT_PAREN separator? fixedLength separator? RIGHT_PAREN
	)? (separator notNull)?
	| VARBINARY (
		LEFT_PAREN separator? maxLength separator? RIGHT_PAREN
	)? (separator notNull)?;

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
	INT8 (separator notNull)?
	| INT16 (separator notNull)?
	| INT32 (separator notNull)?
	| INT64 (separator notNull)?
	| INT128 (separator notNull)?
	| INT256 (separator notNull)?
	| SMALLINT (separator notNull)?
	| INT (
		LEFT_PAREN separator? precision separator? RIGHT_PAREN
	)? (separator notNull)?
	| BIGINT (separator notNull)?
	| (SIGNED separator)? verboseBinaryExactNumericType;

unsignedBinaryExactNumericType:
	UINT8 (separator notNull)?
	| UINT16 (separator notNull)?
	| UINT32 (separator notNull)?
	| UINT64 (separator notNull)?
	| UINT128 (separator notNull)?
	| UINT256 (separator notNull)?
	| USMALLINT (separator notNull)?
	| UINT (
		LEFT_PAREN separator? precision separator? RIGHT_PAREN
	)? (separator notNull)?
	| UBIGINT (separator notNull)?
	| UNSIGNED separator verboseBinaryExactNumericType;

verboseBinaryExactNumericType:
	INTEGER8 (separator notNull)?
	| INTEGER16 (separator notNull)?
	| INTEGER32 (separator notNull)?
	| INTEGER64 (separator notNull)?
	| INTEGER128 (separator notNull)?
	| INTEGER256 (separator notNull)?
	| SMALL separator INTEGER (separator notNull)?
	| INTEGER (
		LEFT_PAREN separator? precision separator? RIGHT_PAREN
	)? (separator notNull)?
	| BIG separator INTEGER (separator? notNull)?;

decimalExactNumericType:
	(DECIMAL | DEC) (
		LEFT_PAREN separator? precision (
			separator? COMMA separator? scale
		)? separator? RIGHT_PAREN
	)? (separator notNull)?;

precision: UNSIGNED_DECIMAL_INT;

scale: UNSIGNED_DECIMAL_INT;

approximateNumericType:
	FLOAT16 (separator notNull)?
	| FLOAT32 (separator notNull)?
	| FLOAT64 (separator notNull)?
	| FLOAT128 (separator notNull)?
	| FLOAT256 (separator notNull)?
	| FLOAT (
		LEFT_PAREN separator? precision (
			separator? COMMA separator? scale
		)? separator? RIGHT_PAREN
	)? (separator notNull)?
	| REAL (separator notNull)?
	| DOUBLE (separator PRECISION)? (separator notNull);

temporalType: temporalInstantType | temporalDurationType;

temporalInstantType:
	dateTimeType
	| localDateTimeType
	| dateType
	| timeType
	| localTimeType;

temporalDurationType: durationType;

dateTimeType:
	ZONED separator DATETIME (separator notNull)?
	| TIMESTAMP separator WITH separator TIMEZONE (
		separator notNull
	)?;

localDateTimeType:
	LOCAL separator DATETIME (separator notNull)?
	| TIMESTAMP (separator? WITHOUT separator TIMEZONE) (
		separator notNull
	)?;

dateType: DATE (separator notNull)?;

timeType:
	ZONED separator TIME (separator notNull)?
	| TIME separator WITH separator TIMEZONE (separator notNull)?;

localTimeType:
	LOCAL separator TIME (separator notNull)?
	| TIME separator WITHOUT separator TIMEZONE (
		separator notNull
	)?;

durationType: DURATION (separator notNull)?;

refValueType:
	graphRefValueType
	| bindingTableRefValueType
	| nodeRefValueType
	| edgeRefValueType;

graphRefValueType:
	openGraphRefValueType
	| closedGraphRefValueType;

openGraphRefValueType:
	OPEN (separator PROPERTY)? separator GRAPH (
		separator notNull
	)?;

closedGraphRefValueType: graphTypeSpec (separator notNull)?;

bindingTableRefValueType: bindingTableType (separator notNull)?;

nodeRefValueType: openNodeRefValueType | closedNodeRefValueType;

openNodeRefValueType:
	(OPEN separator)? nodeSynonym (separator notNull)?;

closedNodeRefValueType: edgeTypeDef (separator notNull)?;

edgeRefValueType: openEdgeRefValueType | closedEdgeRefValueType;

openEdgeRefValueType:
	(OPEN separator)? edgeSynonym (separator notNull)?;

closedEdgeRefValueType: edgeTypeDef (separator notNull)?;

constructedType: listValueType | recordType;

listValueType:
	listValueTypeName LEFT_ANGLE_BRACKET predefinedType RIGHT_ANGLE_BRACKET (
		LEFT_BRACKET separator? maxLength separator? RIGHT_BRACKET
	)? (separator notNull)?
	| predefinedType separator listValueTypeName (
		LEFT_BRACKET separator? maxLength separator? RIGHT_BRACKET
	)? (separator notNull)?;

listValueTypeName: (GROUP separator)? listValueTypeNameSynonym;

listValueTypeNameSynonym: LIST | ARRAY;

recordType:
	(OPEN separator)? RECORD (separator notNull)?
	| (RECORD separator)? fieldTypesSpec (separator notNull)?;

fieldTypesSpec:
	LEFT_BRACE separator? fieldTypeList? separator? RIGHT_BRACE;

fieldTypeList:
	fieldType (separator? COMMA separator? fieldType)+;

dynamicUnionType:
	openDynamicUnionType
	| dynamicPropertyValueType
	| closedDynamicUnionType;

openDynamicUnionType: ANY;

dynamicPropertyValueType:
	(ANY separator)? PROPERTY separator VALUE;

closedDynamicUnionType:
	ANY separator LEFT_ANGLE_BRACKET separator? componentTypeList separator? RIGHT_ANGLE_BRACKET;

componentTypeList:
	componentType (
		separator? VERTICAL_BAR separator? componentType
	)*;

componentType: valueType;

pathValueType: PATH;

notNull: NOT separator NULL;

fieldType: fieldName (separator typed) separator valueType;

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
	catalogObjectParentRef separator graphName
	| delimitedGraphName
	| homeGraph
	| refParameter;

catalogGraphParentAndName:
	(catalogObjectParentRef separator)? graphName;

homeGraph: HOME_PROPERTY_GRAPH | HOME_GRAPH;

graphTypeRef: catalogGraphTypeParentAndName | refParameter;

catalogGraphTypeParentAndName:
	(catalogObjectParentRef separator)? graphTypeName;

bindingTableRef:
	catalogObjectParentRef bindingTableName
	| delimitedBindingTableName
	| refParameter;

catalogBindingTableParentAndName:
	(catalogObjectParentRef separator)? bindingTableName;

procedureRef: catalogProcedureParentAndName | refParameter;

catalogProcedureParentAndName:
	(catalogObjectParentRef separator)? procedureName;

catalogObjectParentRef:
	schemaRef SOLIDUS? (objectName PERIOD)+
	| (objectName PERIOD)+;

refParameter: parameter;

externalObjectRef:;
// TODO needs more work!

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
	comparisonPredicand separator? comparisonPredicatePart2;

comparisonPredicatePart2:
	comparisonOperator separator? comparisonPredicand;

comparisonOperator:
	EQUALS
	| NOT_EQUALS
	| LESS_THAN
	| GREATER_THAN
	| LESS_THAN_OR_EQUALS
	| GREATER_THAN_OR_EQUALS;

comparisonPredicand: commonValueExpr | booleanPredicand;

existsPredicate:
	EXISTS separator? (
		LEFT_BRACE separator? graphPattern RIGHT_BRACE
		| LEFT_PAREN separator? graphPattern separator? RIGHT_PAREN
		| LEFT_BRACE separator? matchStatmentBlock separator? RIGHT_BRACE
		| LEFT_PAREN separator? matchStatmentBlock separator? RIGHT_PAREN
		| nestedQuerySpec
	);

nullPredicate: valueExprPrimary separator nullPredicatePart2;

nullPredicatePart2: IS (separator NOT)? separator NULL;

valueTypePredicate:
	valueExprPrimary separator valueTypePredicatePart2;

valueTypePredicatePart2:
	IS (separator NOT)? separator typed separator valueType;

normalizedPredicate:
	stringValueExpr separator normalizedPredicatePart2;

normalizedPredicatePart2:
	IS (separator NOT)? (separator normalForm)? NORMALIZED;

directedPredicate: elementVarRef separator directedPredicate;

directedPredicatePart2: IS (separator NOT)? DIRECTED;

labeledPredicate: elementVarRef separator;

labeledPredicatePart2: isLabeledOrColon separator labelExpr;

isLabeledOrColon: IS (separator NOT)? separator LABELED | COLON;

sourceOrDestinationPredicate:
	nodeRef separator sourcePredicatePart2
	| nodeRef separator destinationPredicatePart2;

nodeRef: elementVarRef;

sourcePredicatePart2:
	IS (separator NOT)? separator SOURCE separator OF separator edgeRef;

destinationPredicatePart2:
	IS (separator NOT)? separator DESTINATION OF separator edgeRef;

edgeRef: elementVarRef;

allDifferentPredicate:
	ALL_DIFFERENT LEFT_PAREN separator? elementVarRef (
		separator? COMMA separator? elementVarRef
	)+ separator? RIGHT_PAREN;

samePredicate:
	SAME LEFT_PAREN separator? elementVarRef (
		separator? COMMA separator? elementVarRef
	)+ separator? RIGHT_PAREN;

propertyExistsPredicate:
	PROPERTY_EXISTS LEFT_PAREN separator? elementVarRef separator? COMMA separator? propertyName
		separator? RIGHT_PAREN;

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
	| refValueExpr;

refValueExpr:
	graphRefValueExpr
	| bindingTableRefValueExpr
	| nodeRefValueExpr
	| edgeRefValueExpr;

graphRefValueExpr:
	(PROPERTY separator)? GRAPH separator graphExpr
	| valueExprPrimary;

bindingTableRefValueExpr:
	(BINDING separator)? TABLE separator bindingTableExpr
	| valueExprPrimary;

nodeRefValueExpr: valueExprPrimary;

edgeRefValueExpr: valueExprPrimary;

recordValueExpr: valueExprPrimary;

aggregatingValueExpr: valueExpr;

booleanValueExpr:
	booleanTerm
	| booleanTerm separator OR separator booleanValueExpr
	| booleanTerm separator XOR separator booleanValueExpr;

booleanTerm: booleanFactor | booleanTerm AND booleanFactor;

booleanFactor: (NOT separator)? booleanTest;

booleanTest:
	booleanPrimary (separator IS (separator NOT)? truthValue)?;

truthValue: TRUE | FALSE | UNKNOWN;

booleanPrimary: predicate | booleanPredicand;

booleanPredicand:
	paranthisedBooleanValueExpr
	| nonParenthesizedValueExprPrimary;

paranthisedBooleanValueExpr:
	LEFT_PAREN separator? booleanValueExpr separator? RIGHT_PAREN;

numericValueExpr:
	term separator? PLUS separator? numericValueExpr
	| term separator? MINUS separator? numericValueExpr;

term:
	factor separator? ASTERISK separator? term
	| factor separator? SOLIDUS separator? term;

factor: SIGN? numericPrimary;

numericPrimary: valueExprPrimary | numericValueFunction;

valueExprPrimary:
	parenthesizedValueExpr
	| nonParenthesizedValueExprPrimary;

parenthesizedValueExpr:
	LEFT_PAREN separator? valueExpr separator? RIGHT_PAREN;

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
	(CHAR_LENGTH | CHARACTER_LENGTH) LEFT_PAREN separator? charStringValueExpr separator?
		RIGHT_PAREN;

byteLengthExpr:
	(BYTE_LENGTH | OCTET_LENGTH) LEFT_PAREN separator? byteStringValueExpr separator? RIGHT_PAREN;

pathLengthExpr:
	PATH_LENGTH LEFT_PAREN separator? pathValueExpr separator? RIGHT_PAREN;

absoluteValueExpr:
	ABS LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

modulusExpr:
	MOD LEFT_PAREN separator? numericValueExprDividen separator? COMMA separator?
		numericValueExprDivisor separator? RIGHT_PAREN;

numericValueExprDividen: numericValueExpr;

numericValueExprDivisor: numericValueExpr;

trigonometricFunction:
	trigonometricFunctionName LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

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
	MOD LEFT_PAREN separator? generalLogarithmBase separator? COMMA separator?
		generalLogarithmArgument separator? RIGHT_PAREN;

generalLogarithmBase: numericValueExpr;

generalLogarithmArgument: numericValueExpr;

commonLogarithmFunction:
	LOG10 LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

naturalLogarithmFunction:
	LN LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

exponentialFunction:
	EXP LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

powerFunction:
	POWER LEFT_PAREN separator? numericValueExprBase separator? COMMA separator?
		numericValueExprExponent separator? RIGHT_PAREN;

numericValueExprBase: numericValueExpr;

numericValueExprExponent: numericValueExpr;

squareRootFunciton:
	SQRT LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

floorFunction:
	FLOOR LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

ceilingFunction:
	(CEIL | CEILING) LEFT_PAREN separator? numericValueExpr separator? RIGHT_PAREN;

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
	(UPPER | LOWER) LEFT_PAREN separator? charStringValueExpr separator? RIGHT_PAREN;

trimFunction: singleCharTrimFunction | multiCharTrimFunction;

singleCharTrimFunction:
	TRIM LEFT_PAREN separator? trimOperands separator? RIGHT_PAREN;

multiCharTrimFunction:
	(BTRIM | LTRIM | RTRIM) LEFT_PAREN separator? trimSource (
		separator? COMMA separator? trimCharString
	) separator? RIGHT_PAREN;

trimOperands:
	(
		(trimSpec separator)? (trimCharString separator)? FROM separator
	)? trimSource;

trimSource: charStringValueExpr;

trimSpec: LEADING | TRAILING | BOTH;

trimCharString: charStringValueExpr;

normalizeFunction:
	NORMALIZE LEFT_PAREN separator? charStringValueExpr (
		separator? COMMA separator? normalForm
	) separator? RIGHT_PAREN;

normalForm: NFC | NFD | NFKC | NFKD;

byteStringFunction: byteStrinTrimFunction;

byteStrinTrimFunction:
	TRIM LEFT_PAREN separator? byteStringTrimOperands separator? RIGHT_PAREN;

byteStringTrimOperands:
	(
		(trimSpec separator)? (trimByteString separator)? FROM separator
	)? byteStringTrimSource;

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
	| DATE LEFT_PAREN separator? dateFunctionParameters? separator? RIGHT_PAREN;

timeFunction:
	CURRENT_TIME
	| ZONED_TIME LEFT_PAREN separator? timeFunctionParameters? separator? RIGHT_PAREN;

localTimeFunction:
	LOCAL_TIME LEFT_PAREN separator? timeFunctionParameters? separator? RIGHT_PAREN?;

dateTimeFunction:
	CURRENT_TIMESTAMP
	| ZONED_DATETIME LEFT_PAREN separator? dateTimeFunctionParameters? separator? RIGHT_PAREN;

localDatetimeFunction:
	LOCAL_TIMESTAMP
	| LOCAL_DATETIME LEFT_PAREN separator? dateTimeFunctionParameters? separator? RIGHT_PAREN;

dateFunctionParameters: dateString | recordValueConstructor;

timeFunctionParameters: timeString | recordValueConstructor;

dateTimeFunctionParameters:
	dateTimeString
	| recordValueConstructor;

durationValueExpr:
	durationTerm
	| durationValueExpr separator? PLUS separator? durationTerm
	| durationValueExpr separator? MINUS separator? durationTerm
	| dateTimeSubtraction;

dateTimeSubtraction:
	DURATION_BETWEEN LEFT_PAREN separator? dateTimeSubtractionParameters separator? RIGHT_PAREN;

dateTimeSubtractionParameters:
	dateTimeValueExpr separator? COMMA separator? dateTimeValueExpr;

durationTerm:
	durationFactor
	| durationTerm separator? ASTERISK separator? factor
	| durationTerm separator? SOLIDUS separator? factor
	| term separator? ASTERISK separator? durationFactor;

durationFactor: (SIGN)? durationPrimary;

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
	DURATION LEFT_PAREN separator? durationFunctionParameters separator? RIGHT_PAREN;

durationFunctionParameters:
	durationString
	| recordValueConstructor;

durationAbsoluteValueFunction:
	ABS LEFT_PAREN separator? durationValueExpr separator RIGHT_PAREN;

listValueExpr: listConcatenation | listPrimary;

listConcatenation:
	listPrimary separator? CONCATENATION separator? listValueExpr;

listPrimary: listValueFunction | valueExprPrimary;

listValueFunction: trimListFunction separator? elementsFunction;

trimListFunction:
	TRIM LEFT_PAREN separator? listValueExpr separator? COMMA separator? numericValueExpr separator?
		RIGHT_PAREN;

elementsFunction:
	ELEMENTS LEFT_PAREN separator? pathValueExpr separator? RIGHT_PAREN;

listValueConstructor: listValueConstructorByEnumeration;

listValueConstructorByEnumeration:
	LEFT_BRACKET separator? listValueTypeName separator? RIGHT_BRACKET LEFT_BRACKET separator?
		listElementList separator? RIGHT_BRACKET;

listElementList:
	listElement (separator? COMMA separator? listElement)*;

listElement: valueExpr;

recordValueConstructor: (RECORD separator)? fieldsSpec;

fieldsSpec:
	LEFT_BRACE separator? (fieldList)? separator? RIGHT_BRACE;

fieldList: field (separator? COMMA separator? field)*;

field: fieldName separator? COLON separator? valueExpr;

pathValueExpr: pathValueConcatenation | pathValuePrimary;

pathValueConcatenation:
	pathValuePrimary separator? CONCATENATION separator? pathValueExpr;

pathValuePrimary: valueExprPrimary;

pathValueConstructor: pathValueConstructorByEnumeration;

pathValueConstructorByEnumeration:
	PATH LEFT_PAREN separator? pathElementList separator? RIGHT_PAREN;

pathElementList:
	pathElementListStart (separator pathElementListStep)?;

pathElementListStart: nodeRefValueExpr;

pathElementListStep:
	COMMA separator? edgeRefValueExpr separator? COMMA separator? nodeRefValueExpr;

propertyRef: propertySource PERIOD propertyName;

propertySource:
	nodeRefValueExpr
	| edgeRefValueExpr
	| recordValueExpr;

valueQueryExpr: VALUE separator? nestedQuerySpec;

caseExpr: caseAbbreviation | caseSpecification;

caseAbbreviation:
	NULLIF LEFT_PAREN separator? valueExpr separator? COMMA separator? valueExpr separator?
		RIGHT_PAREN
	| COALESCE LEFT_PAREN separator? valueExpr (
		separator? COMMA separator? valueExpr
	)* separator? RIGHT_PAREN;

caseSpecification: simpleCase | searchedCase;

simpleCase:
	CASE separator caseOperand separator simpleWhenClause (
		separator elseClause
	)? separator END;

searchedCase:
	CASE separator searchedWhenClause (separator elseClause)? separator END;

simpleWhenClause:
	WHEN separator whenOperandList separator THEN separator result;

searchedWhenClause:
	WHEN separator searchCondition separator THEN separator result;

elseClause: ELSE result;

caseOperand: nonParenthesizedValueExprPrimary | elementVarRef;

whenOperandList:
	whenOperand (separator? COMMA separator? whenOperand)*;

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

castSpec:
	CAST LEFT_PAREN separator? castOperand separator AS separator castTarget separator? RIGHT_PAREN;

castOperand: valueExpr;

castTarget: valueType;

elementIdFunction:
	ELEMENT_ID LEFT_PAREN separator? elementVarRef separator? RIGHT_PAREN;

letValueExpr:
	LET separator? letVarDefList separator? IN separator? valueExpr separator? END;

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
		separator? VERTICAL_BAR separator? unbrokenSingleQuotedCharacterSequence
	)*;

doubleQuotedCharacterSequence:
	noEscape? unbrokenDoubleQuotedCharacterSequence (
		separator? VERTICAL_BAR separator? unbrokenDoubleQuotedCharacterSequence
	)*;

accentQuotedCharacterSequence:
	noEscape? unbrokenAccentQuotedCharacterSequence (
		separator? VERTICAL_BAR separator? unbrokenAccentQuotedCharacterSequence
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

dateLiteral: DATE separator unbrokenCharacterStringLiteral;

timeLiteral: TIME separator unbrokenCharacterStringLiteral;

dateTimeLiteral:
	DATETIME separator unbrokenCharacterStringLiteral
	| TIMESTAMP separator unbrokenCharacterStringLiteral;

dateString: unbrokenCharacterStringLiteral;

timeString: unbrokenCharacterStringLiteral;

dateTimeString: unbrokenCharacterStringLiteral;

sqlDateTimeLiteral:
	DATE separator QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT QUOTE
	| TIME separator QUOTE DOUBLE_DIGIT COLON DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE
	| TIMESTAMP separator QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT separator
		DOUBLE_DIGIT COLON DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE
	| DATETIME separator QUOTE FOUR_DIGIT MINUS DOUBLE_DIGIT MINUS DOUBLE_DIGIT separator
		DOUBLE_DIGIT COLON DOUBLE_DIGIT COLON DOUBLE_DIGIT QUOTE;

durationLiteral:
	DURATION separator durationString
	| sqlIntervalLiteral;

durationString: unbrokenCharacterStringLiteral;

sqlIntervalLiteral: UNSIGNED_INT separator? sqlIntervalType;

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
	| NOT_EQUALS
	| LESS_THAN
	| GREATER_THAN
	| LESS_THAN_OR_EQUALS
	| GREATER_THAN_OR_EQUALS
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

separator: comment | WS;

comment: SIMPLE_COMMENT_LITERAL | BRACKETED_COMMNET_LITERAL;

edgeSynonym: EDGE | RELATIONSHIP;

edgesSynonym: EDGES | RELATIONSHIPS;

nodeSynonym: NODE | VERTEX;
