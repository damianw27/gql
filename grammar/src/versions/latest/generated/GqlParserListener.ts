// Generated from src/versions/latest/antlr/GqlParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "@gql-grammar/antlr4";


import { GqlProgramContext } from "./GqlParser";
import { ActivityContext } from "./GqlParser";
import { ProgramActivityContext } from "./GqlParser";
import { SessionActivityContext } from "./GqlParser";
import { SessionSetCommandContext } from "./GqlParser";
import { SessionSetSchemaClauseContext } from "./GqlParser";
import { SessionSetGraphClauseContext } from "./GqlParser";
import { SessionSetTimeZoneClauseContext } from "./GqlParser";
import { SetTimeZoneValueContext } from "./GqlParser";
import { SessionSetParameterClauseContext } from "./GqlParser";
import { SessionSetGraphParameterClauseContext } from "./GqlParser";
import { SessionSetBindingTableParameterCaluesContext } from "./GqlParser";
import { SessionSetValuesParameterClauseContext } from "./GqlParser";
import { SessionSetParameterNameContext } from "./GqlParser";
import { SessionResetCommandContext } from "./GqlParser";
import { SessionResetArgumentsContext } from "./GqlParser";
import { SessionCloseCommandContext } from "./GqlParser";
import { TransactionActivityContext } from "./GqlParser";
import { TransactionStartCommandContext } from "./GqlParser";
import { TransactionEndCommandContext } from "./GqlParser";
import { TransactionCharacteristicsContext } from "./GqlParser";
import { TransactionModeContext } from "./GqlParser";
import { TransactionAccessModeContext } from "./GqlParser";
import { ImplDefinedAccessModeContext } from "./GqlParser";
import { NestedProcedureSpecContext } from "./GqlParser";
import { ProcedureSpecContext } from "./GqlParser";
import { NestedDataModProcedureSpecContext } from "./GqlParser";
import { NestedQuerySpecContext } from "./GqlParser";
import { ProcedureBodyContext } from "./GqlParser";
import { BindingVarDefBlockContext } from "./GqlParser";
import { BindingVarDefContext } from "./GqlParser";
import { StatmentBlockContext } from "./GqlParser";
import { StatementContext } from "./GqlParser";
import { NextStatmentContext } from "./GqlParser";
import { GraphVarDefContext } from "./GqlParser";
import { OptTypedGraphInitContext } from "./GqlParser";
import { GraphInitContext } from "./GqlParser";
import { BindingTableVarDefContext } from "./GqlParser";
import { OptTypedBindingTableInitContext } from "./GqlParser";
import { BindingTableInitContext } from "./GqlParser";
import { ValueVarDefContext } from "./GqlParser";
import { OptTypedValueInitContext } from "./GqlParser";
import { ValueInitContext } from "./GqlParser";
import { GraphExprContext } from "./GqlParser";
import { CurrentGraphContext } from "./GqlParser";
import { NestedGraphQuerySpecContext } from "./GqlParser";
import { BindingTableExprContext } from "./GqlParser";
import { NestedBindingTableQuerySpecContext } from "./GqlParser";
import { ObjectExprPrimaryContext } from "./GqlParser";
import { LinearCatalogModStatmentContext } from "./GqlParser";
import { SimpleCatalogModStatmentContext } from "./GqlParser";
import { PrimitiveCatalogModStatmentContext } from "./GqlParser";
import { CreateSchemeStatmentContext } from "./GqlParser";
import { DropSchemeStatmentContext } from "./GqlParser";
import { CreateGraphStatmentContext } from "./GqlParser";
import { CreateOnlyGraphStatmentContext } from "./GqlParser";
import { CreateOrReplaceGraphStatmentContext } from "./GqlParser";
import { OpenGraphTypeContext } from "./GqlParser";
import { OfGraphTypeContext } from "./GqlParser";
import { GraphTypeLikeGraphContext } from "./GqlParser";
import { GraphSourceContext } from "./GqlParser";
import { DropGraphStatmentContext } from "./GqlParser";
import { CreateGraphTypeStatmentContext } from "./GqlParser";
import { GraphTypeSourceContext } from "./GqlParser";
import { CopyOfGraphTypeContext } from "./GqlParser";
import { DropGraphTypeStatmentContext } from "./GqlParser";
import { CallCatalogModProcedureStatmentContext } from "./GqlParser";
import { LinearDataModStatmentContext } from "./GqlParser";
import { FocusedLinearDataModStatmentContext } from "./GqlParser";
import { FocusedLinearDataModStatmentBodyContext } from "./GqlParser";
import { FocusedNestedDataModProcedureSpecContext } from "./GqlParser";
import { AmbientLinearDataModStatmentContext } from "./GqlParser";
import { AmbientLinearDataModStatmentBodyContext } from "./GqlParser";
import { SimpleLinearDataAccessingStatmentContext } from "./GqlParser";
import { SimpleDataAccessingStatmentContext } from "./GqlParser";
import { SimpleDataModStatmentContext } from "./GqlParser";
import { PrimitiveDataModStatmentContext } from "./GqlParser";
import { InsertStatmentContext } from "./GqlParser";
import { SetStatmentContext } from "./GqlParser";
import { SetItemListContext } from "./GqlParser";
import { SetItemContext } from "./GqlParser";
import { SetPropertyItemContext } from "./GqlParser";
import { SetAllPropertiesItemContext } from "./GqlParser";
import { SetLabelItemContext } from "./GqlParser";
import { LabelSetSpecContext } from "./GqlParser";
import { RemoveStatmentContext } from "./GqlParser";
import { RemoveItemListContext } from "./GqlParser";
import { RemoveItemContext } from "./GqlParser";
import { RemovePropertyItemContext } from "./GqlParser";
import { RemoveLabelItemContext } from "./GqlParser";
import { DeleteStatmentContext } from "./GqlParser";
import { DeleteItemListContext } from "./GqlParser";
import { DeleteItemContext } from "./GqlParser";
import { CallDataModProcedureStatmentContext } from "./GqlParser";
import { CompositeQueryStatmentContext } from "./GqlParser";
import { CompositeQueryExprContext } from "./GqlParser";
import { QueryConjunctionContext } from "./GqlParser";
import { SetOperatorContext } from "./GqlParser";
import { CompositeQueryPrimaryContext } from "./GqlParser";
import { LinearQueryStatmentContext } from "./GqlParser";
import { FocusedLinearQueryStatmentContext } from "./GqlParser";
import { FocusedLinearQueryStatmentPartContext } from "./GqlParser";
import { FocusedLinearQueryAndPrimitiveResultStatmentPartContext } from "./GqlParser";
import { FocusedPrimitiveResultStatmentContext } from "./GqlParser";
import { FocusedNestedQuerySpecContext } from "./GqlParser";
import { AmbientLinearQueryStatmentContext } from "./GqlParser";
import { SimpleLinearQueryStatmentContext } from "./GqlParser";
import { SimpleQueryStatmentContext } from "./GqlParser";
import { PrimitiveQueryStatmentContext } from "./GqlParser";
import { MatchStatmentContext } from "./GqlParser";
import { SimpleMatchStatmentContext } from "./GqlParser";
import { OptionalMatchStatmentContext } from "./GqlParser";
import { OptionalOperandContext } from "./GqlParser";
import { MatchStatmentBlockContext } from "./GqlParser";
import { CallQueryStatmentContext } from "./GqlParser";
import { FilterStatmentContext } from "./GqlParser";
import { LetStatmentContext } from "./GqlParser";
import { LetVarDefListContext } from "./GqlParser";
import { LetVarDefContext } from "./GqlParser";
import { ForStatmentContext } from "./GqlParser";
import { ForItemContext } from "./GqlParser";
import { ForItemAliasContext } from "./GqlParser";
import { ForOrdinalityOrOffsetContext } from "./GqlParser";
import { OrderByAndPageStatmentContext } from "./GqlParser";
import { PrimitiveResultStatmentContext } from "./GqlParser";
import { ReturnStatmentContext } from "./GqlParser";
import { ReturnStatmentBodyContext } from "./GqlParser";
import { ReturnItemListContext } from "./GqlParser";
import { ReturnItemContext } from "./GqlParser";
import { ReturnItemAliasContext } from "./GqlParser";
import { SelectStatmentContext } from "./GqlParser";
import { SelectItemListContext } from "./GqlParser";
import { SelectItemContext } from "./GqlParser";
import { SelectItemAliasContext } from "./GqlParser";
import { HavingClauseContext } from "./GqlParser";
import { SelectStatmentBodyContext } from "./GqlParser";
import { SelectGraphMatchListContext } from "./GqlParser";
import { SelectGraphMatchContext } from "./GqlParser";
import { SelectQuerySpecContext } from "./GqlParser";
import { CallProcedureStatmentContext } from "./GqlParser";
import { ProcedureCallContext } from "./GqlParser";
import { InlineProcedureCallContext } from "./GqlParser";
import { VarScopeClauseContext } from "./GqlParser";
import { BindingVarRefListContext } from "./GqlParser";
import { NamedProcedureCallContext } from "./GqlParser";
import { ProcedureArgListContext } from "./GqlParser";
import { ProcedureArgContext } from "./GqlParser";
import { UseGraphClauseContext } from "./GqlParser";
import { AtSchemaClauseContext } from "./GqlParser";
import { BindingVarRefContext } from "./GqlParser";
import { ElementVarRefContext } from "./GqlParser";
import { PathVarRefContext } from "./GqlParser";
import { ParameterContext } from "./GqlParser";
import { GraphPatternBindingTableContext } from "./GqlParser";
import { GraphPatternYieldClauseContext } from "./GqlParser";
import { GraphPatternYieldItemListContext } from "./GqlParser";
import { GraphPatternYieldItemContext } from "./GqlParser";
import { GraphPatternContext } from "./GqlParser";
import { MatchModeContext } from "./GqlParser";
import { RepeatableElementsMatchModeContext } from "./GqlParser";
import { DifferentEdgesMatchModeContext } from "./GqlParser";
import { ElementBindingsOrElementsContext } from "./GqlParser";
import { EdgeBindingsOrEdgesContext } from "./GqlParser";
import { PathPatternListContext } from "./GqlParser";
import { PathPatternContext } from "./GqlParser";
import { PathVarDeclarationContext } from "./GqlParser";
import { KeepClauseContext } from "./GqlParser";
import { GraphPatternWhereClauseContext } from "./GqlParser";
import { PathPatternPrefixContext } from "./GqlParser";
import { PathModePrefixContext } from "./GqlParser";
import { PathModeContext } from "./GqlParser";
import { PathSearchPrefixContext } from "./GqlParser";
import { AllPathSearchContext } from "./GqlParser";
import { PathOrPathsContext } from "./GqlParser";
import { AnyPathSearchContext } from "./GqlParser";
import { NumberOfPathsContext } from "./GqlParser";
import { ShortestPathSearchContext } from "./GqlParser";
import { AllShortestPathSearchContext } from "./GqlParser";
import { AnyShortestPathSearchContext } from "./GqlParser";
import { CountedShortestPathSearchContext } from "./GqlParser";
import { CountedShortestGroupSearchContext } from "./GqlParser";
import { GroupOrGroupsContext } from "./GqlParser";
import { NumberOfGroupsContext } from "./GqlParser";
import { PathPatternExprContext } from "./GqlParser";
import { PathMultisetAlternationContext } from "./GqlParser";
import { PathPatternUnionContext } from "./GqlParser";
import { PathTermContext } from "./GqlParser";
import { PathFactorContext } from "./GqlParser";
import { QuantifiedPathPrimaryContext } from "./GqlParser";
import { QuestionedPathPrimaryContext } from "./GqlParser";
import { PathPrimaryContext } from "./GqlParser";
import { ElementPatternContext } from "./GqlParser";
import { NodePatternContext } from "./GqlParser";
import { ElementPatternFillerContext } from "./GqlParser";
import { ElementVarDeclarationContext } from "./GqlParser";
import { IsLabelExprContext } from "./GqlParser";
import { IsOrColonContext } from "./GqlParser";
import { ElementPatternPredicateContext } from "./GqlParser";
import { ElementPatternWhereClauseContext } from "./GqlParser";
import { ElementPropertySpecContext } from "./GqlParser";
import { PropertyKeyValuePairListContext } from "./GqlParser";
import { PropertyKeyValuePairContext } from "./GqlParser";
import { EdgePatternContext } from "./GqlParser";
import { FullEdgePatternContext } from "./GqlParser";
import { FullEdgePointingLeftContext } from "./GqlParser";
import { FullEdgeUndirectedContext } from "./GqlParser";
import { FullEdgePointingRightContext } from "./GqlParser";
import { FullEdgeLeftOrUndirectedContext } from "./GqlParser";
import { FullEdgeUndirectedOrRightContext } from "./GqlParser";
import { FullEdgeLeftOrRightContext } from "./GqlParser";
import { FullEdgeAnyDirectionContext } from "./GqlParser";
import { AbbreviatedEdgePatternContext } from "./GqlParser";
import { ParenthesizedPathPatternExprContext } from "./GqlParser";
import { SubpathVarDeclarationContext } from "./GqlParser";
import { ParenthesizedPathPatternWhereClauseContext } from "./GqlParser";
import { InsertGraphPatternContext } from "./GqlParser";
import { InsertGraphPatternListContext } from "./GqlParser";
import { InsertPathPatternContext } from "./GqlParser";
import { InsertNodePatternContext } from "./GqlParser";
import { InsertEdgePatternContext } from "./GqlParser";
import { InsertEdgePointingLeftContext } from "./GqlParser";
import { InsertEdgePointingRightContext } from "./GqlParser";
import { InsertEdgeUndirectedContext } from "./GqlParser";
import { InsertElementPatternFillerContext } from "./GqlParser";
import { LabelAndPropertySetSpecContext } from "./GqlParser";
import { LabelExprContext } from "./GqlParser";
import { LabelTermContext } from "./GqlParser";
import { LabelFactorContext } from "./GqlParser";
import { LabelNegationContext } from "./GqlParser";
import { LabelPrimaryContext } from "./GqlParser";
import { WildcardLabelContext } from "./GqlParser";
import { ParenthesizedLabelExprContext } from "./GqlParser";
import { GraphPatternQuantifierContext } from "./GqlParser";
import { FixedQuantifierContext } from "./GqlParser";
import { GeneralQuantifierContext } from "./GqlParser";
import { LowerBoundContext } from "./GqlParser";
import { UpperBoundContext } from "./GqlParser";
import { SimplifiedPathPatternExprContext } from "./GqlParser";
import { SimplifiedDefaultingLeftContext } from "./GqlParser";
import { SimplifiedDefaultingUndirectedContext } from "./GqlParser";
import { SimplifiedDefaultingRightContext } from "./GqlParser";
import { SimplifiedDefaultingLeftOrUndirectedContext } from "./GqlParser";
import { SimplifiedDefaultingUndirectedOrRightContext } from "./GqlParser";
import { SimplifiedDefaultingLeftOrRightContext } from "./GqlParser";
import { SimplifiedDefaultingAnyDirectionContext } from "./GqlParser";
import { SimplifiedContentsContext } from "./GqlParser";
import { SimplifiedPathUnionContext } from "./GqlParser";
import { SimplifiedMultisetAlternationContext } from "./GqlParser";
import { SimplifiedTermContext } from "./GqlParser";
import { SimplifiedFactorLowContext } from "./GqlParser";
import { SimplifiedFactorHighContext } from "./GqlParser";
import { SimplifiedQuntifiedContext } from "./GqlParser";
import { SimplifiedQuestionedContext } from "./GqlParser";
import { SimplifiedTertiaryContext } from "./GqlParser";
import { SimplifiedDirectionOverrideContext } from "./GqlParser";
import { SimplifiedOverrideLeftContext } from "./GqlParser";
import { SimplifiedOverrideUndirectedContext } from "./GqlParser";
import { SimplifiedOverrideRightContext } from "./GqlParser";
import { SimplifiedOverrideLeftOrUndirectedContext } from "./GqlParser";
import { SimplifiedOverrideUndirectedOrRightContext } from "./GqlParser";
import { SimplifiedOverrideLeftOrRightContext } from "./GqlParser";
import { SimplifiedOverrideAnyDirectionContext } from "./GqlParser";
import { SimplifiedSecondaryContext } from "./GqlParser";
import { SimplifiedNegationContext } from "./GqlParser";
import { SimplifiedPrimaryContext } from "./GqlParser";
import { WhereClauseContext } from "./GqlParser";
import { YieldClauseContext } from "./GqlParser";
import { YieldItemListContext } from "./GqlParser";
import { YieldItemContext } from "./GqlParser";
import { YieldItemNameContext } from "./GqlParser";
import { YieldItemAliasContext } from "./GqlParser";
import { GroupByClauseContext } from "./GqlParser";
import { GroupingElementListContext } from "./GqlParser";
import { GroupingElementContext } from "./GqlParser";
import { EmptyGroupingSetContext } from "./GqlParser";
import { OrderByClauseContext } from "./GqlParser";
import { AggregateFunctionContext } from "./GqlParser";
import { GeneralSetFunctionContext } from "./GqlParser";
import { GeneralSetFunctionTypeContext } from "./GqlParser";
import { SetQuantifierContext } from "./GqlParser";
import { BinarySetFunctionContext } from "./GqlParser";
import { DependantValueExprContext } from "./GqlParser";
import { IndependentValueExprContext } from "./GqlParser";
import { SortSpecListContext } from "./GqlParser";
import { SortSpecContext } from "./GqlParser";
import { SortKeyContext } from "./GqlParser";
import { OrderingSpecContext } from "./GqlParser";
import { NullOrderingContext } from "./GqlParser";
import { LimitClauseContext } from "./GqlParser";
import { OffsetClauseContext } from "./GqlParser";
import { OffsetSynonymContext } from "./GqlParser";
import { GraphTypeSpecContext } from "./GqlParser";
import { NestedGraphTypeSpecContext } from "./GqlParser";
import { GraphTypeSpecBodyContext } from "./GqlParser";
import { ElementTypeDefListContext } from "./GqlParser";
import { ElementTypeDefContext } from "./GqlParser";
import { NodeTypeDefContext } from "./GqlParser";
import { NodeTypePatternContext } from "./GqlParser";
import { NodeTypePhraseContext } from "./GqlParser";
import { NodeTypeNameContext } from "./GqlParser";
import { NodeTypeFillerContext } from "./GqlParser";
import { NodeTypeLabelSetDefContext } from "./GqlParser";
import { NodeTypePropertyTypeSetDefContext } from "./GqlParser";
import { EdgeTypeDefContext } from "./GqlParser";
import { EdgeTypePatternContext } from "./GqlParser";
import { EdgeTypePhraseContext } from "./GqlParser";
import { EdgeTypeNameContext } from "./GqlParser";
import { EdgeTypeFillerContext } from "./GqlParser";
import { EdgeTypeLabelSetDefContext } from "./GqlParser";
import { EdgeTypePropertyTypeSetDefContext } from "./GqlParser";
import { FullEdgeTypePatternContext } from "./GqlParser";
import { FullEdgeTypePatternPointingRightContext } from "./GqlParser";
import { FullEdgeTypePatternPointingLeftContext } from "./GqlParser";
import { FullEdgeTypePatternUndirectedContext } from "./GqlParser";
import { ArcTypePointingRightContext } from "./GqlParser";
import { ArcTypePointingLeftContext } from "./GqlParser";
import { ArcTypeUndirectedContext } from "./GqlParser";
import { ArcTypeFillerContext } from "./GqlParser";
import { AbbreviatedEdgeTypePatternContext } from "./GqlParser";
import { AbbreviatedEdgeTypePatternPointingRightContext } from "./GqlParser";
import { AbbreviatedEdgeTypePatternPointingLeftContext } from "./GqlParser";
import { AbbreviatedEdgeTypePatternUndirectedContext } from "./GqlParser";
import { NodeTypeRefContext } from "./GqlParser";
import { SourceNodeTypeRefContext } from "./GqlParser";
import { DestinationNodeTypeRefContext } from "./GqlParser";
import { EdgeKindContext } from "./GqlParser";
import { EndpointDefContext } from "./GqlParser";
import { EnpointPairDefContext } from "./GqlParser";
import { EndpointPairDefPointingRightContext } from "./GqlParser";
import { EndpointPairDefPointingLeftContext } from "./GqlParser";
import { EndpointPairDefUndirectedContext } from "./GqlParser";
import { ConnectorPointingRightContext } from "./GqlParser";
import { ConnectorPointingLeftContext } from "./GqlParser";
import { ConnectorUndirectedContext } from "./GqlParser";
import { SourceNodeTypeNameContext } from "./GqlParser";
import { DestinationNodeTypeNameContext } from "./GqlParser";
import { LabelSetDefContext } from "./GqlParser";
import { PropertyTypeSetDefContext } from "./GqlParser";
import { PropertyTypeDefListContext } from "./GqlParser";
import { PropertyTypeDefContext } from "./GqlParser";
import { PropertyValueTypeContext } from "./GqlParser";
import { BindingTableTypeContext } from "./GqlParser";
import { ValueTypeContext } from "./GqlParser";
import { TypedContext } from "./GqlParser";
import { PredefinedTypeContext } from "./GqlParser";
import { BooleanTypeContext } from "./GqlParser";
import { CharStringTypeContext } from "./GqlParser";
import { ByteStringTypeContext } from "./GqlParser";
import { MinLengthContext } from "./GqlParser";
import { MaxLengthContext } from "./GqlParser";
import { FixedLengthContext } from "./GqlParser";
import { NumericTypeContext } from "./GqlParser";
import { ExactNumericTypeContext } from "./GqlParser";
import { BinaryExactNumericTypeContext } from "./GqlParser";
import { SignedBinaryExactNumericTypeContext } from "./GqlParser";
import { UnsignedBinaryExactNumericTypeContext } from "./GqlParser";
import { VerboseBinaryExactNumericTypeContext } from "./GqlParser";
import { DecimalExactNumericTypeContext } from "./GqlParser";
import { PrecisionContext } from "./GqlParser";
import { ScaleContext } from "./GqlParser";
import { ApproximateNumericTypeContext } from "./GqlParser";
import { TemporalTypeContext } from "./GqlParser";
import { TemporalInstantTypeContext } from "./GqlParser";
import { TemporalDurationTypeContext } from "./GqlParser";
import { DateTimeTypeContext } from "./GqlParser";
import { LocalDateTimeTypeContext } from "./GqlParser";
import { DateTypeContext } from "./GqlParser";
import { TimeTypeContext } from "./GqlParser";
import { LocalTimeTypeContext } from "./GqlParser";
import { DurationTypeContext } from "./GqlParser";
import { RefValueTypeContext } from "./GqlParser";
import { GraphRefValueTypeContext } from "./GqlParser";
import { OpenGraphRefValueTypeContext } from "./GqlParser";
import { ClosedGraphRefValueTypeContext } from "./GqlParser";
import { BindingTableRefValueTypeContext } from "./GqlParser";
import { NodeRefValueTypeContext } from "./GqlParser";
import { OpenNodeRefValueTypeContext } from "./GqlParser";
import { ClosedNodeRefValueTypeContext } from "./GqlParser";
import { EdgeRefValueTypeContext } from "./GqlParser";
import { OpenEdgeRefValueTypeContext } from "./GqlParser";
import { ClosedEdgeRefValueTypeContext } from "./GqlParser";
import { ConstructedTypeContext } from "./GqlParser";
import { ListValueTypeContext } from "./GqlParser";
import { ListValueTypeNameContext } from "./GqlParser";
import { ListValueTypeNameSynonymContext } from "./GqlParser";
import { RecordTypeContext } from "./GqlParser";
import { FieldTypesSpecContext } from "./GqlParser";
import { FieldTypeListContext } from "./GqlParser";
import { DynamicUnionTypeContext } from "./GqlParser";
import { OpenDynamicUnionTypeContext } from "./GqlParser";
import { DynamicPropertyValueTypeContext } from "./GqlParser";
import { ClosedDynamicUnionTypeContext } from "./GqlParser";
import { ComponentTypeListContext } from "./GqlParser";
import { ComponentTypeContext } from "./GqlParser";
import { PathValueTypeContext } from "./GqlParser";
import { NotNullContext } from "./GqlParser";
import { FieldTypeContext } from "./GqlParser";
import { SchemaRefContext } from "./GqlParser";
import { AbsoluteCatalogSchemaRefContext } from "./GqlParser";
import { CatalogSchemaParentAndNameContext } from "./GqlParser";
import { RelativeCatalogSchemaRefContext } from "./GqlParser";
import { PredefinedSchemaRefContext } from "./GqlParser";
import { AbsoluteDirectoryPathContext } from "./GqlParser";
import { RelativeDirectoryPathContext } from "./GqlParser";
import { SimpleDirectoryPathContext } from "./GqlParser";
import { GraphRefContext } from "./GqlParser";
import { CatalogGraphParentAndNameContext } from "./GqlParser";
import { HomeGraphContext } from "./GqlParser";
import { GraphTypeRefContext } from "./GqlParser";
import { CatalogGraphTypeParentAndNameContext } from "./GqlParser";
import { BindingTableRefContext } from "./GqlParser";
import { CatalogBindingTableParentAndNameContext } from "./GqlParser";
import { ProcedureRefContext } from "./GqlParser";
import { CatalogProcedureParentAndNameContext } from "./GqlParser";
import { CatalogObjectParentRefContext } from "./GqlParser";
import { RefParameterContext } from "./GqlParser";
import { ExternalObjectRefContext } from "./GqlParser";
import { SearchConditionContext } from "./GqlParser";
import { PredicateContext } from "./GqlParser";
import { ComparisonPredicateContext } from "./GqlParser";
import { ComparisonPredicatePart2Context } from "./GqlParser";
import { ComparisonOperatorContext } from "./GqlParser";
import { EqualsContext } from "./GqlParser";
import { NotEqualsContext } from "./GqlParser";
import { LessThenContext } from "./GqlParser";
import { GreaterThanContext } from "./GqlParser";
import { LessThanOrEqualsContext } from "./GqlParser";
import { GraterThanOrEqualsContext } from "./GqlParser";
import { ComparisonPredicandContext } from "./GqlParser";
import { ExistsPredicateContext } from "./GqlParser";
import { NullPredicateContext } from "./GqlParser";
import { NullPredicatePart2Context } from "./GqlParser";
import { ValueTypePredicateContext } from "./GqlParser";
import { ValueTypePredicatePart2Context } from "./GqlParser";
import { NormalizedPredicateContext } from "./GqlParser";
import { NormalizedPredicatePart2Context } from "./GqlParser";
import { DirectedPredicateContext } from "./GqlParser";
import { DirectedPredicatePart2Context } from "./GqlParser";
import { LabeledPredicateContext } from "./GqlParser";
import { LabeledPredicatePart2Context } from "./GqlParser";
import { IsLabeledOrColonContext } from "./GqlParser";
import { SourceOrDestinationPredicateContext } from "./GqlParser";
import { NodeRefContext } from "./GqlParser";
import { SourcePredicatePart2Context } from "./GqlParser";
import { DestinationPredicatePart2Context } from "./GqlParser";
import { EdgeRefContext } from "./GqlParser";
import { AllDifferentPredicateContext } from "./GqlParser";
import { SamePredicateContext } from "./GqlParser";
import { PropertyExistsPredicateContext } from "./GqlParser";
import { ValueSpecContext } from "./GqlParser";
import { UnsignedValueSpecContext } from "./GqlParser";
import { UnsignedIntSpecContext } from "./GqlParser";
import { ParameterValueSpecContext } from "./GqlParser";
import { PredefinedParameterContext } from "./GqlParser";
import { ValueExprContext } from "./GqlParser";
import { CommonValueExprContext } from "./GqlParser";
import { RefValueExprContext } from "./GqlParser";
import { GraphRefValueExprContext } from "./GqlParser";
import { BindingTableRefValueExprContext } from "./GqlParser";
import { NodeRefValueExprContext } from "./GqlParser";
import { EdgeRefValueExprContext } from "./GqlParser";
import { RecordValueExprContext } from "./GqlParser";
import { AggregatingValueExprContext } from "./GqlParser";
import { BooleanValueExprContext } from "./GqlParser";
import { BooleanTermContext } from "./GqlParser";
import { BooleanFactorContext } from "./GqlParser";
import { BooleanTestContext } from "./GqlParser";
import { TruthValueContext } from "./GqlParser";
import { BooleanPrimaryContext } from "./GqlParser";
import { BooleanPredicandContext } from "./GqlParser";
import { ParanthisedBooleanValueExprContext } from "./GqlParser";
import { NumericValueExprContext } from "./GqlParser";
import { TermContext } from "./GqlParser";
import { FactorContext } from "./GqlParser";
import { NumericPrimaryContext } from "./GqlParser";
import { ValueExprPrimaryContext } from "./GqlParser";
import { ParenthesizedValueExprContext } from "./GqlParser";
import { NonParenthesizedValueExprPrimaryContext } from "./GqlParser";
import { NonParenthesizedValueExprPrimarySpecialCaseContext } from "./GqlParser";
import { CollectionValueConstructorContext } from "./GqlParser";
import { NumericValueFunctionContext } from "./GqlParser";
import { LengthExprContext } from "./GqlParser";
import { CharLengthExprContext } from "./GqlParser";
import { ByteLengthExprContext } from "./GqlParser";
import { PathLengthExprContext } from "./GqlParser";
import { AbsoluteValueExprContext } from "./GqlParser";
import { ModulusExprContext } from "./GqlParser";
import { NumericValueExprDividenContext } from "./GqlParser";
import { NumericValueExprDivisorContext } from "./GqlParser";
import { TrigonometricFunctionContext } from "./GqlParser";
import { TrigonometricFunctionNameContext } from "./GqlParser";
import { LogarithmFunctionContext } from "./GqlParser";
import { GeneralLogarithmFunctionContext } from "./GqlParser";
import { GeneralLogarithmBaseContext } from "./GqlParser";
import { GeneralLogarithmArgumentContext } from "./GqlParser";
import { CommonLogarithmFunctionContext } from "./GqlParser";
import { NaturalLogarithmFunctionContext } from "./GqlParser";
import { ExponentialFunctionContext } from "./GqlParser";
import { PowerFunctionContext } from "./GqlParser";
import { NumericValueExprBaseContext } from "./GqlParser";
import { NumericValueExprExponentContext } from "./GqlParser";
import { SquareRootFuncitonContext } from "./GqlParser";
import { FloorFunctionContext } from "./GqlParser";
import { CeilingFunctionContext } from "./GqlParser";
import { StringValueExprContext } from "./GqlParser";
import { CharStringValueExprContext } from "./GqlParser";
import { CharStringConcatenationContext } from "./GqlParser";
import { CharStringFactorContext } from "./GqlParser";
import { CharStringPrimaryContext } from "./GqlParser";
import { ByteStringValueExprContext } from "./GqlParser";
import { ByteStringFactorContext } from "./GqlParser";
import { ByteStringPrimaryContext } from "./GqlParser";
import { ByteStringConcatenationContext } from "./GqlParser";
import { StringValueFunctionContext } from "./GqlParser";
import { CharStringFunctionContext } from "./GqlParser";
import { FoldFunctionContext } from "./GqlParser";
import { TrimFunctionContext } from "./GqlParser";
import { SingleCharTrimFunctionContext } from "./GqlParser";
import { MultiCharTrimFunctionContext } from "./GqlParser";
import { TrimOperandsContext } from "./GqlParser";
import { TrimSourceContext } from "./GqlParser";
import { TrimSpecContext } from "./GqlParser";
import { TrimCharStringContext } from "./GqlParser";
import { NormalizeFunctionContext } from "./GqlParser";
import { NormalFormContext } from "./GqlParser";
import { ByteStringFunctionContext } from "./GqlParser";
import { ByteStrinTrimFunctionContext } from "./GqlParser";
import { ByteStringTrimOperandsContext } from "./GqlParser";
import { ByteStringTrimSourceContext } from "./GqlParser";
import { TrimByteStringContext } from "./GqlParser";
import { StringLengthContext } from "./GqlParser";
import { DateTimeValueExprContext } from "./GqlParser";
import { DateTimeTermContext } from "./GqlParser";
import { DateTimeFactorContext } from "./GqlParser";
import { DateTimePrimaryContext } from "./GqlParser";
import { DateTimeValueFunctionContext } from "./GqlParser";
import { DateFunctionContext } from "./GqlParser";
import { TimeFunctionContext } from "./GqlParser";
import { LocalTimeFunctionContext } from "./GqlParser";
import { DateTimeFunctionContext } from "./GqlParser";
import { LocalDatetimeFunctionContext } from "./GqlParser";
import { DateFunctionParametersContext } from "./GqlParser";
import { TimeFunctionParametersContext } from "./GqlParser";
import { DateTimeFunctionParametersContext } from "./GqlParser";
import { DurationValueExprContext } from "./GqlParser";
import { DateTimeSubtractionContext } from "./GqlParser";
import { DateTimeSubtractionParametersContext } from "./GqlParser";
import { DurationTermContext } from "./GqlParser";
import { DurationFactorContext } from "./GqlParser";
import { DurationPrimaryContext } from "./GqlParser";
import { DurationValueExpr1Context } from "./GqlParser";
import { DurationTerm1Context } from "./GqlParser";
import { DurationTerm2Context } from "./GqlParser";
import { DateTimeValueExpr1Context } from "./GqlParser";
import { DateTimeValueExpr2Context } from "./GqlParser";
import { DurationValueFunctionContext } from "./GqlParser";
import { DurationFunctionContext } from "./GqlParser";
import { DurationFunctionParametersContext } from "./GqlParser";
import { DurationAbsoluteValueFunctionContext } from "./GqlParser";
import { ListValueExprContext } from "./GqlParser";
import { ListConcatenationContext } from "./GqlParser";
import { ListPrimaryContext } from "./GqlParser";
import { ListValueFunctionContext } from "./GqlParser";
import { TrimListFunctionContext } from "./GqlParser";
import { ElementsFunctionContext } from "./GqlParser";
import { ListValueConstructorContext } from "./GqlParser";
import { ListValueConstructorByEnumerationContext } from "./GqlParser";
import { ListElementListContext } from "./GqlParser";
import { ListElementContext } from "./GqlParser";
import { RecordValueConstructorContext } from "./GqlParser";
import { FieldsSpecContext } from "./GqlParser";
import { FieldListContext } from "./GqlParser";
import { FieldContext } from "./GqlParser";
import { PathValueExprContext } from "./GqlParser";
import { PathValueConcatenationContext } from "./GqlParser";
import { PathValuePrimaryContext } from "./GqlParser";
import { PathValueConstructorContext } from "./GqlParser";
import { PathValueConstructorByEnumerationContext } from "./GqlParser";
import { PathElementListContext } from "./GqlParser";
import { PathElementListStartContext } from "./GqlParser";
import { PathElementListStepContext } from "./GqlParser";
import { PropertyRefContext } from "./GqlParser";
import { PropertySourceContext } from "./GqlParser";
import { ValueQueryExprContext } from "./GqlParser";
import { CaseExprContext } from "./GqlParser";
import { CaseAbbreviationContext } from "./GqlParser";
import { CaseSpecificationContext } from "./GqlParser";
import { SimpleCaseContext } from "./GqlParser";
import { SearchedCaseContext } from "./GqlParser";
import { SimpleWhenClauseContext } from "./GqlParser";
import { SearchedWhenClauseContext } from "./GqlParser";
import { ElseClauseContext } from "./GqlParser";
import { CaseOperandContext } from "./GqlParser";
import { WhenOperandListContext } from "./GqlParser";
import { WhenOperandContext } from "./GqlParser";
import { ResultContext } from "./GqlParser";
import { ResultExprContext } from "./GqlParser";
import { CastSpecContext } from "./GqlParser";
import { CastOperandContext } from "./GqlParser";
import { CastTargetContext } from "./GqlParser";
import { ElementIdFunctionContext } from "./GqlParser";
import { LetValueExprContext } from "./GqlParser";
import { LiteralContext } from "./GqlParser";
import { GeneralLiteralContext } from "./GqlParser";
import { PredefinedTypeLiteralContext } from "./GqlParser";
import { UnsignedLiteralContext } from "./GqlParser";
import { BooleanLiteralContext } from "./GqlParser";
import { CharacterStringLiteralContext } from "./GqlParser";
import { UnbrokenCharacterStringLiteralContext } from "./GqlParser";
import { SingleQuotedCharacterSequenceContext } from "./GqlParser";
import { DoubleQuotedCharacterSequenceContext } from "./GqlParser";
import { AccentQuotedCharacterSequenceContext } from "./GqlParser";
import { NoEscapeContext } from "./GqlParser";
import { UnbrokenSingleQuotedCharacterSequenceContext } from "./GqlParser";
import { UnbrokenDoubleQuotedCharacterSequenceContext } from "./GqlParser";
import { UnbrokenAccentQuotedCharacterSequenceContext } from "./GqlParser";
import { TemporalLiteralContext } from "./GqlParser";
import { DateLiteralContext } from "./GqlParser";
import { TimeLiteralContext } from "./GqlParser";
import { DateTimeLiteralContext } from "./GqlParser";
import { DateStringContext } from "./GqlParser";
import { TimeStringContext } from "./GqlParser";
import { DateTimeStringContext } from "./GqlParser";
import { SqlDateTimeLiteralContext } from "./GqlParser";
import { DurationLiteralContext } from "./GqlParser";
import { DurationStringContext } from "./GqlParser";
import { SqlIntervalLiteralContext } from "./GqlParser";
import { SqlIntervalTypeContext } from "./GqlParser";
import { NullLiteralContext } from "./GqlParser";
import { ListLiteralContext } from "./GqlParser";
import { RecordLiteralContext } from "./GqlParser";
import { ObjectNameContext } from "./GqlParser";
import { ObjectNameOrBindingVarContext } from "./GqlParser";
import { DirectoryNameContext } from "./GqlParser";
import { SchemaNameContext } from "./GqlParser";
import { GraphNameContext } from "./GqlParser";
import { DelimitedGraphNameContext } from "./GqlParser";
import { GraphTypeNameContext } from "./GqlParser";
import { ElementTypeNameContext } from "./GqlParser";
import { BindingTableNameContext } from "./GqlParser";
import { DelimitedBindingTableNameContext } from "./GqlParser";
import { ProcedureNameContext } from "./GqlParser";
import { LabelNameContext } from "./GqlParser";
import { PropertyNameContext } from "./GqlParser";
import { FieldNameContext } from "./GqlParser";
import { ParameterNameContext } from "./GqlParser";
import { VarContext } from "./GqlParser";
import { GraphVarContext } from "./GqlParser";
import { GraphPatternVarContext } from "./GqlParser";
import { PathOrSubpathVarContext } from "./GqlParser";
import { ElementVarContext } from "./GqlParser";
import { PathVarContext } from "./GqlParser";
import { SubpathVarContext } from "./GqlParser";
import { BindingTableVarContext } from "./GqlParser";
import { ValueVarContext } from "./GqlParser";
import { BindingVarContext } from "./GqlParser";
import { TokenContext } from "./GqlParser";
import { NonDelimiterTokenContext } from "./GqlParser";
import { IdentifierContext } from "./GqlParser";
import { SeparatedIdentifierContext } from "./GqlParser";
import { NonDelimitedIdentifierContext } from "./GqlParser";
import { DelimitedIdentifierContext } from "./GqlParser";
import { KeyWordContext } from "./GqlParser";
import { ReservedWordContext } from "./GqlParser";
import { PreReservedWordContext } from "./GqlParser";
import { NonReservedWordContext } from "./GqlParser";
import { DelimiterTokenContext } from "./GqlParser";
import { EdgeSynonymContext } from "./GqlParser";
import { EdgesSynonymContext } from "./GqlParser";
import { NodeSynonymContext } from "./GqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GqlParser`.
 */
export default class GqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GqlParser.gqlProgram`.
	 * @param ctx the parse tree
	 */
	enterGqlProgram?: (ctx: GqlProgramContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.gqlProgram`.
	 * @param ctx the parse tree
	 */
	exitGqlProgram?: (ctx: GqlProgramContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.activity`.
	 * @param ctx the parse tree
	 */
	enterActivity?: (ctx: ActivityContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.activity`.
	 * @param ctx the parse tree
	 */
	exitActivity?: (ctx: ActivityContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.programActivity`.
	 * @param ctx the parse tree
	 */
	enterProgramActivity?: (ctx: ProgramActivityContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.programActivity`.
	 * @param ctx the parse tree
	 */
	exitProgramActivity?: (ctx: ProgramActivityContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionActivity`.
	 * @param ctx the parse tree
	 */
	enterSessionActivity?: (ctx: SessionActivityContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionActivity`.
	 * @param ctx the parse tree
	 */
	exitSessionActivity?: (ctx: SessionActivityContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetCommand`.
	 * @param ctx the parse tree
	 */
	enterSessionSetCommand?: (ctx: SessionSetCommandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetCommand`.
	 * @param ctx the parse tree
	 */
	exitSessionSetCommand?: (ctx: SessionSetCommandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetSchemaClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetSchemaClause?: (ctx: SessionSetSchemaClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetSchemaClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetSchemaClause?: (ctx: SessionSetSchemaClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetGraphClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetGraphClause?: (ctx: SessionSetGraphClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetGraphClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetGraphClause?: (ctx: SessionSetGraphClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetTimeZoneClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetTimeZoneClause?: (ctx: SessionSetTimeZoneClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetTimeZoneClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetTimeZoneClause?: (ctx: SessionSetTimeZoneClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setTimeZoneValue`.
	 * @param ctx the parse tree
	 */
	enterSetTimeZoneValue?: (ctx: SetTimeZoneValueContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setTimeZoneValue`.
	 * @param ctx the parse tree
	 */
	exitSetTimeZoneValue?: (ctx: SetTimeZoneValueContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetParameterClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetParameterClause?: (ctx: SessionSetParameterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetParameterClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetParameterClause?: (ctx: SessionSetParameterClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetGraphParameterClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetGraphParameterClause?: (ctx: SessionSetGraphParameterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetGraphParameterClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetGraphParameterClause?: (ctx: SessionSetGraphParameterClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetBindingTableParameterCalues`.
	 * @param ctx the parse tree
	 */
	enterSessionSetBindingTableParameterCalues?: (ctx: SessionSetBindingTableParameterCaluesContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetBindingTableParameterCalues`.
	 * @param ctx the parse tree
	 */
	exitSessionSetBindingTableParameterCalues?: (ctx: SessionSetBindingTableParameterCaluesContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetValuesParameterClause`.
	 * @param ctx the parse tree
	 */
	enterSessionSetValuesParameterClause?: (ctx: SessionSetValuesParameterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetValuesParameterClause`.
	 * @param ctx the parse tree
	 */
	exitSessionSetValuesParameterClause?: (ctx: SessionSetValuesParameterClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionSetParameterName`.
	 * @param ctx the parse tree
	 */
	enterSessionSetParameterName?: (ctx: SessionSetParameterNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionSetParameterName`.
	 * @param ctx the parse tree
	 */
	exitSessionSetParameterName?: (ctx: SessionSetParameterNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionResetCommand`.
	 * @param ctx the parse tree
	 */
	enterSessionResetCommand?: (ctx: SessionResetCommandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionResetCommand`.
	 * @param ctx the parse tree
	 */
	exitSessionResetCommand?: (ctx: SessionResetCommandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionResetArguments`.
	 * @param ctx the parse tree
	 */
	enterSessionResetArguments?: (ctx: SessionResetArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionResetArguments`.
	 * @param ctx the parse tree
	 */
	exitSessionResetArguments?: (ctx: SessionResetArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sessionCloseCommand`.
	 * @param ctx the parse tree
	 */
	enterSessionCloseCommand?: (ctx: SessionCloseCommandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sessionCloseCommand`.
	 * @param ctx the parse tree
	 */
	exitSessionCloseCommand?: (ctx: SessionCloseCommandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionActivity`.
	 * @param ctx the parse tree
	 */
	enterTransactionActivity?: (ctx: TransactionActivityContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionActivity`.
	 * @param ctx the parse tree
	 */
	exitTransactionActivity?: (ctx: TransactionActivityContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionStartCommand`.
	 * @param ctx the parse tree
	 */
	enterTransactionStartCommand?: (ctx: TransactionStartCommandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionStartCommand`.
	 * @param ctx the parse tree
	 */
	exitTransactionStartCommand?: (ctx: TransactionStartCommandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionEndCommand`.
	 * @param ctx the parse tree
	 */
	enterTransactionEndCommand?: (ctx: TransactionEndCommandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionEndCommand`.
	 * @param ctx the parse tree
	 */
	exitTransactionEndCommand?: (ctx: TransactionEndCommandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionCharacteristics`.
	 * @param ctx the parse tree
	 */
	enterTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionCharacteristics`.
	 * @param ctx the parse tree
	 */
	exitTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.implDefinedAccessMode`.
	 * @param ctx the parse tree
	 */
	enterImplDefinedAccessMode?: (ctx: ImplDefinedAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.implDefinedAccessMode`.
	 * @param ctx the parse tree
	 */
	exitImplDefinedAccessMode?: (ctx: ImplDefinedAccessModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedProcedureSpec`.
	 * @param ctx the parse tree
	 */
	enterNestedProcedureSpec?: (ctx: NestedProcedureSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedProcedureSpec`.
	 * @param ctx the parse tree
	 */
	exitNestedProcedureSpec?: (ctx: NestedProcedureSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureSpec`.
	 * @param ctx the parse tree
	 */
	enterProcedureSpec?: (ctx: ProcedureSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureSpec`.
	 * @param ctx the parse tree
	 */
	exitProcedureSpec?: (ctx: ProcedureSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedDataModProcedureSpec`.
	 * @param ctx the parse tree
	 */
	enterNestedDataModProcedureSpec?: (ctx: NestedDataModProcedureSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedDataModProcedureSpec`.
	 * @param ctx the parse tree
	 */
	exitNestedDataModProcedureSpec?: (ctx: NestedDataModProcedureSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedQuerySpec`.
	 * @param ctx the parse tree
	 */
	enterNestedQuerySpec?: (ctx: NestedQuerySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedQuerySpec`.
	 * @param ctx the parse tree
	 */
	exitNestedQuerySpec?: (ctx: NestedQuerySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureBody`.
	 * @param ctx the parse tree
	 */
	enterProcedureBody?: (ctx: ProcedureBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureBody`.
	 * @param ctx the parse tree
	 */
	exitProcedureBody?: (ctx: ProcedureBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingVarDefBlock`.
	 * @param ctx the parse tree
	 */
	enterBindingVarDefBlock?: (ctx: BindingVarDefBlockContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingVarDefBlock`.
	 * @param ctx the parse tree
	 */
	exitBindingVarDefBlock?: (ctx: BindingVarDefBlockContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingVarDef`.
	 * @param ctx the parse tree
	 */
	enterBindingVarDef?: (ctx: BindingVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingVarDef`.
	 * @param ctx the parse tree
	 */
	exitBindingVarDef?: (ctx: BindingVarDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.statmentBlock`.
	 * @param ctx the parse tree
	 */
	enterStatmentBlock?: (ctx: StatmentBlockContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.statmentBlock`.
	 * @param ctx the parse tree
	 */
	exitStatmentBlock?: (ctx: StatmentBlockContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nextStatment`.
	 * @param ctx the parse tree
	 */
	enterNextStatment?: (ctx: NextStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nextStatment`.
	 * @param ctx the parse tree
	 */
	exitNextStatment?: (ctx: NextStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphVarDef`.
	 * @param ctx the parse tree
	 */
	enterGraphVarDef?: (ctx: GraphVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphVarDef`.
	 * @param ctx the parse tree
	 */
	exitGraphVarDef?: (ctx: GraphVarDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.optTypedGraphInit`.
	 * @param ctx the parse tree
	 */
	enterOptTypedGraphInit?: (ctx: OptTypedGraphInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.optTypedGraphInit`.
	 * @param ctx the parse tree
	 */
	exitOptTypedGraphInit?: (ctx: OptTypedGraphInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphInit`.
	 * @param ctx the parse tree
	 */
	enterGraphInit?: (ctx: GraphInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphInit`.
	 * @param ctx the parse tree
	 */
	exitGraphInit?: (ctx: GraphInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableVarDef`.
	 * @param ctx the parse tree
	 */
	enterBindingTableVarDef?: (ctx: BindingTableVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableVarDef`.
	 * @param ctx the parse tree
	 */
	exitBindingTableVarDef?: (ctx: BindingTableVarDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.optTypedBindingTableInit`.
	 * @param ctx the parse tree
	 */
	enterOptTypedBindingTableInit?: (ctx: OptTypedBindingTableInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.optTypedBindingTableInit`.
	 * @param ctx the parse tree
	 */
	exitOptTypedBindingTableInit?: (ctx: OptTypedBindingTableInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableInit`.
	 * @param ctx the parse tree
	 */
	enterBindingTableInit?: (ctx: BindingTableInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableInit`.
	 * @param ctx the parse tree
	 */
	exitBindingTableInit?: (ctx: BindingTableInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueVarDef`.
	 * @param ctx the parse tree
	 */
	enterValueVarDef?: (ctx: ValueVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueVarDef`.
	 * @param ctx the parse tree
	 */
	exitValueVarDef?: (ctx: ValueVarDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.optTypedValueInit`.
	 * @param ctx the parse tree
	 */
	enterOptTypedValueInit?: (ctx: OptTypedValueInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.optTypedValueInit`.
	 * @param ctx the parse tree
	 */
	exitOptTypedValueInit?: (ctx: OptTypedValueInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueInit`.
	 * @param ctx the parse tree
	 */
	enterValueInit?: (ctx: ValueInitContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueInit`.
	 * @param ctx the parse tree
	 */
	exitValueInit?: (ctx: ValueInitContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphExpr`.
	 * @param ctx the parse tree
	 */
	enterGraphExpr?: (ctx: GraphExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphExpr`.
	 * @param ctx the parse tree
	 */
	exitGraphExpr?: (ctx: GraphExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.currentGraph`.
	 * @param ctx the parse tree
	 */
	enterCurrentGraph?: (ctx: CurrentGraphContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.currentGraph`.
	 * @param ctx the parse tree
	 */
	exitCurrentGraph?: (ctx: CurrentGraphContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedGraphQuerySpec`.
	 * @param ctx the parse tree
	 */
	enterNestedGraphQuerySpec?: (ctx: NestedGraphQuerySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedGraphQuerySpec`.
	 * @param ctx the parse tree
	 */
	exitNestedGraphQuerySpec?: (ctx: NestedGraphQuerySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableExpr`.
	 * @param ctx the parse tree
	 */
	enterBindingTableExpr?: (ctx: BindingTableExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableExpr`.
	 * @param ctx the parse tree
	 */
	exitBindingTableExpr?: (ctx: BindingTableExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedBindingTableQuerySpec`.
	 * @param ctx the parse tree
	 */
	enterNestedBindingTableQuerySpec?: (ctx: NestedBindingTableQuerySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedBindingTableQuerySpec`.
	 * @param ctx the parse tree
	 */
	exitNestedBindingTableQuerySpec?: (ctx: NestedBindingTableQuerySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.objectExprPrimary`.
	 * @param ctx the parse tree
	 */
	enterObjectExprPrimary?: (ctx: ObjectExprPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.objectExprPrimary`.
	 * @param ctx the parse tree
	 */
	exitObjectExprPrimary?: (ctx: ObjectExprPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.linearCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	enterLinearCatalogModStatment?: (ctx: LinearCatalogModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.linearCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	exitLinearCatalogModStatment?: (ctx: LinearCatalogModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleCatalogModStatment?: (ctx: SimpleCatalogModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleCatalogModStatment?: (ctx: SimpleCatalogModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.primitiveCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveCatalogModStatment?: (ctx: PrimitiveCatalogModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.primitiveCatalogModStatment`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveCatalogModStatment?: (ctx: PrimitiveCatalogModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.createSchemeStatment`.
	 * @param ctx the parse tree
	 */
	enterCreateSchemeStatment?: (ctx: CreateSchemeStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.createSchemeStatment`.
	 * @param ctx the parse tree
	 */
	exitCreateSchemeStatment?: (ctx: CreateSchemeStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dropSchemeStatment`.
	 * @param ctx the parse tree
	 */
	enterDropSchemeStatment?: (ctx: DropSchemeStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dropSchemeStatment`.
	 * @param ctx the parse tree
	 */
	exitDropSchemeStatment?: (ctx: DropSchemeStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.createGraphStatment`.
	 * @param ctx the parse tree
	 */
	enterCreateGraphStatment?: (ctx: CreateGraphStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.createGraphStatment`.
	 * @param ctx the parse tree
	 */
	exitCreateGraphStatment?: (ctx: CreateGraphStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.createOnlyGraphStatment`.
	 * @param ctx the parse tree
	 */
	enterCreateOnlyGraphStatment?: (ctx: CreateOnlyGraphStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.createOnlyGraphStatment`.
	 * @param ctx the parse tree
	 */
	exitCreateOnlyGraphStatment?: (ctx: CreateOnlyGraphStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.createOrReplaceGraphStatment`.
	 * @param ctx the parse tree
	 */
	enterCreateOrReplaceGraphStatment?: (ctx: CreateOrReplaceGraphStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.createOrReplaceGraphStatment`.
	 * @param ctx the parse tree
	 */
	exitCreateOrReplaceGraphStatment?: (ctx: CreateOrReplaceGraphStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.openGraphType`.
	 * @param ctx the parse tree
	 */
	enterOpenGraphType?: (ctx: OpenGraphTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.openGraphType`.
	 * @param ctx the parse tree
	 */
	exitOpenGraphType?: (ctx: OpenGraphTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.ofGraphType`.
	 * @param ctx the parse tree
	 */
	enterOfGraphType?: (ctx: OfGraphTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.ofGraphType`.
	 * @param ctx the parse tree
	 */
	exitOfGraphType?: (ctx: OfGraphTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeLikeGraph`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeLikeGraph?: (ctx: GraphTypeLikeGraphContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeLikeGraph`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeLikeGraph?: (ctx: GraphTypeLikeGraphContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphSource`.
	 * @param ctx the parse tree
	 */
	enterGraphSource?: (ctx: GraphSourceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphSource`.
	 * @param ctx the parse tree
	 */
	exitGraphSource?: (ctx: GraphSourceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dropGraphStatment`.
	 * @param ctx the parse tree
	 */
	enterDropGraphStatment?: (ctx: DropGraphStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dropGraphStatment`.
	 * @param ctx the parse tree
	 */
	exitDropGraphStatment?: (ctx: DropGraphStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.createGraphTypeStatment`.
	 * @param ctx the parse tree
	 */
	enterCreateGraphTypeStatment?: (ctx: CreateGraphTypeStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.createGraphTypeStatment`.
	 * @param ctx the parse tree
	 */
	exitCreateGraphTypeStatment?: (ctx: CreateGraphTypeStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeSource`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeSource?: (ctx: GraphTypeSourceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeSource`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeSource?: (ctx: GraphTypeSourceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.copyOfGraphType`.
	 * @param ctx the parse tree
	 */
	enterCopyOfGraphType?: (ctx: CopyOfGraphTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.copyOfGraphType`.
	 * @param ctx the parse tree
	 */
	exitCopyOfGraphType?: (ctx: CopyOfGraphTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dropGraphTypeStatment`.
	 * @param ctx the parse tree
	 */
	enterDropGraphTypeStatment?: (ctx: DropGraphTypeStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dropGraphTypeStatment`.
	 * @param ctx the parse tree
	 */
	exitDropGraphTypeStatment?: (ctx: DropGraphTypeStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.callCatalogModProcedureStatment`.
	 * @param ctx the parse tree
	 */
	enterCallCatalogModProcedureStatment?: (ctx: CallCatalogModProcedureStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.callCatalogModProcedureStatment`.
	 * @param ctx the parse tree
	 */
	exitCallCatalogModProcedureStatment?: (ctx: CallCatalogModProcedureStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.linearDataModStatment`.
	 * @param ctx the parse tree
	 */
	enterLinearDataModStatment?: (ctx: LinearDataModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.linearDataModStatment`.
	 * @param ctx the parse tree
	 */
	exitLinearDataModStatment?: (ctx: LinearDataModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedLinearDataModStatment`.
	 * @param ctx the parse tree
	 */
	enterFocusedLinearDataModStatment?: (ctx: FocusedLinearDataModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedLinearDataModStatment`.
	 * @param ctx the parse tree
	 */
	exitFocusedLinearDataModStatment?: (ctx: FocusedLinearDataModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedLinearDataModStatmentBody`.
	 * @param ctx the parse tree
	 */
	enterFocusedLinearDataModStatmentBody?: (ctx: FocusedLinearDataModStatmentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedLinearDataModStatmentBody`.
	 * @param ctx the parse tree
	 */
	exitFocusedLinearDataModStatmentBody?: (ctx: FocusedLinearDataModStatmentBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedNestedDataModProcedureSpec`.
	 * @param ctx the parse tree
	 */
	enterFocusedNestedDataModProcedureSpec?: (ctx: FocusedNestedDataModProcedureSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedNestedDataModProcedureSpec`.
	 * @param ctx the parse tree
	 */
	exitFocusedNestedDataModProcedureSpec?: (ctx: FocusedNestedDataModProcedureSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.ambientLinearDataModStatment`.
	 * @param ctx the parse tree
	 */
	enterAmbientLinearDataModStatment?: (ctx: AmbientLinearDataModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.ambientLinearDataModStatment`.
	 * @param ctx the parse tree
	 */
	exitAmbientLinearDataModStatment?: (ctx: AmbientLinearDataModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.ambientLinearDataModStatmentBody`.
	 * @param ctx the parse tree
	 */
	enterAmbientLinearDataModStatmentBody?: (ctx: AmbientLinearDataModStatmentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.ambientLinearDataModStatmentBody`.
	 * @param ctx the parse tree
	 */
	exitAmbientLinearDataModStatmentBody?: (ctx: AmbientLinearDataModStatmentBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleLinearDataAccessingStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleLinearDataAccessingStatment?: (ctx: SimpleLinearDataAccessingStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleLinearDataAccessingStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleLinearDataAccessingStatment?: (ctx: SimpleLinearDataAccessingStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleDataAccessingStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleDataAccessingStatment?: (ctx: SimpleDataAccessingStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleDataAccessingStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleDataAccessingStatment?: (ctx: SimpleDataAccessingStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleDataModStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleDataModStatment?: (ctx: SimpleDataModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleDataModStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleDataModStatment?: (ctx: SimpleDataModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.primitiveDataModStatment`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveDataModStatment?: (ctx: PrimitiveDataModStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.primitiveDataModStatment`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveDataModStatment?: (ctx: PrimitiveDataModStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertStatment`.
	 * @param ctx the parse tree
	 */
	enterInsertStatment?: (ctx: InsertStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertStatment`.
	 * @param ctx the parse tree
	 */
	exitInsertStatment?: (ctx: InsertStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setStatment`.
	 * @param ctx the parse tree
	 */
	enterSetStatment?: (ctx: SetStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setStatment`.
	 * @param ctx the parse tree
	 */
	exitSetStatment?: (ctx: SetStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setItemList`.
	 * @param ctx the parse tree
	 */
	enterSetItemList?: (ctx: SetItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setItemList`.
	 * @param ctx the parse tree
	 */
	exitSetItemList?: (ctx: SetItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setItem`.
	 * @param ctx the parse tree
	 */
	enterSetItem?: (ctx: SetItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setItem`.
	 * @param ctx the parse tree
	 */
	exitSetItem?: (ctx: SetItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setPropertyItem`.
	 * @param ctx the parse tree
	 */
	enterSetPropertyItem?: (ctx: SetPropertyItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setPropertyItem`.
	 * @param ctx the parse tree
	 */
	exitSetPropertyItem?: (ctx: SetPropertyItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setAllPropertiesItem`.
	 * @param ctx the parse tree
	 */
	enterSetAllPropertiesItem?: (ctx: SetAllPropertiesItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setAllPropertiesItem`.
	 * @param ctx the parse tree
	 */
	exitSetAllPropertiesItem?: (ctx: SetAllPropertiesItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setLabelItem`.
	 * @param ctx the parse tree
	 */
	enterSetLabelItem?: (ctx: SetLabelItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setLabelItem`.
	 * @param ctx the parse tree
	 */
	exitSetLabelItem?: (ctx: SetLabelItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelSetSpec`.
	 * @param ctx the parse tree
	 */
	enterLabelSetSpec?: (ctx: LabelSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelSetSpec`.
	 * @param ctx the parse tree
	 */
	exitLabelSetSpec?: (ctx: LabelSetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.removeStatment`.
	 * @param ctx the parse tree
	 */
	enterRemoveStatment?: (ctx: RemoveStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.removeStatment`.
	 * @param ctx the parse tree
	 */
	exitRemoveStatment?: (ctx: RemoveStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.removeItemList`.
	 * @param ctx the parse tree
	 */
	enterRemoveItemList?: (ctx: RemoveItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.removeItemList`.
	 * @param ctx the parse tree
	 */
	exitRemoveItemList?: (ctx: RemoveItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.removeItem`.
	 * @param ctx the parse tree
	 */
	enterRemoveItem?: (ctx: RemoveItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.removeItem`.
	 * @param ctx the parse tree
	 */
	exitRemoveItem?: (ctx: RemoveItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.removePropertyItem`.
	 * @param ctx the parse tree
	 */
	enterRemovePropertyItem?: (ctx: RemovePropertyItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.removePropertyItem`.
	 * @param ctx the parse tree
	 */
	exitRemovePropertyItem?: (ctx: RemovePropertyItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.removeLabelItem`.
	 * @param ctx the parse tree
	 */
	enterRemoveLabelItem?: (ctx: RemoveLabelItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.removeLabelItem`.
	 * @param ctx the parse tree
	 */
	exitRemoveLabelItem?: (ctx: RemoveLabelItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.deleteStatment`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatment?: (ctx: DeleteStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.deleteStatment`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatment?: (ctx: DeleteStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.deleteItemList`.
	 * @param ctx the parse tree
	 */
	enterDeleteItemList?: (ctx: DeleteItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.deleteItemList`.
	 * @param ctx the parse tree
	 */
	exitDeleteItemList?: (ctx: DeleteItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.deleteItem`.
	 * @param ctx the parse tree
	 */
	enterDeleteItem?: (ctx: DeleteItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.deleteItem`.
	 * @param ctx the parse tree
	 */
	exitDeleteItem?: (ctx: DeleteItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.callDataModProcedureStatment`.
	 * @param ctx the parse tree
	 */
	enterCallDataModProcedureStatment?: (ctx: CallDataModProcedureStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.callDataModProcedureStatment`.
	 * @param ctx the parse tree
	 */
	exitCallDataModProcedureStatment?: (ctx: CallDataModProcedureStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.compositeQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterCompositeQueryStatment?: (ctx: CompositeQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.compositeQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitCompositeQueryStatment?: (ctx: CompositeQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.compositeQueryExpr`.
	 * @param ctx the parse tree
	 */
	enterCompositeQueryExpr?: (ctx: CompositeQueryExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.compositeQueryExpr`.
	 * @param ctx the parse tree
	 */
	exitCompositeQueryExpr?: (ctx: CompositeQueryExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.queryConjunction`.
	 * @param ctx the parse tree
	 */
	enterQueryConjunction?: (ctx: QueryConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.queryConjunction`.
	 * @param ctx the parse tree
	 */
	exitQueryConjunction?: (ctx: QueryConjunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setOperator`.
	 * @param ctx the parse tree
	 */
	enterSetOperator?: (ctx: SetOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setOperator`.
	 * @param ctx the parse tree
	 */
	exitSetOperator?: (ctx: SetOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.compositeQueryPrimary`.
	 * @param ctx the parse tree
	 */
	enterCompositeQueryPrimary?: (ctx: CompositeQueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.compositeQueryPrimary`.
	 * @param ctx the parse tree
	 */
	exitCompositeQueryPrimary?: (ctx: CompositeQueryPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.linearQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterLinearQueryStatment?: (ctx: LinearQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.linearQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitLinearQueryStatment?: (ctx: LinearQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterFocusedLinearQueryStatment?: (ctx: FocusedLinearQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitFocusedLinearQueryStatment?: (ctx: FocusedLinearQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedLinearQueryStatmentPart`.
	 * @param ctx the parse tree
	 */
	enterFocusedLinearQueryStatmentPart?: (ctx: FocusedLinearQueryStatmentPartContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedLinearQueryStatmentPart`.
	 * @param ctx the parse tree
	 */
	exitFocusedLinearQueryStatmentPart?: (ctx: FocusedLinearQueryStatmentPartContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedLinearQueryAndPrimitiveResultStatmentPart`.
	 * @param ctx the parse tree
	 */
	enterFocusedLinearQueryAndPrimitiveResultStatmentPart?: (ctx: FocusedLinearQueryAndPrimitiveResultStatmentPartContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedLinearQueryAndPrimitiveResultStatmentPart`.
	 * @param ctx the parse tree
	 */
	exitFocusedLinearQueryAndPrimitiveResultStatmentPart?: (ctx: FocusedLinearQueryAndPrimitiveResultStatmentPartContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedPrimitiveResultStatment`.
	 * @param ctx the parse tree
	 */
	enterFocusedPrimitiveResultStatment?: (ctx: FocusedPrimitiveResultStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedPrimitiveResultStatment`.
	 * @param ctx the parse tree
	 */
	exitFocusedPrimitiveResultStatment?: (ctx: FocusedPrimitiveResultStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.focusedNestedQuerySpec`.
	 * @param ctx the parse tree
	 */
	enterFocusedNestedQuerySpec?: (ctx: FocusedNestedQuerySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.focusedNestedQuerySpec`.
	 * @param ctx the parse tree
	 */
	exitFocusedNestedQuerySpec?: (ctx: FocusedNestedQuerySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.ambientLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterAmbientLinearQueryStatment?: (ctx: AmbientLinearQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.ambientLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitAmbientLinearQueryStatment?: (ctx: AmbientLinearQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleLinearQueryStatment?: (ctx: SimpleLinearQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleLinearQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleLinearQueryStatment?: (ctx: SimpleLinearQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleQueryStatment?: (ctx: SimpleQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleQueryStatment?: (ctx: SimpleQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.primitiveQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveQueryStatment?: (ctx: PrimitiveQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.primitiveQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveQueryStatment?: (ctx: PrimitiveQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.matchStatment`.
	 * @param ctx the parse tree
	 */
	enterMatchStatment?: (ctx: MatchStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.matchStatment`.
	 * @param ctx the parse tree
	 */
	exitMatchStatment?: (ctx: MatchStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleMatchStatment`.
	 * @param ctx the parse tree
	 */
	enterSimpleMatchStatment?: (ctx: SimpleMatchStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleMatchStatment`.
	 * @param ctx the parse tree
	 */
	exitSimpleMatchStatment?: (ctx: SimpleMatchStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.optionalMatchStatment`.
	 * @param ctx the parse tree
	 */
	enterOptionalMatchStatment?: (ctx: OptionalMatchStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.optionalMatchStatment`.
	 * @param ctx the parse tree
	 */
	exitOptionalMatchStatment?: (ctx: OptionalMatchStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.optionalOperand`.
	 * @param ctx the parse tree
	 */
	enterOptionalOperand?: (ctx: OptionalOperandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.optionalOperand`.
	 * @param ctx the parse tree
	 */
	exitOptionalOperand?: (ctx: OptionalOperandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.matchStatmentBlock`.
	 * @param ctx the parse tree
	 */
	enterMatchStatmentBlock?: (ctx: MatchStatmentBlockContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.matchStatmentBlock`.
	 * @param ctx the parse tree
	 */
	exitMatchStatmentBlock?: (ctx: MatchStatmentBlockContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.callQueryStatment`.
	 * @param ctx the parse tree
	 */
	enterCallQueryStatment?: (ctx: CallQueryStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.callQueryStatment`.
	 * @param ctx the parse tree
	 */
	exitCallQueryStatment?: (ctx: CallQueryStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.filterStatment`.
	 * @param ctx the parse tree
	 */
	enterFilterStatment?: (ctx: FilterStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.filterStatment`.
	 * @param ctx the parse tree
	 */
	exitFilterStatment?: (ctx: FilterStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.letStatment`.
	 * @param ctx the parse tree
	 */
	enterLetStatment?: (ctx: LetStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.letStatment`.
	 * @param ctx the parse tree
	 */
	exitLetStatment?: (ctx: LetStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.letVarDefList`.
	 * @param ctx the parse tree
	 */
	enterLetVarDefList?: (ctx: LetVarDefListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.letVarDefList`.
	 * @param ctx the parse tree
	 */
	exitLetVarDefList?: (ctx: LetVarDefListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.letVarDef`.
	 * @param ctx the parse tree
	 */
	enterLetVarDef?: (ctx: LetVarDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.letVarDef`.
	 * @param ctx the parse tree
	 */
	exitLetVarDef?: (ctx: LetVarDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.forStatment`.
	 * @param ctx the parse tree
	 */
	enterForStatment?: (ctx: ForStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.forStatment`.
	 * @param ctx the parse tree
	 */
	exitForStatment?: (ctx: ForStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.forItem`.
	 * @param ctx the parse tree
	 */
	enterForItem?: (ctx: ForItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.forItem`.
	 * @param ctx the parse tree
	 */
	exitForItem?: (ctx: ForItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.forItemAlias`.
	 * @param ctx the parse tree
	 */
	enterForItemAlias?: (ctx: ForItemAliasContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.forItemAlias`.
	 * @param ctx the parse tree
	 */
	exitForItemAlias?: (ctx: ForItemAliasContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.forOrdinalityOrOffset`.
	 * @param ctx the parse tree
	 */
	enterForOrdinalityOrOffset?: (ctx: ForOrdinalityOrOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.forOrdinalityOrOffset`.
	 * @param ctx the parse tree
	 */
	exitForOrdinalityOrOffset?: (ctx: ForOrdinalityOrOffsetContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.orderByAndPageStatment`.
	 * @param ctx the parse tree
	 */
	enterOrderByAndPageStatment?: (ctx: OrderByAndPageStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.orderByAndPageStatment`.
	 * @param ctx the parse tree
	 */
	exitOrderByAndPageStatment?: (ctx: OrderByAndPageStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.primitiveResultStatment`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveResultStatment?: (ctx: PrimitiveResultStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.primitiveResultStatment`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveResultStatment?: (ctx: PrimitiveResultStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.returnStatment`.
	 * @param ctx the parse tree
	 */
	enterReturnStatment?: (ctx: ReturnStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.returnStatment`.
	 * @param ctx the parse tree
	 */
	exitReturnStatment?: (ctx: ReturnStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.returnStatmentBody`.
	 * @param ctx the parse tree
	 */
	enterReturnStatmentBody?: (ctx: ReturnStatmentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.returnStatmentBody`.
	 * @param ctx the parse tree
	 */
	exitReturnStatmentBody?: (ctx: ReturnStatmentBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.returnItemList`.
	 * @param ctx the parse tree
	 */
	enterReturnItemList?: (ctx: ReturnItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.returnItemList`.
	 * @param ctx the parse tree
	 */
	exitReturnItemList?: (ctx: ReturnItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.returnItem`.
	 * @param ctx the parse tree
	 */
	enterReturnItem?: (ctx: ReturnItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.returnItem`.
	 * @param ctx the parse tree
	 */
	exitReturnItem?: (ctx: ReturnItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.returnItemAlias`.
	 * @param ctx the parse tree
	 */
	enterReturnItemAlias?: (ctx: ReturnItemAliasContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.returnItemAlias`.
	 * @param ctx the parse tree
	 */
	exitReturnItemAlias?: (ctx: ReturnItemAliasContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectStatment`.
	 * @param ctx the parse tree
	 */
	enterSelectStatment?: (ctx: SelectStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectStatment`.
	 * @param ctx the parse tree
	 */
	exitSelectStatment?: (ctx: SelectStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectItemList`.
	 * @param ctx the parse tree
	 */
	enterSelectItemList?: (ctx: SelectItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectItemList`.
	 * @param ctx the parse tree
	 */
	exitSelectItemList?: (ctx: SelectItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectItemAlias`.
	 * @param ctx the parse tree
	 */
	enterSelectItemAlias?: (ctx: SelectItemAliasContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectItemAlias`.
	 * @param ctx the parse tree
	 */
	exitSelectItemAlias?: (ctx: SelectItemAliasContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectStatmentBody`.
	 * @param ctx the parse tree
	 */
	enterSelectStatmentBody?: (ctx: SelectStatmentBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectStatmentBody`.
	 * @param ctx the parse tree
	 */
	exitSelectStatmentBody?: (ctx: SelectStatmentBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectGraphMatchList`.
	 * @param ctx the parse tree
	 */
	enterSelectGraphMatchList?: (ctx: SelectGraphMatchListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectGraphMatchList`.
	 * @param ctx the parse tree
	 */
	exitSelectGraphMatchList?: (ctx: SelectGraphMatchListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectGraphMatch`.
	 * @param ctx the parse tree
	 */
	enterSelectGraphMatch?: (ctx: SelectGraphMatchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectGraphMatch`.
	 * @param ctx the parse tree
	 */
	exitSelectGraphMatch?: (ctx: SelectGraphMatchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.selectQuerySpec`.
	 * @param ctx the parse tree
	 */
	enterSelectQuerySpec?: (ctx: SelectQuerySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.selectQuerySpec`.
	 * @param ctx the parse tree
	 */
	exitSelectQuerySpec?: (ctx: SelectQuerySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.callProcedureStatment`.
	 * @param ctx the parse tree
	 */
	enterCallProcedureStatment?: (ctx: CallProcedureStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.callProcedureStatment`.
	 * @param ctx the parse tree
	 */
	exitCallProcedureStatment?: (ctx: CallProcedureStatmentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureCall`.
	 * @param ctx the parse tree
	 */
	enterProcedureCall?: (ctx: ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureCall`.
	 * @param ctx the parse tree
	 */
	exitProcedureCall?: (ctx: ProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.inlineProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterInlineProcedureCall?: (ctx: InlineProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.inlineProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitInlineProcedureCall?: (ctx: InlineProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.varScopeClause`.
	 * @param ctx the parse tree
	 */
	enterVarScopeClause?: (ctx: VarScopeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.varScopeClause`.
	 * @param ctx the parse tree
	 */
	exitVarScopeClause?: (ctx: VarScopeClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingVarRefList`.
	 * @param ctx the parse tree
	 */
	enterBindingVarRefList?: (ctx: BindingVarRefListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingVarRefList`.
	 * @param ctx the parse tree
	 */
	exitBindingVarRefList?: (ctx: BindingVarRefListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.namedProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterNamedProcedureCall?: (ctx: NamedProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.namedProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitNamedProcedureCall?: (ctx: NamedProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureArgList`.
	 * @param ctx the parse tree
	 */
	enterProcedureArgList?: (ctx: ProcedureArgListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureArgList`.
	 * @param ctx the parse tree
	 */
	exitProcedureArgList?: (ctx: ProcedureArgListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureArg`.
	 * @param ctx the parse tree
	 */
	enterProcedureArg?: (ctx: ProcedureArgContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureArg`.
	 * @param ctx the parse tree
	 */
	exitProcedureArg?: (ctx: ProcedureArgContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.useGraphClause`.
	 * @param ctx the parse tree
	 */
	enterUseGraphClause?: (ctx: UseGraphClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.useGraphClause`.
	 * @param ctx the parse tree
	 */
	exitUseGraphClause?: (ctx: UseGraphClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.atSchemaClause`.
	 * @param ctx the parse tree
	 */
	enterAtSchemaClause?: (ctx: AtSchemaClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.atSchemaClause`.
	 * @param ctx the parse tree
	 */
	exitAtSchemaClause?: (ctx: AtSchemaClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingVarRef`.
	 * @param ctx the parse tree
	 */
	enterBindingVarRef?: (ctx: BindingVarRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingVarRef`.
	 * @param ctx the parse tree
	 */
	exitBindingVarRef?: (ctx: BindingVarRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementVarRef`.
	 * @param ctx the parse tree
	 */
	enterElementVarRef?: (ctx: ElementVarRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementVarRef`.
	 * @param ctx the parse tree
	 */
	exitElementVarRef?: (ctx: ElementVarRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathVarRef`.
	 * @param ctx the parse tree
	 */
	enterPathVarRef?: (ctx: PathVarRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathVarRef`.
	 * @param ctx the parse tree
	 */
	exitPathVarRef?: (ctx: PathVarRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternBindingTable`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternBindingTable?: (ctx: GraphPatternBindingTableContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternBindingTable`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternBindingTable?: (ctx: GraphPatternBindingTableContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternYieldClause`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternYieldClause?: (ctx: GraphPatternYieldClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternYieldClause`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternYieldClause?: (ctx: GraphPatternYieldClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternYieldItemList`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternYieldItemList?: (ctx: GraphPatternYieldItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternYieldItemList`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternYieldItemList?: (ctx: GraphPatternYieldItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternYieldItem`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternYieldItem?: (ctx: GraphPatternYieldItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternYieldItem`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternYieldItem?: (ctx: GraphPatternYieldItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPattern`.
	 * @param ctx the parse tree
	 */
	enterGraphPattern?: (ctx: GraphPatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPattern`.
	 * @param ctx the parse tree
	 */
	exitGraphPattern?: (ctx: GraphPatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.matchMode`.
	 * @param ctx the parse tree
	 */
	enterMatchMode?: (ctx: MatchModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.matchMode`.
	 * @param ctx the parse tree
	 */
	exitMatchMode?: (ctx: MatchModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.repeatableElementsMatchMode`.
	 * @param ctx the parse tree
	 */
	enterRepeatableElementsMatchMode?: (ctx: RepeatableElementsMatchModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.repeatableElementsMatchMode`.
	 * @param ctx the parse tree
	 */
	exitRepeatableElementsMatchMode?: (ctx: RepeatableElementsMatchModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.differentEdgesMatchMode`.
	 * @param ctx the parse tree
	 */
	enterDifferentEdgesMatchMode?: (ctx: DifferentEdgesMatchModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.differentEdgesMatchMode`.
	 * @param ctx the parse tree
	 */
	exitDifferentEdgesMatchMode?: (ctx: DifferentEdgesMatchModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementBindingsOrElements`.
	 * @param ctx the parse tree
	 */
	enterElementBindingsOrElements?: (ctx: ElementBindingsOrElementsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementBindingsOrElements`.
	 * @param ctx the parse tree
	 */
	exitElementBindingsOrElements?: (ctx: ElementBindingsOrElementsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeBindingsOrEdges`.
	 * @param ctx the parse tree
	 */
	enterEdgeBindingsOrEdges?: (ctx: EdgeBindingsOrEdgesContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeBindingsOrEdges`.
	 * @param ctx the parse tree
	 */
	exitEdgeBindingsOrEdges?: (ctx: EdgeBindingsOrEdgesContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPatternList`.
	 * @param ctx the parse tree
	 */
	enterPathPatternList?: (ctx: PathPatternListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPatternList`.
	 * @param ctx the parse tree
	 */
	exitPathPatternList?: (ctx: PathPatternListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPattern`.
	 * @param ctx the parse tree
	 */
	enterPathPattern?: (ctx: PathPatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPattern`.
	 * @param ctx the parse tree
	 */
	exitPathPattern?: (ctx: PathPatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathVarDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPathVarDeclaration?: (ctx: PathVarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathVarDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPathVarDeclaration?: (ctx: PathVarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.keepClause`.
	 * @param ctx the parse tree
	 */
	enterKeepClause?: (ctx: KeepClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.keepClause`.
	 * @param ctx the parse tree
	 */
	exitKeepClause?: (ctx: KeepClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternWhereClause?: (ctx: GraphPatternWhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternWhereClause?: (ctx: GraphPatternWhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPatternPrefix`.
	 * @param ctx the parse tree
	 */
	enterPathPatternPrefix?: (ctx: PathPatternPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPatternPrefix`.
	 * @param ctx the parse tree
	 */
	exitPathPatternPrefix?: (ctx: PathPatternPrefixContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathModePrefix`.
	 * @param ctx the parse tree
	 */
	enterPathModePrefix?: (ctx: PathModePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathModePrefix`.
	 * @param ctx the parse tree
	 */
	exitPathModePrefix?: (ctx: PathModePrefixContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathMode`.
	 * @param ctx the parse tree
	 */
	enterPathMode?: (ctx: PathModeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathMode`.
	 * @param ctx the parse tree
	 */
	exitPathMode?: (ctx: PathModeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathSearchPrefix`.
	 * @param ctx the parse tree
	 */
	enterPathSearchPrefix?: (ctx: PathSearchPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathSearchPrefix`.
	 * @param ctx the parse tree
	 */
	exitPathSearchPrefix?: (ctx: PathSearchPrefixContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.allPathSearch`.
	 * @param ctx the parse tree
	 */
	enterAllPathSearch?: (ctx: AllPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.allPathSearch`.
	 * @param ctx the parse tree
	 */
	exitAllPathSearch?: (ctx: AllPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathOrPaths`.
	 * @param ctx the parse tree
	 */
	enterPathOrPaths?: (ctx: PathOrPathsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathOrPaths`.
	 * @param ctx the parse tree
	 */
	exitPathOrPaths?: (ctx: PathOrPathsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.anyPathSearch`.
	 * @param ctx the parse tree
	 */
	enterAnyPathSearch?: (ctx: AnyPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.anyPathSearch`.
	 * @param ctx the parse tree
	 */
	exitAnyPathSearch?: (ctx: AnyPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numberOfPaths`.
	 * @param ctx the parse tree
	 */
	enterNumberOfPaths?: (ctx: NumberOfPathsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numberOfPaths`.
	 * @param ctx the parse tree
	 */
	exitNumberOfPaths?: (ctx: NumberOfPathsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.shortestPathSearch`.
	 * @param ctx the parse tree
	 */
	enterShortestPathSearch?: (ctx: ShortestPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.shortestPathSearch`.
	 * @param ctx the parse tree
	 */
	exitShortestPathSearch?: (ctx: ShortestPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.allShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	enterAllShortestPathSearch?: (ctx: AllShortestPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.allShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	exitAllShortestPathSearch?: (ctx: AllShortestPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.anyShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	enterAnyShortestPathSearch?: (ctx: AnyShortestPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.anyShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	exitAnyShortestPathSearch?: (ctx: AnyShortestPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.countedShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	enterCountedShortestPathSearch?: (ctx: CountedShortestPathSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.countedShortestPathSearch`.
	 * @param ctx the parse tree
	 */
	exitCountedShortestPathSearch?: (ctx: CountedShortestPathSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.countedShortestGroupSearch`.
	 * @param ctx the parse tree
	 */
	enterCountedShortestGroupSearch?: (ctx: CountedShortestGroupSearchContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.countedShortestGroupSearch`.
	 * @param ctx the parse tree
	 */
	exitCountedShortestGroupSearch?: (ctx: CountedShortestGroupSearchContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.groupOrGroups`.
	 * @param ctx the parse tree
	 */
	enterGroupOrGroups?: (ctx: GroupOrGroupsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.groupOrGroups`.
	 * @param ctx the parse tree
	 */
	exitGroupOrGroups?: (ctx: GroupOrGroupsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numberOfGroups`.
	 * @param ctx the parse tree
	 */
	enterNumberOfGroups?: (ctx: NumberOfGroupsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numberOfGroups`.
	 * @param ctx the parse tree
	 */
	exitNumberOfGroups?: (ctx: NumberOfGroupsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPatternExpr`.
	 * @param ctx the parse tree
	 */
	enterPathPatternExpr?: (ctx: PathPatternExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPatternExpr`.
	 * @param ctx the parse tree
	 */
	exitPathPatternExpr?: (ctx: PathPatternExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathMultisetAlternation`.
	 * @param ctx the parse tree
	 */
	enterPathMultisetAlternation?: (ctx: PathMultisetAlternationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathMultisetAlternation`.
	 * @param ctx the parse tree
	 */
	exitPathMultisetAlternation?: (ctx: PathMultisetAlternationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPatternUnion`.
	 * @param ctx the parse tree
	 */
	enterPathPatternUnion?: (ctx: PathPatternUnionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPatternUnion`.
	 * @param ctx the parse tree
	 */
	exitPathPatternUnion?: (ctx: PathPatternUnionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathTerm`.
	 * @param ctx the parse tree
	 */
	enterPathTerm?: (ctx: PathTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathTerm`.
	 * @param ctx the parse tree
	 */
	exitPathTerm?: (ctx: PathTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathFactor`.
	 * @param ctx the parse tree
	 */
	enterPathFactor?: (ctx: PathFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathFactor`.
	 * @param ctx the parse tree
	 */
	exitPathFactor?: (ctx: PathFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.quantifiedPathPrimary`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedPathPrimary?: (ctx: QuantifiedPathPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.quantifiedPathPrimary`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedPathPrimary?: (ctx: QuantifiedPathPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.questionedPathPrimary`.
	 * @param ctx the parse tree
	 */
	enterQuestionedPathPrimary?: (ctx: QuestionedPathPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.questionedPathPrimary`.
	 * @param ctx the parse tree
	 */
	exitQuestionedPathPrimary?: (ctx: QuestionedPathPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathPrimary`.
	 * @param ctx the parse tree
	 */
	enterPathPrimary?: (ctx: PathPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathPrimary`.
	 * @param ctx the parse tree
	 */
	exitPathPrimary?: (ctx: PathPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementPattern`.
	 * @param ctx the parse tree
	 */
	enterElementPattern?: (ctx: ElementPatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementPattern`.
	 * @param ctx the parse tree
	 */
	exitElementPattern?: (ctx: ElementPatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodePattern`.
	 * @param ctx the parse tree
	 */
	enterNodePattern?: (ctx: NodePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodePattern`.
	 * @param ctx the parse tree
	 */
	exitNodePattern?: (ctx: NodePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementPatternFiller`.
	 * @param ctx the parse tree
	 */
	enterElementPatternFiller?: (ctx: ElementPatternFillerContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementPatternFiller`.
	 * @param ctx the parse tree
	 */
	exitElementPatternFiller?: (ctx: ElementPatternFillerContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementVarDeclaration`.
	 * @param ctx the parse tree
	 */
	enterElementVarDeclaration?: (ctx: ElementVarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementVarDeclaration`.
	 * @param ctx the parse tree
	 */
	exitElementVarDeclaration?: (ctx: ElementVarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.isLabelExpr`.
	 * @param ctx the parse tree
	 */
	enterIsLabelExpr?: (ctx: IsLabelExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.isLabelExpr`.
	 * @param ctx the parse tree
	 */
	exitIsLabelExpr?: (ctx: IsLabelExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.isOrColon`.
	 * @param ctx the parse tree
	 */
	enterIsOrColon?: (ctx: IsOrColonContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.isOrColon`.
	 * @param ctx the parse tree
	 */
	exitIsOrColon?: (ctx: IsOrColonContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementPatternPredicate`.
	 * @param ctx the parse tree
	 */
	enterElementPatternPredicate?: (ctx: ElementPatternPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementPatternPredicate`.
	 * @param ctx the parse tree
	 */
	exitElementPatternPredicate?: (ctx: ElementPatternPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	enterElementPatternWhereClause?: (ctx: ElementPatternWhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	exitElementPatternWhereClause?: (ctx: ElementPatternWhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementPropertySpec`.
	 * @param ctx the parse tree
	 */
	enterElementPropertySpec?: (ctx: ElementPropertySpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementPropertySpec`.
	 * @param ctx the parse tree
	 */
	exitElementPropertySpec?: (ctx: ElementPropertySpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyKeyValuePairList`.
	 * @param ctx the parse tree
	 */
	enterPropertyKeyValuePairList?: (ctx: PropertyKeyValuePairListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyKeyValuePairList`.
	 * @param ctx the parse tree
	 */
	exitPropertyKeyValuePairList?: (ctx: PropertyKeyValuePairListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyKeyValuePair`.
	 * @param ctx the parse tree
	 */
	enterPropertyKeyValuePair?: (ctx: PropertyKeyValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyKeyValuePair`.
	 * @param ctx the parse tree
	 */
	exitPropertyKeyValuePair?: (ctx: PropertyKeyValuePairContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgePattern`.
	 * @param ctx the parse tree
	 */
	enterEdgePattern?: (ctx: EdgePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgePattern`.
	 * @param ctx the parse tree
	 */
	exitEdgePattern?: (ctx: EdgePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgePattern`.
	 * @param ctx the parse tree
	 */
	enterFullEdgePattern?: (ctx: FullEdgePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgePattern`.
	 * @param ctx the parse tree
	 */
	exitFullEdgePattern?: (ctx: FullEdgePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgePointingLeft`.
	 * @param ctx the parse tree
	 */
	enterFullEdgePointingLeft?: (ctx: FullEdgePointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgePointingLeft`.
	 * @param ctx the parse tree
	 */
	exitFullEdgePointingLeft?: (ctx: FullEdgePointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeUndirected`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeUndirected?: (ctx: FullEdgeUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeUndirected`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeUndirected?: (ctx: FullEdgeUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgePointingRight`.
	 * @param ctx the parse tree
	 */
	enterFullEdgePointingRight?: (ctx: FullEdgePointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgePointingRight`.
	 * @param ctx the parse tree
	 */
	exitFullEdgePointingRight?: (ctx: FullEdgePointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeLeftOrUndirected?: (ctx: FullEdgeLeftOrUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeLeftOrUndirected?: (ctx: FullEdgeLeftOrUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeUndirectedOrRight?: (ctx: FullEdgeUndirectedOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeUndirectedOrRight?: (ctx: FullEdgeUndirectedOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeLeftOrRight`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeLeftOrRight?: (ctx: FullEdgeLeftOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeLeftOrRight`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeLeftOrRight?: (ctx: FullEdgeLeftOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeAnyDirection`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeAnyDirection?: (ctx: FullEdgeAnyDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeAnyDirection`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeAnyDirection?: (ctx: FullEdgeAnyDirectionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.abbreviatedEdgePattern`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedEdgePattern?: (ctx: AbbreviatedEdgePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.abbreviatedEdgePattern`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedEdgePattern?: (ctx: AbbreviatedEdgePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parenthesizedPathPatternExpr`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPathPatternExpr?: (ctx: ParenthesizedPathPatternExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parenthesizedPathPatternExpr`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPathPatternExpr?: (ctx: ParenthesizedPathPatternExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.subpathVarDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSubpathVarDeclaration?: (ctx: SubpathVarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.subpathVarDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSubpathVarDeclaration?: (ctx: SubpathVarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parenthesizedPathPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPathPatternWhereClause?: (ctx: ParenthesizedPathPatternWhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parenthesizedPathPatternWhereClause`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPathPatternWhereClause?: (ctx: ParenthesizedPathPatternWhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertGraphPattern`.
	 * @param ctx the parse tree
	 */
	enterInsertGraphPattern?: (ctx: InsertGraphPatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertGraphPattern`.
	 * @param ctx the parse tree
	 */
	exitInsertGraphPattern?: (ctx: InsertGraphPatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertGraphPatternList`.
	 * @param ctx the parse tree
	 */
	enterInsertGraphPatternList?: (ctx: InsertGraphPatternListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertGraphPatternList`.
	 * @param ctx the parse tree
	 */
	exitInsertGraphPatternList?: (ctx: InsertGraphPatternListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertPathPattern`.
	 * @param ctx the parse tree
	 */
	enterInsertPathPattern?: (ctx: InsertPathPatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertPathPattern`.
	 * @param ctx the parse tree
	 */
	exitInsertPathPattern?: (ctx: InsertPathPatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertNodePattern`.
	 * @param ctx the parse tree
	 */
	enterInsertNodePattern?: (ctx: InsertNodePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertNodePattern`.
	 * @param ctx the parse tree
	 */
	exitInsertNodePattern?: (ctx: InsertNodePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertEdgePattern`.
	 * @param ctx the parse tree
	 */
	enterInsertEdgePattern?: (ctx: InsertEdgePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertEdgePattern`.
	 * @param ctx the parse tree
	 */
	exitInsertEdgePattern?: (ctx: InsertEdgePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertEdgePointingLeft`.
	 * @param ctx the parse tree
	 */
	enterInsertEdgePointingLeft?: (ctx: InsertEdgePointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertEdgePointingLeft`.
	 * @param ctx the parse tree
	 */
	exitInsertEdgePointingLeft?: (ctx: InsertEdgePointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertEdgePointingRight`.
	 * @param ctx the parse tree
	 */
	enterInsertEdgePointingRight?: (ctx: InsertEdgePointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertEdgePointingRight`.
	 * @param ctx the parse tree
	 */
	exitInsertEdgePointingRight?: (ctx: InsertEdgePointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertEdgeUndirected`.
	 * @param ctx the parse tree
	 */
	enterInsertEdgeUndirected?: (ctx: InsertEdgeUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertEdgeUndirected`.
	 * @param ctx the parse tree
	 */
	exitInsertEdgeUndirected?: (ctx: InsertEdgeUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.insertElementPatternFiller`.
	 * @param ctx the parse tree
	 */
	enterInsertElementPatternFiller?: (ctx: InsertElementPatternFillerContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.insertElementPatternFiller`.
	 * @param ctx the parse tree
	 */
	exitInsertElementPatternFiller?: (ctx: InsertElementPatternFillerContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelAndPropertySetSpec`.
	 * @param ctx the parse tree
	 */
	enterLabelAndPropertySetSpec?: (ctx: LabelAndPropertySetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelAndPropertySetSpec`.
	 * @param ctx the parse tree
	 */
	exitLabelAndPropertySetSpec?: (ctx: LabelAndPropertySetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelExpr`.
	 * @param ctx the parse tree
	 */
	enterLabelExpr?: (ctx: LabelExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelExpr`.
	 * @param ctx the parse tree
	 */
	exitLabelExpr?: (ctx: LabelExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelTerm`.
	 * @param ctx the parse tree
	 */
	enterLabelTerm?: (ctx: LabelTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelTerm`.
	 * @param ctx the parse tree
	 */
	exitLabelTerm?: (ctx: LabelTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelFactor`.
	 * @param ctx the parse tree
	 */
	enterLabelFactor?: (ctx: LabelFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelFactor`.
	 * @param ctx the parse tree
	 */
	exitLabelFactor?: (ctx: LabelFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelNegation`.
	 * @param ctx the parse tree
	 */
	enterLabelNegation?: (ctx: LabelNegationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelNegation`.
	 * @param ctx the parse tree
	 */
	exitLabelNegation?: (ctx: LabelNegationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelPrimary`.
	 * @param ctx the parse tree
	 */
	enterLabelPrimary?: (ctx: LabelPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelPrimary`.
	 * @param ctx the parse tree
	 */
	exitLabelPrimary?: (ctx: LabelPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.wildcardLabel`.
	 * @param ctx the parse tree
	 */
	enterWildcardLabel?: (ctx: WildcardLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.wildcardLabel`.
	 * @param ctx the parse tree
	 */
	exitWildcardLabel?: (ctx: WildcardLabelContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parenthesizedLabelExpr`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedLabelExpr?: (ctx: ParenthesizedLabelExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parenthesizedLabelExpr`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedLabelExpr?: (ctx: ParenthesizedLabelExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternQuantifier?: (ctx: GraphPatternQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternQuantifier?: (ctx: GraphPatternQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fixedQuantifier`.
	 * @param ctx the parse tree
	 */
	enterFixedQuantifier?: (ctx: FixedQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fixedQuantifier`.
	 * @param ctx the parse tree
	 */
	exitFixedQuantifier?: (ctx: FixedQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalQuantifier`.
	 * @param ctx the parse tree
	 */
	enterGeneralQuantifier?: (ctx: GeneralQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalQuantifier`.
	 * @param ctx the parse tree
	 */
	exitGeneralQuantifier?: (ctx: GeneralQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.lowerBound`.
	 * @param ctx the parse tree
	 */
	enterLowerBound?: (ctx: LowerBoundContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.lowerBound`.
	 * @param ctx the parse tree
	 */
	exitLowerBound?: (ctx: LowerBoundContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.upperBound`.
	 * @param ctx the parse tree
	 */
	enterUpperBound?: (ctx: UpperBoundContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.upperBound`.
	 * @param ctx the parse tree
	 */
	exitUpperBound?: (ctx: UpperBoundContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedPathPatternExpr`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedPathPatternExpr?: (ctx: SimplifiedPathPatternExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedPathPatternExpr`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedPathPatternExpr?: (ctx: SimplifiedPathPatternExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingLeft`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingLeft?: (ctx: SimplifiedDefaultingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingLeft`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingLeft?: (ctx: SimplifiedDefaultingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingUndirected`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingUndirected?: (ctx: SimplifiedDefaultingUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingUndirected`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingUndirected?: (ctx: SimplifiedDefaultingUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingRight?: (ctx: SimplifiedDefaultingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingRight?: (ctx: SimplifiedDefaultingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingLeftOrUndirected?: (ctx: SimplifiedDefaultingLeftOrUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingLeftOrUndirected?: (ctx: SimplifiedDefaultingLeftOrUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingUndirectedOrRight?: (ctx: SimplifiedDefaultingUndirectedOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingUndirectedOrRight?: (ctx: SimplifiedDefaultingUndirectedOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingLeftOrRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingLeftOrRight?: (ctx: SimplifiedDefaultingLeftOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingLeftOrRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingLeftOrRight?: (ctx: SimplifiedDefaultingLeftOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDefaultingAnyDirection`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDefaultingAnyDirection?: (ctx: SimplifiedDefaultingAnyDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDefaultingAnyDirection`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDefaultingAnyDirection?: (ctx: SimplifiedDefaultingAnyDirectionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedContents`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedContents?: (ctx: SimplifiedContentsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedContents`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedContents?: (ctx: SimplifiedContentsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedPathUnion`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedPathUnion?: (ctx: SimplifiedPathUnionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedPathUnion`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedPathUnion?: (ctx: SimplifiedPathUnionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedMultisetAlternation`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedMultisetAlternation?: (ctx: SimplifiedMultisetAlternationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedMultisetAlternation`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedMultisetAlternation?: (ctx: SimplifiedMultisetAlternationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedTerm`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedTerm?: (ctx: SimplifiedTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedTerm`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedTerm?: (ctx: SimplifiedTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedFactorLow`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedFactorLow?: (ctx: SimplifiedFactorLowContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedFactorLow`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedFactorLow?: (ctx: SimplifiedFactorLowContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedFactorHigh`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedFactorHigh?: (ctx: SimplifiedFactorHighContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedFactorHigh`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedFactorHigh?: (ctx: SimplifiedFactorHighContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedQuntified`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedQuntified?: (ctx: SimplifiedQuntifiedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedQuntified`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedQuntified?: (ctx: SimplifiedQuntifiedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedQuestioned`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedQuestioned?: (ctx: SimplifiedQuestionedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedQuestioned`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedQuestioned?: (ctx: SimplifiedQuestionedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedTertiary`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedTertiary?: (ctx: SimplifiedTertiaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedTertiary`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedTertiary?: (ctx: SimplifiedTertiaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedDirectionOverride`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedDirectionOverride?: (ctx: SimplifiedDirectionOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedDirectionOverride`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedDirectionOverride?: (ctx: SimplifiedDirectionOverrideContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideLeft`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideLeft?: (ctx: SimplifiedOverrideLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideLeft`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideLeft?: (ctx: SimplifiedOverrideLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideUndirected`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideUndirected?: (ctx: SimplifiedOverrideUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideUndirected`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideUndirected?: (ctx: SimplifiedOverrideUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideRight?: (ctx: SimplifiedOverrideRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideRight?: (ctx: SimplifiedOverrideRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideLeftOrUndirected?: (ctx: SimplifiedOverrideLeftOrUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideLeftOrUndirected`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideLeftOrUndirected?: (ctx: SimplifiedOverrideLeftOrUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideUndirectedOrRight?: (ctx: SimplifiedOverrideUndirectedOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideUndirectedOrRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideUndirectedOrRight?: (ctx: SimplifiedOverrideUndirectedOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideLeftOrRight`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideLeftOrRight?: (ctx: SimplifiedOverrideLeftOrRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideLeftOrRight`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideLeftOrRight?: (ctx: SimplifiedOverrideLeftOrRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedOverrideAnyDirection`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedOverrideAnyDirection?: (ctx: SimplifiedOverrideAnyDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedOverrideAnyDirection`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedOverrideAnyDirection?: (ctx: SimplifiedOverrideAnyDirectionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedSecondary`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedSecondary?: (ctx: SimplifiedSecondaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedSecondary`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedSecondary?: (ctx: SimplifiedSecondaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedNegation`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedNegation?: (ctx: SimplifiedNegationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedNegation`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedNegation?: (ctx: SimplifiedNegationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simplifiedPrimary`.
	 * @param ctx the parse tree
	 */
	enterSimplifiedPrimary?: (ctx: SimplifiedPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simplifiedPrimary`.
	 * @param ctx the parse tree
	 */
	exitSimplifiedPrimary?: (ctx: SimplifiedPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.yieldClause`.
	 * @param ctx the parse tree
	 */
	enterYieldClause?: (ctx: YieldClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.yieldClause`.
	 * @param ctx the parse tree
	 */
	exitYieldClause?: (ctx: YieldClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.yieldItemList`.
	 * @param ctx the parse tree
	 */
	enterYieldItemList?: (ctx: YieldItemListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.yieldItemList`.
	 * @param ctx the parse tree
	 */
	exitYieldItemList?: (ctx: YieldItemListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.yieldItem`.
	 * @param ctx the parse tree
	 */
	enterYieldItem?: (ctx: YieldItemContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.yieldItem`.
	 * @param ctx the parse tree
	 */
	exitYieldItem?: (ctx: YieldItemContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.yieldItemName`.
	 * @param ctx the parse tree
	 */
	enterYieldItemName?: (ctx: YieldItemNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.yieldItemName`.
	 * @param ctx the parse tree
	 */
	exitYieldItemName?: (ctx: YieldItemNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.yieldItemAlias`.
	 * @param ctx the parse tree
	 */
	enterYieldItemAlias?: (ctx: YieldItemAliasContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.yieldItemAlias`.
	 * @param ctx the parse tree
	 */
	exitYieldItemAlias?: (ctx: YieldItemAliasContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.groupingElementList`.
	 * @param ctx the parse tree
	 */
	enterGroupingElementList?: (ctx: GroupingElementListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.groupingElementList`.
	 * @param ctx the parse tree
	 */
	exitGroupingElementList?: (ctx: GroupingElementListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.emptyGroupingSet`.
	 * @param ctx the parse tree
	 */
	enterEmptyGroupingSet?: (ctx: EmptyGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.emptyGroupingSet`.
	 * @param ctx the parse tree
	 */
	exitEmptyGroupingSet?: (ctx: EmptyGroupingSetContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.aggregateFunction`.
	 * @param ctx the parse tree
	 */
	enterAggregateFunction?: (ctx: AggregateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.aggregateFunction`.
	 * @param ctx the parse tree
	 */
	exitAggregateFunction?: (ctx: AggregateFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalSetFunction`.
	 * @param ctx the parse tree
	 */
	enterGeneralSetFunction?: (ctx: GeneralSetFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalSetFunction`.
	 * @param ctx the parse tree
	 */
	exitGeneralSetFunction?: (ctx: GeneralSetFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalSetFunctionType`.
	 * @param ctx the parse tree
	 */
	enterGeneralSetFunctionType?: (ctx: GeneralSetFunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalSetFunctionType`.
	 * @param ctx the parse tree
	 */
	exitGeneralSetFunctionType?: (ctx: GeneralSetFunctionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.binarySetFunction`.
	 * @param ctx the parse tree
	 */
	enterBinarySetFunction?: (ctx: BinarySetFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.binarySetFunction`.
	 * @param ctx the parse tree
	 */
	exitBinarySetFunction?: (ctx: BinarySetFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dependantValueExpr`.
	 * @param ctx the parse tree
	 */
	enterDependantValueExpr?: (ctx: DependantValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dependantValueExpr`.
	 * @param ctx the parse tree
	 */
	exitDependantValueExpr?: (ctx: DependantValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.independentValueExpr`.
	 * @param ctx the parse tree
	 */
	enterIndependentValueExpr?: (ctx: IndependentValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.independentValueExpr`.
	 * @param ctx the parse tree
	 */
	exitIndependentValueExpr?: (ctx: IndependentValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sortSpecList`.
	 * @param ctx the parse tree
	 */
	enterSortSpecList?: (ctx: SortSpecListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sortSpecList`.
	 * @param ctx the parse tree
	 */
	exitSortSpecList?: (ctx: SortSpecListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sortSpec`.
	 * @param ctx the parse tree
	 */
	enterSortSpec?: (ctx: SortSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sortSpec`.
	 * @param ctx the parse tree
	 */
	exitSortSpec?: (ctx: SortSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sortKey`.
	 * @param ctx the parse tree
	 */
	enterSortKey?: (ctx: SortKeyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sortKey`.
	 * @param ctx the parse tree
	 */
	exitSortKey?: (ctx: SortKeyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.orderingSpec`.
	 * @param ctx the parse tree
	 */
	enterOrderingSpec?: (ctx: OrderingSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.orderingSpec`.
	 * @param ctx the parse tree
	 */
	exitOrderingSpec?: (ctx: OrderingSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nullOrdering`.
	 * @param ctx the parse tree
	 */
	enterNullOrdering?: (ctx: NullOrderingContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nullOrdering`.
	 * @param ctx the parse tree
	 */
	exitNullOrdering?: (ctx: NullOrderingContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	enterOffsetClause?: (ctx: OffsetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.offsetClause`.
	 * @param ctx the parse tree
	 */
	exitOffsetClause?: (ctx: OffsetClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.offsetSynonym`.
	 * @param ctx the parse tree
	 */
	enterOffsetSynonym?: (ctx: OffsetSynonymContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.offsetSynonym`.
	 * @param ctx the parse tree
	 */
	exitOffsetSynonym?: (ctx: OffsetSynonymContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeSpec?: (ctx: GraphTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeSpec?: (ctx: GraphTypeSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nestedGraphTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterNestedGraphTypeSpec?: (ctx: NestedGraphTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nestedGraphTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitNestedGraphTypeSpec?: (ctx: NestedGraphTypeSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeSpecBody`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeSpecBody?: (ctx: GraphTypeSpecBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeSpecBody`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeSpecBody?: (ctx: GraphTypeSpecBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementTypeDefList`.
	 * @param ctx the parse tree
	 */
	enterElementTypeDefList?: (ctx: ElementTypeDefListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementTypeDefList`.
	 * @param ctx the parse tree
	 */
	exitElementTypeDefList?: (ctx: ElementTypeDefListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementTypeDef`.
	 * @param ctx the parse tree
	 */
	enterElementTypeDef?: (ctx: ElementTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementTypeDef`.
	 * @param ctx the parse tree
	 */
	exitElementTypeDef?: (ctx: ElementTypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypeDef`.
	 * @param ctx the parse tree
	 */
	enterNodeTypeDef?: (ctx: NodeTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypeDef`.
	 * @param ctx the parse tree
	 */
	exitNodeTypeDef?: (ctx: NodeTypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypePattern`.
	 * @param ctx the parse tree
	 */
	enterNodeTypePattern?: (ctx: NodeTypePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypePattern`.
	 * @param ctx the parse tree
	 */
	exitNodeTypePattern?: (ctx: NodeTypePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypePhrase`.
	 * @param ctx the parse tree
	 */
	enterNodeTypePhrase?: (ctx: NodeTypePhraseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypePhrase`.
	 * @param ctx the parse tree
	 */
	exitNodeTypePhrase?: (ctx: NodeTypePhraseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypeName`.
	 * @param ctx the parse tree
	 */
	enterNodeTypeName?: (ctx: NodeTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypeName`.
	 * @param ctx the parse tree
	 */
	exitNodeTypeName?: (ctx: NodeTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypeFiller`.
	 * @param ctx the parse tree
	 */
	enterNodeTypeFiller?: (ctx: NodeTypeFillerContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypeFiller`.
	 * @param ctx the parse tree
	 */
	exitNodeTypeFiller?: (ctx: NodeTypeFillerContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypeLabelSetDef`.
	 * @param ctx the parse tree
	 */
	enterNodeTypeLabelSetDef?: (ctx: NodeTypeLabelSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypeLabelSetDef`.
	 * @param ctx the parse tree
	 */
	exitNodeTypeLabelSetDef?: (ctx: NodeTypeLabelSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypePropertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	enterNodeTypePropertyTypeSetDef?: (ctx: NodeTypePropertyTypeSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypePropertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	exitNodeTypePropertyTypeSetDef?: (ctx: NodeTypePropertyTypeSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypeDef`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypeDef?: (ctx: EdgeTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypeDef`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypeDef?: (ctx: EdgeTypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypePattern`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypePattern?: (ctx: EdgeTypePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypePattern`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypePattern?: (ctx: EdgeTypePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypePhrase`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypePhrase?: (ctx: EdgeTypePhraseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypePhrase`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypePhrase?: (ctx: EdgeTypePhraseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypeName`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypeName?: (ctx: EdgeTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypeName`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypeName?: (ctx: EdgeTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypeFiller`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypeFiller?: (ctx: EdgeTypeFillerContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypeFiller`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypeFiller?: (ctx: EdgeTypeFillerContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypeLabelSetDef`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypeLabelSetDef?: (ctx: EdgeTypeLabelSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypeLabelSetDef`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypeLabelSetDef?: (ctx: EdgeTypeLabelSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeTypePropertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	enterEdgeTypePropertyTypeSetDef?: (ctx: EdgeTypePropertyTypeSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeTypePropertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	exitEdgeTypePropertyTypeSetDef?: (ctx: EdgeTypePropertyTypeSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeTypePattern`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeTypePattern?: (ctx: FullEdgeTypePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeTypePattern`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeTypePattern?: (ctx: FullEdgeTypePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeTypePatternPointingRight`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeTypePatternPointingRight?: (ctx: FullEdgeTypePatternPointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeTypePatternPointingRight`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeTypePatternPointingRight?: (ctx: FullEdgeTypePatternPointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeTypePatternPointingLeft`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeTypePatternPointingLeft?: (ctx: FullEdgeTypePatternPointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeTypePatternPointingLeft`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeTypePatternPointingLeft?: (ctx: FullEdgeTypePatternPointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fullEdgeTypePatternUndirected`.
	 * @param ctx the parse tree
	 */
	enterFullEdgeTypePatternUndirected?: (ctx: FullEdgeTypePatternUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fullEdgeTypePatternUndirected`.
	 * @param ctx the parse tree
	 */
	exitFullEdgeTypePatternUndirected?: (ctx: FullEdgeTypePatternUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.arcTypePointingRight`.
	 * @param ctx the parse tree
	 */
	enterArcTypePointingRight?: (ctx: ArcTypePointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.arcTypePointingRight`.
	 * @param ctx the parse tree
	 */
	exitArcTypePointingRight?: (ctx: ArcTypePointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.arcTypePointingLeft`.
	 * @param ctx the parse tree
	 */
	enterArcTypePointingLeft?: (ctx: ArcTypePointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.arcTypePointingLeft`.
	 * @param ctx the parse tree
	 */
	exitArcTypePointingLeft?: (ctx: ArcTypePointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.arcTypeUndirected`.
	 * @param ctx the parse tree
	 */
	enterArcTypeUndirected?: (ctx: ArcTypeUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.arcTypeUndirected`.
	 * @param ctx the parse tree
	 */
	exitArcTypeUndirected?: (ctx: ArcTypeUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.arcTypeFiller`.
	 * @param ctx the parse tree
	 */
	enterArcTypeFiller?: (ctx: ArcTypeFillerContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.arcTypeFiller`.
	 * @param ctx the parse tree
	 */
	exitArcTypeFiller?: (ctx: ArcTypeFillerContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.abbreviatedEdgeTypePattern`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedEdgeTypePattern?: (ctx: AbbreviatedEdgeTypePatternContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.abbreviatedEdgeTypePattern`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedEdgeTypePattern?: (ctx: AbbreviatedEdgeTypePatternContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternPointingRight`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedEdgeTypePatternPointingRight?: (ctx: AbbreviatedEdgeTypePatternPointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternPointingRight`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedEdgeTypePatternPointingRight?: (ctx: AbbreviatedEdgeTypePatternPointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternPointingLeft`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedEdgeTypePatternPointingLeft?: (ctx: AbbreviatedEdgeTypePatternPointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternPointingLeft`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedEdgeTypePatternPointingLeft?: (ctx: AbbreviatedEdgeTypePatternPointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternUndirected`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedEdgeTypePatternUndirected?: (ctx: AbbreviatedEdgeTypePatternUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.abbreviatedEdgeTypePatternUndirected`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedEdgeTypePatternUndirected?: (ctx: AbbreviatedEdgeTypePatternUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeTypeRef`.
	 * @param ctx the parse tree
	 */
	enterNodeTypeRef?: (ctx: NodeTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeTypeRef`.
	 * @param ctx the parse tree
	 */
	exitNodeTypeRef?: (ctx: NodeTypeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sourceNodeTypeRef`.
	 * @param ctx the parse tree
	 */
	enterSourceNodeTypeRef?: (ctx: SourceNodeTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sourceNodeTypeRef`.
	 * @param ctx the parse tree
	 */
	exitSourceNodeTypeRef?: (ctx: SourceNodeTypeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.destinationNodeTypeRef`.
	 * @param ctx the parse tree
	 */
	enterDestinationNodeTypeRef?: (ctx: DestinationNodeTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.destinationNodeTypeRef`.
	 * @param ctx the parse tree
	 */
	exitDestinationNodeTypeRef?: (ctx: DestinationNodeTypeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeKind`.
	 * @param ctx the parse tree
	 */
	enterEdgeKind?: (ctx: EdgeKindContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeKind`.
	 * @param ctx the parse tree
	 */
	exitEdgeKind?: (ctx: EdgeKindContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.endpointDef`.
	 * @param ctx the parse tree
	 */
	enterEndpointDef?: (ctx: EndpointDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.endpointDef`.
	 * @param ctx the parse tree
	 */
	exitEndpointDef?: (ctx: EndpointDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.enpointPairDef`.
	 * @param ctx the parse tree
	 */
	enterEnpointPairDef?: (ctx: EnpointPairDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.enpointPairDef`.
	 * @param ctx the parse tree
	 */
	exitEnpointPairDef?: (ctx: EnpointPairDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.endpointPairDefPointingRight`.
	 * @param ctx the parse tree
	 */
	enterEndpointPairDefPointingRight?: (ctx: EndpointPairDefPointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.endpointPairDefPointingRight`.
	 * @param ctx the parse tree
	 */
	exitEndpointPairDefPointingRight?: (ctx: EndpointPairDefPointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.endpointPairDefPointingLeft`.
	 * @param ctx the parse tree
	 */
	enterEndpointPairDefPointingLeft?: (ctx: EndpointPairDefPointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.endpointPairDefPointingLeft`.
	 * @param ctx the parse tree
	 */
	exitEndpointPairDefPointingLeft?: (ctx: EndpointPairDefPointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.endpointPairDefUndirected`.
	 * @param ctx the parse tree
	 */
	enterEndpointPairDefUndirected?: (ctx: EndpointPairDefUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.endpointPairDefUndirected`.
	 * @param ctx the parse tree
	 */
	exitEndpointPairDefUndirected?: (ctx: EndpointPairDefUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.connectorPointingRight`.
	 * @param ctx the parse tree
	 */
	enterConnectorPointingRight?: (ctx: ConnectorPointingRightContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.connectorPointingRight`.
	 * @param ctx the parse tree
	 */
	exitConnectorPointingRight?: (ctx: ConnectorPointingRightContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.connectorPointingLeft`.
	 * @param ctx the parse tree
	 */
	enterConnectorPointingLeft?: (ctx: ConnectorPointingLeftContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.connectorPointingLeft`.
	 * @param ctx the parse tree
	 */
	exitConnectorPointingLeft?: (ctx: ConnectorPointingLeftContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.connectorUndirected`.
	 * @param ctx the parse tree
	 */
	enterConnectorUndirected?: (ctx: ConnectorUndirectedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.connectorUndirected`.
	 * @param ctx the parse tree
	 */
	exitConnectorUndirected?: (ctx: ConnectorUndirectedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sourceNodeTypeName`.
	 * @param ctx the parse tree
	 */
	enterSourceNodeTypeName?: (ctx: SourceNodeTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sourceNodeTypeName`.
	 * @param ctx the parse tree
	 */
	exitSourceNodeTypeName?: (ctx: SourceNodeTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.destinationNodeTypeName`.
	 * @param ctx the parse tree
	 */
	enterDestinationNodeTypeName?: (ctx: DestinationNodeTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.destinationNodeTypeName`.
	 * @param ctx the parse tree
	 */
	exitDestinationNodeTypeName?: (ctx: DestinationNodeTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelSetDef`.
	 * @param ctx the parse tree
	 */
	enterLabelSetDef?: (ctx: LabelSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelSetDef`.
	 * @param ctx the parse tree
	 */
	exitLabelSetDef?: (ctx: LabelSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	enterPropertyTypeSetDef?: (ctx: PropertyTypeSetDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyTypeSetDef`.
	 * @param ctx the parse tree
	 */
	exitPropertyTypeSetDef?: (ctx: PropertyTypeSetDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyTypeDefList`.
	 * @param ctx the parse tree
	 */
	enterPropertyTypeDefList?: (ctx: PropertyTypeDefListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyTypeDefList`.
	 * @param ctx the parse tree
	 */
	exitPropertyTypeDefList?: (ctx: PropertyTypeDefListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyTypeDef`.
	 * @param ctx the parse tree
	 */
	enterPropertyTypeDef?: (ctx: PropertyTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyTypeDef`.
	 * @param ctx the parse tree
	 */
	exitPropertyTypeDef?: (ctx: PropertyTypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyValueType`.
	 * @param ctx the parse tree
	 */
	enterPropertyValueType?: (ctx: PropertyValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyValueType`.
	 * @param ctx the parse tree
	 */
	exitPropertyValueType?: (ctx: PropertyValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableType`.
	 * @param ctx the parse tree
	 */
	enterBindingTableType?: (ctx: BindingTableTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableType`.
	 * @param ctx the parse tree
	 */
	exitBindingTableType?: (ctx: BindingTableTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueType`.
	 * @param ctx the parse tree
	 */
	enterValueType?: (ctx: ValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueType`.
	 * @param ctx the parse tree
	 */
	exitValueType?: (ctx: ValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.typed`.
	 * @param ctx the parse tree
	 */
	enterTyped?: (ctx: TypedContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.typed`.
	 * @param ctx the parse tree
	 */
	exitTyped?: (ctx: TypedContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanType`.
	 * @param ctx the parse tree
	 */
	enterBooleanType?: (ctx: BooleanTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanType`.
	 * @param ctx the parse tree
	 */
	exitBooleanType?: (ctx: BooleanTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringType`.
	 * @param ctx the parse tree
	 */
	enterCharStringType?: (ctx: CharStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringType`.
	 * @param ctx the parse tree
	 */
	exitCharStringType?: (ctx: CharStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringType`.
	 * @param ctx the parse tree
	 */
	enterByteStringType?: (ctx: ByteStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringType`.
	 * @param ctx the parse tree
	 */
	exitByteStringType?: (ctx: ByteStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.minLength`.
	 * @param ctx the parse tree
	 */
	enterMinLength?: (ctx: MinLengthContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.minLength`.
	 * @param ctx the parse tree
	 */
	exitMinLength?: (ctx: MinLengthContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.maxLength`.
	 * @param ctx the parse tree
	 */
	enterMaxLength?: (ctx: MaxLengthContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.maxLength`.
	 * @param ctx the parse tree
	 */
	exitMaxLength?: (ctx: MaxLengthContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fixedLength`.
	 * @param ctx the parse tree
	 */
	enterFixedLength?: (ctx: FixedLengthContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fixedLength`.
	 * @param ctx the parse tree
	 */
	exitFixedLength?: (ctx: FixedLengthContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericType`.
	 * @param ctx the parse tree
	 */
	enterNumericType?: (ctx: NumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericType`.
	 * @param ctx the parse tree
	 */
	exitNumericType?: (ctx: NumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.exactNumericType`.
	 * @param ctx the parse tree
	 */
	enterExactNumericType?: (ctx: ExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.exactNumericType`.
	 * @param ctx the parse tree
	 */
	exitExactNumericType?: (ctx: ExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.binaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	enterBinaryExactNumericType?: (ctx: BinaryExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.binaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	exitBinaryExactNumericType?: (ctx: BinaryExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.signedBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	enterSignedBinaryExactNumericType?: (ctx: SignedBinaryExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.signedBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	exitSignedBinaryExactNumericType?: (ctx: SignedBinaryExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unsignedBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedBinaryExactNumericType?: (ctx: UnsignedBinaryExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unsignedBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedBinaryExactNumericType?: (ctx: UnsignedBinaryExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.verboseBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	enterVerboseBinaryExactNumericType?: (ctx: VerboseBinaryExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.verboseBinaryExactNumericType`.
	 * @param ctx the parse tree
	 */
	exitVerboseBinaryExactNumericType?: (ctx: VerboseBinaryExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.decimalExactNumericType`.
	 * @param ctx the parse tree
	 */
	enterDecimalExactNumericType?: (ctx: DecimalExactNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.decimalExactNumericType`.
	 * @param ctx the parse tree
	 */
	exitDecimalExactNumericType?: (ctx: DecimalExactNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.precision`.
	 * @param ctx the parse tree
	 */
	enterPrecision?: (ctx: PrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.precision`.
	 * @param ctx the parse tree
	 */
	exitPrecision?: (ctx: PrecisionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.scale`.
	 * @param ctx the parse tree
	 */
	enterScale?: (ctx: ScaleContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.scale`.
	 * @param ctx the parse tree
	 */
	exitScale?: (ctx: ScaleContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.approximateNumericType`.
	 * @param ctx the parse tree
	 */
	enterApproximateNumericType?: (ctx: ApproximateNumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.approximateNumericType`.
	 * @param ctx the parse tree
	 */
	exitApproximateNumericType?: (ctx: ApproximateNumericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.temporalType`.
	 * @param ctx the parse tree
	 */
	enterTemporalType?: (ctx: TemporalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.temporalType`.
	 * @param ctx the parse tree
	 */
	exitTemporalType?: (ctx: TemporalTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.temporalInstantType`.
	 * @param ctx the parse tree
	 */
	enterTemporalInstantType?: (ctx: TemporalInstantTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.temporalInstantType`.
	 * @param ctx the parse tree
	 */
	exitTemporalInstantType?: (ctx: TemporalInstantTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.temporalDurationType`.
	 * @param ctx the parse tree
	 */
	enterTemporalDurationType?: (ctx: TemporalDurationTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.temporalDurationType`.
	 * @param ctx the parse tree
	 */
	exitTemporalDurationType?: (ctx: TemporalDurationTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeType`.
	 * @param ctx the parse tree
	 */
	enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeType`.
	 * @param ctx the parse tree
	 */
	exitDateTimeType?: (ctx: DateTimeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.localDateTimeType`.
	 * @param ctx the parse tree
	 */
	enterLocalDateTimeType?: (ctx: LocalDateTimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.localDateTimeType`.
	 * @param ctx the parse tree
	 */
	exitLocalDateTimeType?: (ctx: LocalDateTimeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateType`.
	 * @param ctx the parse tree
	 */
	enterDateType?: (ctx: DateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateType`.
	 * @param ctx the parse tree
	 */
	exitDateType?: (ctx: DateTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.timeType`.
	 * @param ctx the parse tree
	 */
	enterTimeType?: (ctx: TimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.timeType`.
	 * @param ctx the parse tree
	 */
	exitTimeType?: (ctx: TimeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.localTimeType`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeType?: (ctx: LocalTimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.localTimeType`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeType?: (ctx: LocalTimeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationType`.
	 * @param ctx the parse tree
	 */
	enterDurationType?: (ctx: DurationTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationType`.
	 * @param ctx the parse tree
	 */
	exitDurationType?: (ctx: DurationTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.refValueType`.
	 * @param ctx the parse tree
	 */
	enterRefValueType?: (ctx: RefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.refValueType`.
	 * @param ctx the parse tree
	 */
	exitRefValueType?: (ctx: RefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphRefValueType`.
	 * @param ctx the parse tree
	 */
	enterGraphRefValueType?: (ctx: GraphRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphRefValueType`.
	 * @param ctx the parse tree
	 */
	exitGraphRefValueType?: (ctx: GraphRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.openGraphRefValueType`.
	 * @param ctx the parse tree
	 */
	enterOpenGraphRefValueType?: (ctx: OpenGraphRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.openGraphRefValueType`.
	 * @param ctx the parse tree
	 */
	exitOpenGraphRefValueType?: (ctx: OpenGraphRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.closedGraphRefValueType`.
	 * @param ctx the parse tree
	 */
	enterClosedGraphRefValueType?: (ctx: ClosedGraphRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.closedGraphRefValueType`.
	 * @param ctx the parse tree
	 */
	exitClosedGraphRefValueType?: (ctx: ClosedGraphRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableRefValueType`.
	 * @param ctx the parse tree
	 */
	enterBindingTableRefValueType?: (ctx: BindingTableRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableRefValueType`.
	 * @param ctx the parse tree
	 */
	exitBindingTableRefValueType?: (ctx: BindingTableRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterNodeRefValueType?: (ctx: NodeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitNodeRefValueType?: (ctx: NodeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.openNodeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterOpenNodeRefValueType?: (ctx: OpenNodeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.openNodeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitOpenNodeRefValueType?: (ctx: OpenNodeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.closedNodeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterClosedNodeRefValueType?: (ctx: ClosedNodeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.closedNodeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitClosedNodeRefValueType?: (ctx: ClosedNodeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterEdgeRefValueType?: (ctx: EdgeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitEdgeRefValueType?: (ctx: EdgeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.openEdgeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterOpenEdgeRefValueType?: (ctx: OpenEdgeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.openEdgeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitOpenEdgeRefValueType?: (ctx: OpenEdgeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.closedEdgeRefValueType`.
	 * @param ctx the parse tree
	 */
	enterClosedEdgeRefValueType?: (ctx: ClosedEdgeRefValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.closedEdgeRefValueType`.
	 * @param ctx the parse tree
	 */
	exitClosedEdgeRefValueType?: (ctx: ClosedEdgeRefValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.constructedType`.
	 * @param ctx the parse tree
	 */
	enterConstructedType?: (ctx: ConstructedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.constructedType`.
	 * @param ctx the parse tree
	 */
	exitConstructedType?: (ctx: ConstructedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueType`.
	 * @param ctx the parse tree
	 */
	enterListValueType?: (ctx: ListValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueType`.
	 * @param ctx the parse tree
	 */
	exitListValueType?: (ctx: ListValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueTypeName`.
	 * @param ctx the parse tree
	 */
	enterListValueTypeName?: (ctx: ListValueTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueTypeName`.
	 * @param ctx the parse tree
	 */
	exitListValueTypeName?: (ctx: ListValueTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueTypeNameSynonym`.
	 * @param ctx the parse tree
	 */
	enterListValueTypeNameSynonym?: (ctx: ListValueTypeNameSynonymContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueTypeNameSynonym`.
	 * @param ctx the parse tree
	 */
	exitListValueTypeNameSynonym?: (ctx: ListValueTypeNameSynonymContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.recordType`.
	 * @param ctx the parse tree
	 */
	enterRecordType?: (ctx: RecordTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.recordType`.
	 * @param ctx the parse tree
	 */
	exitRecordType?: (ctx: RecordTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldTypesSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldTypesSpec?: (ctx: FieldTypesSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldTypesSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldTypesSpec?: (ctx: FieldTypesSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldTypeList`.
	 * @param ctx the parse tree
	 */
	enterFieldTypeList?: (ctx: FieldTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldTypeList`.
	 * @param ctx the parse tree
	 */
	exitFieldTypeList?: (ctx: FieldTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dynamicUnionType`.
	 * @param ctx the parse tree
	 */
	enterDynamicUnionType?: (ctx: DynamicUnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dynamicUnionType`.
	 * @param ctx the parse tree
	 */
	exitDynamicUnionType?: (ctx: DynamicUnionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.openDynamicUnionType`.
	 * @param ctx the parse tree
	 */
	enterOpenDynamicUnionType?: (ctx: OpenDynamicUnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.openDynamicUnionType`.
	 * @param ctx the parse tree
	 */
	exitOpenDynamicUnionType?: (ctx: OpenDynamicUnionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dynamicPropertyValueType`.
	 * @param ctx the parse tree
	 */
	enterDynamicPropertyValueType?: (ctx: DynamicPropertyValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dynamicPropertyValueType`.
	 * @param ctx the parse tree
	 */
	exitDynamicPropertyValueType?: (ctx: DynamicPropertyValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.closedDynamicUnionType`.
	 * @param ctx the parse tree
	 */
	enterClosedDynamicUnionType?: (ctx: ClosedDynamicUnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.closedDynamicUnionType`.
	 * @param ctx the parse tree
	 */
	exitClosedDynamicUnionType?: (ctx: ClosedDynamicUnionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValueType`.
	 * @param ctx the parse tree
	 */
	enterPathValueType?: (ctx: PathValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValueType`.
	 * @param ctx the parse tree
	 */
	exitPathValueType?: (ctx: PathValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.notNull`.
	 * @param ctx the parse tree
	 */
	enterNotNull?: (ctx: NotNullContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.notNull`.
	 * @param ctx the parse tree
	 */
	exitNotNull?: (ctx: NotNullContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldType`.
	 * @param ctx the parse tree
	 */
	enterFieldType?: (ctx: FieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldType`.
	 * @param ctx the parse tree
	 */
	exitFieldType?: (ctx: FieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.schemaRef`.
	 * @param ctx the parse tree
	 */
	enterSchemaRef?: (ctx: SchemaRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.schemaRef`.
	 * @param ctx the parse tree
	 */
	exitSchemaRef?: (ctx: SchemaRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.absoluteCatalogSchemaRef`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteCatalogSchemaRef?: (ctx: AbsoluteCatalogSchemaRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.absoluteCatalogSchemaRef`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteCatalogSchemaRef?: (ctx: AbsoluteCatalogSchemaRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogSchemaParentAndName`.
	 * @param ctx the parse tree
	 */
	enterCatalogSchemaParentAndName?: (ctx: CatalogSchemaParentAndNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogSchemaParentAndName`.
	 * @param ctx the parse tree
	 */
	exitCatalogSchemaParentAndName?: (ctx: CatalogSchemaParentAndNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.relativeCatalogSchemaRef`.
	 * @param ctx the parse tree
	 */
	enterRelativeCatalogSchemaRef?: (ctx: RelativeCatalogSchemaRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.relativeCatalogSchemaRef`.
	 * @param ctx the parse tree
	 */
	exitRelativeCatalogSchemaRef?: (ctx: RelativeCatalogSchemaRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.predefinedSchemaRef`.
	 * @param ctx the parse tree
	 */
	enterPredefinedSchemaRef?: (ctx: PredefinedSchemaRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.predefinedSchemaRef`.
	 * @param ctx the parse tree
	 */
	exitPredefinedSchemaRef?: (ctx: PredefinedSchemaRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.absoluteDirectoryPath`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteDirectoryPath?: (ctx: AbsoluteDirectoryPathContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.absoluteDirectoryPath`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteDirectoryPath?: (ctx: AbsoluteDirectoryPathContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.relativeDirectoryPath`.
	 * @param ctx the parse tree
	 */
	enterRelativeDirectoryPath?: (ctx: RelativeDirectoryPathContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.relativeDirectoryPath`.
	 * @param ctx the parse tree
	 */
	exitRelativeDirectoryPath?: (ctx: RelativeDirectoryPathContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleDirectoryPath`.
	 * @param ctx the parse tree
	 */
	enterSimpleDirectoryPath?: (ctx: SimpleDirectoryPathContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleDirectoryPath`.
	 * @param ctx the parse tree
	 */
	exitSimpleDirectoryPath?: (ctx: SimpleDirectoryPathContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphRef`.
	 * @param ctx the parse tree
	 */
	enterGraphRef?: (ctx: GraphRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphRef`.
	 * @param ctx the parse tree
	 */
	exitGraphRef?: (ctx: GraphRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogGraphParentAndName`.
	 * @param ctx the parse tree
	 */
	enterCatalogGraphParentAndName?: (ctx: CatalogGraphParentAndNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogGraphParentAndName`.
	 * @param ctx the parse tree
	 */
	exitCatalogGraphParentAndName?: (ctx: CatalogGraphParentAndNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.homeGraph`.
	 * @param ctx the parse tree
	 */
	enterHomeGraph?: (ctx: HomeGraphContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.homeGraph`.
	 * @param ctx the parse tree
	 */
	exitHomeGraph?: (ctx: HomeGraphContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeRef`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeRef?: (ctx: GraphTypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeRef`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeRef?: (ctx: GraphTypeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogGraphTypeParentAndName`.
	 * @param ctx the parse tree
	 */
	enterCatalogGraphTypeParentAndName?: (ctx: CatalogGraphTypeParentAndNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogGraphTypeParentAndName`.
	 * @param ctx the parse tree
	 */
	exitCatalogGraphTypeParentAndName?: (ctx: CatalogGraphTypeParentAndNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableRef`.
	 * @param ctx the parse tree
	 */
	enterBindingTableRef?: (ctx: BindingTableRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableRef`.
	 * @param ctx the parse tree
	 */
	exitBindingTableRef?: (ctx: BindingTableRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogBindingTableParentAndName`.
	 * @param ctx the parse tree
	 */
	enterCatalogBindingTableParentAndName?: (ctx: CatalogBindingTableParentAndNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogBindingTableParentAndName`.
	 * @param ctx the parse tree
	 */
	exitCatalogBindingTableParentAndName?: (ctx: CatalogBindingTableParentAndNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureRef`.
	 * @param ctx the parse tree
	 */
	enterProcedureRef?: (ctx: ProcedureRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureRef`.
	 * @param ctx the parse tree
	 */
	exitProcedureRef?: (ctx: ProcedureRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogProcedureParentAndName`.
	 * @param ctx the parse tree
	 */
	enterCatalogProcedureParentAndName?: (ctx: CatalogProcedureParentAndNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogProcedureParentAndName`.
	 * @param ctx the parse tree
	 */
	exitCatalogProcedureParentAndName?: (ctx: CatalogProcedureParentAndNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.catalogObjectParentRef`.
	 * @param ctx the parse tree
	 */
	enterCatalogObjectParentRef?: (ctx: CatalogObjectParentRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.catalogObjectParentRef`.
	 * @param ctx the parse tree
	 */
	exitCatalogObjectParentRef?: (ctx: CatalogObjectParentRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.refParameter`.
	 * @param ctx the parse tree
	 */
	enterRefParameter?: (ctx: RefParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.refParameter`.
	 * @param ctx the parse tree
	 */
	exitRefParameter?: (ctx: RefParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.externalObjectRef`.
	 * @param ctx the parse tree
	 */
	enterExternalObjectRef?: (ctx: ExternalObjectRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.externalObjectRef`.
	 * @param ctx the parse tree
	 */
	exitExternalObjectRef?: (ctx: ExternalObjectRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.searchCondition`.
	 * @param ctx the parse tree
	 */
	enterSearchCondition?: (ctx: SearchConditionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.searchCondition`.
	 * @param ctx the parse tree
	 */
	exitSearchCondition?: (ctx: SearchConditionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.comparisonPredicate`.
	 * @param ctx the parse tree
	 */
	enterComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.comparisonPredicate`.
	 * @param ctx the parse tree
	 */
	exitComparisonPredicate?: (ctx: ComparisonPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.comparisonPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterComparisonPredicatePart2?: (ctx: ComparisonPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.comparisonPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitComparisonPredicatePart2?: (ctx: ComparisonPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.equals`.
	 * @param ctx the parse tree
	 */
	enterEquals?: (ctx: EqualsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.equals`.
	 * @param ctx the parse tree
	 */
	exitEquals?: (ctx: EqualsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.notEquals`.
	 * @param ctx the parse tree
	 */
	enterNotEquals?: (ctx: NotEqualsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.notEquals`.
	 * @param ctx the parse tree
	 */
	exitNotEquals?: (ctx: NotEqualsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.lessThen`.
	 * @param ctx the parse tree
	 */
	enterLessThen?: (ctx: LessThenContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.lessThen`.
	 * @param ctx the parse tree
	 */
	exitLessThen?: (ctx: LessThenContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.greaterThan`.
	 * @param ctx the parse tree
	 */
	enterGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.greaterThan`.
	 * @param ctx the parse tree
	 */
	exitGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.lessThanOrEquals`.
	 * @param ctx the parse tree
	 */
	enterLessThanOrEquals?: (ctx: LessThanOrEqualsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.lessThanOrEquals`.
	 * @param ctx the parse tree
	 */
	exitLessThanOrEquals?: (ctx: LessThanOrEqualsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graterThanOrEquals`.
	 * @param ctx the parse tree
	 */
	enterGraterThanOrEquals?: (ctx: GraterThanOrEqualsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graterThanOrEquals`.
	 * @param ctx the parse tree
	 */
	exitGraterThanOrEquals?: (ctx: GraterThanOrEqualsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.comparisonPredicand`.
	 * @param ctx the parse tree
	 */
	enterComparisonPredicand?: (ctx: ComparisonPredicandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.comparisonPredicand`.
	 * @param ctx the parse tree
	 */
	exitComparisonPredicand?: (ctx: ComparisonPredicandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.existsPredicate`.
	 * @param ctx the parse tree
	 */
	enterExistsPredicate?: (ctx: ExistsPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.existsPredicate`.
	 * @param ctx the parse tree
	 */
	exitExistsPredicate?: (ctx: ExistsPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nullPredicate`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nullPredicate`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nullPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterNullPredicatePart2?: (ctx: NullPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nullPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitNullPredicatePart2?: (ctx: NullPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueTypePredicate`.
	 * @param ctx the parse tree
	 */
	enterValueTypePredicate?: (ctx: ValueTypePredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueTypePredicate`.
	 * @param ctx the parse tree
	 */
	exitValueTypePredicate?: (ctx: ValueTypePredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueTypePredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterValueTypePredicatePart2?: (ctx: ValueTypePredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueTypePredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitValueTypePredicatePart2?: (ctx: ValueTypePredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.normalizedPredicate`.
	 * @param ctx the parse tree
	 */
	enterNormalizedPredicate?: (ctx: NormalizedPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.normalizedPredicate`.
	 * @param ctx the parse tree
	 */
	exitNormalizedPredicate?: (ctx: NormalizedPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.normalizedPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterNormalizedPredicatePart2?: (ctx: NormalizedPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.normalizedPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitNormalizedPredicatePart2?: (ctx: NormalizedPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.directedPredicate`.
	 * @param ctx the parse tree
	 */
	enterDirectedPredicate?: (ctx: DirectedPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.directedPredicate`.
	 * @param ctx the parse tree
	 */
	exitDirectedPredicate?: (ctx: DirectedPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.directedPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterDirectedPredicatePart2?: (ctx: DirectedPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.directedPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitDirectedPredicatePart2?: (ctx: DirectedPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labeledPredicate`.
	 * @param ctx the parse tree
	 */
	enterLabeledPredicate?: (ctx: LabeledPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labeledPredicate`.
	 * @param ctx the parse tree
	 */
	exitLabeledPredicate?: (ctx: LabeledPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labeledPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterLabeledPredicatePart2?: (ctx: LabeledPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labeledPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitLabeledPredicatePart2?: (ctx: LabeledPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.isLabeledOrColon`.
	 * @param ctx the parse tree
	 */
	enterIsLabeledOrColon?: (ctx: IsLabeledOrColonContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.isLabeledOrColon`.
	 * @param ctx the parse tree
	 */
	exitIsLabeledOrColon?: (ctx: IsLabeledOrColonContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sourceOrDestinationPredicate`.
	 * @param ctx the parse tree
	 */
	enterSourceOrDestinationPredicate?: (ctx: SourceOrDestinationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sourceOrDestinationPredicate`.
	 * @param ctx the parse tree
	 */
	exitSourceOrDestinationPredicate?: (ctx: SourceOrDestinationPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeRef`.
	 * @param ctx the parse tree
	 */
	enterNodeRef?: (ctx: NodeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeRef`.
	 * @param ctx the parse tree
	 */
	exitNodeRef?: (ctx: NodeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sourcePredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterSourcePredicatePart2?: (ctx: SourcePredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sourcePredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitSourcePredicatePart2?: (ctx: SourcePredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.destinationPredicatePart2`.
	 * @param ctx the parse tree
	 */
	enterDestinationPredicatePart2?: (ctx: DestinationPredicatePart2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.destinationPredicatePart2`.
	 * @param ctx the parse tree
	 */
	exitDestinationPredicatePart2?: (ctx: DestinationPredicatePart2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeRef`.
	 * @param ctx the parse tree
	 */
	enterEdgeRef?: (ctx: EdgeRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeRef`.
	 * @param ctx the parse tree
	 */
	exitEdgeRef?: (ctx: EdgeRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.allDifferentPredicate`.
	 * @param ctx the parse tree
	 */
	enterAllDifferentPredicate?: (ctx: AllDifferentPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.allDifferentPredicate`.
	 * @param ctx the parse tree
	 */
	exitAllDifferentPredicate?: (ctx: AllDifferentPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.samePredicate`.
	 * @param ctx the parse tree
	 */
	enterSamePredicate?: (ctx: SamePredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.samePredicate`.
	 * @param ctx the parse tree
	 */
	exitSamePredicate?: (ctx: SamePredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyExistsPredicate`.
	 * @param ctx the parse tree
	 */
	enterPropertyExistsPredicate?: (ctx: PropertyExistsPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyExistsPredicate`.
	 * @param ctx the parse tree
	 */
	exitPropertyExistsPredicate?: (ctx: PropertyExistsPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueSpec`.
	 * @param ctx the parse tree
	 */
	enterValueSpec?: (ctx: ValueSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueSpec`.
	 * @param ctx the parse tree
	 */
	exitValueSpec?: (ctx: ValueSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unsignedValueSpec`.
	 * @param ctx the parse tree
	 */
	enterUnsignedValueSpec?: (ctx: UnsignedValueSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unsignedValueSpec`.
	 * @param ctx the parse tree
	 */
	exitUnsignedValueSpec?: (ctx: UnsignedValueSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unsignedIntSpec`.
	 * @param ctx the parse tree
	 */
	enterUnsignedIntSpec?: (ctx: UnsignedIntSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unsignedIntSpec`.
	 * @param ctx the parse tree
	 */
	exitUnsignedIntSpec?: (ctx: UnsignedIntSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parameterValueSpec`.
	 * @param ctx the parse tree
	 */
	enterParameterValueSpec?: (ctx: ParameterValueSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parameterValueSpec`.
	 * @param ctx the parse tree
	 */
	exitParameterValueSpec?: (ctx: ParameterValueSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.predefinedParameter`.
	 * @param ctx the parse tree
	 */
	enterPredefinedParameter?: (ctx: PredefinedParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.predefinedParameter`.
	 * @param ctx the parse tree
	 */
	exitPredefinedParameter?: (ctx: PredefinedParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueExpr`.
	 * @param ctx the parse tree
	 */
	enterValueExpr?: (ctx: ValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueExpr`.
	 * @param ctx the parse tree
	 */
	exitValueExpr?: (ctx: ValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.commonValueExpr`.
	 * @param ctx the parse tree
	 */
	enterCommonValueExpr?: (ctx: CommonValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.commonValueExpr`.
	 * @param ctx the parse tree
	 */
	exitCommonValueExpr?: (ctx: CommonValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.refValueExpr`.
	 * @param ctx the parse tree
	 */
	enterRefValueExpr?: (ctx: RefValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.refValueExpr`.
	 * @param ctx the parse tree
	 */
	exitRefValueExpr?: (ctx: RefValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphRefValueExpr`.
	 * @param ctx the parse tree
	 */
	enterGraphRefValueExpr?: (ctx: GraphRefValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphRefValueExpr`.
	 * @param ctx the parse tree
	 */
	exitGraphRefValueExpr?: (ctx: GraphRefValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableRefValueExpr`.
	 * @param ctx the parse tree
	 */
	enterBindingTableRefValueExpr?: (ctx: BindingTableRefValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableRefValueExpr`.
	 * @param ctx the parse tree
	 */
	exitBindingTableRefValueExpr?: (ctx: BindingTableRefValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeRefValueExpr`.
	 * @param ctx the parse tree
	 */
	enterNodeRefValueExpr?: (ctx: NodeRefValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeRefValueExpr`.
	 * @param ctx the parse tree
	 */
	exitNodeRefValueExpr?: (ctx: NodeRefValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeRefValueExpr`.
	 * @param ctx the parse tree
	 */
	enterEdgeRefValueExpr?: (ctx: EdgeRefValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeRefValueExpr`.
	 * @param ctx the parse tree
	 */
	exitEdgeRefValueExpr?: (ctx: EdgeRefValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.recordValueExpr`.
	 * @param ctx the parse tree
	 */
	enterRecordValueExpr?: (ctx: RecordValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.recordValueExpr`.
	 * @param ctx the parse tree
	 */
	exitRecordValueExpr?: (ctx: RecordValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.aggregatingValueExpr`.
	 * @param ctx the parse tree
	 */
	enterAggregatingValueExpr?: (ctx: AggregatingValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.aggregatingValueExpr`.
	 * @param ctx the parse tree
	 */
	exitAggregatingValueExpr?: (ctx: AggregatingValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanValueExpr`.
	 * @param ctx the parse tree
	 */
	enterBooleanValueExpr?: (ctx: BooleanValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanValueExpr`.
	 * @param ctx the parse tree
	 */
	exitBooleanValueExpr?: (ctx: BooleanValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanTerm`.
	 * @param ctx the parse tree
	 */
	enterBooleanTerm?: (ctx: BooleanTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanTerm`.
	 * @param ctx the parse tree
	 */
	exitBooleanTerm?: (ctx: BooleanTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanFactor`.
	 * @param ctx the parse tree
	 */
	enterBooleanFactor?: (ctx: BooleanFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanFactor`.
	 * @param ctx the parse tree
	 */
	exitBooleanFactor?: (ctx: BooleanFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanTest`.
	 * @param ctx the parse tree
	 */
	enterBooleanTest?: (ctx: BooleanTestContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanTest`.
	 * @param ctx the parse tree
	 */
	exitBooleanTest?: (ctx: BooleanTestContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.truthValue`.
	 * @param ctx the parse tree
	 */
	enterTruthValue?: (ctx: TruthValueContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.truthValue`.
	 * @param ctx the parse tree
	 */
	exitTruthValue?: (ctx: TruthValueContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanPrimary`.
	 * @param ctx the parse tree
	 */
	enterBooleanPrimary?: (ctx: BooleanPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanPrimary`.
	 * @param ctx the parse tree
	 */
	exitBooleanPrimary?: (ctx: BooleanPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanPredicand`.
	 * @param ctx the parse tree
	 */
	enterBooleanPredicand?: (ctx: BooleanPredicandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanPredicand`.
	 * @param ctx the parse tree
	 */
	exitBooleanPredicand?: (ctx: BooleanPredicandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.paranthisedBooleanValueExpr`.
	 * @param ctx the parse tree
	 */
	enterParanthisedBooleanValueExpr?: (ctx: ParanthisedBooleanValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.paranthisedBooleanValueExpr`.
	 * @param ctx the parse tree
	 */
	exitParanthisedBooleanValueExpr?: (ctx: ParanthisedBooleanValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueExpr`.
	 * @param ctx the parse tree
	 */
	enterNumericValueExpr?: (ctx: NumericValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueExpr`.
	 * @param ctx the parse tree
	 */
	exitNumericValueExpr?: (ctx: NumericValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericPrimary`.
	 * @param ctx the parse tree
	 */
	enterNumericPrimary?: (ctx: NumericPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericPrimary`.
	 * @param ctx the parse tree
	 */
	exitNumericPrimary?: (ctx: NumericPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueExprPrimary`.
	 * @param ctx the parse tree
	 */
	enterValueExprPrimary?: (ctx: ValueExprPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueExprPrimary`.
	 * @param ctx the parse tree
	 */
	exitValueExprPrimary?: (ctx: ValueExprPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parenthesizedValueExpr`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedValueExpr?: (ctx: ParenthesizedValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parenthesizedValueExpr`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedValueExpr?: (ctx: ParenthesizedValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nonParenthesizedValueExprPrimary`.
	 * @param ctx the parse tree
	 */
	enterNonParenthesizedValueExprPrimary?: (ctx: NonParenthesizedValueExprPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nonParenthesizedValueExprPrimary`.
	 * @param ctx the parse tree
	 */
	exitNonParenthesizedValueExprPrimary?: (ctx: NonParenthesizedValueExprPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nonParenthesizedValueExprPrimarySpecialCase`.
	 * @param ctx the parse tree
	 */
	enterNonParenthesizedValueExprPrimarySpecialCase?: (ctx: NonParenthesizedValueExprPrimarySpecialCaseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nonParenthesizedValueExprPrimarySpecialCase`.
	 * @param ctx the parse tree
	 */
	exitNonParenthesizedValueExprPrimarySpecialCase?: (ctx: NonParenthesizedValueExprPrimarySpecialCaseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.collectionValueConstructor`.
	 * @param ctx the parse tree
	 */
	enterCollectionValueConstructor?: (ctx: CollectionValueConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.collectionValueConstructor`.
	 * @param ctx the parse tree
	 */
	exitCollectionValueConstructor?: (ctx: CollectionValueConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueFunction`.
	 * @param ctx the parse tree
	 */
	enterNumericValueFunction?: (ctx: NumericValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueFunction`.
	 * @param ctx the parse tree
	 */
	exitNumericValueFunction?: (ctx: NumericValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.lengthExpr`.
	 * @param ctx the parse tree
	 */
	enterLengthExpr?: (ctx: LengthExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.lengthExpr`.
	 * @param ctx the parse tree
	 */
	exitLengthExpr?: (ctx: LengthExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charLengthExpr`.
	 * @param ctx the parse tree
	 */
	enterCharLengthExpr?: (ctx: CharLengthExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charLengthExpr`.
	 * @param ctx the parse tree
	 */
	exitCharLengthExpr?: (ctx: CharLengthExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteLengthExpr`.
	 * @param ctx the parse tree
	 */
	enterByteLengthExpr?: (ctx: ByteLengthExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteLengthExpr`.
	 * @param ctx the parse tree
	 */
	exitByteLengthExpr?: (ctx: ByteLengthExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathLengthExpr`.
	 * @param ctx the parse tree
	 */
	enterPathLengthExpr?: (ctx: PathLengthExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathLengthExpr`.
	 * @param ctx the parse tree
	 */
	exitPathLengthExpr?: (ctx: PathLengthExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.absoluteValueExpr`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteValueExpr?: (ctx: AbsoluteValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.absoluteValueExpr`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteValueExpr?: (ctx: AbsoluteValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.modulusExpr`.
	 * @param ctx the parse tree
	 */
	enterModulusExpr?: (ctx: ModulusExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.modulusExpr`.
	 * @param ctx the parse tree
	 */
	exitModulusExpr?: (ctx: ModulusExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueExprDividen`.
	 * @param ctx the parse tree
	 */
	enterNumericValueExprDividen?: (ctx: NumericValueExprDividenContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueExprDividen`.
	 * @param ctx the parse tree
	 */
	exitNumericValueExprDividen?: (ctx: NumericValueExprDividenContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueExprDivisor`.
	 * @param ctx the parse tree
	 */
	enterNumericValueExprDivisor?: (ctx: NumericValueExprDivisorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueExprDivisor`.
	 * @param ctx the parse tree
	 */
	exitNumericValueExprDivisor?: (ctx: NumericValueExprDivisorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trigonometricFunction`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricFunction?: (ctx: TrigonometricFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trigonometricFunction`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricFunction?: (ctx: TrigonometricFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trigonometricFunctionName`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricFunctionName?: (ctx: TrigonometricFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trigonometricFunctionName`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricFunctionName?: (ctx: TrigonometricFunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.logarithmFunction`.
	 * @param ctx the parse tree
	 */
	enterLogarithmFunction?: (ctx: LogarithmFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.logarithmFunction`.
	 * @param ctx the parse tree
	 */
	exitLogarithmFunction?: (ctx: LogarithmFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	enterGeneralLogarithmFunction?: (ctx: GeneralLogarithmFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	exitGeneralLogarithmFunction?: (ctx: GeneralLogarithmFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalLogarithmBase`.
	 * @param ctx the parse tree
	 */
	enterGeneralLogarithmBase?: (ctx: GeneralLogarithmBaseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalLogarithmBase`.
	 * @param ctx the parse tree
	 */
	exitGeneralLogarithmBase?: (ctx: GeneralLogarithmBaseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalLogarithmArgument`.
	 * @param ctx the parse tree
	 */
	enterGeneralLogarithmArgument?: (ctx: GeneralLogarithmArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalLogarithmArgument`.
	 * @param ctx the parse tree
	 */
	exitGeneralLogarithmArgument?: (ctx: GeneralLogarithmArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.commonLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	enterCommonLogarithmFunction?: (ctx: CommonLogarithmFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.commonLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	exitCommonLogarithmFunction?: (ctx: CommonLogarithmFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.naturalLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	enterNaturalLogarithmFunction?: (ctx: NaturalLogarithmFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.naturalLogarithmFunction`.
	 * @param ctx the parse tree
	 */
	exitNaturalLogarithmFunction?: (ctx: NaturalLogarithmFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.exponentialFunction`.
	 * @param ctx the parse tree
	 */
	enterExponentialFunction?: (ctx: ExponentialFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.exponentialFunction`.
	 * @param ctx the parse tree
	 */
	exitExponentialFunction?: (ctx: ExponentialFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.powerFunction`.
	 * @param ctx the parse tree
	 */
	enterPowerFunction?: (ctx: PowerFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.powerFunction`.
	 * @param ctx the parse tree
	 */
	exitPowerFunction?: (ctx: PowerFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueExprBase`.
	 * @param ctx the parse tree
	 */
	enterNumericValueExprBase?: (ctx: NumericValueExprBaseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueExprBase`.
	 * @param ctx the parse tree
	 */
	exitNumericValueExprBase?: (ctx: NumericValueExprBaseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.numericValueExprExponent`.
	 * @param ctx the parse tree
	 */
	enterNumericValueExprExponent?: (ctx: NumericValueExprExponentContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.numericValueExprExponent`.
	 * @param ctx the parse tree
	 */
	exitNumericValueExprExponent?: (ctx: NumericValueExprExponentContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.squareRootFunciton`.
	 * @param ctx the parse tree
	 */
	enterSquareRootFunciton?: (ctx: SquareRootFuncitonContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.squareRootFunciton`.
	 * @param ctx the parse tree
	 */
	exitSquareRootFunciton?: (ctx: SquareRootFuncitonContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.floorFunction`.
	 * @param ctx the parse tree
	 */
	enterFloorFunction?: (ctx: FloorFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.floorFunction`.
	 * @param ctx the parse tree
	 */
	exitFloorFunction?: (ctx: FloorFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.ceilingFunction`.
	 * @param ctx the parse tree
	 */
	enterCeilingFunction?: (ctx: CeilingFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.ceilingFunction`.
	 * @param ctx the parse tree
	 */
	exitCeilingFunction?: (ctx: CeilingFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.stringValueExpr`.
	 * @param ctx the parse tree
	 */
	enterStringValueExpr?: (ctx: StringValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.stringValueExpr`.
	 * @param ctx the parse tree
	 */
	exitStringValueExpr?: (ctx: StringValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringValueExpr`.
	 * @param ctx the parse tree
	 */
	enterCharStringValueExpr?: (ctx: CharStringValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringValueExpr`.
	 * @param ctx the parse tree
	 */
	exitCharStringValueExpr?: (ctx: CharStringValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringConcatenation`.
	 * @param ctx the parse tree
	 */
	enterCharStringConcatenation?: (ctx: CharStringConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringConcatenation`.
	 * @param ctx the parse tree
	 */
	exitCharStringConcatenation?: (ctx: CharStringConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringFactor`.
	 * @param ctx the parse tree
	 */
	enterCharStringFactor?: (ctx: CharStringFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringFactor`.
	 * @param ctx the parse tree
	 */
	exitCharStringFactor?: (ctx: CharStringFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringPrimary`.
	 * @param ctx the parse tree
	 */
	enterCharStringPrimary?: (ctx: CharStringPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringPrimary`.
	 * @param ctx the parse tree
	 */
	exitCharStringPrimary?: (ctx: CharStringPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringValueExpr`.
	 * @param ctx the parse tree
	 */
	enterByteStringValueExpr?: (ctx: ByteStringValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringValueExpr`.
	 * @param ctx the parse tree
	 */
	exitByteStringValueExpr?: (ctx: ByteStringValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringFactor`.
	 * @param ctx the parse tree
	 */
	enterByteStringFactor?: (ctx: ByteStringFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringFactor`.
	 * @param ctx the parse tree
	 */
	exitByteStringFactor?: (ctx: ByteStringFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringPrimary`.
	 * @param ctx the parse tree
	 */
	enterByteStringPrimary?: (ctx: ByteStringPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringPrimary`.
	 * @param ctx the parse tree
	 */
	exitByteStringPrimary?: (ctx: ByteStringPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringConcatenation`.
	 * @param ctx the parse tree
	 */
	enterByteStringConcatenation?: (ctx: ByteStringConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringConcatenation`.
	 * @param ctx the parse tree
	 */
	exitByteStringConcatenation?: (ctx: ByteStringConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.stringValueFunction`.
	 * @param ctx the parse tree
	 */
	enterStringValueFunction?: (ctx: StringValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.stringValueFunction`.
	 * @param ctx the parse tree
	 */
	exitStringValueFunction?: (ctx: StringValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.charStringFunction`.
	 * @param ctx the parse tree
	 */
	enterCharStringFunction?: (ctx: CharStringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.charStringFunction`.
	 * @param ctx the parse tree
	 */
	exitCharStringFunction?: (ctx: CharStringFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.foldFunction`.
	 * @param ctx the parse tree
	 */
	enterFoldFunction?: (ctx: FoldFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.foldFunction`.
	 * @param ctx the parse tree
	 */
	exitFoldFunction?: (ctx: FoldFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.singleCharTrimFunction`.
	 * @param ctx the parse tree
	 */
	enterSingleCharTrimFunction?: (ctx: SingleCharTrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.singleCharTrimFunction`.
	 * @param ctx the parse tree
	 */
	exitSingleCharTrimFunction?: (ctx: SingleCharTrimFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.multiCharTrimFunction`.
	 * @param ctx the parse tree
	 */
	enterMultiCharTrimFunction?: (ctx: MultiCharTrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.multiCharTrimFunction`.
	 * @param ctx the parse tree
	 */
	exitMultiCharTrimFunction?: (ctx: MultiCharTrimFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimOperands`.
	 * @param ctx the parse tree
	 */
	enterTrimOperands?: (ctx: TrimOperandsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimOperands`.
	 * @param ctx the parse tree
	 */
	exitTrimOperands?: (ctx: TrimOperandsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimSource`.
	 * @param ctx the parse tree
	 */
	enterTrimSource?: (ctx: TrimSourceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimSource`.
	 * @param ctx the parse tree
	 */
	exitTrimSource?: (ctx: TrimSourceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimSpec`.
	 * @param ctx the parse tree
	 */
	enterTrimSpec?: (ctx: TrimSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimSpec`.
	 * @param ctx the parse tree
	 */
	exitTrimSpec?: (ctx: TrimSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimCharString`.
	 * @param ctx the parse tree
	 */
	enterTrimCharString?: (ctx: TrimCharStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimCharString`.
	 * @param ctx the parse tree
	 */
	exitTrimCharString?: (ctx: TrimCharStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.normalizeFunction`.
	 * @param ctx the parse tree
	 */
	enterNormalizeFunction?: (ctx: NormalizeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.normalizeFunction`.
	 * @param ctx the parse tree
	 */
	exitNormalizeFunction?: (ctx: NormalizeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	enterNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.normalForm`.
	 * @param ctx the parse tree
	 */
	exitNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringFunction`.
	 * @param ctx the parse tree
	 */
	enterByteStringFunction?: (ctx: ByteStringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringFunction`.
	 * @param ctx the parse tree
	 */
	exitByteStringFunction?: (ctx: ByteStringFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStrinTrimFunction`.
	 * @param ctx the parse tree
	 */
	enterByteStrinTrimFunction?: (ctx: ByteStrinTrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStrinTrimFunction`.
	 * @param ctx the parse tree
	 */
	exitByteStrinTrimFunction?: (ctx: ByteStrinTrimFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringTrimOperands`.
	 * @param ctx the parse tree
	 */
	enterByteStringTrimOperands?: (ctx: ByteStringTrimOperandsContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringTrimOperands`.
	 * @param ctx the parse tree
	 */
	exitByteStringTrimOperands?: (ctx: ByteStringTrimOperandsContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.byteStringTrimSource`.
	 * @param ctx the parse tree
	 */
	enterByteStringTrimSource?: (ctx: ByteStringTrimSourceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.byteStringTrimSource`.
	 * @param ctx the parse tree
	 */
	exitByteStringTrimSource?: (ctx: ByteStringTrimSourceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimByteString`.
	 * @param ctx the parse tree
	 */
	enterTrimByteString?: (ctx: TrimByteStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimByteString`.
	 * @param ctx the parse tree
	 */
	exitTrimByteString?: (ctx: TrimByteStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.stringLength`.
	 * @param ctx the parse tree
	 */
	enterStringLength?: (ctx: StringLengthContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.stringLength`.
	 * @param ctx the parse tree
	 */
	exitStringLength?: (ctx: StringLengthContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeValueExpr`.
	 * @param ctx the parse tree
	 */
	enterDateTimeValueExpr?: (ctx: DateTimeValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeValueExpr`.
	 * @param ctx the parse tree
	 */
	exitDateTimeValueExpr?: (ctx: DateTimeValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeTerm`.
	 * @param ctx the parse tree
	 */
	enterDateTimeTerm?: (ctx: DateTimeTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeTerm`.
	 * @param ctx the parse tree
	 */
	exitDateTimeTerm?: (ctx: DateTimeTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeFactor`.
	 * @param ctx the parse tree
	 */
	enterDateTimeFactor?: (ctx: DateTimeFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeFactor`.
	 * @param ctx the parse tree
	 */
	exitDateTimeFactor?: (ctx: DateTimeFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimePrimary`.
	 * @param ctx the parse tree
	 */
	enterDateTimePrimary?: (ctx: DateTimePrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimePrimary`.
	 * @param ctx the parse tree
	 */
	exitDateTimePrimary?: (ctx: DateTimePrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeValueFunction`.
	 * @param ctx the parse tree
	 */
	enterDateTimeValueFunction?: (ctx: DateTimeValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeValueFunction`.
	 * @param ctx the parse tree
	 */
	exitDateTimeValueFunction?: (ctx: DateTimeValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateFunction`.
	 * @param ctx the parse tree
	 */
	enterDateFunction?: (ctx: DateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateFunction`.
	 * @param ctx the parse tree
	 */
	exitDateFunction?: (ctx: DateFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.timeFunction`.
	 * @param ctx the parse tree
	 */
	enterTimeFunction?: (ctx: TimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.timeFunction`.
	 * @param ctx the parse tree
	 */
	exitTimeFunction?: (ctx: TimeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.localTimeFunction`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeFunction?: (ctx: LocalTimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.localTimeFunction`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeFunction?: (ctx: LocalTimeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeFunction`.
	 * @param ctx the parse tree
	 */
	enterDateTimeFunction?: (ctx: DateTimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeFunction`.
	 * @param ctx the parse tree
	 */
	exitDateTimeFunction?: (ctx: DateTimeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.localDatetimeFunction`.
	 * @param ctx the parse tree
	 */
	enterLocalDatetimeFunction?: (ctx: LocalDatetimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.localDatetimeFunction`.
	 * @param ctx the parse tree
	 */
	exitLocalDatetimeFunction?: (ctx: LocalDatetimeFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterDateFunctionParameters?: (ctx: DateFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitDateFunctionParameters?: (ctx: DateFunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.timeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.timeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterDateTimeFunctionParameters?: (ctx: DateTimeFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitDateTimeFunctionParameters?: (ctx: DateTimeFunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationValueExpr`.
	 * @param ctx the parse tree
	 */
	enterDurationValueExpr?: (ctx: DurationValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationValueExpr`.
	 * @param ctx the parse tree
	 */
	exitDurationValueExpr?: (ctx: DurationValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeSubtraction`.
	 * @param ctx the parse tree
	 */
	enterDateTimeSubtraction?: (ctx: DateTimeSubtractionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeSubtraction`.
	 * @param ctx the parse tree
	 */
	exitDateTimeSubtraction?: (ctx: DateTimeSubtractionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeSubtractionParameters`.
	 * @param ctx the parse tree
	 */
	enterDateTimeSubtractionParameters?: (ctx: DateTimeSubtractionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeSubtractionParameters`.
	 * @param ctx the parse tree
	 */
	exitDateTimeSubtractionParameters?: (ctx: DateTimeSubtractionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	enterDurationTerm?: (ctx: DurationTermContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	exitDurationTerm?: (ctx: DurationTermContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	enterDurationFactor?: (ctx: DurationFactorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	exitDurationFactor?: (ctx: DurationFactorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationPrimary`.
	 * @param ctx the parse tree
	 */
	enterDurationPrimary?: (ctx: DurationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationPrimary`.
	 * @param ctx the parse tree
	 */
	exitDurationPrimary?: (ctx: DurationPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationValueExpr1`.
	 * @param ctx the parse tree
	 */
	enterDurationValueExpr1?: (ctx: DurationValueExpr1Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationValueExpr1`.
	 * @param ctx the parse tree
	 */
	exitDurationValueExpr1?: (ctx: DurationValueExpr1Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationTerm1`.
	 * @param ctx the parse tree
	 */
	enterDurationTerm1?: (ctx: DurationTerm1Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationTerm1`.
	 * @param ctx the parse tree
	 */
	exitDurationTerm1?: (ctx: DurationTerm1Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationTerm2`.
	 * @param ctx the parse tree
	 */
	enterDurationTerm2?: (ctx: DurationTerm2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationTerm2`.
	 * @param ctx the parse tree
	 */
	exitDurationTerm2?: (ctx: DurationTerm2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeValueExpr1`.
	 * @param ctx the parse tree
	 */
	enterDateTimeValueExpr1?: (ctx: DateTimeValueExpr1Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeValueExpr1`.
	 * @param ctx the parse tree
	 */
	exitDateTimeValueExpr1?: (ctx: DateTimeValueExpr1Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeValueExpr2`.
	 * @param ctx the parse tree
	 */
	enterDateTimeValueExpr2?: (ctx: DateTimeValueExpr2Context) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeValueExpr2`.
	 * @param ctx the parse tree
	 */
	exitDateTimeValueExpr2?: (ctx: DateTimeValueExpr2Context) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationValueFunction`.
	 * @param ctx the parse tree
	 */
	enterDurationValueFunction?: (ctx: DurationValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationValueFunction`.
	 * @param ctx the parse tree
	 */
	exitDurationValueFunction?: (ctx: DurationValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationFunction`.
	 * @param ctx the parse tree
	 */
	enterDurationFunction?: (ctx: DurationFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationFunction`.
	 * @param ctx the parse tree
	 */
	exitDurationFunction?: (ctx: DurationFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterDurationFunctionParameters?: (ctx: DurationFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitDurationFunctionParameters?: (ctx: DurationFunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationAbsoluteValueFunction`.
	 * @param ctx the parse tree
	 */
	enterDurationAbsoluteValueFunction?: (ctx: DurationAbsoluteValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationAbsoluteValueFunction`.
	 * @param ctx the parse tree
	 */
	exitDurationAbsoluteValueFunction?: (ctx: DurationAbsoluteValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueExpr`.
	 * @param ctx the parse tree
	 */
	enterListValueExpr?: (ctx: ListValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueExpr`.
	 * @param ctx the parse tree
	 */
	exitListValueExpr?: (ctx: ListValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listConcatenation`.
	 * @param ctx the parse tree
	 */
	enterListConcatenation?: (ctx: ListConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listConcatenation`.
	 * @param ctx the parse tree
	 */
	exitListConcatenation?: (ctx: ListConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listPrimary`.
	 * @param ctx the parse tree
	 */
	enterListPrimary?: (ctx: ListPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listPrimary`.
	 * @param ctx the parse tree
	 */
	exitListPrimary?: (ctx: ListPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueFunction`.
	 * @param ctx the parse tree
	 */
	enterListValueFunction?: (ctx: ListValueFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueFunction`.
	 * @param ctx the parse tree
	 */
	exitListValueFunction?: (ctx: ListValueFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.trimListFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimListFunction?: (ctx: TrimListFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.trimListFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimListFunction?: (ctx: TrimListFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementsFunction`.
	 * @param ctx the parse tree
	 */
	enterElementsFunction?: (ctx: ElementsFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementsFunction`.
	 * @param ctx the parse tree
	 */
	exitElementsFunction?: (ctx: ElementsFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueConstructor`.
	 * @param ctx the parse tree
	 */
	enterListValueConstructor?: (ctx: ListValueConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueConstructor`.
	 * @param ctx the parse tree
	 */
	exitListValueConstructor?: (ctx: ListValueConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listValueConstructorByEnumeration`.
	 * @param ctx the parse tree
	 */
	enterListValueConstructorByEnumeration?: (ctx: ListValueConstructorByEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listValueConstructorByEnumeration`.
	 * @param ctx the parse tree
	 */
	exitListValueConstructorByEnumeration?: (ctx: ListValueConstructorByEnumerationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listElementList`.
	 * @param ctx the parse tree
	 */
	enterListElementList?: (ctx: ListElementListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listElementList`.
	 * @param ctx the parse tree
	 */
	exitListElementList?: (ctx: ListElementListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listElement`.
	 * @param ctx the parse tree
	 */
	enterListElement?: (ctx: ListElementContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listElement`.
	 * @param ctx the parse tree
	 */
	exitListElement?: (ctx: ListElementContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.recordValueConstructor`.
	 * @param ctx the parse tree
	 */
	enterRecordValueConstructor?: (ctx: RecordValueConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.recordValueConstructor`.
	 * @param ctx the parse tree
	 */
	exitRecordValueConstructor?: (ctx: RecordValueConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldsSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldsSpec?: (ctx: FieldsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldsSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldsSpec?: (ctx: FieldsSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValueExpr`.
	 * @param ctx the parse tree
	 */
	enterPathValueExpr?: (ctx: PathValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValueExpr`.
	 * @param ctx the parse tree
	 */
	exitPathValueExpr?: (ctx: PathValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValueConcatenation`.
	 * @param ctx the parse tree
	 */
	enterPathValueConcatenation?: (ctx: PathValueConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValueConcatenation`.
	 * @param ctx the parse tree
	 */
	exitPathValueConcatenation?: (ctx: PathValueConcatenationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValuePrimary`.
	 * @param ctx the parse tree
	 */
	enterPathValuePrimary?: (ctx: PathValuePrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValuePrimary`.
	 * @param ctx the parse tree
	 */
	exitPathValuePrimary?: (ctx: PathValuePrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValueConstructor`.
	 * @param ctx the parse tree
	 */
	enterPathValueConstructor?: (ctx: PathValueConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValueConstructor`.
	 * @param ctx the parse tree
	 */
	exitPathValueConstructor?: (ctx: PathValueConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathValueConstructorByEnumeration`.
	 * @param ctx the parse tree
	 */
	enterPathValueConstructorByEnumeration?: (ctx: PathValueConstructorByEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathValueConstructorByEnumeration`.
	 * @param ctx the parse tree
	 */
	exitPathValueConstructorByEnumeration?: (ctx: PathValueConstructorByEnumerationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathElementList`.
	 * @param ctx the parse tree
	 */
	enterPathElementList?: (ctx: PathElementListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathElementList`.
	 * @param ctx the parse tree
	 */
	exitPathElementList?: (ctx: PathElementListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathElementListStart`.
	 * @param ctx the parse tree
	 */
	enterPathElementListStart?: (ctx: PathElementListStartContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathElementListStart`.
	 * @param ctx the parse tree
	 */
	exitPathElementListStart?: (ctx: PathElementListStartContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathElementListStep`.
	 * @param ctx the parse tree
	 */
	enterPathElementListStep?: (ctx: PathElementListStepContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathElementListStep`.
	 * @param ctx the parse tree
	 */
	exitPathElementListStep?: (ctx: PathElementListStepContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyRef`.
	 * @param ctx the parse tree
	 */
	enterPropertyRef?: (ctx: PropertyRefContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyRef`.
	 * @param ctx the parse tree
	 */
	exitPropertyRef?: (ctx: PropertyRefContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertySource`.
	 * @param ctx the parse tree
	 */
	enterPropertySource?: (ctx: PropertySourceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertySource`.
	 * @param ctx the parse tree
	 */
	exitPropertySource?: (ctx: PropertySourceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueQueryExpr`.
	 * @param ctx the parse tree
	 */
	enterValueQueryExpr?: (ctx: ValueQueryExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueQueryExpr`.
	 * @param ctx the parse tree
	 */
	exitValueQueryExpr?: (ctx: ValueQueryExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.caseExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseExpr?: (ctx: CaseExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.caseExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseExpr?: (ctx: CaseExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.caseAbbreviation`.
	 * @param ctx the parse tree
	 */
	enterCaseAbbreviation?: (ctx: CaseAbbreviationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.caseAbbreviation`.
	 * @param ctx the parse tree
	 */
	exitCaseAbbreviation?: (ctx: CaseAbbreviationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.caseSpecification`.
	 * @param ctx the parse tree
	 */
	enterCaseSpecification?: (ctx: CaseSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.caseSpecification`.
	 * @param ctx the parse tree
	 */
	exitCaseSpecification?: (ctx: CaseSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleCase`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleCase`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.searchedCase`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.searchedCase`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.simpleWhenClause`.
	 * @param ctx the parse tree
	 */
	enterSimpleWhenClause?: (ctx: SimpleWhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.simpleWhenClause`.
	 * @param ctx the parse tree
	 */
	exitSimpleWhenClause?: (ctx: SimpleWhenClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.searchedWhenClause`.
	 * @param ctx the parse tree
	 */
	enterSearchedWhenClause?: (ctx: SearchedWhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.searchedWhenClause`.
	 * @param ctx the parse tree
	 */
	exitSearchedWhenClause?: (ctx: SearchedWhenClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.caseOperand`.
	 * @param ctx the parse tree
	 */
	enterCaseOperand?: (ctx: CaseOperandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.caseOperand`.
	 * @param ctx the parse tree
	 */
	exitCaseOperand?: (ctx: CaseOperandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.whenOperandList`.
	 * @param ctx the parse tree
	 */
	enterWhenOperandList?: (ctx: WhenOperandListContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.whenOperandList`.
	 * @param ctx the parse tree
	 */
	exitWhenOperandList?: (ctx: WhenOperandListContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.whenOperand`.
	 * @param ctx the parse tree
	 */
	enterWhenOperand?: (ctx: WhenOperandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.whenOperand`.
	 * @param ctx the parse tree
	 */
	exitWhenOperand?: (ctx: WhenOperandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.resultExpr`.
	 * @param ctx the parse tree
	 */
	enterResultExpr?: (ctx: ResultExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.resultExpr`.
	 * @param ctx the parse tree
	 */
	exitResultExpr?: (ctx: ResultExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.castSpec`.
	 * @param ctx the parse tree
	 */
	enterCastSpec?: (ctx: CastSpecContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.castSpec`.
	 * @param ctx the parse tree
	 */
	exitCastSpec?: (ctx: CastSpecContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.castOperand`.
	 * @param ctx the parse tree
	 */
	enterCastOperand?: (ctx: CastOperandContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.castOperand`.
	 * @param ctx the parse tree
	 */
	exitCastOperand?: (ctx: CastOperandContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.castTarget`.
	 * @param ctx the parse tree
	 */
	enterCastTarget?: (ctx: CastTargetContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.castTarget`.
	 * @param ctx the parse tree
	 */
	exitCastTarget?: (ctx: CastTargetContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementIdFunction`.
	 * @param ctx the parse tree
	 */
	enterElementIdFunction?: (ctx: ElementIdFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementIdFunction`.
	 * @param ctx the parse tree
	 */
	exitElementIdFunction?: (ctx: ElementIdFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.letValueExpr`.
	 * @param ctx the parse tree
	 */
	enterLetValueExpr?: (ctx: LetValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.letValueExpr`.
	 * @param ctx the parse tree
	 */
	exitLetValueExpr?: (ctx: LetValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.generalLiteral`.
	 * @param ctx the parse tree
	 */
	enterGeneralLiteral?: (ctx: GeneralLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.generalLiteral`.
	 * @param ctx the parse tree
	 */
	exitGeneralLiteral?: (ctx: GeneralLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.predefinedTypeLiteral`.
	 * @param ctx the parse tree
	 */
	enterPredefinedTypeLiteral?: (ctx: PredefinedTypeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.predefinedTypeLiteral`.
	 * @param ctx the parse tree
	 */
	exitPredefinedTypeLiteral?: (ctx: PredefinedTypeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unsignedLiteral`.
	 * @param ctx the parse tree
	 */
	enterUnsignedLiteral?: (ctx: UnsignedLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unsignedLiteral`.
	 * @param ctx the parse tree
	 */
	exitUnsignedLiteral?: (ctx: UnsignedLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.characterStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterCharacterStringLiteral?: (ctx: CharacterStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.characterStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitCharacterStringLiteral?: (ctx: CharacterStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unbrokenCharacterStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterUnbrokenCharacterStringLiteral?: (ctx: UnbrokenCharacterStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unbrokenCharacterStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitUnbrokenCharacterStringLiteral?: (ctx: UnbrokenCharacterStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.singleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterSingleQuotedCharacterSequence?: (ctx: SingleQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.singleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitSingleQuotedCharacterSequence?: (ctx: SingleQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.doubleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterDoubleQuotedCharacterSequence?: (ctx: DoubleQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.doubleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitDoubleQuotedCharacterSequence?: (ctx: DoubleQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.accentQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterAccentQuotedCharacterSequence?: (ctx: AccentQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.accentQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitAccentQuotedCharacterSequence?: (ctx: AccentQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.noEscape`.
	 * @param ctx the parse tree
	 */
	enterNoEscape?: (ctx: NoEscapeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.noEscape`.
	 * @param ctx the parse tree
	 */
	exitNoEscape?: (ctx: NoEscapeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unbrokenSingleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterUnbrokenSingleQuotedCharacterSequence?: (ctx: UnbrokenSingleQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unbrokenSingleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitUnbrokenSingleQuotedCharacterSequence?: (ctx: UnbrokenSingleQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unbrokenDoubleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterUnbrokenDoubleQuotedCharacterSequence?: (ctx: UnbrokenDoubleQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unbrokenDoubleQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitUnbrokenDoubleQuotedCharacterSequence?: (ctx: UnbrokenDoubleQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.unbrokenAccentQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	enterUnbrokenAccentQuotedCharacterSequence?: (ctx: UnbrokenAccentQuotedCharacterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.unbrokenAccentQuotedCharacterSequence`.
	 * @param ctx the parse tree
	 */
	exitUnbrokenAccentQuotedCharacterSequence?: (ctx: UnbrokenAccentQuotedCharacterSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.temporalLiteral`.
	 * @param ctx the parse tree
	 */
	enterTemporalLiteral?: (ctx: TemporalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.temporalLiteral`.
	 * @param ctx the parse tree
	 */
	exitTemporalLiteral?: (ctx: TemporalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateLiteral`.
	 * @param ctx the parse tree
	 */
	enterDateLiteral?: (ctx: DateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateLiteral`.
	 * @param ctx the parse tree
	 */
	exitDateLiteral?: (ctx: DateLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.timeLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimeLiteral?: (ctx: TimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.timeLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimeLiteral?: (ctx: TimeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeLiteral`.
	 * @param ctx the parse tree
	 */
	enterDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeLiteral`.
	 * @param ctx the parse tree
	 */
	exitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateString`.
	 * @param ctx the parse tree
	 */
	enterDateString?: (ctx: DateStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateString`.
	 * @param ctx the parse tree
	 */
	exitDateString?: (ctx: DateStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.timeString`.
	 * @param ctx the parse tree
	 */
	enterTimeString?: (ctx: TimeStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.timeString`.
	 * @param ctx the parse tree
	 */
	exitTimeString?: (ctx: TimeStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.dateTimeString`.
	 * @param ctx the parse tree
	 */
	enterDateTimeString?: (ctx: DateTimeStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.dateTimeString`.
	 * @param ctx the parse tree
	 */
	exitDateTimeString?: (ctx: DateTimeStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sqlDateTimeLiteral`.
	 * @param ctx the parse tree
	 */
	enterSqlDateTimeLiteral?: (ctx: SqlDateTimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sqlDateTimeLiteral`.
	 * @param ctx the parse tree
	 */
	exitSqlDateTimeLiteral?: (ctx: SqlDateTimeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationLiteral`.
	 * @param ctx the parse tree
	 */
	enterDurationLiteral?: (ctx: DurationLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationLiteral`.
	 * @param ctx the parse tree
	 */
	exitDurationLiteral?: (ctx: DurationLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.durationString`.
	 * @param ctx the parse tree
	 */
	enterDurationString?: (ctx: DurationStringContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.durationString`.
	 * @param ctx the parse tree
	 */
	exitDurationString?: (ctx: DurationStringContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sqlIntervalLiteral`.
	 * @param ctx the parse tree
	 */
	enterSqlIntervalLiteral?: (ctx: SqlIntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sqlIntervalLiteral`.
	 * @param ctx the parse tree
	 */
	exitSqlIntervalLiteral?: (ctx: SqlIntervalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.sqlIntervalType`.
	 * @param ctx the parse tree
	 */
	enterSqlIntervalType?: (ctx: SqlIntervalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.sqlIntervalType`.
	 * @param ctx the parse tree
	 */
	exitSqlIntervalType?: (ctx: SqlIntervalTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	enterListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	exitListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.recordLiteral`.
	 * @param ctx the parse tree
	 */
	enterRecordLiteral?: (ctx: RecordLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.recordLiteral`.
	 * @param ctx the parse tree
	 */
	exitRecordLiteral?: (ctx: RecordLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.objectName`.
	 * @param ctx the parse tree
	 */
	enterObjectName?: (ctx: ObjectNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.objectName`.
	 * @param ctx the parse tree
	 */
	exitObjectName?: (ctx: ObjectNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.objectNameOrBindingVar`.
	 * @param ctx the parse tree
	 */
	enterObjectNameOrBindingVar?: (ctx: ObjectNameOrBindingVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.objectNameOrBindingVar`.
	 * @param ctx the parse tree
	 */
	exitObjectNameOrBindingVar?: (ctx: ObjectNameOrBindingVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.directoryName`.
	 * @param ctx the parse tree
	 */
	enterDirectoryName?: (ctx: DirectoryNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.directoryName`.
	 * @param ctx the parse tree
	 */
	exitDirectoryName?: (ctx: DirectoryNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.schemaName`.
	 * @param ctx the parse tree
	 */
	enterSchemaName?: (ctx: SchemaNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.schemaName`.
	 * @param ctx the parse tree
	 */
	exitSchemaName?: (ctx: SchemaNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphName`.
	 * @param ctx the parse tree
	 */
	enterGraphName?: (ctx: GraphNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphName`.
	 * @param ctx the parse tree
	 */
	exitGraphName?: (ctx: GraphNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.delimitedGraphName`.
	 * @param ctx the parse tree
	 */
	enterDelimitedGraphName?: (ctx: DelimitedGraphNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.delimitedGraphName`.
	 * @param ctx the parse tree
	 */
	exitDelimitedGraphName?: (ctx: DelimitedGraphNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphTypeName`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeName?: (ctx: GraphTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphTypeName`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeName?: (ctx: GraphTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementTypeName`.
	 * @param ctx the parse tree
	 */
	enterElementTypeName?: (ctx: ElementTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementTypeName`.
	 * @param ctx the parse tree
	 */
	exitElementTypeName?: (ctx: ElementTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableName`.
	 * @param ctx the parse tree
	 */
	enterBindingTableName?: (ctx: BindingTableNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableName`.
	 * @param ctx the parse tree
	 */
	exitBindingTableName?: (ctx: BindingTableNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.delimitedBindingTableName`.
	 * @param ctx the parse tree
	 */
	enterDelimitedBindingTableName?: (ctx: DelimitedBindingTableNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.delimitedBindingTableName`.
	 * @param ctx the parse tree
	 */
	exitDelimitedBindingTableName?: (ctx: DelimitedBindingTableNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.procedureName`.
	 * @param ctx the parse tree
	 */
	enterProcedureName?: (ctx: ProcedureNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.procedureName`.
	 * @param ctx the parse tree
	 */
	exitProcedureName?: (ctx: ProcedureNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.labelName`.
	 * @param ctx the parse tree
	 */
	enterLabelName?: (ctx: LabelNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.labelName`.
	 * @param ctx the parse tree
	 */
	exitLabelName?: (ctx: LabelNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.parameterName`.
	 * @param ctx the parse tree
	 */
	enterParameterName?: (ctx: ParameterNameContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.parameterName`.
	 * @param ctx the parse tree
	 */
	exitParameterName?: (ctx: ParameterNameContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphVar`.
	 * @param ctx the parse tree
	 */
	enterGraphVar?: (ctx: GraphVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphVar`.
	 * @param ctx the parse tree
	 */
	exitGraphVar?: (ctx: GraphVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.graphPatternVar`.
	 * @param ctx the parse tree
	 */
	enterGraphPatternVar?: (ctx: GraphPatternVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.graphPatternVar`.
	 * @param ctx the parse tree
	 */
	exitGraphPatternVar?: (ctx: GraphPatternVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathOrSubpathVar`.
	 * @param ctx the parse tree
	 */
	enterPathOrSubpathVar?: (ctx: PathOrSubpathVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathOrSubpathVar`.
	 * @param ctx the parse tree
	 */
	exitPathOrSubpathVar?: (ctx: PathOrSubpathVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.elementVar`.
	 * @param ctx the parse tree
	 */
	enterElementVar?: (ctx: ElementVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.elementVar`.
	 * @param ctx the parse tree
	 */
	exitElementVar?: (ctx: ElementVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.pathVar`.
	 * @param ctx the parse tree
	 */
	enterPathVar?: (ctx: PathVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.pathVar`.
	 * @param ctx the parse tree
	 */
	exitPathVar?: (ctx: PathVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.subpathVar`.
	 * @param ctx the parse tree
	 */
	enterSubpathVar?: (ctx: SubpathVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.subpathVar`.
	 * @param ctx the parse tree
	 */
	exitSubpathVar?: (ctx: SubpathVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingTableVar`.
	 * @param ctx the parse tree
	 */
	enterBindingTableVar?: (ctx: BindingTableVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingTableVar`.
	 * @param ctx the parse tree
	 */
	exitBindingTableVar?: (ctx: BindingTableVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.valueVar`.
	 * @param ctx the parse tree
	 */
	enterValueVar?: (ctx: ValueVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.valueVar`.
	 * @param ctx the parse tree
	 */
	exitValueVar?: (ctx: ValueVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.bindingVar`.
	 * @param ctx the parse tree
	 */
	enterBindingVar?: (ctx: BindingVarContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.bindingVar`.
	 * @param ctx the parse tree
	 */
	exitBindingVar?: (ctx: BindingVarContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.token`.
	 * @param ctx the parse tree
	 */
	enterToken?: (ctx: TokenContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.token`.
	 * @param ctx the parse tree
	 */
	exitToken?: (ctx: TokenContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nonDelimiterToken`.
	 * @param ctx the parse tree
	 */
	enterNonDelimiterToken?: (ctx: NonDelimiterTokenContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nonDelimiterToken`.
	 * @param ctx the parse tree
	 */
	exitNonDelimiterToken?: (ctx: NonDelimiterTokenContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.separatedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSeparatedIdentifier?: (ctx: SeparatedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.separatedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSeparatedIdentifier?: (ctx: SeparatedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nonDelimitedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterNonDelimitedIdentifier?: (ctx: NonDelimitedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nonDelimitedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitNonDelimitedIdentifier?: (ctx: NonDelimitedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.delimitedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDelimitedIdentifier?: (ctx: DelimitedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.delimitedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDelimitedIdentifier?: (ctx: DelimitedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.keyWord`.
	 * @param ctx the parse tree
	 */
	enterKeyWord?: (ctx: KeyWordContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.keyWord`.
	 * @param ctx the parse tree
	 */
	exitKeyWord?: (ctx: KeyWordContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.preReservedWord`.
	 * @param ctx the parse tree
	 */
	enterPreReservedWord?: (ctx: PreReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.preReservedWord`.
	 * @param ctx the parse tree
	 */
	exitPreReservedWord?: (ctx: PreReservedWordContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nonReservedWord`.
	 * @param ctx the parse tree
	 */
	enterNonReservedWord?: (ctx: NonReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nonReservedWord`.
	 * @param ctx the parse tree
	 */
	exitNonReservedWord?: (ctx: NonReservedWordContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.delimiterToken`.
	 * @param ctx the parse tree
	 */
	enterDelimiterToken?: (ctx: DelimiterTokenContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.delimiterToken`.
	 * @param ctx the parse tree
	 */
	exitDelimiterToken?: (ctx: DelimiterTokenContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgeSynonym`.
	 * @param ctx the parse tree
	 */
	enterEdgeSynonym?: (ctx: EdgeSynonymContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgeSynonym`.
	 * @param ctx the parse tree
	 */
	exitEdgeSynonym?: (ctx: EdgeSynonymContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.edgesSynonym`.
	 * @param ctx the parse tree
	 */
	enterEdgesSynonym?: (ctx: EdgesSynonymContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.edgesSynonym`.
	 * @param ctx the parse tree
	 */
	exitEdgesSynonym?: (ctx: EdgesSynonymContext) => void;
	/**
	 * Enter a parse tree produced by `GqlParser.nodeSynonym`.
	 * @param ctx the parse tree
	 */
	enterNodeSynonym?: (ctx: NodeSynonymContext) => void;
	/**
	 * Exit a parse tree produced by `GqlParser.nodeSynonym`.
	 * @param ctx the parse tree
	 */
	exitNodeSynonym?: (ctx: NodeSynonymContext) => void;
}

