import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

async function main() {
    try {
        const distIndex = resolve(process.cwd(), 'dist', 'index.html');
        const dist404 = resolve(process.cwd(), 'dist', '404.html');
        const data = await readFile(distIndex, { encoding: 'utf8' });
        await writeFile(dist404, data, { encoding: 'utf8' });
        console.log('Copied dist/index.html to dist/404.html');
    } catch (err) {
        console.error('Failed to copy index.html to 404.html:', err);
        process.exit(1);
    }
}

main();
