module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/index.tsx',
        '!src/assets/icons/index.ts',
        '!src/stories/**',
        '!src/**/*.d.ts',
        '!src/**/*.ts'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    modulePaths: ['node_modules', '<rootDir>/src'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    transformIgnorePatterns: ['<rootDir>/node_modules/', 'node_modules/']
};
