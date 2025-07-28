import baseConfig from '@hrbox/packages/configs/vite.config.ts'
import { defineConfig } from '@'

export default defineConfig({
    ...baseConfig,
    plugins: [
        ...(baseConfig.plugins || [])
    ]
})
