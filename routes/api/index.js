const router = require("express").Router();
const userRoutes = require('./user-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', dashboardRoutes);
router.use('/posts', dashboardRoutes);

module.exports = router;