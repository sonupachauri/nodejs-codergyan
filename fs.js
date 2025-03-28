// import fs from 'node:fs'
// import * as fs from 'node:fs'
import * as fs from  'node:fs/promises'

async function getFileInfo(filepath){
  const stats = await fs.stat(filepath);

  return {
    size: `${(stats.size/1024).toFixed(2)} KB`,
    created: stats.birthtime.toLocaleString(),
    modified: stats.mtime.toLocaleString(),
  }
}
async function deleteFolder(folderpath){
   await fs.rm(folderpath,{recursive:true})
}
async function deleteFile(filepath){
 await fs.unlink(filepath);
}
async function readFile(pathname){
   const res = await fs.readFile(pathname,'utf-8');
   console.log('data', res);
}
async function createFolder(foldername) {
    await fs.mkdir(foldername,{recursive:true});
}

async function createFile(pathname,content='') {
    await fs.writeFile(pathname,content);
}


async function writeToFile(pathname,content='') {
    await fs.appendFile(pathname,content);
}

// createFolder('./contents/images/logos')

// readFile('./hello.txt')

// deleteFile('./hello.txt')

getFileInfo('./fs.js').then(data=>{
    console.log(data);
});











// async function cretaeFilePromise(pathname){
//     try {
//         await fs.writeFile(pathname,"Hi, i am from promise!!\n");
//         await fs.appendFile(pathname,"Hi, i am from promise!!\n");
//         await fs.appendFile(pathname,"Hi, i am from promise!!\n");
//         console.log("file is written succsefully!!");
//     } catch (error) {
//         console.log('err', error);
//     }



// }


// cretaeFilePromise("./hello.txt")



















// function createFile(pathname){


// fs.writeFile('fs1.txt','Hello World2!!',()=>{
//  console.log("File created sucessfully!!")
// })



// fs.appendFile('fs1.txt','Hello World2!!\n',()=>{
//     console.log("File created sucessfully!!")
//    })

// fs.writeFileSync(pathname,"Hello NodeJS");
//     console.log("File has been created!!");
// }

// createFile('./fs2.txt');