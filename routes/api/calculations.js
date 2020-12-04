const router = require('express').Router();
const calculationsController = require('../../controllers/calcultionsController');

router.route('/')
    .get(calculationsController.findAll)
    .post(calculationsController.create);

router
    .route('/:id')
    .get(calculationsController.findById)
    .put(calculationsController.update)
    .delete(calculationsController.remove);

module.exports = router;