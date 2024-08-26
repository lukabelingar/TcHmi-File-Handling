# File operations for TcHmi

Demonstration of reading, writing, deleting, uploading and downloading file under TcHmi framework. And listing a directory.
Demo accesses an extra virtual directory, `files/`, which can be outside of the hmi server physical directory. It only operates on files of the proper extension (txt in this case).
File contents are displayed (and can be modified) in the `TcHmiTextarea` element.
Each function accepts base directory, file and extension as separate arguments.
The big window in the middle is holding file's contents.

## Functionality
### Upload
File upload action is done by standard TS trickery and stores text into the big window.
If extension is provided, it filter files based on it.
If filename element is provided, uploaded file name will be stored there.

### Download
Downloads contents as file using standard TS trickery.

### Load
Loads file from server using standard jQuery trickery and displays contents.

### Save
Saves contents as file to the server side using TcHmi's `FileUploader` class and ws API.

### Delete
Deletes the file from the server by the given filename using TcHmi ws API.

## Running the project
Project expects a C:\shared folder to be accessed.

## Tested
Tested on 1.12.760.59
