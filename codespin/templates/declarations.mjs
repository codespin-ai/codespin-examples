export default async function declarations(args) {
    return (printLine(`I'd like you to extract the declarations/signatures of all classes, functions, methods, types, constants etc which are exported (or exposed to outside) from the following code. Ignore everything private.`, true) +
        printLine(`${args.filePath}:`) +
        printLine("```") +
        args.sourceCode +
        printLine("```", true) +
        printLine("Output declarations in the following format:", true) +
        printLine(`$START_FILE_CONTENTS:${args.filePath}$`) +
        printLine(`....extracted declarations/signatures from ${args.filePath}  go here....`) +
        printLine(`$END_FILE_CONTENTS:${args.filePath}$`, true) +
        printLine("Print only the declarations as described above, and no other text."));
}
function printLine(line, addBlankLine = false) {
    return line + (!line.endsWith("\n") ? "\n" : "") + (addBlankLine ? "\n" : "");
}
//# sourceMappingURL=declarations.js.map