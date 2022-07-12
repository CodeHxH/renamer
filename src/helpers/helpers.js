const helpers = {};

const fs = require('fs');

helpers.thereIsPath = (req, res, next) => {
	// Check the path
	fs.access(req.body.folder, fs.constants.F_OK, (err) => {
		if (err) {
			req.flash('error_msg', 'Your path not exist, check it again.');
			res.redirect('/');
		} else {
			next();
		}
	});
};

helpers.validateName = (req, res, next) => {
	// Exclude  and put a limit of 256 characters \ / : * ? " < > |
	const characters = ['\\', '/', ':', '*', '?', '"', '<', '>', '|'];

	let nameValidated = true;

	for (let i = 0; i < characters.length; i++) {
		if (req.body.name.indexOf(characters[i]) > -1) {
			nameValidated = false;
		}
	}

	if (nameValidated == true) {
		next();
	} else {
		req.flash('error_msg', 'Your new name is not valid, choose another name');
		res.redirect('/');
	}
};

module.exports = helpers;
