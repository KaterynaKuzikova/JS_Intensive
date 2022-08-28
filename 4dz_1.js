function concatStrings(string, sep = "") {
    let result = string;

    let finalSep = sep;

    let isValid = typeof string === "undefined" || typeof string !== "string" || typeof finalSeparator === null;

    return function conc(string) {
      if (isValid) {
            return result;
      } else if (finalSep) {
            result += `${finalSep}${string}`;
            return conc;
      } else {
            result += `${string}`;
            return conc;
      }
    };
}

