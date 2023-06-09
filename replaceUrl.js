const fs = require("fs");
const path = require("path");

const rootPath = path.resolve("./", "source", "_posts");

const traversalDirs = (dirPath) => {
  let dirs = fs.readdirSync(dirPath);
  for (let i = 0; i < dirs.length; i++) {
    let filePath = path.resolve(dirPath, dirs[i]);
    let fstate = fs.lstatSync(filePath);

    if (fstate.isDirectory()) {
      traversalDirs(path.resolve(filePath));
      continue;
    }

    if (fstate.isFile()) {
      handleFile(filePath);
      continue;
    }
  }
};

const handleFile = (filePath) => {
  const extname = path.extname(filePath);
  if(extname === '.md'){
    const file = fs.readFileSync(filePath, 'utf8');
    const replaceFile = file.replaceAll('http://127.0.0.1:5500', 'https://xiaogezi.fun');
    fs.writeFileSync(filePath, replaceFile)
    console.log('文件已替换:' + filePath);
  }
};

traversalDirs(rootPath);
