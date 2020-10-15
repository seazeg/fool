export default function(el) {
    return el
        .replace(/\n|\t/g, "")
        .replace(/[a-z]+="\s*"/gi, "")
        .replace(/>\s+</g, "><")
        .replace(/\s+/g, " ")
        .replace(/\s>/g, ">")
        .replace(/>\s/g, ">")
        .replace(/\s</g, "<")
        .replace(/class=["']\s/g, function(match) {
            return match.replace(/\s/g, "");
        });
};
