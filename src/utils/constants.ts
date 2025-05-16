export const USERNAME_CONFIG = {
	names: [
		"Alex",
		"Emma",
		"Noah",
		"Olivia",
		"Liam",
		"Ava",
		"John",
		"Sophia",
		"James",
		"Mia",
		"William",
		"Charlotte",
		"Benjamin",
		"Amelia",
		"Lucas",
		"Harper",
		"Henry",
		"Evelyn",
		"Michael",
		"Abigail",
	],
	numberMin: 1000,
	numberMax: 9999,
};

export const PASSWORD_CONFIG = {
	defaultLength: 12,
	charsets: {
		lowercase: "abcdefghijklmnopqrstuvwxyz",
		uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers: "0123456789",
		symbols: "!@#$%^&*()_-+",
	},
};

export const TOKEN_CONFIG = {
	defaultLength: 64,
	charset: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
};

export const PORT_CONFIG = {
	minPort: 1024,  // Avoid system reserved ports (0-1023)
	maxPort: 65535, // Maximum available port number
	// List of common ports to exclude when generating (sorted in ascending order)
	commonPorts: [
		1433,  // SQL Server
		1521,  // Oracle
		3000,  // Common development port
		3001,  // Common development port
		3306,  // MySQL
		4200,  // Angular default port
		5000,  // Flask/ASP.NET common port
		5432,  // PostgreSQL
		6379,  // Redis
		8000,  // Django/Python common port
		8080,  // Common Web port
		8443,  // Common HTTPS port
		8888,  // Jupyter Notebook
		9000,  // Common development port
		9090,  // Prometheus
		9200,  // Elasticsearch
		9300,  // Elasticsearch cluster
		27017  // MongoDB
	]
};
