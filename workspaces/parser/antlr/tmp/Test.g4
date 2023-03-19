grammar Test;

path:
  absoluteDirectoryPath
  | relativeDirectoryPath;

absoluteDirectoryPath:
  SOLIDUS simpleDirectoryPath;

relativeDirectoryPath:
  DOUBLE_PERIOD ((SOLIDUS DOUBLE_PERIOD)* SOLIDUS simpleDirectoryPath?)?;

simpleDirectoryPath:
  (directoryName SOLIDUS)+;

directoryName: StringLiteral;

SOLIDUS: '/';
DOUBLE_PERIOD: '..';
StringLiteral: ('A'.. 'Z' | 'a'..'z' | '0'..'9' | '_' | '-' )+;

fragment A: [aA];
fragment B: [bB];
fragment C: [dD];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];
