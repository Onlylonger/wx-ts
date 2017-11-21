/**
 * node 应用接口路由
 */

const router = require('express').Router()

router.use('/demo', (req, res) => {
    res.json({
        code: 1,
        msg: '成功'
    })
})

module.exports = router
