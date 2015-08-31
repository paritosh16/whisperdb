# whisperdb
A npm module for performing CRUD operations on the Whisper rrd database.

Usage 

whisperdb is easy to use:

```js
var whisper = require('whisperdb');

//Creates a whisper file with the name at the path mentioned.

whisper.create(absPath, name, pointPattern, function(){
	//callback routine
});

//Updates the whisper file with the values in timeSeriesArray
//timeSeriesArray - JSON with all the key value pairs. Key is the epoch time, value is the corresponding value to be updated in whisper file.	

whisper.update(absPath, timeSeriesArray, function(){
	//callback routine
});

//Copies content of source to destination if not present.

whisper.fill(srcPath, dstPath, function(){
	//callback routine
});

//Merge two separate whisper files.

whisper.merge(fromPath, toPath, function(){
	//callback routine
});

//Resize a whisper file to different point pattern.

whisper.resize(absPath, pointPattern, function(){
	//callback routine
});

//Get complete info about a whisper file.

whisper.info(absPath, fieldName, function(){
	//callback routine
});

//Get the difference between two whisper files.
whisper.diff(aPath, bPath, function(){
	//callback routine
});
```