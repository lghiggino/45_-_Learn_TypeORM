import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!react-markdown/)'],
    testPathIgnorePatterns: [
        "**/build/",
        "**/node_modules/"
    ]
};
export default config;

// module.exports = {
//   collectCoverageFrom: ['src/**/*.{js,jsx}'],
//   setupFiles: ['<rootDir>/config/polyfills.js'],
//   testMatch: [
//     '<rootDir>/src/**/__tests__/**/*.js?(x)',
//     '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
//   ],
//   testEnvironment: 'node',
//   testURL: 'http://localhost',
//   transform: {
//     '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
//     '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
//     '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
//   },
//   transformIgnorePatterns: [
//     '/node_modules/(?!transpile-me|transpile-me-too).+(js|jsx)$',
//   ],
//   moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node'],
//   modulePaths: ['src'],
// };

// import type { Config } from '@jest/types';

// // Sync object
// const config: Config.InitialOptions = {
//   verbose: true,
// };
// export config;

// // Or async function
// export async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };
