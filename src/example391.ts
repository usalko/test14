// src/example391.ts

// Write a JavaScript program to write a JSON object to a file.
export function example391(inputObj: any, fileName: string): any {
    fs.writeFileSync(`${fileName}.json`, JSON.stringify(inputObj));
    return "ok";
}

function saveFile(filename: string, content: any, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// // Использование
// saveFile('document.txt', 'Hello, World!');
// saveFile('data.json', JSON.stringify({ key: 'value' }));

async function writeFile(filename: string, content: any) {
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [{
        description: 'Text files',
        accept: { 'text/plain': ['.txt'] }
      }]
    });
    
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
    
    return 'File saved successfully';
  } catch (err: any) {
    if (err.name === 'AbortError') return;
    console.error(err);
  }
}

// // Использование (только по действию пользователя)
// button.addEventListener('click', async () => {
//   await writeFile('test.txt', 'Hello, World!');
// });