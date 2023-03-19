// Generated from d:\projects\magister\workspaces\parser\antlr-tmp\SQLLexer.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SQLLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ID=1, STRING_LITERAL=2, NUMERIC_LITERAL=3, EQUALS=4, NOT_EQUALS=5, LESS_THAN=6, 
		LESS_THAN_OR_EQUALS=7, GREATER_THAN=8, GREATER_THAN_OR_EQUALS=9, PLUS=10, 
		MINUS=11, ASTERISK=12, FORWARD_SLASH=13, COMMA=14, LEFT_PAREN=15, RIGHT_PAREN=16, 
		SEMI_COLON=17, SELECT=18, FROM=19, WHERE=20, AND=21, OR=22, ORDER=23, 
		BY=24, ASC=25, DESC=26, NOT=27, WS=28, SPACES=29;
	public static final int
		KEYWORDS=1, WHITESPACE=2, KEYWORDS_SPACES=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "KEYWORDS", "WHITESPACE", "KEYWORDS_SPACES"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ID", "STRING_LITERAL", "NUMERIC_LITERAL", "EQUALS", "NOT_EQUALS", "LESS_THAN", 
			"LESS_THAN_OR_EQUALS", "GREATER_THAN", "GREATER_THAN_OR_EQUALS", "PLUS", 
			"MINUS", "ASTERISK", "FORWARD_SLASH", "COMMA", "LEFT_PAREN", "RIGHT_PAREN", 
			"SEMI_COLON", "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER", "BY", 
			"ASC", "DESC", "NOT", "WS", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'='", "'<>'", "'<'", "'<='", "'>'", "'>='", 
			"'+'", "'-'", "'*'", "'/'", "','", "'('", "')'", "';'", "'SELECT'", "'FROM'", 
			"'WHERE'", "'AND'", "'OR'", "'ORDER'", "'BY'", "'ASC'", "'DESC'", "'NOT'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ID", "STRING_LITERAL", "NUMERIC_LITERAL", "EQUALS", "NOT_EQUALS", 
			"LESS_THAN", "LESS_THAN_OR_EQUALS", "GREATER_THAN", "GREATER_THAN_OR_EQUALS", 
			"PLUS", "MINUS", "ASTERISK", "FORWARD_SLASH", "COMMA", "LEFT_PAREN", 
			"RIGHT_PAREN", "SEMI_COLON", "SELECT", "FROM", "WHERE", "AND", "OR", 
			"ORDER", "BY", "ASC", "DESC", "NOT", "WS", "SPACES"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SQLLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SQLLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\37\u00cc\b\1\b\1"+
		"\b\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t"+
		"\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21"+
		"\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30"+
		"\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\3\2"+
		"\3\2\7\2C\n\2\f\2\16\2F\13\2\3\3\3\3\7\3J\n\3\f\3\16\3M\13\3\3\3\3\3\3"+
		"\4\6\4R\n\4\r\4\16\4S\3\4\3\4\7\4X\n\4\f\4\16\4[\13\4\5\4]\n\4\3\5\3\5"+
		"\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\f\3\f"+
		"\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3"+
		"\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3"+
		"\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3"+
		"\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3"+
		"\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\35\6\35\u00c2\n\35\r\35"+
		"\16\35\u00c3\3\35\3\35\3\36\6\36\u00c9\n\36\r\36\16\36\u00ca\2\2\37\6"+
		"\3\b\4\n\5\f\6\16\7\20\b\22\t\24\n\26\13\30\f\32\r\34\16\36\17 \20\"\21"+
		"$\22&\23(\24*\25,\26.\27\60\30\62\31\64\32\66\338\34:\35<\36>\37\6\2\3"+
		"\4\5\7\5\2C\\aac|\6\2\62;C\\aac|\5\2\f\f\17\17))\3\2\62;\5\2\13\f\17\17"+
		"\"\"\2\u00cf\2\6\3\2\2\2\2\b\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2\2\2\16\3\2"+
		"\2\2\2\20\3\2\2\2\2\22\3\2\2\2\2\24\3\2\2\2\2\26\3\2\2\2\2\30\3\2\2\2"+
		"\2\32\3\2\2\2\2\34\3\2\2\2\2\36\3\2\2\2\2 \3\2\2\2\2\"\3\2\2\2\2$\3\2"+
		"\2\2\2&\3\2\2\2\3(\3\2\2\2\3*\3\2\2\2\3,\3\2\2\2\3.\3\2\2\2\3\60\3\2\2"+
		"\2\3\62\3\2\2\2\3\64\3\2\2\2\3\66\3\2\2\2\38\3\2\2\2\3:\3\2\2\2\4<\3\2"+
		"\2\2\5>\3\2\2\2\6@\3\2\2\2\bG\3\2\2\2\nQ\3\2\2\2\f^\3\2\2\2\16`\3\2\2"+
		"\2\20c\3\2\2\2\22e\3\2\2\2\24h\3\2\2\2\26j\3\2\2\2\30m\3\2\2\2\32o\3\2"+
		"\2\2\34q\3\2\2\2\36s\3\2\2\2 u\3\2\2\2\"w\3\2\2\2$y\3\2\2\2&{\3\2\2\2"+
		"(}\3\2\2\2*\u0086\3\2\2\2,\u008d\3\2\2\2.\u0095\3\2\2\2\60\u009b\3\2\2"+
		"\2\62\u00a0\3\2\2\2\64\u00a8\3\2\2\2\66\u00ad\3\2\2\28\u00b3\3\2\2\2:"+
		"\u00ba\3\2\2\2<\u00c1\3\2\2\2>\u00c8\3\2\2\2@D\t\2\2\2AC\t\3\2\2BA\3\2"+
		"\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2E\7\3\2\2\2FD\3\2\2\2GK\7)\2\2HJ\n\4"+
		"\2\2IH\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2LN\3\2\2\2MK\3\2\2\2NO\7)"+
		"\2\2O\t\3\2\2\2PR\t\5\2\2QP\3\2\2\2RS\3\2\2\2SQ\3\2\2\2ST\3\2\2\2T\\\3"+
		"\2\2\2UY\7\60\2\2VX\t\5\2\2WV\3\2\2\2X[\3\2\2\2YW\3\2\2\2YZ\3\2\2\2Z]"+
		"\3\2\2\2[Y\3\2\2\2\\U\3\2\2\2\\]\3\2\2\2]\13\3\2\2\2^_\7?\2\2_\r\3\2\2"+
		"\2`a\7>\2\2ab\7@\2\2b\17\3\2\2\2cd\7>\2\2d\21\3\2\2\2ef\7>\2\2fg\7?\2"+
		"\2g\23\3\2\2\2hi\7@\2\2i\25\3\2\2\2jk\7@\2\2kl\7?\2\2l\27\3\2\2\2mn\7"+
		"-\2\2n\31\3\2\2\2op\7/\2\2p\33\3\2\2\2qr\7,\2\2r\35\3\2\2\2st\7\61\2\2"+
		"t\37\3\2\2\2uv\7.\2\2v!\3\2\2\2wx\7*\2\2x#\3\2\2\2yz\7+\2\2z%\3\2\2\2"+
		"{|\7=\2\2|\'\3\2\2\2}~\7U\2\2~\177\7G\2\2\177\u0080\7N\2\2\u0080\u0081"+
		"\7G\2\2\u0081\u0082\7E\2\2\u0082\u0083\7V\2\2\u0083\u0084\3\2\2\2\u0084"+
		"\u0085\b\23\2\2\u0085)\3\2\2\2\u0086\u0087\7H\2\2\u0087\u0088\7T\2\2\u0088"+
		"\u0089\7Q\2\2\u0089\u008a\7O\2\2\u008a\u008b\3\2\2\2\u008b\u008c\b\24"+
		"\2\2\u008c+\3\2\2\2\u008d\u008e\7Y\2\2\u008e\u008f\7J\2\2\u008f\u0090"+
		"\7G\2\2\u0090\u0091\7T\2\2\u0091\u0092\7G\2\2\u0092\u0093\3\2\2\2\u0093"+
		"\u0094\b\25\2\2\u0094-\3\2\2\2\u0095\u0096\7C\2\2\u0096\u0097\7P\2\2\u0097"+
		"\u0098\7F\2\2\u0098\u0099\3\2\2\2\u0099\u009a\b\26\2\2\u009a/\3\2\2\2"+
		"\u009b\u009c\7Q\2\2\u009c\u009d\7T\2\2\u009d\u009e\3\2\2\2\u009e\u009f"+
		"\b\27\2\2\u009f\61\3\2\2\2\u00a0\u00a1\7Q\2\2\u00a1\u00a2\7T\2\2\u00a2"+
		"\u00a3\7F\2\2\u00a3\u00a4\7G\2\2\u00a4\u00a5\7T\2\2\u00a5\u00a6\3\2\2"+
		"\2\u00a6\u00a7\b\30\2\2\u00a7\63\3\2\2\2\u00a8\u00a9\7D\2\2\u00a9\u00aa"+
		"\7[\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ac\b\31\2\2\u00ac\65\3\2\2\2\u00ad"+
		"\u00ae\7C\2\2\u00ae\u00af\7U\2\2\u00af\u00b0\7E\2\2\u00b0\u00b1\3\2\2"+
		"\2\u00b1\u00b2\b\32\2\2\u00b2\67\3\2\2\2\u00b3\u00b4\7F\2\2\u00b4\u00b5"+
		"\7G\2\2\u00b5\u00b6\7U\2\2\u00b6\u00b7\7E\2\2\u00b7\u00b8\3\2\2\2\u00b8"+
		"\u00b9\b\33\2\2\u00b99\3\2\2\2\u00ba\u00bb\7P\2\2\u00bb\u00bc\7Q\2\2\u00bc"+
		"\u00bd\7V\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\b\34\2\2\u00bf;\3\2\2\2"+
		"\u00c0\u00c2\t\6\2\2\u00c1\u00c0\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c1"+
		"\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c6\b\35\3\2"+
		"\u00c6=\3\2\2\2\u00c7\u00c9\t\6\2\2\u00c8\u00c7\3\2\2\2\u00c9\u00ca\3"+
		"\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb?\3\2\2\2\r\2\3\4"+
		"\5DKSY\\\u00c3\u00ca\4\4\3\2\4\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}