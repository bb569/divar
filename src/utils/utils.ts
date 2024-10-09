export function on(obj: any, ...args: any) {
  obj.addEventListener(...args);
}

export function off(obj: any, ...args: any) {
  obj.removeEventListener(...args);
}

export function replaceUnderscoresWithSpaces(str: string) {
  return str.replace(/_/g, " ");
}

export function convertToPersianCurrency(number: number) {
  let result = "";

  if (number >= 1000000000) {
    // For billion values
    result = (number / 1000000000).toFixed(1) + " میلیارد تومان";
  } else if (number >= 1000000) {
    // For million values
    result = (number / 1000000).toFixed(1) + " میلیون تومان";
  } else if (number >= 1000) {
    // For thousand values
    result = (number / 1000).toFixed(0) + " هزار تومان";
  } else {
    // For less than thousand values
    result = number + " تومان";
  }

  // Remove unnecessary decimal part if it ends with .0
  result = result.replace(".0", "");

  return result;
}

export function summarizeString(text: string, maxLength = 100, suffix = "...") {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + suffix;
}
