//importa i moduli per la gestione dei file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//ottiene il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentName = process.argv[2];

//controlla se è stato indicato il nome del componente
if (!componentName) {
  console.error('Fornisci un nome al componente.');
  process.exit(1);
}

//crea il percorso per il nuovo componente
const componentDir = path.join(__dirname, 'src', 'components', componentName);

//controlla se il componente già esiste
if (fs.existsSync(componentDir)) {
  console.error(`Componente ${componentName} già esistente.`);
  process.exit(1);
}

//crea la directory per il nuovo componente
fs.mkdirSync(componentDir);

//crea il contenuto del file tsx
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

//crea il contenuto del file css
const cssContent = `.${componentName} {
  /* Add your styles here */
}
`;

//scrive il contenuto nei file
fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssContent);

//stampa feedback
console.log(`Componente ${componentName} creato con successo.`);