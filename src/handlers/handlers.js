const handlers = {};

const fs = require('fs');
const path = require('path');

handlers.renderIndex = (req, res) => {
	res.render('index');
};

handlers.getFiles = (req, res) => {
	// Read folder
	const files = fs.readdirSync(req.body.folder);

	// Save folder path
	req.session.folder_path = req.body.folder;
	// Save cap name
	req.session.cap_name = req.body.name;

	//req.flash('success_msg', 'It is okay, now just order your files!!!');

	res.render('index', { files });
};

handlers.renameFiles = (req, res) => {
	// folder Path
	const folderPath = req.session.folder_path;

	// New name of the cap
	const capName = req.session.cap_name;

	function renamer(item, num) {
		const oldName = folderPath + path.sep + item;
		const newName = folderPath + path.sep + capName + num + path.extname(item);

		if (item != undefined) {
			fs.rename(oldName, newName, (err) => console.log(err));
		}
	}

	let claves = Object.keys(req.body);
	for (let i = 0; i < claves.length; i++) {
		let clave = claves[i];
		index = i;
		let number = index++ < 9 ? `0${index++}` : `${index++}`;
		renamer(req.body[clave], number);
	}

	//req.flash('success_msg');

	res.redirect('/');
};

module.exports = handlers;
