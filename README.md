# RandomEverything

A Raycast extension to generate random usernames, passwords, tokens, ports, and more with a single command.

## Features

- **Random Username Generation**: Creates usernames in the format "Name1234" using a curated list of common names.
- **Secure Password Generation**: Generates strong passwords that include lowercase letters, uppercase letters, numbers, and symbols.
- **Random Token Generation**: Creates cryptographically random tokens with configurable length.
- **Port Number Generation**: Generates random port numbers while avoiding commonly used ports.
- **UUID v4 Generation**: Generates a standard UUID v4.
- **Copy to Clipboard**: Easily copy any generated value with a single click.
- **Keyboard Shortcuts**: Regenerate values quickly using keyboard shortcuts.

## Installation

### From Raycast Store

1. Open Raycast
2. Search for "RandomEverything"
3. Click "Install"

### Manual Installation

```bash
git clone https://github.com/insv23/RandomEverythingRaycast.git
cd RandomEverythingRaycast
npm install
npm run dev
```
Ctrl c to terminate

```bash
npm run build
```

## Usage

1. Open Raycast
2. Type "random" to find the extension
3. Select the type of random value you want to generate
4. Use ⌘+G to generate a new value
5. Use Enter to copy the value to your clipboard

## Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Raycast application

### Setup Development Environment

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/randomeverything.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start development server:
   ```
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the extension
- `npm run lint` - Check for linting errors
- `npm run fix-lint` - Fix linting errors automatically
- `npm run publish` - Publish the extension to Raycast Store

## Configuration

You can customize the generators by modifying the configuration files:

- `src/utils/constants.ts` - Contains configuration for all generators

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
