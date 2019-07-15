// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTful API Implementation!'
    });
});

// Import contact controller
var contactController = require('./contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
// Export API routes
module.exports = router;

/*
We first import express router, set the default route and export 
the module so that we can import into our application. To make this route accessible,
we need to modify index.js and add few lines of code to it like so.
*/