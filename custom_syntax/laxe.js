(() => {
    var e = (() => {
        "use strict";
        return (e) => ({
            name: "Laxe",
            aliases: ["lx"],
            keywords: {
                keyword:
                    "alias block break case cast catch const continue decor def default do dynamic dyn else enum extern for function if import in inline new override priv pub return self static super switch template this throw trace try type untyped using var while Int int Float float String str Bool bool Dynamic Void void Array expr typeDef field ",
                built_in: "trace this self",
                literal: "true True false False null None _",
            },
            contains: [
                {
                    className: "string",
                    begin: "'",
                    end: "'",
                    contains: [
                        e.BACKSLASH_ESCAPE,
                        {
                            className: "subst",
                            begin: "\\$\\{",
                            end: "\\}",
                        },
                        {
                            className: "subst",
                            begin: "\\$",
                            end: /\w(?=\W)/
                        },
                    ],
                },
                {
                    className: "string",
                    begin: "\"",
                    end: "\"",
                    contains: [
                        e.BACKSLASH_ESCAPE,
                    ],
                },
                e.HASH_COMMENT_MODE,
                {
                    scope: 'comment',
                    begin: '###',
                    end: '###'
                },
                {
                    className: 'number',
                    scope: 'number',
                    begin: e.C_NUMBER_RE + "\\.\\.\\." + e.C_NUMBER_RE,
                    relevance: 0
                },
                e.C_NUMBER_MODE,
                {
                    className: "attribute",
                    begin: /\@/,
                    end: /\w(?=[\($])/,
                },
                //{ className: "type", begin: ":[ \t]*\w+", relevance: 0 },
                //{ className: "type", begin: ":[ \t]*", end: "\\W", excludeBegin: !0, excludeEnd: !0 },
                //{ className: "type", begin: "new *", end: "\\W", excludeBegin: !0, excludeEnd: !0 },
                { className: "class", beginKeywords: "enum", end: ":", contains: [e.TITLE_MODE] },
                {
                    className: "class",
                    beginKeywords: "abstract",
                    end: "[:$]",
                    contains: [
                        { className: "type", begin: "\\(", end: "\\)", excludeBegin: !0, excludeEnd: !0 },
                        { className: "type", begin: "from +", end: "\\W", excludeBegin: !0, excludeEnd: !0 },
                        { className: "type", begin: "to +", end: "\\W", excludeBegin: !0, excludeEnd: !0 },
                        e.TITLE_MODE,
                    ],
                    keywords: { keyword: "abstract from to" },
                },
                {
                    className: "class",
                    begin: "\\b(class|interface) +",
                    end: "[:$]",
                    excludeEnd: !0,
                    keywords: "class interface",
                    contains: [
                        {
                            className: "keyword",
                            begin: "\\b(extends|implements) +",
                            keywords: "extends implements",
                            contains: [
                                {
                                    className: "type",
                                    begin: e.IDENT_RE,
                                    relevance: 0,
                                },
                            ],
                        },
                        e.TITLE_MODE,
                    ],
                },
                {
                    className: "function",
                    beginKeywords: "function",
                    end: "\\(",
                    excludeEnd: !0,
                    illegal: "\\S",
                    contains: [e.TITLE_MODE],
                },
            ],
            illegal: /<\//,
        });
    })();
    hljs.registerLanguage("laxe", e);
})();
