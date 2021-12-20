const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/documents', controllers.getAllDocs);
router.post('/documents', controllers.createDoc);
router.put('/document/:id', controllers.updateDoc);
router.get('/document/:id', controllers.getDocByID);
router.get('/document/name/:title', controllers.getDocByTitle);
router.delete('/document/:id', controllers.deleteDoc);

module.exports = router;
