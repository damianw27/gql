// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SQLParserListener from './SQLParserListener.js';
import SQLParserVisitor from './SQLParserVisitor.js';

const serializedATN = [4,1,29,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,3,1,30,8,1,1,1,1,1,1,1,3,1,35,8,1,1,1,1,1,1,2,1,2,1,2,5,2,42,8,2,10,
2,12,2,45,9,2,1,2,3,2,48,8,2,1,3,1,3,1,4,1,4,3,4,54,8,4,1,5,1,5,1,5,1,5,
3,5,60,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,68,8,5,10,5,12,5,71,9,5,1,6,1,6,1,
7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,0,1,10,10,0,2,4,6,8,10,12,14,16,18,0,3,
1,0,25,26,1,0,4,9,1,0,1,3,80,0,20,1,0,0,0,2,23,1,0,0,0,4,47,1,0,0,0,6,49,
1,0,0,0,8,51,1,0,0,0,10,59,1,0,0,0,12,72,1,0,0,0,14,74,1,0,0,0,16,78,1,0,
0,0,18,80,1,0,0,0,20,21,3,2,1,0,21,22,5,0,0,1,22,1,1,0,0,0,23,24,5,18,0,
0,24,25,3,4,2,0,25,26,5,19,0,0,26,29,3,6,3,0,27,28,5,20,0,0,28,30,3,10,5,
0,29,27,1,0,0,0,29,30,1,0,0,0,30,34,1,0,0,0,31,32,5,23,0,0,32,33,5,24,0,
0,33,35,3,8,4,0,34,31,1,0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,5,17,0,0,
37,3,1,0,0,0,38,43,5,1,0,0,39,40,5,14,0,0,40,42,5,1,0,0,41,39,1,0,0,0,42,
45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,48,1,0,0,0,45,43,1,0,0,0,46,48,
5,12,0,0,47,38,1,0,0,0,47,46,1,0,0,0,48,5,1,0,0,0,49,50,5,1,0,0,50,7,1,0,
0,0,51,53,5,1,0,0,52,54,7,0,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,9,1,0,0,0,
55,56,6,5,-1,0,56,57,5,29,0,0,57,60,3,10,5,2,58,60,3,12,6,0,59,55,1,0,0,
0,59,58,1,0,0,0,60,69,1,0,0,0,61,62,10,4,0,0,62,63,5,21,0,0,63,68,3,10,5,
5,64,65,10,3,0,0,65,66,5,22,0,0,66,68,3,10,5,4,67,61,1,0,0,0,67,64,1,0,0,
0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,11,1,0,0,0,71,69,1,0,0,0,
72,73,3,14,7,0,73,13,1,0,0,0,74,75,5,1,0,0,75,76,3,16,8,0,76,77,3,18,9,0,
77,15,1,0,0,0,78,79,7,1,0,0,79,17,1,0,0,0,80,81,7,2,0,0,81,19,1,0,0,0,8,
29,34,43,47,53,59,67,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SQLParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
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
	        if(_la===20) {
	            this.state = 27;
	            this.match(SQLParser.WHERE);
	            this.state = 28;
	            this.search_condition(0);
	        }

	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
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
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(SQLParser.ID);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===14) {
	                this.state = 39;
	                this.match(SQLParser.COMMA);
	                this.state = 40;
	                this.match(SQLParser.ID);
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 12:
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
	        if(_la===25 || _la===26) {
	            this.state = 52;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
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
	        case 29:
	            this.state = 56;
	            this.match(SQLParser.NOT);
	            this.state = 57;
	            this.search_condition(2);
	            break;
	        case 1:
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
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 1008) !== 0))) {
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
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 14) !== 0))) {
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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitQuery(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitQuery(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterSelect_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitSelect_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitSelect_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterColumn_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitColumn_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitColumn_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterTable_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitTable_expression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitTable_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterOrder_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitOrder_expression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitOrder_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterSearch_condition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitSearch_condition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitSearch_condition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterComparison_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitComparison_predicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitComparison_predicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterComparison_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitComparison_operator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitComparison_operator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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

	enterRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.enterValue_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLParserListener ) {
	        listener.exitValue_expression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SQLParserVisitor ) {
	        return visitor.visitValue_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


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
