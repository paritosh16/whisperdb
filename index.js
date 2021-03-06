var ps = require('child_process');
var baseCommand = "sudo python node_modules/whisperdb/bin/whisper-";

module.exports.create = function(absDir, name, pointPattern, callback){
	var command = baseCommand + "create.py " + absDir + name + ".wsp " + pointPattern;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	});
}

module.exports.update = function(absPath, timeSeriesArray, callback){
	var command = '';
	keys = Object.keys(timeSeriesArray);
	for (var i = 0; i < keys.length; i++) {
		command = command + keys[i] + ' ';
	};
	command = baseCommand + "update.py " + absPath + command;
	var cmd = ps.exec(command);
	cmd.on('close', function(data){
		callback();
	});
}

module.exports.fill = function(srcPath, dstPath, callback){
	var command = baseCommand + "fill.py " + srcPath + " " + dstPath;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	});
}

module.exports.merge = function(fromPath, toPath, callback){
	var command =  baseCommand + "merge.py " + fromPath + " " + toPath;
	var cmd  = ps.exec(command);
	cmd.on('close', function(){
		callback();
	});
}

module.exports.resize = function(absPath, pointPattern, callback){
	var command = baseCommand + "resize.py " + absPath + " " + pointPattern;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	});
}

module.exports.info = function(absPath, fieldName, callback){
	var command = baseCommand + "info.py " + absPath + " " + fieldName;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	}); 
}

module.exports.diff = function(aPath, bPath, callback){
	var command = baseCommand + "diff.py " + aPath + " " + bPath;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	});
}

module.exports.setAggrMeth = function(absPath, aggrMethod, callback){
	var command = baseCommand + "set-aggregation-method.py " + absPath + " " + aggrMethod;
	var cmd = ps.exec(command);
	cmd.on('close', function(){
		callback();
	}); 
}