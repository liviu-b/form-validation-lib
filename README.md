# Form Validation Library

A simple and lightweight form validation library for JavaScript. It allows you to validate form fields easily with built-in methods for common validations like required fields, email format, and string length.

## Installation

You can install the package using npm:

```bash
npm install [your-package-name]
```

# Usage
First, import the Validator class into your project:
```bash
const Validator = require('your-package-name');
```

# Example Usage
```bash
const Validator = require('your-package-name');

const validator = new Validator();

// Validate a form
validator
  .required('John Doe', 'Name')
  .isEmail('john.doe@example.com', 'Email')
  .minLength('password123', 8, 'Password')
  .maxLength('username123', 15, 'Username');

// Check if the form is valid
if (!validator.isValid()) {
    console.log(validator.getErrors());  // Outputs any validation errors
} else {
    console.log('Form is valid');
}
```

# Available Validation Methods
- required(value, fieldName): Ensures the field is not empty.
- minLength(value, min, fieldName): Validates that the input is at least min characters long.
- maxLength(value, max, fieldName): Validates that the input is no longer than max characters.
- isEmail(value, fieldName): Ensures the field contains a valid email address.
  
# Custom Validation Messages
You can extend this library to allow custom validation messages (coming soon in future versions).

# API
- required(value, fieldName): Checks if the field is not empty.
- minLength(value, min, fieldName): Checks if the field has at least min characters.
- maxLength(value, max, fieldName): Ensures the field does not exceed max characters.
- isEmail(value, fieldName): Validates the field as an email address.
  
## Example
```bash
const validator = new Validator();

validator.required('', 'Name'); // 'Name is required.'
validator.minLength('abc', 5, 'Password'); // 'Password must be at least 5 characters long.'

if (validator.isValid()) {
    console.log('All validations passed');
} else {
    console.log('Errors:', validator.getErrors());
}
```

# Roadmap
- Custom error messages for each validation.
- Asynchronous validations (e.g., checking availability of email).
- Additional validations like numeric checks, regex validation, etc.


# Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues or submit a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.