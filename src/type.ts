export const isNumber = (c: string): boolean => c >= '0' && c <= '9';

export const isUpper = (c: string): boolean => c >= 'A' && c <= 'Z';

export const isLower = (c: string): boolean => c >= 'a' && c <= 'z';

export const isAlpha = (c: string): boolean => isUpper(c) || isLower(c);

export const isSpace = (c: string): boolean => [' ', '\n', '\t', '\r', '\v'].includes(c);

export const int = (c: string): number => c.charCodeAt(0);

export const char = (x: number): string => String.fromCharCode(x);