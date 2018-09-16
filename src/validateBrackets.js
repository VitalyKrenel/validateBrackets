function validateBrackets(expression) {
  if (!expression) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOpeningBracket(char)) {
      stack.push({ value: char, index: i });
    } else if (isClosingBracket(char)) {
      if (!stack.length) { return i + 1; }

      const bracket = stack.pop();
      const match = bracketsMatch(bracket.value, char);

      if (!match) { return i + 1; }
    }
  }

  // Validation succeded
  if (stack.length === 0) {
    return true;
  }

  // Validation failed: return index of an unpaired brace
  return stack.pop().index + 1;
}

function isOpeningBracket(char) {
  const openingBraces = ['(', '[', '{'];
  return openingBraces.includes(char);
}

function isClosingBracket(char) {
  const closingBraces = [')', ']', '}'];
  return closingBraces.includes(char);
}

function bracketsMatch(openingBrace, closingBrace) {
  switch (openingBrace) {
    case '(': return closingBrace === ')';
    case '[': return closingBrace === ']';
    case '{': return closingBrace === '}';
    default:
      throw new Error(`Character ${openingBrace} is not a brace.`);
  }
}

exports.validateBrackets = validateBrackets;
