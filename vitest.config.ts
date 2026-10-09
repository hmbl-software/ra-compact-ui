import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        exclude: ['**/node_modules/**', '**/dist/**', '**/examples/**'],
        // react-admin's UI package (ra-ui-materialui) imports MUI directories (e.g. '@mui/system/RtlProvider'),
        // which Node can't resolve, so let Vite process it.
        server: { deps: { inline: ['react-admin', 'ra-ui-materialui'] } },
    },
})
