const fs = require("fs");



//Create Folder
fs.mkdir('./delete', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("New directory successfully created.");
  }
});


//Create File
fs.writeFile("data.txt", "This is data \n", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File successfully created");
  }
});


//Append
fs.appendFile("data.txt", "This is appended data \n", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Data appended successfully");
    }
});
  

//Rename
fs.rename('data.txt', 'files.txt', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('File name changed successfully');
  }
});


//Read File
fs.readFile("files.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});


//Delete File
fs.unlink("delete", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('File deleted successfully.');
  }
});


//Delete Folder
fs.rmdir("delete", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Directory deleted successfully.');
  }
});