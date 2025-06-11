import {
	USERNAME_CONFIG,
	PASSWORD_CONFIG,
	TOKEN_CONFIG,
	PORT_CONFIG,
} from "./constants";
import { randomUUID } from "node:crypto";

/**
 * Generate a random username in the format "Name1234"
 * @returns The generated username
 */
export const generateUsername = (): string => {
	const randomName =
		USERNAME_CONFIG.names[
			Math.floor(Math.random() * USERNAME_CONFIG.names.length)
		];

	const randomNumber =
		Math.floor(
			Math.random() *
				(USERNAME_CONFIG.numberMax - USERNAME_CONFIG.numberMin + 1),
		) + USERNAME_CONFIG.numberMin;

	return `${randomName}${randomNumber}`;
};

/**
 * Generate a random password satisfying the following conditions:
 * - At least one lowercase letter
 * - At least one uppercase letter
 * - At least one number
 * - At least one symbol
 * - Total length is 12 characters
 * @returns The generated password
 */
export const generatePassword = (): string => {
	const { defaultLength, charsets } = PASSWORD_CONFIG;

	// Make sure each character type is included at least once
	const guaranteedChars = [
		getRandomChar(charsets.lowercase),
		getRandomChar(charsets.uppercase),
		getRandomChar(charsets.numbers),
		getRandomChar(charsets.symbols),
	];

	// Calculate the remaining length after including guaranteed characters
	const remainingLength = defaultLength - guaranteedChars.length;

	// Generate the remaining characters from all available charsets
	const allCharsets = Object.values(charsets).join("");
	const remainingChars = Array.from({ length: remainingLength }, () =>
		getRandomChar(allCharsets),
	);

	// Combine and shuffle all characters to ensure randomness
	const allChars = [...guaranteedChars, ...remainingChars];
	const shuffledPassword = shuffleArray(allChars).join("");

	return shuffledPassword;
};

/**
 * Generate a random token
 * @param length The length of the token
 * @returns The generated token
 */
export const generateToken = (
	length: number = TOKEN_CONFIG.defaultLength,
): string => {
	const charset = TOKEN_CONFIG.charset;
	const tokenChars = Array.from({ length }, () => getRandomChar(charset));
	return tokenChars.join("");
};

/**
 * Generate a random port number, excluding common ports
 * @returns The generated random port number
 */
export const generatePort = (): string => {
	const { minPort, maxPort, commonPorts } = PORT_CONFIG;

	const rangeSize = maxPort - minPort + 1;
	let port: number;
	do {
		port = Math.floor(Math.random() * rangeSize) + minPort;
	} while (commonPorts.includes(port));

	return port.toString();
};

/**
 * Generate a UUID v4
 * @returns The generated UUID
 */
export const generateUuidV4 = (): string => {
	return randomUUID();
};

/**
 * Get a random character from a given charset
 * @param charset The charset to choose from
 * @returns A random character from the charset
 */
function getRandomChar(charset: string): string {
	return charset.charAt(Math.floor(Math.random() * charset.length));
}

/**
 * Shuffle an array using the Fisher-Yates algorithm
 * @param array The array to shuffle
 * @returns The shuffled array
 */
function shuffleArray<T>(array: T[]): T[] {
	const result = [...array];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}
