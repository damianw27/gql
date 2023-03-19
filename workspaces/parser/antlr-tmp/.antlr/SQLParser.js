// Generated from d:\projects\magister\workspaces\parser\antlr-tmp\SQLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001fU\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003 \n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003%\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004,\n\u0004\f\u0004\u000e\u0004/\u000b",
    "\u0004\u0003\u0004\u0005\u00042\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0005\u00068\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007>\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007F\n\u0007\f\u0007",
    "\u000e\u0007I\u000b\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0003\f",
    "\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0005\u0003",
    "\u0002\u001b\u001c\u0003\u0002\u0006\u000b\u0003\u0002\u0003\u0005\u0002",
    "R\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002",
    "\u0002\u00061\u0003\u0002\u0002\u0002\b3\u0003\u0002\u0002\u0002\n5",
    "\u0003\u0002\u0002\u0002\f=\u0003\u0002\u0002\u0002\u000eJ\u0003\u0002",
    "\u0002\u0002\u0010L\u0003\u0002\u0002\u0002\u0012P\u0003\u0002\u0002",
    "\u0002\u0014R\u0003\u0002\u0002\u0002\u0016\u0017\u0005\u0004\u0003",
    "\u0002\u0017\u0018\u0007\u0002\u0002\u0003\u0018\u0003\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0007\u0014\u0002\u0002\u001a\u001b\u0005\u0006\u0004",
    "\u0002\u001b\u001c\u0007\u0015\u0002\u0002\u001c\u001f\u0005\b\u0005",
    "\u0002\u001d\u001e\u0007\u0016\u0002\u0002\u001e \u0005\f\u0007\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " $\u0003\u0002\u0002\u0002!\"\u0007\u0019\u0002\u0002\"#\u0007\u001a",
    "\u0002\u0002#%\u0005\n\u0006\u0002$!\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0007\u0013\u0002\u0002",
    "\'\u0005\u0003\u0002\u0002\u0002(-\u0007\u0003\u0002\u0002)*\u0007\u0010",
    "\u0002\u0002*,\u0007\u0003\u0002\u0002+)\u0003\u0002\u0002\u0002,/\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    ".2\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000202\u0007\u000e\u0002",
    "\u00021(\u0003\u0002\u0002\u000210\u0003\u0002\u0002\u00022\u0007\u0003",
    "\u0002\u0002\u000234\u0007\u0003\u0002\u00024\t\u0003\u0002\u0002\u0002",
    "57\u0007\u0003\u0002\u000268\t\u0002\u0002\u000276\u0003\u0002\u0002",
    "\u000278\u0003\u0002\u0002\u00028\u000b\u0003\u0002\u0002\u00029:\b",
    "\u0007\u0001\u0002:;\u0007\u001f\u0002\u0002;>\u0005\f\u0007\u0004<",
    ">\u0005\u000e\b\u0002=9\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002",
    "\u0002>G\u0003\u0002\u0002\u0002?@\f\u0006\u0002\u0002@A\u0007\u0017",
    "\u0002\u0002AF\u0005\f\u0007\u0007BC\f\u0005\u0002\u0002CD\u0007\u0018",
    "\u0002\u0002DF\u0005\f\u0007\u0006E?\u0003\u0002\u0002\u0002EB\u0003",
    "\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GH\u0003\u0002\u0002\u0002H\r\u0003\u0002\u0002\u0002IG\u0003\u0002",
    "\u0002\u0002JK\u0005\u0010\t\u0002K\u000f\u0003\u0002\u0002\u0002LM",
    "\u0007\u0003\u0002\u0002MN\u0005\u0012\n\u0002NO\u0005\u0014\u000b\u0002",
    "O\u0011\u0003\u0002\u0002\u0002PQ\t\u0003\u0002\u0002Q\u0013\u0003\u0002",
    "\u0002\u0002RS\t\u0004\u0002\u0002S\u0015\u0003\u0002\u0002\u0002\n",
    "\u001f$-17=EG"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SQLParser extends antlr4.Parser {

    static grammarFileName = "SQLParser.g4";
    static literalNames = [ null, null, null, null, "'='", "'<>'", "'<'", 
                            "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", 
                            "'/'", "','", "'('", "')'", "';'", "'SELECT'", 
                            "'FROM'", "'WHERE'", "'AND'", "'OR'", "'ORDER'", 
                            "'BY'", "'ASC'", "'DESC'" ];
    static symbolicNames = [ null, "ID", "STRING_LITERAL", "NUMERIC_LITERAL", 
                             "EQUALS", "NOT_EQUALS", "LESS_THAN", "LESS_THAN_OR_EQUALS", 
                             "GREATER_THAN", "GREATER_THAN_OR_EQUALS", "PLUS", 
                             "MINUS", "ASTERISK", "FORWARD_SLASH", "COMMA", 
                             "LEFT_PAREN", "RIGHT_PAREN", "SEMI_COLON", 
                             "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER", 
                             "BY", "ASC", "DESC", "WS", "SPACES", "NOT" ];
    static ruleNames = [ "query", "select_statement", "column_list", "table_expression", 
                         "order_expression", "search_condition", "predicate", 
                         "comparison_predicate", "comparison_operator", 
                         "value_expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SQLParser.ruleNames;
        this.literalNames = SQLParser.literalNames;
        this.symbolicNames = SQLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.search_condition_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    search_condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SQLParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.select_statement();
	        this.state = 21;
	        this.match(SQLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	select_statement() {
	    let localctx = new Select_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SQLParser.RULE_select_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(SQLParser.SELECT);
	        this.state = 24;
	        this.column_list();
	        this.state = 25;
	        this.match(SQLParser.FROM);
	        this.state = 26;
	        this.table_expression();
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SQLParser.WHERE) {
	            this.state = 27;
	            this.match(SQLParser.WHERE);
	            this.state = 28;
	            this.search_condition(0);
	        }

	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SQLParser.ORDER) {
	            this.state = 31;
	            this.match(SQLParser.ORDER);
	            this.state = 32;
	            this.match(SQLParser.BY);
	            this.state = 33;
	            this.order_expression();
	        }

	        this.state = 36;
	        this.match(SQLParser.SEMI_COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_list() {
	    let localctx = new Column_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SQLParser.RULE_column_list);
	    var _la = 0; // Token type
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SQLParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(SQLParser.ID);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SQLParser.COMMA) {
	                this.state = 39;
	                this.match(SQLParser.COMMA);
	                this.state = 40;
	                this.match(SQLParser.ID);
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case SQLParser.ASTERISK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(SQLParser.ASTERISK);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_expression() {
	    let localctx = new Table_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SQLParser.RULE_table_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(SQLParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	order_expression() {
	    let localctx = new Order_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SQLParser.RULE_order_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(SQLParser.ID);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SQLParser.ASC || _la===SQLParser.DESC) {
	            this.state = 52;
	            _la = this._input.LA(1);
	            if(!(_la===SQLParser.ASC || _la===SQLParser.DESC)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	search_condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Search_conditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, SQLParser.RULE_search_condition, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SQLParser.NOT:
	            this.state = 56;
	            this.match(SQLParser.NOT);
	            this.state = 57;
	            this.search_condition(2);
	            break;
	        case SQLParser.ID:
	            this.state = 58;
	            this.predicate();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 67;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Search_conditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_search_condition);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 62;
	                    this.match(SQLParser.AND);
	                    this.state = 63;
	                    this.search_condition(5);
	                    break;

	                case 2:
	                    localctx = new Search_conditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_search_condition);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 65;
	                    this.match(SQLParser.OR);
	                    this.state = 66;
	                    this.search_condition(4);
	                    break;

	                } 
	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SQLParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.comparison_predicate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison_predicate() {
	    let localctx = new Comparison_predicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SQLParser.RULE_comparison_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(SQLParser.ID);
	        this.state = 75;
	        this.comparison_operator();
	        this.state = 76;
	        this.value_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison_operator() {
	    let localctx = new Comparison_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SQLParser.RULE_comparison_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SQLParser.EQUALS) | (1 << SQLParser.NOT_EQUALS) | (1 << SQLParser.LESS_THAN) | (1 << SQLParser.LESS_THAN_OR_EQUALS) | (1 << SQLParser.GREATER_THAN) | (1 << SQLParser.GREATER_THAN_OR_EQUALS))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value_expression() {
	    let localctx = new Value_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SQLParser.RULE_value_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SQLParser.ID) | (1 << SQLParser.STRING_LITERAL) | (1 << SQLParser.NUMERIC_LITERAL))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SQLParser.EOF = antlr4.Token.EOF;
SQLParser.ID = 1;
SQLParser.STRING_LITERAL = 2;
SQLParser.NUMERIC_LITERAL = 3;
SQLParser.EQUALS = 4;
SQLParser.NOT_EQUALS = 5;
SQLParser.LESS_THAN = 6;
SQLParser.LESS_THAN_OR_EQUALS = 7;
SQLParser.GREATER_THAN = 8;
SQLParser.GREATER_THAN_OR_EQUALS = 9;
SQLParser.PLUS = 10;
SQLParser.MINUS = 11;
SQLParser.ASTERISK = 12;
SQLParser.FORWARD_SLASH = 13;
SQLParser.COMMA = 14;
SQLParser.LEFT_PAREN = 15;
SQLParser.RIGHT_PAREN = 16;
SQLParser.SEMI_COLON = 17;
SQLParser.SELECT = 18;
SQLParser.FROM = 19;
SQLParser.WHERE = 20;
SQLParser.AND = 21;
SQLParser.OR = 22;
SQLParser.ORDER = 23;
SQLParser.BY = 24;
SQLParser.ASC = 25;
SQLParser.DESC = 26;
SQLParser.WS = 27;
SQLParser.SPACES = 28;
SQLParser.NOT = 29;

SQLParser.RULE_query = 0;
SQLParser.RULE_select_statement = 1;
SQLParser.RULE_column_list = 2;
SQLParser.RULE_table_expression = 3;
SQLParser.RULE_order_expression = 4;
SQLParser.RULE_search_condition = 5;
SQLParser.RULE_predicate = 6;
SQLParser.RULE_comparison_predicate = 7;
SQLParser.RULE_comparison_operator = 8;
SQLParser.RULE_value_expression = 9;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_query;
    }

	select_statement() {
	    return this.getTypedRuleContext(Select_statementContext,0);
	};

	EOF() {
	    return this.getToken(SQLParser.EOF, 0);
	};


}



class Select_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_select_statement;
    }

	SELECT() {
	    return this.getToken(SQLParser.SELECT, 0);
	};

	column_list() {
	    return this.getTypedRuleContext(Column_listContext,0);
	};

	FROM() {
	    return this.getToken(SQLParser.FROM, 0);
	};

	table_expression() {
	    return this.getTypedRuleContext(Table_expressionContext,0);
	};

	SEMI_COLON() {
	    return this.getToken(SQLParser.SEMI_COLON, 0);
	};

	WHERE() {
	    return this.getToken(SQLParser.WHERE, 0);
	};

	search_condition() {
	    return this.getTypedRuleContext(Search_conditionContext,0);
	};

	ORDER() {
	    return this.getToken(SQLParser.ORDER, 0);
	};

	BY() {
	    return this.getToken(SQLParser.BY, 0);
	};

	order_expression() {
	    return this.getTypedRuleContext(Order_expressionContext,0);
	};


}



class Column_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_column_list;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.ID);
	    } else {
	        return this.getToken(SQLParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.COMMA);
	    } else {
	        return this.getToken(SQLParser.COMMA, i);
	    }
	};


	ASTERISK() {
	    return this.getToken(SQLParser.ASTERISK, 0);
	};


}



class Table_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_table_expression;
    }

	ID() {
	    return this.getToken(SQLParser.ID, 0);
	};


}



class Order_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_order_expression;
    }

	ID() {
	    return this.getToken(SQLParser.ID, 0);
	};

	ASC() {
	    return this.getToken(SQLParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(SQLParser.DESC, 0);
	};


}



class Search_conditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_search_condition;
    }

	NOT() {
	    return this.getToken(SQLParser.NOT, 0);
	};

	search_condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Search_conditionContext);
	    } else {
	        return this.getTypedRuleContext(Search_conditionContext,i);
	    }
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	AND() {
	    return this.getToken(SQLParser.AND, 0);
	};

	OR() {
	    return this.getToken(SQLParser.OR, 0);
	};


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_predicate;
    }

	comparison_predicate() {
	    return this.getTypedRuleContext(Comparison_predicateContext,0);
	};


}



class Comparison_predicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_comparison_predicate;
    }

	ID() {
	    return this.getToken(SQLParser.ID, 0);
	};

	comparison_operator() {
	    return this.getTypedRuleContext(Comparison_operatorContext,0);
	};

	value_expression() {
	    return this.getTypedRuleContext(Value_expressionContext,0);
	};


}



class Comparison_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_comparison_operator;
    }

	EQUALS() {
	    return this.getToken(SQLParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(SQLParser.NOT_EQUALS, 0);
	};

	LESS_THAN() {
	    return this.getToken(SQLParser.LESS_THAN, 0);
	};

	LESS_THAN_OR_EQUALS() {
	    return this.getToken(SQLParser.LESS_THAN_OR_EQUALS, 0);
	};

	GREATER_THAN() {
	    return this.getToken(SQLParser.GREATER_THAN, 0);
	};

	GREATER_THAN_OR_EQUALS() {
	    return this.getToken(SQLParser.GREATER_THAN_OR_EQUALS, 0);
	};


}



class Value_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_value_expression;
    }

	STRING_LITERAL() {
	    return this.getToken(SQLParser.STRING_LITERAL, 0);
	};

	NUMERIC_LITERAL() {
	    return this.getToken(SQLParser.NUMERIC_LITERAL, 0);
	};

	ID() {
	    return this.getToken(SQLParser.ID, 0);
	};


}




SQLParser.QueryContext = QueryContext; 
SQLParser.Select_statementContext = Select_statementContext; 
SQLParser.Column_listContext = Column_listContext; 
SQLParser.Table_expressionContext = Table_expressionContext; 
SQLParser.Order_expressionContext = Order_expressionContext; 
SQLParser.Search_conditionContext = Search_conditionContext; 
SQLParser.PredicateContext = PredicateContext; 
SQLParser.Comparison_predicateContext = Comparison_predicateContext; 
SQLParser.Comparison_operatorContext = Comparison_operatorContext; 
SQLParser.Value_expressionContext = Value_expressionContext; 
