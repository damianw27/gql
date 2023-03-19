parser grammar GqlParser;

options
{
    language=JavaScript;
    tokenVocab=GqlLexer;
}

// program grammar
gqlProgram:
  WS? activity (WS? ';'? WS? activity)+ EOF;

activity:
  programActivity (WS sessionCloseCommand)?;

programActivity:
  sessionActivity
  | transactionActivity;

// session management grammar
sessionActivity:
  sessionSetCommand
  | sessionResetCommand;

sessionSetCommand:
  SESSION WS SET WS (
    sessionSetSchemaClause
    | sessionSetGraphClause
    | sessionSetTimeZoneClause
    | sessionSetParameterClause
  );

sessionSetSchemaClause:
  SCHEMA WS schemaRef;

sessionSetGraphClause:
  (PROPERTY WS)? GRAPH WS graphExpr;

sessionSetTimeZoneClause:
  TIME WS ZONE WS setTimeZoneValue;

setTimeZoneValue:
  stringValueExpr;

sessionSetParameterClause:
  sessionSetGraphParameterClause
  | sessionSetBindingTableParameterCalues
  | sessionSetValuesParameterClause;

sessionSetGraphParameterClause:
  (PROPERTY WS)? GRAPH sessionSetParameterName optTypedGraphInit;

sessionSetBindingTableParameterCalues:
  (BINDING WS)? TABLE sessionSetParameterName optTypedBindingTableInit;

sessionSetValuesParameterClause:
  VALUE sessionSetParameterName optTypedValueInit;

sessionSetParameterName:
  parameterName (WS IF WS NOT WS EXISTS)?;

sessionResetCommand:
  (SESSION WS)? RESET WS sessionResetArguments;

sessionResetArguments:
  (ALL WS)? (PARAMETERS | CHARACTERISTICS)
  | SCHEMA
  | (PROPERTY WS)? GRAPH
  | TIME WS ZONE
  | PARAMETER WS parameterName;

sessionCloseCommand:
  SESSION? WS CLOSE;

// transaction grammar
transactionActivity:
  transactionStartCommand (WS procedureSpec (WS transactionEndCommand)?)?
  | procedureSpec (WS transactionEndCommand)?
  | transactionEndCommand;

transactionStartCommand:
  START WS TRANSACTION WS transactionCharacteristics?;

transactionEndCommand:
  ROLLBACK
  | COMMIT;

transactionCharacteristics:
  transactionMode WS? (COMMA WS? transactionMode WS?)+;

transactionMode:
  transactionAccessMode
  | implDefinedAccessMode;

transactionAccessMode:
  READ WS ONLY
  | READ WS WRITE;

implDefinedAccessMode:;

// procedures grammar
nestedProcedureSpec:
  LEFT_BRACE WS? procedureSpec WS? RIGHT_BRACE;

procedureSpec:
  catalogModProcedureSpec
  | dataModProcedureSpec
  | querySpec;

catalogModProcedureSpec:
  procedureBody;

nestedDataModProcedureSpec:
  LEFT_BRACE WS? dataModProcedureSpec WS? RIGHT_BRACE;

dataModProcedureSpec:
  procedureBody;

nestedQuerySpec:
  LEFT_BRACE WS? querySpec WS? RIGHT_BRACE;

querySpec:
  procedureBody;

procedureBody:
  (atSchemaClause WS)? (bindingVarDefBlock WS)? statmentBlock;

bindingVarDefBlock:
  (bindingVarDef WS?)+;

bindingVarDef:
  graphVarDef
  | bindingTableVarDef
  | valueVarDef;

statmentBlock:
  statement (WS nextStatment)+;

statement:
  linearCatalogModStatment
  | linearDataModStatment
  | compositeQueryStatment;

nextStatment:
  NEXT (WS yieldClause)? WS statement;

// var def grammar
graphVarDef:
  (PROPERTY WS)? GRAPH WS graphVar optTypedGraphInit;

optTypedGraphInit:
  (((typed WS)? graphRefValueType) WS)? graphInit;

graphInit:
  EQUALS WS? graphExpr;

bindingTableVarDef:
  (BINDING WS)? TABLE WS bindingTableVar WS optTypedBindingTableInit;

optTypedBindingTableInit:
  (((typed WS)? bindingTableRefValueType) WS)? bindingTableInit;

bindingTableInit:
  EQUALS WS? bindingTableExpr;

valueVarDef:
  VALUE WS valueVar WS optTypedValueInit;

optTypedValueInit:
  (((typed WS)? valueType) WS)? valueInit;

valueInit:
  EQUALS WS valueExpr;

// object expressions grammar
graphExpr:
  nestedGraphQuerySpec
  | objectExprPrimary
  | graphRef
  | objectNameOrBindingVar
  | currentGraph;

currentGraph:
  CURRENT_PROPERTY_GRAPH
  | CURRENT_GRAPH;

nestedGraphQuerySpec:
  nestedQuerySpec;

bindingTableExpr:
  nestedBindingTableQuerySpec
  | objectExprPrimary
  | bindingTableRef
  | objectNameOrBindingVar;

nestedBindingTableQuerySpec:
  nestedQuerySpec;

objectExprPrimary:
  VARIABLE WS valueExprPrimary
  | parenthesizedValueExpr
  | propertyRef
  | unsignedValueSpec
  | aggregateFunction
  | collectionValueConstructor
  | valueQueryExpr
  | caseExpr;

// catalog-mod statments grammar
linearCatalogModStatment:
  (simpleCatalogModStatment)+;

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
  CREATE WS SCHEMA (WS IF WS NOT WS EXISTS)? WS catalogSchemaParentAndName;

dropSchemeStatment:
  DROP WS SCHEMA (WS IF WS EXISTS)? WS catalogSchemaParentAndName;

createGraphStatment:
  CREATE WS (((PROPERTY WS)? GRAPH (WS IF WS NOT WS EXISTS)?) | (OR WS REPLACE (WS PROPERTY)? WS GRAPH))
    catalogGraphParentAndName WS (openGraphType | ofGraphType) WS? graphSource;

openGraphType:
  OPEN WS (PROPERTY? GRAPH)? WS? TYPE;

ofGraphType:
  graphTypeLikeGraph
  | (typed WS)? graphTypeRef
  | (typed WS)? nestedGraphTypeSpec;

graphTypeLikeGraph:
  LIKE WS graphExpr;

graphSource:
  AS WS COPY WS OF WS graphExpr;

dropGraphStatment:
  DROP (WS PROPERTY)? WS GRAPH (WS IF WS EXISTS)? WS catalogGraphParentAndName;

createGraphTypeStatment:
  (((PROPERTY WS)? TYPE (WS IF WS NOT WS EXISTS)?) | (OR WS REPLACE (WS PROPERTY)? WS GRAPH WS TYPE))
    catalogGraphTypeParentAndName graphTypeSource;

graphTypeSource:
  (AS WS)? copyOfGraphType
  | graphTypeLikeGraph
  | (AS WS)? nestedGraphTypeSpec;

copyOfGraphType:
  COPY WS OF WS (graphTypeRef | externalObjectRef);

dropGraphTypeStatment:
  DROP (WS PROPERTY)? WS GRAPH WS TYPE (WS IF WS EXISTS)? WS catalogGraphTypeParentAndName;

callCatalogModProcedureStatment:
  callProcedureStatment;

// data mod statments grammar
linearDataModStatment:
  focusedLinearDataModStatment
  | ambientLinearDataModStatment;

focusedLinearDataModStatment:
  focusedLinearDataModStatmentBody
  | focusedNestedDataModProcedureSpec;

focusedLinearDataModStatmentBody:
  useGraphClause WS simpleLinearDataAccessingStatment (WS primitiveResultStatment)?;

focusedNestedDataModProcedureSpec:
  useGraphClause WS nestedDataModProcedureSpec;

ambientLinearDataModStatment:
  ambientLinearDataModStatmentBody
  | nestedDataModProcedureSpec;

ambientLinearDataModStatmentBody:
  simpleLinearDataAccessingStatment WS? primitiveResultStatment;

simpleLinearDataAccessingStatment:
  (simpleDataAccessingStatment)*;

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

insertStatment:
  INSERT WS insertGraphPattern;

setStatment:
  SET WS setItemList;

setItemList:
  setItem WS? (COMMA WS? setItem WS?)+;

setItem:
  setPropertyItem
  | setAllPropertiesItem
  | setLabelItem;

setPropertyItem:
  bindingVarRef WS? PERIOD WS? propertyName WS? EQUALS WS? valueExpr;

setAllPropertiesItem:
  bindingVarRef WS? EQUALS WS LEFT_BRACE (WS propertyKeyValuePairList)? WS? RIGHT_BRACE;

setLabelItem:
  bindingVarRef (IS | COLON) labelSetSpec;

labelSetSpec:
  labelName WS? (AMPERSAND WS? labelName)+;

removeStatment:
  REMOVE WS removeItemList;

removeItemList:
  removeItem WS (COMMA WS? removeItem WS?)+;

removeItem:
  removePropertyItem
  | removeLabelItem;

removePropertyItem:
  bindingVarRef PERIOD propertyName;

removeLabelItem:
  bindingVarRef WS (IS | COLON) WS labelSetSpec;

deleteStatment:
  (DETACH | NODETACH) WS DELETE WS deleteItemList;

deleteItemList:
  deleteItem WS? (COMMA WS? deleteItem WS?)+;

deleteItem:
  valueExpr;

callDataModProcedureStatment:
  callProcedureStatment;

// query statments grammar
compositeQueryStatment:
  compositeQueryExpr;

compositeQueryExpr:
  compositeQueryExpr WS queryConjunction WS compositeQueryPrimary
  | compositeQueryPrimary;

queryConjunction:
  setOperator
  | OTHERWISE;

setOperator:
  (UNION | EXCEPT | INTERSECT) WS setQuantifier;

compositeQueryPrimary:
  linearQueryStatment;

linearQueryStatment:
  focusedLinearQueryStatment
  | ambientLinearQueryStatment;

focusedLinearQueryStatment:
  (focusedLinearQueryStatmentPart WS)+
    focusedLinearQueryAndPrimitiveResultStatmentPart
  | focusedPrimitiveResultStatment
  | focusedNestedQuerySpec
  | selectStatment;

focusedLinearQueryStatmentPart:
  useGraphClause WS simpleLinearQueryStatment;

focusedLinearQueryAndPrimitiveResultStatmentPart:
  useGraphClause WS simpleLinearQueryStatment WS primitiveResultStatment;

focusedPrimitiveResultStatment:
  useGraphClause WS primitiveResultStatment;

focusedNestedQuerySpec:
  useGraphClause WS nestedQuerySpec;

ambientLinearQueryStatment:
  (simpleLinearQueryStatment WS)? primitiveResultStatment
  | nestedQuerySpec;

simpleLinearQueryStatment:
  (simpleQueryStatment WS?)+;

simpleQueryStatment:
  primitiveQueryStatment
  | callQueryStatment;

primitiveQueryStatment:
  matchStatment
  | letStatment
  | forStatment
  | filterStatment
  | orderByAndPageStatment;

matchStatment:
  simpleMatchStatment
  | optionalMatchStatment;

simpleMatchStatment:
  MATCH WS graphPatternBindingTable;

optionalMatchStatment:
  OPTIONAL WS optionalOperand;

optionalOperand:
  simpleMatchStatment
  | LEFT_BRACE WS? matchStatmentBlock WS? RIGHT_BRACE
  | LEFT_PAREN WS? matchStatmentBlock WS? RIGHT_PAREN;

matchStatmentBlock:
  (WS matchStatment)+;

callQueryStatment:
  callProcedureStatment;

filterStatment:
  FILTER WS (whereClause | searchCondition);

letStatment:
  LET WS letVarDefList;

letVarDefList:
  letVarDef WS? (COMMA WS? letVarDef WS?)+;

letVarDef:
  valueVarDef
  | valueVar WS? EQUALS WS? valueExpr;

forStatment:
  FOR WS forItem WS? forOrdinalityOrOffset?;

forItem:
  forItemAlias WS listValueExpr;

forItemAlias:
  identifier WS IN;

forOrdinalityOrOffset:
  WITH WS (ORDINALITY | OFFSET) WS identifier;

orderByAndPageStatment:
  orderByClause (WS offsetClause)? (WS limitClause)?
  | offsetClause (WS limitClause)?
  | limitClause;

primitiveResultStatment:
  returnStatment WS orderByAndPageStatment
  | FINISH;

returnStatment:
  RETURN WS returnStatmentBody;

returnStatmentBody:
  (setQuantifier WS)? (ASTERISK | returnItemList) (WS groupByClause)?
  | NO WS BINDINGS;

returnItemList:
  returnItem WS? (COMMA WS? returnItem WS?)+;

returnItem:
  aggregatingValueExpr (WS returnItemAlias)?;

returnItemAlias:
  AS WS identifier;

selectStatment:
  SELECT (WS setQuantifier)? WS selectItemList
    (
      WS selectStatmentBody
       (WS whereClause)?
       (WS groupByClause)?
       (WS havingClause)?
       (WS orderByClause)?
       (WS offsetClause)?
       (WS limitClause)?
    )?;

selectItemList:
  selectItem WS? (COMMA WS? selectItem WS?)+;

selectItem:
  aggregatingValueExpr (WS selectItemAlias)?;

selectItemAlias:
  AS WS identifier;

havingClause:
  HAVING searchCondition;

selectStatmentBody:
  FROM selectGraphMatchList
  | selectQuerySpec;

selectGraphMatchList:
  selectGraphMatch WS? (COMMA WS? selectGraphMatch WS?)?;

selectGraphMatch:
  graphExpr WS matchStatment;

selectQuerySpec:
  FROM WS nestedQuerySpec
  | FROM WS graphExpr WS nestedQuerySpec;

// common statments grammar
callProcedureStatment:
  (OPTIONAL WS)? CALL procedureCall;

procedureCall:
  inlineProcedureCall
  | namedProcedureCall;

inlineProcedureCall:
  (varScopeClause WS)? nestedProcedureSpec;

varScopeClause:
  LEFT_PAREN WS? bindingVarRefList? WS? RIGHT_PAREN;

bindingVarRefList:
  bindingVarRef WS? (COMMA WS? bindingVarRef WS?)+;

namedProcedureCall:
  procedureRef WS LEFT_PAREN WS? procedureArgList? WS? RIGHT_PAREN;

procedureArgList:
  procedureArg WS? (COMMA WS? procedureArg WS?)+;

procedureArg:
  valueExpr;


// common elements grammar
useGraphClause:
  USE WS graphExpr;

atSchemaClause:
  AT WS schemaRef;

bindingVarRef:
  bindingVar;

elementVarRef:
  bindingVarRef;

pathVarRef:
  bindingVarRef;

parameter:
  parameterName;

graphPatternBindingTable:
  graphPattern (WS graphPatternYieldClause)?;

graphPatternYieldClause:
  YIELD graphPatternYieldItemList;

graphPatternYieldItemList:
  graphPatternYieldItem WS? (COMMA WS? graphPatternYieldItem WS?)+;

graphPatternYieldItem:
  elementVarRef WS pathVarRef;

graphPattern:
  (matchMode WS)? pathPatternList (WS keepClause)? (WS graphPatternWhereClause)?;

matchMode:
  repeatableElementsMatchMode
  | differentEdgesMatchMode;

repeatableElementsMatchMode:
  REPEATABLE WS elementBindingsOrElements;

differentEdgesMatchMode:
  DIFFERENT edgeBindingsOrEdges;

elementBindingsOrElements:
  ELEMENT (WS BINDINGS)?
  | ELEMENTS;

edgeBindingsOrEdges:
  edgeSynonym (WS BINDINGS)?
  | edgesSynonym;

pathPatternList:
  pathPattern WS? (COMMA WS? pathPattern WS?)+;

pathPattern:
  (pathVarDeclaration WS)? (pathPatternPrefix WS)? pathPatternExpr;

pathVarDeclaration:
  pathVar WS? EQUALS;

keepClause:
  KEEP WS pathPatternPrefix;

graphPatternWhereClause:
  WHERE WS searchCondition;

pathPatternPrefix:
  pathModePrefix
  | pathSearchPrefix;

pathModePrefix:
  pathMode (WS pathOrPaths)?;

pathMode:
  WALK
  | TRAIL
  | SIMPLE
  | ACYCLIC;

pathSearchPrefix:
  allPathSearch
  | anyPathSearch
  | shortestPathSearch;

allPathSearch:
  ALL (WS pathMode)? (WS pathOrPaths)?;

pathOrPaths:
  PATH
  | PATHS;

anyPathSearch:
  ANY (WS numberOfPaths)? (WS pathMode)? (WS pathOrPaths)?;

numberOfPaths:
  unsignedIntSpec;

shortestPathSearch:
  allShortestPathSearch
  | anyShortestPathSearch
  | countedShortestPathSearch
  | countedShortestGroupSearch;

allShortestPathSearch:
  ALL WS SHORTEST (WS pathMode)? (WS pathOrPaths)?;

anyShortestPathSearch:
  ANY WS SHORTEST (WS pathMode)? (WS pathOrPaths)?;

countedShortestPathSearch:
  SHORTEST WS numberOfPaths (WS pathMode)? (WS pathOrPaths)?;

countedShortestGroupSearch:
  SHORTEST WS numberOfGroups (WS pathMode)? (WS pathOrPaths)? WS groupOrGroups;

groupOrGroups:
  GROUP
  | GROUPS;

numberOfGroups:
  unsignedIntSpec;

pathPatternExpr:
  pathTerm
  | pathMultisetAlternation
  | pathPatternUnion;

pathMultisetAlternation:
  pathTerm (WS MULTISET_ALTERNATION WS pathTerm)*;

pathPatternUnion:
  pathTerm WS? (VERTICAL_BAR WS? pathTerm WS?)*;

pathTerm:
  pathFactor (WS pathFactor)*;

pathFactor:
  pathPrimary
  | quantifiedPathPrimary
  | questionedPathPrimary;

quantifiedPathPrimary:
  pathPrimary WS graphPatternQuantifier;

questionedPathPrimary:
  pathPrimary QUESTION_MARK;

pathPrimary:
  elementPattern
  | parenthesizedPathPatternExpr
  | simplifiedPathPatternExpr;

elementPattern:
  nodePattern
  | edgePattern;

nodePattern:
  LEFT_PAREN WS? elementPatternFiller WS? RIGHT_PAREN;

elementPatternFiller:
  elementVarDeclaration (WS isLabelExpr)? (WS elementPatternPredicate)?;

elementVarDeclaration:
  (TEMP WS)? elementVar;

isLabelExpr:
  isOrColon WS labelExpr;

isOrColon:
  IS
  | COLON;

elementPatternPredicate:
  elementPatternWhereClause
  | elementPropertySpec;

elementPatternWhereClause:
  WHERE WS searchCondition;

elementPropertySpec:
  LEFT_BRACE WS? propertyKeyValuePairList WS? RIGHT_BRACE;

propertyKeyValuePairList:
  propertyKeyValuePair WS? (COMMA WS? propertyKeyValuePair WS?)+;

propertyKeyValuePair:
  propertyName WS? COLON WS? valueExpr;

edgePattern:
  fullEdgePattern
  | abbreviatedEdgePattern;

fullEdgePattern:
  fullEdgePointingLeft
  | fullEdgeUndirected
  | fullEdgePointingRight
  | fullEdgeLeftOrUndirected
  | fullEdgeUndirectedOrRight
  | fullEdgeLeftOrRight
  | fullEdgeAnyDirection;

fullEdgePointingLeft:
  LEFT_ARROW_BRACKET WS? elementPatternFiller WS? RIGHT_BRACKET_MINUS;

fullEdgeUndirected:
  TILDE_LEFT_BRACKET WS? elementPatternFiller WS? RIGHT_BRACKET_TILDE;

fullEdgePointingRight:
  MINUS_LEFT_BRACKET WS? elementPatternFiller WS? BRACKET_RIGHT_ARROW;

fullEdgeLeftOrUndirected:
  LEFT_ARROW_TILDE_BRACKET WS? elementPatternFiller WS? RIGHT_BRACKET_TILDE;

fullEdgeUndirectedOrRight:
  TILDE_LEFT_BRACKET WS? elementPatternFiller WS? BRACKET_RIGHT_ARROW;

fullEdgeLeftOrRight:
  LEFT_ARROW_BRACKET WS? elementPatternFiller WS? BRACKET_RIGHT_ARROW;

fullEdgeAnyDirection:
  MINUS_LEFT_BRACKET WS? elementPatternFiller WS? RIGHT_BRACKET_MINUS;

abbreviatedEdgePattern:
  LEFT_ARROW
  | TILDE
  | RIGHT_ARROW
  | LEFT_ARROW_TILDE
  | TILDE_RIGHT_ARROW
  | LEFT_MINUS_RIGHT
  | MINUS;

parenthesizedPathPatternExpr:
  LEFT_PAREN WS?
   (subpathVarDeclaration WS)?
   (pathModePrefix WS)?
   pathPatternExpr
   (WS parenthesizedPathPatternWhereClause)?
  WS? RIGHT_PAREN;

subpathVarDeclaration:
  subpathVar WS? EQUALS;

parenthesizedPathPatternWhereClause:
  WHERE WS searchCondition;

insertGraphPattern:
  insertGraphPatternList;

insertGraphPatternList:
  insertPathPattern WS? (COMMA WS? insertPathPattern WS?)+;

insertPathPattern:
  insertNodePattern WS? (insertEdgePattern WS insertNodePattern WS?)+;

insertNodePattern:
  LEFT_PAREN WS? insertElementPatternFiller WS? RIGHT_PAREN;

insertEdgePattern:
  insertEdgePointingLeft
  | insertEdgePointingRight
  | insertEdgeUndirected;

insertEdgePointingLeft:
  LEFT_ARROW_BRACKET WS? insertElementPatternFiller WS? RIGHT_BRACKET_MINUS;

insertEdgePointingRight:
  MINUS_LEFT_BRACKET WS? insertElementPatternFiller WS? BRACKET_RIGHT_ARROW;

insertEdgeUndirected:
  TILDE_LEFT_BRACKET WS? insertElementPatternFiller WS? RIGHT_BRACKET_TILDE;

insertElementPatternFiller:
  elementVarDeclaration (WS labelAndPropertySetSpec)?
  | (elementVarDeclaration WS)? labelAndPropertySetSpec;

labelAndPropertySetSpec:
  labelSetSpec (WS elementPropertySpec)?
  | (labelSetSpec WS)? elementPropertySpec;

labelExpr:
  labelTerm (WS? VERTICAL_BAR WS? labelTerm)*;

labelTerm:
  labelFactor (WS? AMPERSAND WS? labelFactor)*;

labelFactor:
  labelPrimary
  | labelNegation;

labelNegation:
  EXCLAMATION WS? labelPrimary;

labelPrimary:
  labelName
  | wildcardLabel
  | parenthesizedLabelExpr;

wildcardLabel:
  PERCENT;

parenthesizedLabelExpr:
  LEFT_PAREN WS? labelExpr WS? RIGHT_PAREN;

graphPatternQuantifier:
  ASTERISK
  | PLUS
  | fixedQuantifier
  | generalQuantifier;

fixedQuantifier:
  LEFT_BRACE WS? unsignedInt WS? RIGHT_BRACE;

generalQuantifier:
  LEFT_BRACE WS? (lowerBound WS)? COMMA (WS upperBound)? WS? RIGHT_BRACE;

lowerBound:
  unsignedInt;

upperBound:
  unsignedInt;

simplifiedPathPatternExpr:
  simplifiedDefaultingLeft
  | simplifiedDefaultingUndirected
  | simplifiedDefaultingRight
  | simplifiedDefaultingLeftOrUndirected
  | simplifiedDefaultingUndirectedOrRight
  | simplifiedDefaultingLeftOrRight
  | simplifiedDefaultingAnyDirection;

simplifiedDefaultingLeft:
  LEFT_MINUS_SLASH WS? simplifiedContents WS? SLASH_MINUS;

simplifiedDefaultingUndirected:
  TILDE_SLASH WS? simplifiedContents WS? SLASH_TILDE;

simplifiedDefaultingRight:
  MINUS_SLASH WS? simplifiedContents WS? SLASH_MINUS_RIGHT;

simplifiedDefaultingLeftOrUndirected:
  LEFT_TILDE_SLASH WS? simplifiedContents WS? SLASH_TILDE;

simplifiedDefaultingUndirectedOrRight:
  TILDE_SLASH WS? simplifiedContents WS? SLASH_TILDE_RIGHT;

simplifiedDefaultingLeftOrRight:
  LEFT_MINUS_SLASH WS? simplifiedContents WS? SLASH_MINUS_RIGHT;

simplifiedDefaultingAnyDirection:
  MINUS_SLASH WS? simplifiedContents WS? SLASH_MINUS;

simplifiedContents:
  simplifiedTerm
  | simplifiedPathUnion
  | simplifiedMultisetAlternation;

simplifiedPathUnion:
  simplifiedTerm (WS? VERTICAL_BAR WS? simplifiedTerm)*;

simplifiedMultisetAlternation:
  simplifiedTerm (WS? MULTISET_ALTERNATION WS? simplifiedTerm)*;

simplifiedTerm:
  simplifiedFactorLow (WS simplifiedFactorLow)*;

simplifiedFactorLow:
  simplifiedFactorHigh (WS? AMPERSAND WS? simplifiedFactorHigh)*;

simplifiedFactorHigh:
  simplifiedTertiary
  | simplifiedQuntified
  | simplifiedQuestioned;

simplifiedQuntified:
  simplifiedTertiary WS graphPatternQuantifier;

simplifiedQuestioned:
  simplifiedTertiary QUESTION_MARK;

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
  LEFT_ANGLE_BRACKET WS? simplifiedSecondary;

simplifiedOverrideUndirected:
  TILDE WS? simplifiedSecondary;

simplifiedOverrideRight:
  simplifiedSecondary WS? RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrUndirected:
  LEFT_ARROW_TILDE WS? simplifiedSecondary;

simplifiedOverrideUndirectedOrRight:
  TILDE WS? simplifiedSecondary WS? RIGHT_ANGLE_BRACKET;

simplifiedOverrideLeftOrRight:
  LEFT_ANGLE_BRACKET WS? simplifiedSecondary WS? RIGHT_ANGLE_BRACKET;

simplifiedOverrideAnyDirection:
  MINUS WS? simplifiedSecondary;

simplifiedSecondary:
  simplifiedPrimary
  | simplifiedNegation;

simplifiedNegation:
  EXCLAMATION simplifiedPrimary;

simplifiedPrimary:
  labelName
  | LEFT_PAREN WS? simplifiedContents WS? RIGHT_PAREN;

whereClause:
  WHERE searchCondition;

yieldClause:
  YIELD WS yieldItemList;

yieldItemList:
  yieldItem (WS? COMMA WS? yieldItem)+;

yieldItem:
  yieldItemName (WS yieldItemAlias)?;

yieldItemName:
  fieldName;

yieldItemAlias:
  AS bindingVar;

groupByClause:
  GROUP WS BY WS groupingElementList;

groupingElementList:
  groupingElement (WS? COMMA WS? groupingElement)+
  | emptyGroupingSet;

groupingElement:
  bindingVarRef;

emptyGroupingSet:
  LEFT_PAREN WS? RIGHT_PAREN;

orderByClause:
  ORDER WS BY WS sortSpecList;

aggregateFunction:
  COUNT LEFT_PAREN ASTERISK RIGHT_PAREN
  | generalSetFunction
  | binarySetFunction;

generalSetFunction:
  generalSetFunctionType LEFT_PAREN WS? (setQuantifier WS)? valueExpr WS? RIGHT_PAREN;

generalSetFunctionType:
  AVG
  | COUNT
  | MAX
  | MIN
  | SUM
  | COLLECT
  | STDDEV_SAMP
  | STDDEV_POP;

setQuantifier:
  DISTINCT
  | ALL;

binarySetFunction:
  PERCENTILE_CONT
  | PERCENTILE_DISC;

dependantValueExpr:
  (setQuantifier WS)? numericValueExpr;

independentValueExpr:
  numericValueExpr;

sortSpecList:
  sortSpec (WS? COMMA WS? sortSpec)+;

sortSpec:
  sortKey (WS orderingSpec)? (WS nullOrdering)?;

sortKey:
  aggregatingValueExpr;

orderingSpec:
  ASC
  | ASCENDING
  | DESC
  | DESCENDING;

nullOrdering:
  NULLS WS FIRST
  | NULLS WS LAST;

limitClause:
  LIMIT unsignedIntSpec;

offsetClause:
  offsetSynonym WS unsignedIntSpec;

offsetSynonym:
  OFFSET
  | SKIP_;

// type elements grammar
graphTypeSpec:
  (PROPERTY WS)? GRAPH WS TYPE WS nestedGraphTypeSpec;

nestedGraphTypeSpec:
  LEFT_BRACE WS? graphTypeSpecBody WS? RIGHT_BRACE;

graphTypeSpecBody:
  elementTypeDefList;

elementTypeDefList:
  elementTypeDef (WS? COMMA WS? elementTypeDef)+;

elementTypeDef:
  nodeTypeDef
  | edgeTypeDef;

nodeTypeDef:
  nodeTypePattern
  | nodeSynonym WS nodeTypePhrase;

nodeTypePattern:
  LEFT_PAREN WS? nodeTypeName WS nodeTypeFiller WS? RIGHT_PAREN;

nodeTypePhrase:
  (TYPE WS)? nodeTypeName (WS nodeTypeFiller)?
  | nodeTypeFiller;

nodeTypeName:
  elementTypeName;

nodeTypeFiller:
  nodeTypeLabelSetDef
  | nodeTypePropertyTypeSetDef
  | nodeTypeLabelSetDef WS nodeTypePropertyTypeSetDef;

nodeTypeLabelSetDef:
  labelSetDef;

nodeTypePropertyTypeSetDef:
  propertyTypeSetDef;

edgeTypeDef:
  edgeTypePattern
  | (edgeKind WS)? edgeSynonym WS edgeTypePhrase;

edgeTypePattern:
  fullEdgeTypePattern
  | abbreviatedEdgeTypePattern;

edgeTypePhrase:
  (TYPE WS)? edgeTypeName (WS edgeTypeFiller WS endpointDef)
  | edgeTypeFiller WS endpointDef;

edgeTypeName:
  elementTypeName;

edgeTypeFiller:
  edgeTypeLabelSetDef
  | edgeTypePropertyTypeSetDef
  | edgeTypeLabelSetDef WS edgeTypePropertyTypeSetDef;

edgeTypeLabelSetDef:
  labelSetDef;

edgeTypePropertyTypeSetDef:
  propertyTypeSetDef;

fullEdgeTypePattern:
  fullEdgeTypePatternPointingRight
  | fullEdgeTypePatternPointingLeft
  | fullEdgeTypePatternUndirected;

fullEdgeTypePatternPointingRight:
  sourceNodeTypeRef WS arcTypePointingRight WS destinationNodeTypeRef;

fullEdgeTypePatternPointingLeft:
  destinationNodeTypeRef WS arcTypePointingLeft WS sourceNodeTypeRef;

fullEdgeTypePatternUndirected:
  sourceNodeTypeRef WS arcTypeUndirected WS destinationNodeTypeRef;

arcTypePointingRight:
  MINUS_LEFT_BRACKET WS? arcTypeFiller WS? BRACKET_RIGHT_ARROW;

arcTypePointingLeft:
  LEFT_ARROW_BRACKET WS? arcTypeFiller WS? RIGHT_BRACKET_MINUS;

arcTypeUndirected:
  TILDE_LEFT_BRACKET WS? arcTypeFiller WS? RIGHT_BRACKET_TILDE;

arcTypeFiller:
  edgeTypeName WS? edgeTypeFiller;

abbreviatedEdgeTypePattern:
  abbreviatedEdgeTypePatternPointingRight
  | abbreviatedEdgeTypePatternPointingLeft
  | abbreviatedEdgeTypePatternUndirected;

abbreviatedEdgeTypePatternPointingRight:
  sourceNodeTypeRef WS? RIGHT_ARROW WS? destinationNodeTypeRef;

abbreviatedEdgeTypePatternPointingLeft:
  destinationNodeTypeRef WS? LEFT_ARROW WS? sourceNodeTypeRef;

abbreviatedEdgeTypePatternUndirected:
  sourceNodeTypeRef WS? TILDE WS? destinationNodeTypeRef;

nodeTypeRef:
  sourceNodeTypeRef
  | destinationNodeTypeRef;

sourceNodeTypeRef:
  LEFT_PAREN WS? sourceNodeTypeName WS? RIGHT_PAREN
  | LEFT_PAREN WS? nodeTypeFiller? WS? RIGHT_PAREN;

destinationNodeTypeRef:
  LEFT_PAREN WS? destinationNodeTypeName WS? RIGHT_PAREN
  | LEFT_PAREN WS? nodeTypeFiller? WS? RIGHT_PAREN;

edgeKind:
  DIRECTED
  | UNDIRECTED;

endpointDef:
  CONNECTING enpointPairDef;

enpointPairDef:
  endpointPairDefPointingRight
  | endpointPairDefPointingLeft
  | endpointPairDefUndirected
  | abbreviatedEdgeTypePattern;

endpointPairDefPointingRight:
  LEFT_PAREN WS? sourceNodeTypeName WS? connectorPointingRight WS? destinationNodeTypeName WS? RIGHT_PAREN;

endpointPairDefPointingLeft:
  LEFT_PAREN WS? destinationNodeTypeName WS? connectorPointingLeft WS? sourceNodeTypeName WS? RIGHT_PAREN;

endpointPairDefUndirected:
  LEFT_PAREN WS? sourceNodeTypeName WS? connectorUndirected WS? destinationNodeTypeName WS? RIGHT_PAREN;

connectorPointingRight:
  TO
  | RIGHT_ARROW;

connectorPointingLeft:
  LEFT_ARROW;

connectorUndirected:
  TO
  | TILDE;

sourceNodeTypeName:
  elementTypeName;

destinationNodeTypeName:
  elementTypeName;

labelSetDef:
  LABEL WS labelName
  | LABELS WS labelNameSet
  | isOrColon WS labelNameSet;

labelNameSet:
  labelName (WS? COMMA WS? labelName)+
  | LEFT_PAREN WS? labelName (WS? COMMA WS? labelName)+ WS? RIGHT_PAREN;

propertyTypeSetDef:
  LEFT_BRACE WS? propertyTypeDefList? WS? RIGHT_BRACE;

propertyTypeDefList:
  propertyTypeDef (WS? COMMA WS? propertyTypeDef)+;

propertyTypeDef:
  propertyName WS typed? WS propertyValueType;

propertyValueType:
  valueType;

bindingTableType:
  (BINDING WS)? TABLE WS fieldTypesSpec;

valueType:
  predefinedType
  | constructedType
  | dynamicUnionType;

typed:
  DOUBLE_COLON
  | TYPED;

predefinedType:
  booleanType
  | charStringType
  | byteStringType
  | numericType
  | temporalType
  | refValueType
  | pathValueType;

booleanType:
  (BOOL | BOOLEAN) (WS notNull)?;

charStringType:
  (STRING | VARCHAR) (LEFT_PAREN WS? maxLength WS? RIGHT_PAREN)? (WS notNull)?;

byteStringType:
  BYTES (LEFT_PAREN WS? (minLength WS? COMMA WS?)? maxLength WS? RIGHT_PAREN)? (WS notNull)?
  | BINARY (LEFT_PAREN WS? fixedLength WS? RIGHT_PAREN)? (WS notNull)?
  | VARBINARY (LEFT_PAREN WS? maxLength WS? RIGHT_PAREN)? (WS notNull)?;

minLength:
  unsignedInt;

maxLength:
  unsignedInt;

fixedLength:
  unsignedInt;

numericType:
  exactNumericType
  | approximateNumericType;

exactNumericType:
  binaryExactNumericType
  | decimalExactNumericType;

binaryExactNumericType:
  signedBinaryExactNumericType
  | unsignedBinaryExactNumericType;

signedBinaryExactNumericType:
  INT8 (WS notNull)?
  | INT16 (WS notNull)?
  | INT32 (WS notNull)?
  | INT64 (WS notNull)?
  | INT128 (WS notNull)?
  | INT256 (WS notNull)?
  | SMALLINT (WS notNull)?
  | INT (LEFT_PAREN WS? precision WS? RIGHT_PAREN)? (WS notNull)?
  | BIGINT (WS notNull)?
  | (SIGNED WS)? verboseBinaryExactNumericType;

unsignedBinaryExactNumericType:
  UINT8 (WS notNull)?
  | UINT16 (WS notNull)?
  | UINT32 (WS notNull)?
  | UINT64 (WS notNull)?
  | UINT128 (WS notNull)?
  | UINT256 (WS notNull)?
  | USMALLINT (WS notNull)?
  | UINT (LEFT_PAREN WS? precision WS? RIGHT_PAREN)? (WS notNull)?
  | UBIGINT (WS notNull)?
  | UNSIGNED WS verboseBinaryExactNumericType;

verboseBinaryExactNumericType:
  INTEGER8 (WS notNull)?
  | INTEGER16 (WS notNull)?
  | INTEGER32 (WS notNull)?
  | INTEGER64 (WS notNull)?
  | INTEGER128 (WS notNull)?
  | INTEGER256 (WS notNull)?
  | SMALL WS INTEGER (WS notNull)?
  | INTEGER (LEFT_PAREN WS? precision WS? RIGHT_PAREN)? (WS notNull)?
  | BIG WS INTEGER (WS? notNull)?;

decimalExactNumericType:
  (DECIMAL | DEC) (LEFT_PAREN WS? precision (WS? COMMA WS? scale)? WS? RIGHT_PAREN)? (WS notNull)?;

precision:
  unsignedDecimalInt;

scale:
  unsignedDecimalInt;

approximateNumericType:
  FLOAT16 (WS notNull)?
  | FLOAT32 (WS notNull)?
  | FLOAT64 (WS notNull)?
  | FLOAT128 (WS notNull)?
  | FLOAT256 (WS notNull)?
  | FLOAT (LEFT_PAREN WS? precision (WS? COMMA WS? scale)? WS? RIGHT_PAREN)? (WS notNull)?
  | REAL (WS notNull)?
  | DOUBLE (WS PRECISION)? (WS notNull);

temporalType:
  temporalInstantType
  | temporalDurationType;

temporalInstantType:
  dateTimeType
  | localDateTimeType
  | dateType
  | timeType
  | localTimeType;

temporalDurationType:
  durationType;

dateTimeType:
  ZONED WS DATETIME (WS notNull)?
  | TIMESTAMP WS WITH WS TIMEZONE (WS notNull)?;

localDateTimeType:
  LOCAL WS DATETIME (WS notNull)?
  | TIMESTAMP (WS? WITHOUT WS TIMEZONE) (WS notNull)?;

dateType:
  DATE (WS notNull)?;

timeType:
  ZONED WS TIME (WS notNull)?
  | TIME WS WITH WS TIMEZONE (WS notNull)?;

localTimeType:
  LOCAL WS TIME (WS notNull)?
  | TIME WS WITHOUT WS TIMEZONE (WS notNull)?;

durationType:
  DURATION (WS notNull)?;

refValueType:
  graphRefValueType
  | bindingTableRefValueType
  | nodeRefValueType
  | edgeRefValueType;

graphRefValueType:
  openGraphRefValueType
  | closedGraphRefValueType;

openGraphRefValueType:
  OPEN (WS PROPERTY)? WS GRAPH (WS notNull)?;

closedGraphRefValueType:
  graphTypeSpec (WS notNull)?;

bindingTableRefValueType:
  bindingTableType (WS notNull)?;

nodeRefValueType:
  openNodeRefValueType
  | closedNodeRefValueType;

openNodeRefValueType:
  (OPEN WS)? nodeSynonym (WS notNull)?;

closedNodeRefValueType:
  edgeTypeDef (WS notNull)?;

edgeRefValueType:
  openEdgeRefValueType
  | closedEdgeRefValueType;

openEdgeRefValueType:
  (OPEN WS)? edgeSynonym (WS notNull)?;

closedEdgeRefValueType:
  edgeTypeDef (WS notNull)?;

constructedType:
  listValueType
  | recordType;

listValueType:
  listValueTypeName
    LEFT_ANGLE_BRACKET predefinedType RIGHT_ANGLE_BRACKET
    (LEFT_BRACKET WS? maxLength WS? RIGHT_BRACKET)?
    (WS notNull)?
  | predefinedType WS listValueTypeName
      (LEFT_BRACKET WS? maxLength WS? RIGHT_BRACKET)?
      (WS notNull)?;

listValueTypeName:
  (GROUP WS)? listValueTypeNameSynonym;

listValueTypeNameSynonym:
  LIST
  | ARRAY;

recordType:
  (OPEN WS)? RECORD (WS notNull)?
  | (RECORD WS)? fieldTypesSpec (WS notNull)?;

fieldTypesSpec:
  LEFT_BRACE WS? fieldTypeList? WS? RIGHT_BRACE;

fieldTypeList:
  fieldType (WS? COMMA WS? fieldType)+;

dynamicUnionType:
  openDynamicUnionType
  | dynamicPropertyValueType
  | closedDynamicUnionType;

openDynamicUnionType:
  ANY;

dynamicPropertyValueType:
  (ANY WS)? PROPERTY WS VALUE;

closedDynamicUnionType:
  ANY WS LEFT_ANGLE_BRACKET WS? componentTypeList WS? RIGHT_ANGLE_BRACKET;

componentTypeList:
  componentType (WS? VERTICAL_BAR WS? componentType)*;

componentType:
  valueType;

pathValueType:
  PATH;

notNull:
  NOT WS NULL;

fieldType:
  fieldName (WS typed) WS valueType;

schemaRef:
  absoluteCatalogSchemaRef
  | relativeCatalogSchemaRef
  | refParameter;

absoluteCatalogSchemaRef:
  SOLIDUS
  | absoluteDirectoryPath WS schemaName;

catalogSchemaParentAndName:
  absoluteDirectoryPath WS schemaName;

relativeCatalogSchemaRef:
  predefinedSchemaRef
  | relativeDirectoryPath WS schemaName;

predefinedSchemaRef:
  HOME_SCHEMA
  | CURRENT_SCHEMA
  | PERIOD;

absoluteDirectoryPath:
  SOLIDUS simpleDirectoryPath?;

relativeDirectoryPath:
  DOUBLE_PERIOD ((SOLIDUS WS? DOUBLE_PERIOD)+ WS? SOLIDUS WS? simpleDirectoryPath?)?;

simpleDirectoryPath:
  (directoryName SOLIDUS)+;

graphRef:
  catalogObjectParentRef WS graphName
  | delimitedGraphName
  | homeGraph
  | refParameter;

catalogGraphParentAndName:
  (catalogObjectParentRef WS)? graphName;

homeGraph:
  HOME_PROPERTY_GRAPH
  | HOME_GRAPH;

graphTypeRef:
  catalogGraphTypeParentAndName
  | refParameter;

catalogGraphTypeParentAndName:
  (catalogObjectParentRef WS)? graphTypeName;

bindingTableRef:
  catalogObjectParentRef bindingTableName
  | delimitedBindingTableName
  | refParameter;

catalogBindingTableParentAndName:
  (catalogObjectParentRef WS)? bindingTableName;

procedureRef:
  catalogProcedureParentAndName
  | refParameter;

catalogProcedureParentAndName:
  (catalogObjectParentRef WS)? procedureName;

catalogObjectParentRef:
  schemaRef SOLIDUS? (objectName PERIOD)+
  | (objectName PERIOD)+;

refParameter:
  parameter;

externalObjectRef:;
  // TODO needs more work!

// predicates grammar
searchCondition:
  booleanValueExpr;

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
  comparisonPredicand WS? comparisonPredicatePart2;

comparisonPredicatePart2:
  comparisonOperator WS? comparisonPredicand;

comparisonOperator:
  EQUALS
  | NOT_EQUALS
  | LESS_THAN
  | GREATER_THAN
  | LESS_THAN_OR_EQUALS
  | GREATER_THAN_OR_EQUALS;

comparisonPredicand:
  commonValueExpr
  | booleanPredicand;

existsPredicate:
  EXISTS WS? (
    LEFT_BRACE WS? graphPattern RIGHT_BRACE
    | LEFT_PAREN WS? graphPattern WS? RIGHT_PAREN
    | LEFT_BRACE WS? matchStatmentBlock WS? RIGHT_BRACE
    | LEFT_PAREN WS? matchStatmentBlock WS? RIGHT_PAREN
    | nestedQuerySpec
  );

nullPredicate:
  valueExprPrimary WS nullPredicatePart2;

nullPredicatePart2:
  IS (WS NOT)? WS NULL;

valueTypePredicate:
  valueExprPrimary WS valueTypePredicatePart2;

valueTypePredicatePart2:
  IS (WS NOT)? WS typed WS valueType;

normalizedPredicate:
  stringValueExpr WS normalizedPredicatePart2;

normalizedPredicatePart2:
  IS (WS NOT)? (WS normalForm)? NORMALIZED;

directedPredicate:
  elementVarRef WS directedPredicate;

directedPredicatePart2:
  IS (WS NOT)? DIRECTED;

labeledPredicate:
  elementVarRef WS ;

labeledPredicatePart2:
  isLabeledOrColon WS labelExpr;

isLabeledOrColon:
  IS (WS NOT)? WS LABELED
  | COLON;

sourceOrDestinationPredicate:
  nodeRef WS sourcePredicatePart2
  | nodeRef WS destinationPredicatePart2;

nodeRef:
  elementVarRef;

sourcePredicatePart2:
  IS (WS NOT)? WS SOURCE WS OF WS edgeRef;

destinationPredicatePart2:
  IS (WS NOT)? WS DESTINATION OF WS edgeRef;

edgeRef:
  elementVarRef;

allDifferentPredicate:
  ALL_DIFFERENT
    LEFT_PAREN WS?
      elementVarRef (WS? COMMA WS? elementVarRef)+
    WS? RIGHT_PAREN;

samePredicate:
  SAME
    LEFT_PAREN WS?
      elementVarRef (WS? COMMA WS? elementVarRef)+
    WS? RIGHT_PAREN;

propertyExistsPredicate:
  PROPERTY_EXISTS
    LEFT_PAREN WS?
      elementVarRef WS? COMMA WS? propertyName
    WS? RIGHT_PAREN;

// value expression grammar
valueSpec:
  literal
  | parameterValueSpec;

unsignedValueSpec:
  unsignedLiteral
  | parameterValueSpec;

unsignedIntSpec:
  unsignedInt
  | parameter;

parameterValueSpec:
  parameter
  | predefinedParameter;

predefinedParameter:
  CURRENT_USER;

valueExpr:
  commonValueExpr
  | booleanValueExpr;

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
  (PROPERTY WS)? GRAPH WS graphExpr
  | valueExprPrimary;

bindingTableRefValueExpr:
  (BINDING WS)? TABLE WS bindingTableExpr
  | valueExprPrimary;

nodeRefValueExpr:
  valueExprPrimary;

edgeRefValueExpr:
  valueExprPrimary;

recordValueExpr:
  valueExprPrimary;

aggregatingValueExpr:
  valueExpr;

booleanValueExpr:
  booleanTerm
  | booleanValueExpr WS OR WS booleanTerm
  | booleanValueExpr WS XOR WS booleanTerm;

booleanTerm:
  booleanFactor
  | booleanTerm AND booleanFactor;

booleanFactor:
  (NOT WS)? booleanTest;

booleanTest:
  booleanPrimary (WS IS (WS NOT)? truthValue)?;

truthValue:
  TRUE
  | FALSE
  | UNKNOWN;

booleanPrimary:
  predicate
  | booleanPredicand;

booleanPredicand:
  paranthisedBooleanValueExpr
  | nonParenthesizedValueExprPrimary;

paranthisedBooleanValueExpr:
  LEFT_PAREN WS? booleanValueExpr WS? RIGHT_PAREN;

numericValueExpr:
  term
  | numericValueExpr WS? PLUS WS? term
  | numericValueExpr WS? MINUS WS? term;

term:
  factor
  | term WS? ASTERISK WS? factor
  | term WS? SOLIDUS WS? factor;

factor:
  (sign WS?)? numericPrimary;

numericPrimary:
  valueExprPrimary
  | numericValueFunction;

valueExprPrimary:
  parenthesizedValueExpr
  | nonParenthesizedValueExprPrimary;

parenthesizedValueExpr:
  LEFT_PAREN WS? valueExpr WS? RIGHT_PAREN;

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

lengthExpr:
  charLengthExpr
  | byteLengthExpr
  | pathLengthExpr;

charLengthExpr:
  (CHAR_LENGTH | CHARACTER_LENGTH)
    LEFT_PAREN WS? charStringValueExpr WS? RIGHT_PAREN;

byteLengthExpr:
  (BYTE_LENGTH | OCTET_LENGTH)
    LEFT_PAREN WS? byteStringValueExpr WS? RIGHT_PAREN;

pathLengthExpr:
  PATH_LENGTH LEFT_PAREN WS? pathValueExpr WS? RIGHT_PAREN;

absoluteValueExpr:
  ABS LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

modulusExpr:
  MOD
    LEFT_PAREN WS?
      numericValueExprDividen WS? COMMA WS? numericValueExprDivisor
    WS? RIGHT_PAREN;

numericValueExprDividen:
  numericValueExpr;

numericValueExprDivisor:
  numericValueExpr;

trigonometricFunction:
  trigonometricFunctionName LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

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
    MOD
      LEFT_PAREN WS?
        generalLogarithmBase WS? COMMA WS? generalLogarithmArgument
      WS? RIGHT_PAREN;

generalLogarithmBase:
  numericValueExpr;

generalLogarithmArgument:
  numericValueExpr;

commonLogarithmFunction:
  LOG10 LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

naturalLogarithmFunction:
  LN LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

exponentialFunction:
  EXP LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

powerFunction:
  POWER
    LEFT_PAREN WS?
      numericValueExprBase WS? COMMA WS? numericValueExprExponent
    WS? RIGHT_PAREN;

numericValueExprBase:
  numericValueExpr;

numericValueExprExponent:
  numericValueExpr;

squareRootFunciton:
  SQRT LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

floorFunction:
  FLOOR LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

ceilingFunction:
  (CEIL | CEILING) LEFT_PAREN WS? numericValueExpr WS? RIGHT_PAREN;

stringValueExpr:
  charStringValueExpr
  | byteStringValueExpr;

charStringValueExpr:
  charStringFactor (WS? CONCATENATION WS? charStringFactor)*;

charStringFactor:
  charStringPrimary;

charStringPrimary:
  valueExprPrimary
  | stringValueFunction;

byteStringValueExpr:
  byteStringFactor (WS? CONCATENATION WS? charStringFactor)*
  | byteStringFactor;

byteStringFactor:
  byteStringPrimary;

byteStringPrimary:
  valueExprPrimary
  | stringValueFunction;

stringValueFunction:
  charStringFunction
  | byteStringFunction;

charStringFunction:
  foldFunction
  | trimFunction
  | normalizeFunction;

foldFunction:
  (UPPER | LOWER) LEFT_PAREN WS? charStringValueExpr WS? RIGHT_PAREN;

trimFunction:
  singleCharTrimFunction
  | multiCharTrimFunction;

singleCharTrimFunction:
  TRIM LEFT_PAREN WS? trimOperands WS? RIGHT_PAREN;

multiCharTrimFunction:
  (BTRIM | LTRIM | RTRIM)
    LEFT_PAREN WS? trimSource (WS? COMMA WS? trimCharString) WS? RIGHT_PAREN;

trimOperands:
  ((trimSpec WS)? (trimCharString WS)? FROM WS)? trimSource;

trimSource:
  charStringValueExpr;

trimSpec:
  LEADING
  | TRAILING
  | BOTH;

trimCharString:
  charStringValueExpr;

normalizeFunction:
  NORMALIZE
    LEFT_PAREN WS?
      charStringValueExpr (WS? COMMA WS? normalForm)
    WS? RIGHT_PAREN;

normalForm:
  NFC
  | NFD
  | NFKC
  | NFKD;

byteStringFunction:
  byteStrinTrimFunction;

byteStrinTrimFunction:
  TRIM LEFT_PAREN WS? byteStringTrimOperands WS? RIGHT_PAREN;

byteStringTrimOperands:
  ((trimSpec WS)? (trimByteString WS)? FROM WS)? byteStringTrimSource;

byteStringTrimSource:
  byteStringValueExpr;

trimByteString:
  byteStringValueExpr;

stringLength:
  numericValueExpr;

dateTimeValueExpr:
  dateTimeTerm
  | durationValueExpr PLUS dateTimeTerm
  | dateTimeValueExpr PLUS durationTerm
  | dateTimeValueExpr MINUS durationTerm;

dateTimeTerm:
  dateTimeFactor;

dateTimeFactor:
  dateTimePrimary;

dateTimePrimary:
  valueExprPrimary
  | dateTimeValueFunction;

dateTimeValueFunction:
  dateFunction
  | timeFunction
  | dateTimeFunction
  | localTimeFunction
  | localDatetimeFunction;

dateFunction:
  CURRENT_DATE
  | DATE LEFT_PAREN WS? dateFunctionParameters? WS? RIGHT_PAREN;

timeFunction:
  CURRENT_TIME
  | ZONED_TIME LEFT_PAREN WS? timeFunctionParameters? WS? RIGHT_PAREN;

localTimeFunction:
  LOCAL_TIME LEFT_PAREN WS? timeFunctionParameters? WS? RIGHT_PAREN?;

dateTimeFunction:
  CURRENT_TIMESTAMP
  | ZONED_DATETIME LEFT_PAREN WS? dateTimeFunctionParameters? WS? RIGHT_PAREN;

localDatetimeFunction:
  LOCAL_TIMESTAMP
  | LOCAL_DATETIME LEFT_PAREN WS? dateTimeFunctionParameters? WS? RIGHT_PAREN;

dateFunctionParameters:
  dateString
  | recordValueConstructor;

timeFunctionParameters:
  timeString
  | recordValueConstructor;

dateTimeFunctionParameters:
  dateTimeString
  | recordValueConstructor;

durationValueExpr:
  durationTerm
  | durationValueExpr WS? PLUS WS? durationTerm
  | durationValueExpr WS? MINUS WS? durationTerm
  | dateTimeSubtraction;

dateTimeSubtraction:
  DURATION_BETWEEN LEFT_PAREN WS? dateTimeSubtractionParameters WS? RIGHT_PAREN;

dateTimeSubtractionParameters:
  dateTimeValueExpr WS? COMMA WS? dateTimeValueExpr;

durationTerm:
  durationFactor
  | durationTerm WS? ASTERISK WS? factor
  | durationTerm WS? SOLIDUS WS? factor
  | term WS? ASTERISK WS? durationFactor;


durationFactor:
  (sign)? durationPrimary;

durationPrimary:
  valueExprPrimary
  | durationValueFunction;

durationValueExpr1:
  durationValueExpr;

durationTerm1:
  durationTerm;

durationTerm2:
  durationTerm;

dateTimeValueExpr1:
  dateTimeValueExpr;

dateTimeValueExpr2:
  dateTimeValueExpr;

durationValueFunction:
  durationFunction
  | durationAbsoluteValueFunction;

durationFunction:
  DURATION LEFT_PAREN WS? durationFunctionParameters WS? RIGHT_PAREN;

durationFunctionParameters:
  durationString
  | recordValueConstructor;

durationAbsoluteValueFunction:
  ABS LEFT_PAREN WS? durationValueExpr WS RIGHT_PAREN;

listValueExpr:
  listConcatenation
  | listPrimary;

listConcatenation:
  listPrimary WS? CONCATENATION WS? listValueExpr;

listPrimary:
  listValueFunction
  | valueExprPrimary;

listValueFunction:
  trimListFunction WS? elementsFunction;

trimListFunction:
  TRIM LEFT_PAREN WS? listValueExpr WS? COMMA WS? numericValueExpr WS? RIGHT_PAREN;

elementsFunction:
  ELEMENTS LEFT_PAREN WS? pathValueExpr WS? RIGHT_PAREN;

listValueConstructor:
  listValueConstructorByEnumeration;

listValueConstructorByEnumeration:
  LEFT_BRACKET WS? listValueTypeName WS? RIGHT_BRACKET LEFT_BRACKET WS? listElementList WS? RIGHT_BRACKET;

listElementList:
  listElement (WS? COMMA WS? listElement)*;

listElement:
  valueExpr;

recordValueConstructor: 
  (RECORD WS)? fieldsSpec;

fieldsSpec:
  LEFT_BRACE WS? (fieldList)? WS? RIGHT_BRACE;

fieldList:
  field (WS? COMMA WS? field)*;

field:
  fieldName WS? COLON WS? valueExpr;

pathValueExpr: 
  pathValueConcatenation 
  | pathValuePrimary ;

pathValueConcatenation: 
  pathValuePrimary WS? CONCATENATION WS? pathValueExpr;

pathValuePrimary: 
  valueExprPrimary;

pathValueConstructor: 
  pathValueConstructorByEnumeration;

pathValueConstructorByEnumeration: 
  PATH LEFT_PAREN WS? pathElementList WS? RIGHT_PAREN;

pathElementList: 
  pathElementListStart (WS pathElementListStep)?;

pathElementListStart: 
  nodeRefValueExpr;

pathElementListStep: 
  COMMA WS? edgeRefValueExpr WS? COMMA WS? nodeRefValueExpr;

propertyRef:
  propertySource PERIOD propertyName;

propertySource:
  nodeRefValueExpr
  | edgeRefValueExpr
  | recordValueExpr;

valueQueryExpr:
  VALUE WS? nestedQuerySpec;

caseExpr:
  caseAbbreviation 
  | caseSpecification;

caseAbbreviation:
  NULLIF LEFT_PAREN WS? valueExpr WS? COMMA WS? valueExpr WS? RIGHT_PAREN
  | COALESCE LEFT_PAREN WS? valueExpr (WS? COMMA WS? valueExpr)* WS? RIGHT_PAREN ;

caseSpecification:
  simpleCase 
  | searchedCase;

simpleCase:
  CASE WS caseOperand WS simpleWhenClause (WS elseClause)? WS END;

searchedCase:
  CASE WS searchedWhenClause (WS elseClause)? WS END;

simpleWhenClause:
  WHEN WS whenOperandList WS THEN WS result;

searchedWhenClause:
  WHEN WS searchCondition WS THEN WS result;

elseClause:
  ELSE result;

caseOperand:
  nonParenthesizedValueExprPrimary
  | elementVarRef;

whenOperandList:
  whenOperand (WS? COMMA WS? whenOperand)*;

whenOperand:
  nonParenthesizedValueExprPrimary
  | comparisonPredicatePart2
  | nullPredicatePart2
  | valueTypePredicatePart2
  | directedPredicatePart2
  | labeledPredicatePart2
  | sourcePredicatePart2
  | destinationPredicatePart2;

result:
  resultExpr
  | NULL;

resultExpr:
  valueExpr;

castSpec:
  CAST LEFT_PAREN WS? castOperand WS AS WS castTarget WS? RIGHT_PAREN;

castOperand:
  valueExpr;

castTarget:
  valueType;

elementIdFunction:
  ELEMENT_ID LEFT_PAREN WS? elementVarRef WS? RIGHT_PAREN;

letValueExpr:
  LET WS? letVarDefList WS? IN WS? valueExpr WS? END;

// lexical grammar

literal:
  signedNumericLiteral
  | generalLiteral;

generalLiteral
  : predefinedTypeLiteral
  | listLiteral
  | recordLiteral;

predefinedTypeLiteral:
  booleanLiteral
  | characterStringLiteral
  | byteStringLiteral
  | temporalLiteral
  | durationLiteral
  | nullLiteral;

unsignedLiteral:
  unsignedNumericLiteral
  | generalLiteral;

booleanLiteral:
  TRUE
  | FALSE
  | UNKNOWN;

characterStringLiteral:
  singleQuotedCharacterSequence
  | doubleQuotedCharacterSequence;

unbrokenCharacterStringLiteral:
  noEscape? unbrokenSingleQuotedCharacterSequence
  | noEscape? unbrokenDoubleQuotedCharacterSequence;

singleQuotedCharacterSequence:
  noEscape? unbrokenSingleQuotedCharacterSequence (WS? VERTICAL_BAR WS? unbrokenSingleQuotedCharacterSequence)*;

doubleQuotedCharacterSequence:
  noEscape? unbrokenDoubleQuotedCharacterSequence (WS? VERTICAL_BAR WS? unbrokenDoubleQuotedCharacterSequence)*;

accentQuotedCharacterSequence:
  noEscape? unbrokenAccentQuotedCharacterSequence (WS? VERTICAL_BAR WS? unbrokenAccentQuotedCharacterSequence)*;

noEscape:
  COMMERCIAL_AT;

unbrokenSingleQuotedCharacterSequence:
  QUOTE singleQuotedCharacterRepresentation* QUOTE;

unbrokenDoubleQuotedCharacterSequence:
  DOUBLE_QUOTE doubleQuotedCharacterRepresentation* DOUBLE_QUOTE;

unbrokenAccentQuotedCharacterSequence:
  GRAVE_ACCENT accentQuotedCharacterRepresentation* GRAVE_ACCENT;

singleQuotedCharacterRepresentation:
  stringRepresentation;

doubleQuotedCharacterRepresentation:
  stringRepresentation;

accentQuotedCharacterRepresentation:
  stringRepresentation;

stringRepresentation:
  GQL_LANGUAGE_CHAR;

stringLiterlChar:
  GQL_LANGUAGE_CHAR;

escapedCharacter:
  ESCAPED_REVERSE_SOLIDUS
  | ESCAPED_QUOTE
  | ESCAPED_SOUBLE_QUOTE
  | ESCAPED_GRAVE_ACCENT
  | ESCAPED_TAB
  | ESCAPED_BACKSPACE
  | ESCAPED_NEW_LINE
  | ESCAPED_CARRIAGE_RETURN
  | ESCAPED_FORM_FEED
  | unicodeEscapeValue;

unicodeEscapeValue:
  ESCAPED_UNICODE4_DIGIT_VALUE
  | ESCAPED_UNICODE6_DIGIT_VALUE;

byteStringLiteral:
  BYTE_SRTING_PREFIX QUOTE (WS HEX_DIGIT WS? HEX_DIGIT WS)? WS QUOTE (WS QUOTE WS? (HEX_DIGIT WS? HEX_DIGIT WS?)? QUOTE)?;

signedNumericLiteral:
  sign? unsignedNumericLiteral;

unsignedNumericLiteral:
  exactNumericLiteral
  | approximateNumericLiteral;

exactNumericLiteral:
  unsignedInt
  | unsignedDecimalInCommonNotation EXACT_NUMBER_SUFIX?
  | unsignedDecimalInCommonNotation EXACT_NUMBER_SUFIX?
  | unsignedInt EXACT_NUMBER_SUFIX?;

approximateNumericLiteral:
  unsignedDecimalInCommonNotation APPROXIMATE_NUMBER_SUFIX
  | unsignedDecimalInCommonNotation APPROXIMATE_NUMBER_SUFIX?
  | unsignedInt APPROXIMATE_NUMBER_SUFIX;

sign:
  PLUS
  | MINUS;

unsignedInt:
  unsignedDecimalInt
  | unsignedHexadecimalInt
  | unsignedOctalInt
  | unsignedBinaryInt;

unsignedDecimalInCommonNotation:
  unsignedDecimalInt (PERIOD unsignedDecimalInt?)?
  | PERIOD unsignedDecimalInt;

unsignedDecimalInt:
  STANDARD_DIGIT (UNDERSCORE? STANDARD_DIGIT)?;

unsignedHexadecimalInt :
  HEX_PREFIX UNDERSCORE? HEX_DIGIT;

unsignedOctalInt :
  OCTAL_PREFIX UNDERSCORE? OCTAL_DIGIT;

unsignedBinaryInt :
  BINARY_PREFIX UNDERSCORE? BINARY_DIGIT;

signedDecimalInt :
  sign? unsignedDecimalInt;

unsignedDecimalInScientificNotation :
  mantissa EXPONENT_SEPARATOR exponent;

mantissa:
  exactNumericLiteral;

exponent:
  signedDecimalInt;

temporalLiteral:
  dateLiteral
  | timeLiteral
  | dateTimeLiteral
  | sqlDateTimeLiteral;

dateLiteral:
  DATE WS unbrokenCharacterStringLiteral;

timeLiteral:
  TIME WS unbrokenCharacterStringLiteral;

dateTimeLiteral:
  DATETIME WS unbrokenCharacterStringLiteral
  | TIMESTAMP WS unbrokenCharacterStringLiteral;

dateString:
  unbrokenCharacterStringLiteral;

timeString:
  unbrokenCharacterStringLiteral;

dateTimeString:
  unbrokenCharacterStringLiteral;

sqlDateTimeLiteral:
  DATE WS QUOTE YYYY MINUS MM MINUS DD QUOTE
  | TIME WS QUOTE H_ COLON M_ COLON S_ QUOTE
  | TIMESTAMP WS QUOTE YYYY MINUS MM MINUS DD WS H_ COLON M_ COLON S_ QUOTE
  | DATETIME WS QUOTE YYYY MINUS MM MINUS DD WS H_ COLON M_ COLON S_ QUOTE;


durationLiteral:
  DURATION WS durationString
  | sqlIntervalLiteral;

durationString:
  unbrokenCharacterStringLiteral;

sqlIntervalLiteral: unsignedDecimalInt WS? sqlIntervalType;

sqlIntervalType:
  INTERVAL_DAY
  | INTERVAL_WEEK
  | INTERVAL_MONTH
  | INTERVAL_YEAR;

nullLiteral:
  NULL;

listLiteral:
  listValueConstructorByEnumeration;

recordLiteral:
  recordValueConstructor;

objectName:
  identifier;

objectNameOrBindingVar:
  regularIdentifier;

directoryName:
  identifier;

schemaName:
  identifier;

graphName:
  regularIdentifier
  | delimitedGraphName;

delimitedGraphName:
  delimitedIdentifier;

graphTypeName:
  identifier;

elementTypeName:
  identifier;

bindingTableName:
  regularIdentifier
  | delimitedBindingTableName;

delimitedBindingTableName:
  delimitedIdentifier;

procedureName:
  identifier;

labelName:
  identifier;

propertyName:
    identifier;

fieldName:
    identifier;

parameterName:
    DOLLAR separatedIdentifier;

var:
  graphVar
  | graphPatternVar
  | bindingTableVar
  | valueVar
  | bindingVar;

graphVar:
  bindingVar;

graphPatternVar:
  elementVar
  | pathOrSubpathVar;

pathOrSubpathVar:
  pathVar
  | subpathVar;

elementVar:
  bindingVar;

pathVar:
  bindingVar;

subpathVar:
  regularIdentifier;

bindingTableVar:
  bindingVar;

valueVar:
  bindingVar;

bindingVar:
  regularIdentifier;

token:
  nonDelimiterToken
  | delimiterToken;

nonDelimiterToken:
  regularIdentifier
  | parameterName
  | keyWord
  | unsignedNumericLiteral
  | byteStringLiteral
  | MULTISET_ALTERNATION;

identifier:
  regularIdentifier
  | delimitedIdentifier;

separatedIdentifier:
  extendedIdentifier
  | delimitedIdentifier;

nonDelimitedIdentifier:
  regularIdentifier
  | extendedIdentifier;

regularIdentifier:
  identifierStart identifierExtend?;

extendedIdentifier:
  identifierExtend;

delimitedIdentifier:
  doubleQuotedCharacterSequence
  | accentQuotedCharacterSequence;

identifierStart:
  UNDERSCORE
  | XID_START;

identifierExtend:
  XID_CONTINUE;

keyWord:
  reservedWord
  | nonReservedWord;

reservedWord:
  ABS
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
  | CONCATENATION
  | dateString
  | dateTimeString
  | delimitedIdentifier
  | durationString
  | timeString
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

bidirectionalControlCharacter :; // TODO: '!! See the Syntax Rules.' ;

comment:
  simpleComment
  | bracketedComment;

simpleComment:
  simpleCommentIntroducer simpleCommentCharacter? NEW_LINE;

simpleCommentIntroducer:
  DOUBLE_SOLIDUS
  | DOUBLE_MINUS;

simpleCommentCharacter:
  GQL_LANGUAGE_CHAR;

bracketedComment:
  bracketedCommentIntroducer
  bracketedCommentContents
  bracketedCommentTerminator;

bracketedCommentIntroducer:
  SOLIDUS ASTERISK;

bracketedCommentTerminator:
  ASTERISK SOLIDUS;

bracketedCommentContents:
  GQL_LANGUAGE_CHAR+;

edgeSynonym:
  EDGE
  | RELATIONSHIP;

edgesSynonym:
  EDGES
  | RELATIONSHIPS;

nodeSynonym:
  NODE
  | VERTEX;
