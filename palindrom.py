def is_palindrome(s):
    # Remove spaces and convert to lowercase
    s = s.replace(' ', '').lower()
    # Check if the string is equal to its reverse
    return s == s[::-1]

# Example usage:
phrase = "A man a plan a canal Panama"
if is_palindrome(phrase):
    print(f'"{phrase}" is a palindrome.')
else:
    print(f'"{phrase}" is not a palindrome.')