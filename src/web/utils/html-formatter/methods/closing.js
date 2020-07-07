var single = [
    "br",
    "hr",
    "img",
    "input",
    "meta",
    "link",
    "col",
    "base",
    "param",
    "track",
    "source",
    "wbr",
    "command",
    "keygen",
    "area",
    "embed",
    "menuitem",
];
export default function(el) {
    return el.replace(/<([a-zA-Z\-0-9]+)[^>]*>/g, function(match, capture) {
        if (single.indexOf(capture) > -1) {
            return (match.substring(0, match.length - 1) + " />").replace(
                /\/\s\//g,
                "/"
            );
        }
        return match.replace(/[\s]?\/>/g, "></" + capture + ">");
    });
}
