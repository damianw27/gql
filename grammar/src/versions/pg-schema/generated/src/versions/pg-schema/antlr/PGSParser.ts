// Generated from src/versions/pg-schema/antlr/PGSParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from '@gql-grammar/antlr4';
import PGSParserListener from "./PGSParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PGSParser extends Parser {
	public static readonly CREATE = 1;
	public static readonly NODE = 2;
	public static readonly EDGE = 3;
	public static readonly OPEN = 4;
	public static readonly OPTIONAL = 5;
	public static readonly TYPE = 6;
	public static readonly GRAPH = 7;
	public static readonly STRICT = 8;
	public static readonly LOOSE = 9;
	public static readonly ABSTRACT = 10;
	public static readonly IMPORTS = 11;
	public static readonly LPAREN = 12;
	public static readonly RPAREN = 13;
	public static readonly LBRACK = 14;
	public static readonly RBRACK = 15;
	public static readonly LBRACE = 16;
	public static readonly RBRACE = 17;
	public static readonly COMMA = 18;
	public static readonly COLON = 19;
	public static readonly SEMICOLON = 20;
	public static readonly DASH = 21;
	public static readonly ARROW = 22;
	public static readonly BAR = 23;
	public static readonly AMPERSAND = 24;
	public static readonly QUESTION = 25;
	public static readonly StringLiteral = 26;
	public static readonly Whitespace = 27;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_createType = 1;
	public static readonly RULE_createNodeType = 2;
	public static readonly RULE_createEdgeType = 3;
	public static readonly RULE_createGraphType = 4;
	public static readonly RULE_graphType = 5;
	public static readonly RULE_typeForm = 6;
	public static readonly RULE_graphTypeDefinition = 7;
	public static readonly RULE_elementTypes = 8;
	public static readonly RULE_elementType = 9;
	public static readonly RULE_nodeType = 10;
	public static readonly RULE_edgeType = 11;
	public static readonly RULE_middleType = 12;
	public static readonly RULE_endpointType = 13;
	public static readonly RULE_labelPropertySpec = 14;
	public static readonly RULE_labelSpec = 15;
	public static readonly RULE_propertySpec = 16;
	public static readonly RULE_properties = 17;
	public static readonly RULE_property = 18;
	public static readonly RULE_propertyType = 19;
	public static readonly RULE_key = 20;
	public static readonly RULE_labelName = 21;
	public static readonly RULE_typeName = 22;
	public static readonly literalNames: (string | null)[] = [ null, "'create'", 
                                                            "'node'", "'edge'", 
                                                            "'open'", "'optional'", 
                                                            "'type'", "'graph'", 
                                                            "'strict'", 
                                                            "'loose'", "'abstract'", 
                                                            "'imports'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "','", "':'", 
                                                            "';'", "'-'", 
                                                            "'>'", "'|'", 
                                                            "'&'", "'?'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "CREATE", 
                                                             "NODE", "EDGE", 
                                                             "OPEN", "OPTIONAL", 
                                                             "TYPE", "GRAPH", 
                                                             "STRICT", "LOOSE", 
                                                             "ABSTRACT", 
                                                             "IMPORTS", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACK", "RBRACK", 
                                                             "LBRACE", "RBRACE", 
                                                             "COMMA", "COLON", 
                                                             "SEMICOLON", 
                                                             "DASH", "ARROW", 
                                                             "BAR", "AMPERSAND", 
                                                             "QUESTION", 
                                                             "StringLiteral", 
                                                             "Whitespace" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "createType", "createNodeType", "createEdgeType", "createGraphType", 
		"graphType", "typeForm", "graphTypeDefinition", "elementTypes", "elementType", 
		"nodeType", "edgeType", "middleType", "endpointType", "labelPropertySpec", 
		"labelSpec", "propertySpec", "properties", "property", "propertyType", 
		"key", "labelName", "typeName",
	];
	public get grammarFileName(): string { return "PGSParser.g4"; }
	public get literalNames(): (string | null)[] { return PGSParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PGSParser.symbolicNames; }
	public get ruleNames(): string[] { return PGSParser.ruleNames; }
	public get serializedATN(): number[] { return PGSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PGSParser._ATN, PGSParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PGSParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 46;
				this.createType();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(PGSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createType(): CreateTypeContext {
		let localctx: CreateTypeContext = new CreateTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PGSParser.RULE_createType);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 54;
				this.createNodeType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 55;
				this.createEdgeType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 56;
				this.createGraphType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createNodeType(): CreateNodeTypeContext {
		let localctx: CreateNodeTypeContext = new CreateNodeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PGSParser.RULE_createNodeType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(PGSParser.CREATE);
			this.state = 60;
			this.match(PGSParser.NODE);
			this.state = 61;
			this.match(PGSParser.TYPE);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 62;
				this.match(PGSParser.ABSTRACT);
				}
			}

			this.state = 65;
			this.nodeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createEdgeType(): CreateEdgeTypeContext {
		let localctx: CreateEdgeTypeContext = new CreateEdgeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PGSParser.RULE_createEdgeType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(PGSParser.CREATE);
			this.state = 68;
			this.match(PGSParser.EDGE);
			this.state = 69;
			this.match(PGSParser.TYPE);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 70;
				this.match(PGSParser.ABSTRACT);
				}
			}

			this.state = 73;
			this.edgeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createGraphType(): CreateGraphTypeContext {
		let localctx: CreateGraphTypeContext = new CreateGraphTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PGSParser.RULE_createGraphType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(PGSParser.CREATE);
			this.state = 76;
			this.match(PGSParser.GRAPH);
			this.state = 77;
			this.match(PGSParser.TYPE);
			this.state = 78;
			this.graphType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphType(): GraphTypeContext {
		let localctx: GraphTypeContext = new GraphTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PGSParser.RULE_graphType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.typeName();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===9) {
				{
				this.state = 81;
				this.typeForm();
				}
			}

			this.state = 84;
			this.graphTypeDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeForm(): TypeFormContext {
		let localctx: TypeFormContext = new TypeFormContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PGSParser.RULE_typeForm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			_la = this._input.LA(1);
			if(!(_la===8 || _la===9)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphTypeDefinition(): GraphTypeDefinitionContext {
		let localctx: GraphTypeDefinitionContext = new GraphTypeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PGSParser.RULE_graphTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 88;
				this.match(PGSParser.IMPORTS);
				this.state = 89;
				this.typeName();
				}
			}

			this.state = 92;
			this.match(PGSParser.LBRACE);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===26) {
				{
				this.state = 93;
				this.elementTypes();
				}
			}

			this.state = 96;
			this.match(PGSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementTypes(): ElementTypesContext {
		let localctx: ElementTypesContext = new ElementTypesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PGSParser.RULE_elementTypes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.elementType();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 99;
				this.match(PGSParser.COMMA);
				this.state = 100;
				this.elementType();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementType(): ElementTypeContext {
		let localctx: ElementTypeContext = new ElementTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, PGSParser.RULE_elementType);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 106;
				this.typeName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 107;
				this.nodeType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 108;
				this.edgeType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeType(): NodeTypeContext {
		let localctx: NodeTypeContext = new NodeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, PGSParser.RULE_nodeType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this.match(PGSParser.LPAREN);
			this.state = 112;
			this.typeName();
			this.state = 113;
			this.labelPropertySpec();
			this.state = 114;
			this.match(PGSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public edgeType(): EdgeTypeContext {
		let localctx: EdgeTypeContext = new EdgeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PGSParser.RULE_edgeType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.endpointType();
			this.state = 117;
			this.match(PGSParser.DASH);
			this.state = 118;
			this.middleType();
			this.state = 119;
			this.match(PGSParser.DASH);
			this.state = 120;
			this.match(PGSParser.ARROW);
			this.state = 121;
			this.endpointType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public middleType(): MiddleTypeContext {
		let localctx: MiddleTypeContext = new MiddleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, PGSParser.RULE_middleType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(PGSParser.LBRACK);
			this.state = 124;
			this.typeName();
			this.state = 125;
			this.labelPropertySpec();
			this.state = 126;
			this.match(PGSParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endpointType(): EndpointTypeContext {
		let localctx: EndpointTypeContext = new EndpointTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PGSParser.RULE_endpointType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this.match(PGSParser.LPAREN);
			this.state = 129;
			this.labelPropertySpec();
			this.state = 130;
			this.match(PGSParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelPropertySpec(): LabelPropertySpecContext {
		let localctx: LabelPropertySpecContext = new LabelPropertySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, PGSParser.RULE_labelPropertySpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 132;
				this.match(PGSParser.COLON);
				this.state = 133;
				this.labelSpec(0);
				}
			}

			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 136;
				this.match(PGSParser.OPEN);
				}
			}

			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 139;
				this.propertySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public labelSpec(): LabelSpecContext;
	public labelSpec(_p: number): LabelSpecContext;
	// @RuleVersion(0)
	public labelSpec(_p?: number): LabelSpecContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LabelSpecContext = new LabelSpecContext(this, this._ctx, _parentState);
		let _prevctx: LabelSpecContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, PGSParser.RULE_labelSpec, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 143;
				this.match(PGSParser.LPAREN);
				this.state = 144;
				this.labelSpec(0);
				this.state = 145;
				this.match(PGSParser.RPAREN);
				}
				break;
			case 2:
				{
				this.state = 147;
				this.match(PGSParser.LBRACK);
				this.state = 148;
				this.labelSpec(0);
				this.state = 149;
				this.match(PGSParser.RBRACK);
				}
				break;
			case 3:
				{
				this.state = 151;
				this.labelName();
				}
				break;
			case 4:
				{
				this.state = 152;
				this.typeName();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 165;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 163;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new LabelSpecContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PGSParser.RULE_labelSpec);
						this.state = 155;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 156;
						this.match(PGSParser.BAR);
						this.state = 157;
						this.labelSpec(6);
						}
						break;
					case 2:
						{
						localctx = new LabelSpecContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PGSParser.RULE_labelSpec);
						this.state = 158;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 159;
						this.match(PGSParser.AMPERSAND);
						this.state = 160;
						this.labelSpec(5);
						}
						break;
					case 3:
						{
						localctx = new LabelSpecContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PGSParser.RULE_labelSpec);
						this.state = 161;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 162;
						this.match(PGSParser.QUESTION);
						}
						break;
					}
					}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertySpec(): PropertySpecContext {
		let localctx: PropertySpecContext = new PropertySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, PGSParser.RULE_propertySpec);
		let _la: number;
		try {
			this.state = 181;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 168;
				this.match(PGSParser.LBRACE);
				this.state = 169;
				this.properties();
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 170;
					this.match(PGSParser.COMMA);
					this.state = 171;
					this.match(PGSParser.OPEN);
					}
				}

				this.state = 174;
				this.match(PGSParser.RBRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 176;
				this.match(PGSParser.LBRACE);
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 177;
					this.match(PGSParser.OPEN);
					}
				}

				this.state = 180;
				this.match(PGSParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public properties(): PropertiesContext {
		let localctx: PropertiesContext = new PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, PGSParser.RULE_properties);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.property();
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 184;
					this.match(PGSParser.COMMA);
					this.state = 185;
					this.property();
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let localctx: PropertyContext = new PropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, PGSParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 191;
				this.match(PGSParser.OPTIONAL);
				}
			}

			this.state = 194;
			this.key();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 195;
				this.propertyType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyType(): PropertyTypeContext {
		let localctx: PropertyTypeContext = new PropertyTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, PGSParser.RULE_propertyType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			this.match(PGSParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let localctx: KeyContext = new KeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, PGSParser.RULE_key);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.match(PGSParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelName(): LabelNameContext {
		let localctx: LabelNameContext = new LabelNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, PGSParser.RULE_labelName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.match(PGSParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, PGSParser.RULE_typeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 204;
			this.match(PGSParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.labelSpec_sempred(localctx as LabelSpecContext, predIndex);
		}
		return true;
	}
	private labelSpec_sempred(localctx: LabelSpecContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,27,207,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,
	0,12,0,51,9,0,1,0,1,0,1,1,1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,3,2,64,8,2,
	1,2,1,2,1,3,1,3,1,3,1,3,3,3,72,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
	3,5,83,8,5,1,5,1,5,1,6,1,6,1,7,1,7,3,7,91,8,7,1,7,1,7,3,7,95,8,7,1,7,1,
	7,1,8,1,8,1,8,5,8,102,8,8,10,8,12,8,105,9,8,1,9,1,9,1,9,3,9,110,8,9,1,10,
	1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
	12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,3,14,135,8,14,1,14,3,14,138,8,14,
	1,14,3,14,141,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,3,15,154,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,164,8,15,
	10,15,12,15,167,9,15,1,16,1,16,1,16,1,16,3,16,173,8,16,1,16,1,16,1,16,1,
	16,3,16,179,8,16,1,16,3,16,182,8,16,1,17,1,17,1,17,5,17,187,8,17,10,17,
	12,17,190,9,17,1,18,3,18,193,8,18,1,18,1,18,3,18,197,8,18,1,19,1,19,1,20,
	1,20,1,21,1,21,1,22,1,22,1,22,0,1,30,23,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,0,1,1,0,8,9,209,0,49,1,0,0,0,2,57,1,0,
	0,0,4,59,1,0,0,0,6,67,1,0,0,0,8,75,1,0,0,0,10,80,1,0,0,0,12,86,1,0,0,0,
	14,90,1,0,0,0,16,98,1,0,0,0,18,109,1,0,0,0,20,111,1,0,0,0,22,116,1,0,0,
	0,24,123,1,0,0,0,26,128,1,0,0,0,28,134,1,0,0,0,30,153,1,0,0,0,32,181,1,
	0,0,0,34,183,1,0,0,0,36,192,1,0,0,0,38,198,1,0,0,0,40,200,1,0,0,0,42,202,
	1,0,0,0,44,204,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,
	1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,0,0,1,53,1,1,
	0,0,0,54,58,3,4,2,0,55,58,3,6,3,0,56,58,3,8,4,0,57,54,1,0,0,0,57,55,1,0,
	0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,60,5,1,0,0,60,61,5,2,0,0,61,63,5,6,0,
	0,62,64,5,10,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,20,10,
	0,66,5,1,0,0,0,67,68,5,1,0,0,68,69,5,3,0,0,69,71,5,6,0,0,70,72,5,10,0,0,
	71,70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,3,22,11,0,74,7,1,0,0,0,
	75,76,5,1,0,0,76,77,5,7,0,0,77,78,5,6,0,0,78,79,3,10,5,0,79,9,1,0,0,0,80,
	82,3,44,22,0,81,83,3,12,6,0,82,81,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,
	85,3,14,7,0,85,11,1,0,0,0,86,87,7,0,0,0,87,13,1,0,0,0,88,89,5,11,0,0,89,
	91,3,44,22,0,90,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,94,5,16,0,0,93,
	95,3,16,8,0,94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,17,0,0,97,
	15,1,0,0,0,98,103,3,18,9,0,99,100,5,18,0,0,100,102,3,18,9,0,101,99,1,0,
	0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,17,1,0,0,0,105,
	103,1,0,0,0,106,110,3,44,22,0,107,110,3,20,10,0,108,110,3,22,11,0,109,106,
	1,0,0,0,109,107,1,0,0,0,109,108,1,0,0,0,110,19,1,0,0,0,111,112,5,12,0,0,
	112,113,3,44,22,0,113,114,3,28,14,0,114,115,5,13,0,0,115,21,1,0,0,0,116,
	117,3,26,13,0,117,118,5,21,0,0,118,119,3,24,12,0,119,120,5,21,0,0,120,121,
	5,22,0,0,121,122,3,26,13,0,122,23,1,0,0,0,123,124,5,14,0,0,124,125,3,44,
	22,0,125,126,3,28,14,0,126,127,5,15,0,0,127,25,1,0,0,0,128,129,5,12,0,0,
	129,130,3,28,14,0,130,131,5,13,0,0,131,27,1,0,0,0,132,133,5,19,0,0,133,
	135,3,30,15,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,138,5,
	4,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,0,139,141,3,32,16,0,
	140,139,1,0,0,0,140,141,1,0,0,0,141,29,1,0,0,0,142,143,6,15,-1,0,143,144,
	5,12,0,0,144,145,3,30,15,0,145,146,5,13,0,0,146,154,1,0,0,0,147,148,5,14,
	0,0,148,149,3,30,15,0,149,150,5,15,0,0,150,154,1,0,0,0,151,154,3,42,21,
	0,152,154,3,44,22,0,153,142,1,0,0,0,153,147,1,0,0,0,153,151,1,0,0,0,153,
	152,1,0,0,0,154,165,1,0,0,0,155,156,10,5,0,0,156,157,5,23,0,0,157,164,3,
	30,15,6,158,159,10,4,0,0,159,160,5,24,0,0,160,164,3,30,15,5,161,162,10,
	3,0,0,162,164,5,25,0,0,163,155,1,0,0,0,163,158,1,0,0,0,163,161,1,0,0,0,
	164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,31,1,0,0,0,167,165,
	1,0,0,0,168,169,5,16,0,0,169,172,3,34,17,0,170,171,5,18,0,0,171,173,5,4,
	0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,17,0,0,175,
	182,1,0,0,0,176,178,5,16,0,0,177,179,5,4,0,0,178,177,1,0,0,0,178,179,1,
	0,0,0,179,180,1,0,0,0,180,182,5,17,0,0,181,168,1,0,0,0,181,176,1,0,0,0,
	182,33,1,0,0,0,183,188,3,36,18,0,184,185,5,18,0,0,185,187,3,36,18,0,186,
	184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,35,1,0,
	0,0,190,188,1,0,0,0,191,193,5,5,0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,
	194,1,0,0,0,194,196,3,40,20,0,195,197,3,38,19,0,196,195,1,0,0,0,196,197,
	1,0,0,0,197,37,1,0,0,0,198,199,5,26,0,0,199,39,1,0,0,0,200,201,5,26,0,0,
	201,41,1,0,0,0,202,203,5,26,0,0,203,43,1,0,0,0,204,205,5,26,0,0,205,45,
	1,0,0,0,21,49,57,63,71,82,90,94,103,109,134,137,140,153,163,165,172,178,
	181,188,192,196];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PGSParser.__ATN) {
			PGSParser.__ATN = new ATNDeserializer().deserialize(PGSParser._serializedATN);
		}

		return PGSParser.__ATN;
	}


	static DecisionsToDFA = PGSParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(PGSParser.EOF, 0);
	}
	public createType_list(): CreateTypeContext[] {
		return this.getTypedRuleContexts(CreateTypeContext) as CreateTypeContext[];
	}
	public createType(i: number): CreateTypeContext {
		return this.getTypedRuleContext(CreateTypeContext, i) as CreateTypeContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_root;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
}


export class CreateTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createNodeType(): CreateNodeTypeContext {
		return this.getTypedRuleContext(CreateNodeTypeContext, 0) as CreateNodeTypeContext;
	}
	public createEdgeType(): CreateEdgeTypeContext {
		return this.getTypedRuleContext(CreateEdgeTypeContext, 0) as CreateEdgeTypeContext;
	}
	public createGraphType(): CreateGraphTypeContext {
		return this.getTypedRuleContext(CreateGraphTypeContext, 0) as CreateGraphTypeContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_createType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterCreateType) {
	 		listener.enterCreateType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitCreateType) {
	 		listener.exitCreateType(this);
		}
	}
}


export class CreateNodeTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(PGSParser.CREATE, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(PGSParser.NODE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(PGSParser.TYPE, 0);
	}
	public nodeType(): NodeTypeContext {
		return this.getTypedRuleContext(NodeTypeContext, 0) as NodeTypeContext;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(PGSParser.ABSTRACT, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_createNodeType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterCreateNodeType) {
	 		listener.enterCreateNodeType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitCreateNodeType) {
	 		listener.exitCreateNodeType(this);
		}
	}
}


export class CreateEdgeTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(PGSParser.CREATE, 0);
	}
	public EDGE(): TerminalNode {
		return this.getToken(PGSParser.EDGE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(PGSParser.TYPE, 0);
	}
	public edgeType(): EdgeTypeContext {
		return this.getTypedRuleContext(EdgeTypeContext, 0) as EdgeTypeContext;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(PGSParser.ABSTRACT, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_createEdgeType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterCreateEdgeType) {
	 		listener.enterCreateEdgeType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitCreateEdgeType) {
	 		listener.exitCreateEdgeType(this);
		}
	}
}


export class CreateGraphTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(PGSParser.CREATE, 0);
	}
	public GRAPH(): TerminalNode {
		return this.getToken(PGSParser.GRAPH, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(PGSParser.TYPE, 0);
	}
	public graphType(): GraphTypeContext {
		return this.getTypedRuleContext(GraphTypeContext, 0) as GraphTypeContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_createGraphType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterCreateGraphType) {
	 		listener.enterCreateGraphType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitCreateGraphType) {
	 		listener.exitCreateGraphType(this);
		}
	}
}


export class GraphTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public graphTypeDefinition(): GraphTypeDefinitionContext {
		return this.getTypedRuleContext(GraphTypeDefinitionContext, 0) as GraphTypeDefinitionContext;
	}
	public typeForm(): TypeFormContext {
		return this.getTypedRuleContext(TypeFormContext, 0) as TypeFormContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_graphType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterGraphType) {
	 		listener.enterGraphType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitGraphType) {
	 		listener.exitGraphType(this);
		}
	}
}


export class TypeFormContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRICT(): TerminalNode {
		return this.getToken(PGSParser.STRICT, 0);
	}
	public LOOSE(): TerminalNode {
		return this.getToken(PGSParser.LOOSE, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_typeForm;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterTypeForm) {
	 		listener.enterTypeForm(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitTypeForm) {
	 		listener.exitTypeForm(this);
		}
	}
}


export class GraphTypeDefinitionContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PGSParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PGSParser.RBRACE, 0);
	}
	public IMPORTS(): TerminalNode {
		return this.getToken(PGSParser.IMPORTS, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public elementTypes(): ElementTypesContext {
		return this.getTypedRuleContext(ElementTypesContext, 0) as ElementTypesContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_graphTypeDefinition;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterGraphTypeDefinition) {
	 		listener.enterGraphTypeDefinition(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitGraphTypeDefinition) {
	 		listener.exitGraphTypeDefinition(this);
		}
	}
}


export class ElementTypesContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementType_list(): ElementTypeContext[] {
		return this.getTypedRuleContexts(ElementTypeContext) as ElementTypeContext[];
	}
	public elementType(i: number): ElementTypeContext {
		return this.getTypedRuleContext(ElementTypeContext, i) as ElementTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PGSParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PGSParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_elementTypes;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterElementTypes) {
	 		listener.enterElementTypes(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitElementTypes) {
	 		listener.exitElementTypes(this);
		}
	}
}


export class ElementTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public nodeType(): NodeTypeContext {
		return this.getTypedRuleContext(NodeTypeContext, 0) as NodeTypeContext;
	}
	public edgeType(): EdgeTypeContext {
		return this.getTypedRuleContext(EdgeTypeContext, 0) as EdgeTypeContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_elementType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterElementType) {
	 		listener.enterElementType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitElementType) {
	 		listener.exitElementType(this);
		}
	}
}


export class NodeTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(PGSParser.LPAREN, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public labelPropertySpec(): LabelPropertySpecContext {
		return this.getTypedRuleContext(LabelPropertySpecContext, 0) as LabelPropertySpecContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(PGSParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_nodeType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterNodeType) {
	 		listener.enterNodeType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitNodeType) {
	 		listener.exitNodeType(this);
		}
	}
}


export class EdgeTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public endpointType_list(): EndpointTypeContext[] {
		return this.getTypedRuleContexts(EndpointTypeContext) as EndpointTypeContext[];
	}
	public endpointType(i: number): EndpointTypeContext {
		return this.getTypedRuleContext(EndpointTypeContext, i) as EndpointTypeContext;
	}
	public DASH_list(): TerminalNode[] {
	    	return this.getTokens(PGSParser.DASH);
	}
	public DASH(i: number): TerminalNode {
		return this.getToken(PGSParser.DASH, i);
	}
	public middleType(): MiddleTypeContext {
		return this.getTypedRuleContext(MiddleTypeContext, 0) as MiddleTypeContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(PGSParser.ARROW, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_edgeType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterEdgeType) {
	 		listener.enterEdgeType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitEdgeType) {
	 		listener.exitEdgeType(this);
		}
	}
}


export class MiddleTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(PGSParser.LBRACK, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public labelPropertySpec(): LabelPropertySpecContext {
		return this.getTypedRuleContext(LabelPropertySpecContext, 0) as LabelPropertySpecContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(PGSParser.RBRACK, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_middleType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterMiddleType) {
	 		listener.enterMiddleType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitMiddleType) {
	 		listener.exitMiddleType(this);
		}
	}
}


export class EndpointTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(PGSParser.LPAREN, 0);
	}
	public labelPropertySpec(): LabelPropertySpecContext {
		return this.getTypedRuleContext(LabelPropertySpecContext, 0) as LabelPropertySpecContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(PGSParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_endpointType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterEndpointType) {
	 		listener.enterEndpointType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitEndpointType) {
	 		listener.exitEndpointType(this);
		}
	}
}


export class LabelPropertySpecContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(PGSParser.COLON, 0);
	}
	public labelSpec(): LabelSpecContext {
		return this.getTypedRuleContext(LabelSpecContext, 0) as LabelSpecContext;
	}
	public OPEN(): TerminalNode {
		return this.getToken(PGSParser.OPEN, 0);
	}
	public propertySpec(): PropertySpecContext {
		return this.getTypedRuleContext(PropertySpecContext, 0) as PropertySpecContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_labelPropertySpec;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterLabelPropertySpec) {
	 		listener.enterLabelPropertySpec(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitLabelPropertySpec) {
	 		listener.exitLabelPropertySpec(this);
		}
	}
}


export class LabelSpecContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(PGSParser.LPAREN, 0);
	}
	public labelSpec_list(): LabelSpecContext[] {
		return this.getTypedRuleContexts(LabelSpecContext) as LabelSpecContext[];
	}
	public labelSpec(i: number): LabelSpecContext {
		return this.getTypedRuleContext(LabelSpecContext, i) as LabelSpecContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(PGSParser.RPAREN, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(PGSParser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(PGSParser.RBRACK, 0);
	}
	public labelName(): LabelNameContext {
		return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public BAR(): TerminalNode {
		return this.getToken(PGSParser.BAR, 0);
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(PGSParser.AMPERSAND, 0);
	}
	public QUESTION(): TerminalNode {
		return this.getToken(PGSParser.QUESTION, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_labelSpec;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterLabelSpec) {
	 		listener.enterLabelSpec(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitLabelSpec) {
	 		listener.exitLabelSpec(this);
		}
	}
}


export class PropertySpecContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PGSParser.LBRACE, 0);
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PGSParser.RBRACE, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(PGSParser.COMMA, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(PGSParser.OPEN, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_propertySpec;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterPropertySpec) {
	 		listener.enterPropertySpec(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitPropertySpec) {
	 		listener.exitPropertySpec(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(PGSParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(PGSParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_properties;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public key(): KeyContext {
		return this.getTypedRuleContext(KeyContext, 0) as KeyContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(PGSParser.OPTIONAL, 0);
	}
	public propertyType(): PropertyTypeContext {
		return this.getTypedRuleContext(PropertyTypeContext, 0) as PropertyTypeContext;
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_property;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterProperty) {
	 		listener.enterProperty(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitProperty) {
	 		listener.exitProperty(this);
		}
	}
}


export class PropertyTypeContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(PGSParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_propertyType;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterPropertyType) {
	 		listener.enterPropertyType(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitPropertyType) {
	 		listener.exitPropertyType(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(PGSParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_key;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterKey) {
	 		listener.enterKey(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitKey) {
	 		listener.exitKey(this);
		}
	}
}


export class LabelNameContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(PGSParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_labelName;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterLabelName) {
	 		listener.enterLabelName(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitLabelName) {
	 		listener.exitLabelName(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: PGSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(PGSParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return PGSParser.RULE_typeName;
	}
	public enterRule(listener: PGSParserListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: PGSParserListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
}
