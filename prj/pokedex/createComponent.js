import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentName = process.argv[2];

if (!componentName) {
  console.error('Fornisci un nome al componente.');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src', 'components', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Componente ${componentName} già esistente.`);
  process.exit(1);
}

fs.mkdirSync(componentDir);
const tsxContent = `import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      {/* Add your component code here */}
    </div>
  );
};

export default ${componentName};
`;

const cssContent = `.${componentName} {
  /* Add your styles here */
}
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssContent);

console.log(`Componente ${componentName} creato con successo.`);