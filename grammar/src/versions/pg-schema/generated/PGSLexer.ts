// Generated from src/versions/pg-schema/antlr/PGSLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "@gql-grammar/antlr4";
export default class PGSLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'create'", "'node'", 
                                                   "'edge'", "'open'", "'optional'", 
                                                   "'type'", "'graph'", 
                                                   "'strict'", "'loose'", 
                                                   "'abstract'", "'imports'", 
                                                   "'('", "')'", "'['", 
                                                   "']'", "'{'", "'}'", 
                                                   "','", "':'", "';'", 
                                                   "'-'", "'>'", "'|'", 
                                                   "'&'", "'?'" ];
	public static readonly symbolicNames: string[] = [ null, "CREATE", "NODE", 
                                                    "EDGE", "OPEN", "OPTIONAL", 
                                                    "TYPE", "GRAPH", "STRICT", 
                                                    "LOOSE", "ABSTRACT", 
                                                    "IMPORTS", "LPAREN", 
                                                    "RPAREN", "LBRACK", 
                                                    "RBRACK", "LBRACE", 
                                                    "RBRACE", "COMMA", "COLON", 
                                                    "SEMICOLON", "DASH", 
                                                    "ARROW", "BAR", "AMPERSAND", 
                                                    "QUESTION", "StringLiteral", 
                                                    "Whitespace" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"CREATE", "NODE", "EDGE", "OPEN", "OPTIONAL", "TYPE", "GRAPH", "STRICT", 
		"LOOSE", "ABSTRACT", "IMPORTS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"LBRACE", "RBRACE", "COMMA", "COLON", "SEMICOLON", "DASH", "ARROW", "BAR", 
		"AMPERSAND", "QUESTION", "StringLiteral", "Whitespace",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, PGSLexer._ATN, PGSLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "PGSLexer.g4"; }

	public get literalNames(): (string | null)[] { return PGSLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return PGSLexer.symbolicNames; }
	public get ruleNames(): string[] { return PGSLexer.ruleNames; }

	public get serializedATN(): number[] { return PGSLexer._serializedATN; }

	public get channelNames(): string[] { return PGSLexer.channelNames; }

	public get modeNames(): string[] { return PGSLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,27,167,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
	1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,
	1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,
	21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,4,25,157,8,25,11,25,12,25,158,1,26,
	4,26,162,8,26,11,26,12,26,163,1,26,1,26,0,0,27,1,1,3,2,5,3,7,4,9,5,11,6,
	13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,
	19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,1,0,19,2,0,67,67,99,
	99,2,0,82,82,114,114,2,0,69,69,101,101,2,0,65,65,97,97,2,0,84,84,116,116,
	2,0,78,78,110,110,2,0,79,79,111,111,2,0,68,68,100,100,2,0,71,71,103,103,
	2,0,80,80,112,112,2,0,73,73,105,105,2,0,76,76,108,108,2,0,89,89,121,121,
	2,0,72,72,104,104,2,0,83,83,115,115,2,0,66,66,98,98,2,0,77,77,109,109,5,
	0,45,45,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,168,0,1,1,0,0,0,0,
	3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
	0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
	0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,
	0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,
	0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,1,55,1,0,0,0,3,62,1,0,0,0,
	5,67,1,0,0,0,7,72,1,0,0,0,9,77,1,0,0,0,11,86,1,0,0,0,13,91,1,0,0,0,15,97,
	1,0,0,0,17,104,1,0,0,0,19,110,1,0,0,0,21,119,1,0,0,0,23,127,1,0,0,0,25,
	129,1,0,0,0,27,131,1,0,0,0,29,133,1,0,0,0,31,135,1,0,0,0,33,137,1,0,0,0,
	35,139,1,0,0,0,37,141,1,0,0,0,39,143,1,0,0,0,41,145,1,0,0,0,43,147,1,0,
	0,0,45,149,1,0,0,0,47,151,1,0,0,0,49,153,1,0,0,0,51,156,1,0,0,0,53,161,
	1,0,0,0,55,56,7,0,0,0,56,57,7,1,0,0,57,58,7,2,0,0,58,59,7,3,0,0,59,60,7,
	4,0,0,60,61,7,2,0,0,61,2,1,0,0,0,62,63,7,5,0,0,63,64,7,6,0,0,64,65,7,7,
	0,0,65,66,7,2,0,0,66,4,1,0,0,0,67,68,7,2,0,0,68,69,7,7,0,0,69,70,7,8,0,
	0,70,71,7,2,0,0,71,6,1,0,0,0,72,73,7,6,0,0,73,74,7,9,0,0,74,75,7,2,0,0,
	75,76,7,5,0,0,76,8,1,0,0,0,77,78,7,6,0,0,78,79,7,9,0,0,79,80,7,4,0,0,80,
	81,7,10,0,0,81,82,7,6,0,0,82,83,7,5,0,0,83,84,7,3,0,0,84,85,7,11,0,0,85,
	10,1,0,0,0,86,87,7,4,0,0,87,88,7,12,0,0,88,89,7,9,0,0,89,90,7,2,0,0,90,
	12,1,0,0,0,91,92,7,8,0,0,92,93,7,1,0,0,93,94,7,3,0,0,94,95,7,9,0,0,95,96,
	7,13,0,0,96,14,1,0,0,0,97,98,7,14,0,0,98,99,7,4,0,0,99,100,7,1,0,0,100,
	101,7,10,0,0,101,102,7,0,0,0,102,103,7,4,0,0,103,16,1,0,0,0,104,105,7,11,
	0,0,105,106,7,6,0,0,106,107,7,6,0,0,107,108,7,14,0,0,108,109,7,2,0,0,109,
	18,1,0,0,0,110,111,7,3,0,0,111,112,7,15,0,0,112,113,7,14,0,0,113,114,7,
	4,0,0,114,115,7,1,0,0,115,116,7,3,0,0,116,117,7,0,0,0,117,118,7,4,0,0,118,
	20,1,0,0,0,119,120,7,10,0,0,120,121,7,16,0,0,121,122,7,9,0,0,122,123,7,
	6,0,0,123,124,7,1,0,0,124,125,7,4,0,0,125,126,7,14,0,0,126,22,1,0,0,0,127,
	128,5,40,0,0,128,24,1,0,0,0,129,130,5,41,0,0,130,26,1,0,0,0,131,132,5,91,
	0,0,132,28,1,0,0,0,133,134,5,93,0,0,134,30,1,0,0,0,135,136,5,123,0,0,136,
	32,1,0,0,0,137,138,5,125,0,0,138,34,1,0,0,0,139,140,5,44,0,0,140,36,1,0,
	0,0,141,142,5,58,0,0,142,38,1,0,0,0,143,144,5,59,0,0,144,40,1,0,0,0,145,
	146,5,45,0,0,146,42,1,0,0,0,147,148,5,62,0,0,148,44,1,0,0,0,149,150,5,124,
	0,0,150,46,1,0,0,0,151,152,5,38,0,0,152,48,1,0,0,0,153,154,5,63,0,0,154,
	50,1,0,0,0,155,157,7,17,0,0,156,155,1,0,0,0,157,158,1,0,0,0,158,156,1,0,
	0,0,158,159,1,0,0,0,159,52,1,0,0,0,160,162,7,18,0,0,161,160,1,0,0,0,162,
	163,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,6,26,
	0,0,166,54,1,0,0,0,3,0,158,163,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PGSLexer.__ATN) {
			PGSLexer.__ATN = new ATNDeserializer().deserialize(PGSLexer._serializedATN);
		}

		return PGSLexer.__ATN;
	}


	static DecisionsToDFA = PGSLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}
