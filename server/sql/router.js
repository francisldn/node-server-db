const Router = require('@koa/router')
const router = new Router();
const {getMessage, postMessage} = require('./controllers/controller')

router.get('/messages', getMessage)
router.post('/messages', postMessage)

module.exports = router