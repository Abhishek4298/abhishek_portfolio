/**
 * Utility to suppress specific React lifecycle warnings
 * This is a temporary solution until the dependencies are updated
 */

// Suppress specific React warnings for deprecated lifecycle methods
const originalConsoleError = console.error;

console.error = function(message) {
  if (
    typeof message === 'string' && (
      message.includes('componentWillReceiveProps') ||
      message.includes('componentWillUpdate') ||
      message.includes('UNSAFE_')
    )
  ) {
    // Suppress these specific warnings
    return;
  }
  originalConsoleError.apply(console, arguments);
};

export default function suppressWarnings() {
  // This function doesn't need to do anything, just importing it will set up the console override
  return null;
}
