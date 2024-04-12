import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./src/**/*.test.{tsx,ts}'],
        globals: true,
    },
});
