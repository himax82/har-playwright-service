// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './',
    timeout: 120000,
    use: {
        baseURL: 'https://192.168.42.201',
    },
});