import { customAlphabet } from 'nanoid/non-secure';

export const generateShortLink = (
  size = 7,
  alphabet = '23456789ABCDEFGHJKMNPQRSTUVWXYabcdefghjkmnpqrstuvwxy',
): string => customAlphabet(alphabet, size)();
