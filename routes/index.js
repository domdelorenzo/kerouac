const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/documents', controllers.getAllDocs);
router.post('/documents', controllers.createDoc);
router.put('/document/:id', controllers.updateDoc);
router.get('/document/name/:title', controllers.getDocByTitle);

module.exports = router;
