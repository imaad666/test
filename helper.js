export function validate(data) {
  // Simple validation example: checks if data is an object
  if (typeof data !== 'object' || Array.isArray(data) || data === null) {
    return { error: 'Invalid data', value: null };
  }
  return { error: null, value: data };
}
