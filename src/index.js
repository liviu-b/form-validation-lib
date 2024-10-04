// src/index.js
class Validator {
    constructor() {
        this.errors = [];
    }

    required(value, fieldName) {
        if (!value || value.trim() === '') {
            this.errors.push(`${fieldName} is required.`);
        }
        return this;
    }

    minLength(value, min, fieldName) {
        if (value.length < min) {
            this.errors.push(`${fieldName} must be at least ${min} characters long.`);
        }
        return this;
    }

    maxLength(value, max, fieldName) {
        if (value.length > max) {
            this.errors.push(`${fieldName} must be at most ${max} characters long.`);
        }
        return this;
    }

    isEmail(value, fieldName) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            this.errors.push(`${fieldName} must be a valid email address.`);
        }
        return this;
    }

    getErrors() {
        return this.errors;
    }

    isValid() {
        return this.errors.length === 0;
    }
}

module.exports = Validator;
