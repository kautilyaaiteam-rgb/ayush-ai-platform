# Contributing to Ayush

Thank you for your interest in contributing to Ayush! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Use the bug report template
3. Include:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details

### Suggesting Features

1. Check if the feature has been suggested
2. Use the feature request template
3. Explain:
   - Use case
   - Expected behavior
   - Why it's valuable
   - Potential implementation

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow code style guidelines
   - Write tests
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting
   - `refactor:` - Code restructuring
   - `test:` - Tests
   - `chore:` - Maintenance

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Clear title and description
   - Link related issues
   - Add screenshots/videos if UI changes

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- Redis 7+

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ayush-ai-platform.git
cd ayush-ai-platform

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your credentials

# Start development
npm run dev
```

## Code Style

### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Meaningful variable names
- Add JSDoc comments for functions

### Python
- Follow PEP 8
- Use type hints
- Add docstrings
- Use Black for formatting

### Git Commits
- Use conventional commits
- Keep commits atomic
- Write clear commit messages

## Testing

### Run Tests
```bash
# All tests
npm test

# Specific package
npm test --workspace=@ayush/api

# Watch mode
npm test -- --watch
```

### Writing Tests
- Unit tests for functions
- Integration tests for APIs
- E2E tests for critical flows
- Aim for >80% coverage

## Documentation

- Update README if needed
- Add JSDoc/docstrings
- Update API documentation
- Include examples

## Review Process

1. **Automated checks** - CI/CD runs tests
2. **Code review** - Maintainers review code
3. **Feedback** - Address review comments
4. **Approval** - Maintainer approves
5. **Merge** - PR merged to main

## Getting Help

- **Discord**: https://discord.gg/ayush
- **Email**: dev@ayush.ai
- **Discussions**: GitHub Discussions

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Eligible for swag (coming soon!)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to Ayush! 🚀
