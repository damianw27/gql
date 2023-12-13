// Generated from src/versions/pg-schema/antlr/PGSParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "@gql-grammar/antlr4";


import { RootContext } from "./PGSParser";
import { CreateTypeContext } from "./PGSParser";
import { CreateNodeTypeContext } from "./PGSParser";
import { CreateEdgeTypeContext } from "./PGSParser";
import { CreateGraphTypeContext } from "./PGSParser";
import { GraphTypeContext } from "./PGSParser";
import { TypeFormContext } from "./PGSParser";
import { GraphTypeDefinitionContext } from "./PGSParser";
import { ElementTypesContext } from "./PGSParser";
import { ElementTypeContext } from "./PGSParser";
import { NodeTypeContext } from "./PGSParser";
import { EdgeTypeContext } from "./PGSParser";
import { MiddleTypeContext } from "./PGSParser";
import { EndpointTypeContext } from "./PGSParser";
import { LabelPropertySpecContext } from "./PGSParser";
import { LabelSpecContext } from "./PGSParser";
import { PropertySpecContext } from "./PGSParser";
import { PropertiesContext } from "./PGSParser";
import { PropertyContext } from "./PGSParser";
import { PropertyTypeContext } from "./PGSParser";
import { KeyContext } from "./PGSParser";
import { LabelNameContext } from "./PGSParser";
import { TypeNameContext } from "./PGSParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PGSParser`.
 */
export default class PGSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PGSParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.createType`.
	 * @param ctx the parse tree
	 */
	enterCreateType?: (ctx: CreateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.createType`.
	 * @param ctx the parse tree
	 */
	exitCreateType?: (ctx: CreateTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.createNodeType`.
	 * @param ctx the parse tree
	 */
	enterCreateNodeType?: (ctx: CreateNodeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.createNodeType`.
	 * @param ctx the parse tree
	 */
	exitCreateNodeType?: (ctx: CreateNodeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.createEdgeType`.
	 * @param ctx the parse tree
	 */
	enterCreateEdgeType?: (ctx: CreateEdgeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.createEdgeType`.
	 * @param ctx the parse tree
	 */
	exitCreateEdgeType?: (ctx: CreateEdgeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.createGraphType`.
	 * @param ctx the parse tree
	 */
	enterCreateGraphType?: (ctx: CreateGraphTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.createGraphType`.
	 * @param ctx the parse tree
	 */
	exitCreateGraphType?: (ctx: CreateGraphTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.graphType`.
	 * @param ctx the parse tree
	 */
	enterGraphType?: (ctx: GraphTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.graphType`.
	 * @param ctx the parse tree
	 */
	exitGraphType?: (ctx: GraphTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.typeForm`.
	 * @param ctx the parse tree
	 */
	enterTypeForm?: (ctx: TypeFormContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.typeForm`.
	 * @param ctx the parse tree
	 */
	exitTypeForm?: (ctx: TypeFormContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.graphTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterGraphTypeDefinition?: (ctx: GraphTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.graphTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitGraphTypeDefinition?: (ctx: GraphTypeDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.elementTypes`.
	 * @param ctx the parse tree
	 */
	enterElementTypes?: (ctx: ElementTypesContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.elementTypes`.
	 * @param ctx the parse tree
	 */
	exitElementTypes?: (ctx: ElementTypesContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.elementType`.
	 * @param ctx the parse tree
	 */
	enterElementType?: (ctx: ElementTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.elementType`.
	 * @param ctx the parse tree
	 */
	exitElementType?: (ctx: ElementTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.nodeType`.
	 * @param ctx the parse tree
	 */
	enterNodeType?: (ctx: NodeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.nodeType`.
	 * @param ctx the parse tree
	 */
	exitNodeType?: (ctx: NodeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.edgeType`.
	 * @param ctx the parse tree
	 */
	enterEdgeType?: (ctx: EdgeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.edgeType`.
	 * @param ctx the parse tree
	 */
	exitEdgeType?: (ctx: EdgeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.middleType`.
	 * @param ctx the parse tree
	 */
	enterMiddleType?: (ctx: MiddleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.middleType`.
	 * @param ctx the parse tree
	 */
	exitMiddleType?: (ctx: MiddleTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.endpointType`.
	 * @param ctx the parse tree
	 */
	enterEndpointType?: (ctx: EndpointTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.endpointType`.
	 * @param ctx the parse tree
	 */
	exitEndpointType?: (ctx: EndpointTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.labelPropertySpec`.
	 * @param ctx the parse tree
	 */
	enterLabelPropertySpec?: (ctx: LabelPropertySpecContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.labelPropertySpec`.
	 * @param ctx the parse tree
	 */
	exitLabelPropertySpec?: (ctx: LabelPropertySpecContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.labelSpec`.
	 * @param ctx the parse tree
	 */
	enterLabelSpec?: (ctx: LabelSpecContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.labelSpec`.
	 * @param ctx the parse tree
	 */
	exitLabelSpec?: (ctx: LabelSpecContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.propertySpec`.
	 * @param ctx the parse tree
	 */
	enterPropertySpec?: (ctx: PropertySpecContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.propertySpec`.
	 * @param ctx the parse tree
	 */
	exitPropertySpec?: (ctx: PropertySpecContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.properties`.
	 * @param ctx the parse tree
	 */
	enterProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.properties`.
	 * @param ctx the parse tree
	 */
	exitProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.propertyType`.
	 * @param ctx the parse tree
	 */
	enterPropertyType?: (ctx: PropertyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.propertyType`.
	 * @param ctx the parse tree
	 */
	exitPropertyType?: (ctx: PropertyTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.labelName`.
	 * @param ctx the parse tree
	 */
	enterLabelName?: (ctx: LabelNameContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.labelName`.
	 * @param ctx the parse tree
	 */
	exitLabelName?: (ctx: LabelNameContext) => void;
	/**
	 * Enter a parse tree produced by `PGSParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `PGSParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;
}

