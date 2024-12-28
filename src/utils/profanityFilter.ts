// Basic profanity filter - in production, use a more comprehensive solution
const PROFANITY_LIST = ['badword1', 'badword2']; // Add actual words in production

export function containsProfanity(text: string): boolean {
  const lowerText = text.toLowerCase();
  return PROFANITY_LIST.some(word => lowerText.includes(word));
}

export function containsSlander(text: string): boolean {
  // Basic check for potentially slanderous content
  const slanderIndicators = [
    'worst ever',
    'terrible person',
    'hate',
    'stupid',
    'incompetent'
  ];
  
  const lowerText = text.toLowerCase();
  return slanderIndicators.some(phrase => lowerText.includes(phrase));
}