const Router = require('@koa/router');
const router = new Router();
const {getAll, set, deleteAll} = require('./controllers/controller');

router.get('/messages', getAll);
router.post('/messages', set);
router.del('/messages', deleteAll);
module.exports = router;