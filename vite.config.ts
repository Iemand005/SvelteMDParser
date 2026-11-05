import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                runes: true
            }
        })
    ],
    build: {
        lib: {
            entry: "src/lib/index.ts",
            formats: ["es"],
            fileName: "index"
        },
        rollupOptions: {
            external: ["svelte"]
        }
    }
});