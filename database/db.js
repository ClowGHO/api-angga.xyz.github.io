var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'mongodb+srv://Ghofamsteam:biling8787@cluster0.pp0m0.mongodb.net/?retryWrites=true&w=majority';
try {
if(url == 'mongodb+srv://Ghofamsteam:biling8787@cluster0.pp0m0.mongodb.net/?retryWrites=true&w=majority') throw console.log(color('Configurasi database, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, Loli Killers','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar','red'))
	})


module.exports = db
