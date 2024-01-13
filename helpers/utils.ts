export const capitalizeWords = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match: string) => match.toUpperCase());
;