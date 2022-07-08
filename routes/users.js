const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add-user').post((req, res) => {
  // const { uid } = req.body;
  // const hoa = [];
  // const newUser = new User({ uid, hoa });

  // newUser.save()
  //   .then(() => res.json('User added.'))
  //   .catch(err => res.status(400).json('Err: ' + err))
});

router.route('/:id').get((req, res) => {
  User.find({ 'uid': req.params.id })
    .then(users => {
      // if (users.length > 0) {
      //   res.json(users[0])
      // } else {
      //   res.json(false)
      // }
    })
    .catch(err => res.status(400).json('Err: ' + err));
});

module.exports = router;