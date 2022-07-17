const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add-reality/:id').post((req, res) => {
  User.find({ 'uid': req.params.id })
    .then(user => {
      console.log('res', res);
      const {
        awareness,
        possibility,
        glossary,
      } = req.body;

      const newReality = {
        awareness,
        possibility,
        glossary,
      };


      user[0].reality = newReality;

      user[0].save()
        .then(() => res.json('Reality added.'))
        .catch(err => res.status(400).json('Err: ' + err))
    })

});

//get user reality by uid
router.route('/:id').get((req, res) => {
  User.find({ 'uid': req.params.id })
    .then(users => {
      if (users.length > 0) {
        res.json(users[0]);
      } else {
        res.json(false);
      }
    })
    .catch(err => res.status(400).json('Err: ' + err));
});

router.route('/add-user').post((req, res) => {
  const newUser = new User({
    uid: req.body.uid
  });

  newUser.save()
    .then(() => res.json('User added.'))
    .catch(err => res.status(400).json('Err: ' + err))
});

module.exports = router;