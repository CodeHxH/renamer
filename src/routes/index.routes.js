const router = require('express').Router();

const { renderIndex, getFiles, renameFiles } = require('../handlers/handlers');

const { thereIsPath, validateName } = require('../helpers/helpers');

router.get('/', renderIndex);

router.post('/path', thereIsPath, validateName, getFiles);

router.post('/rename', renameFiles);

module.exports = router;
