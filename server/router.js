'use strict';
const express    = require('express');        
const router = express.Router();     

const User     = require('./user');

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/users', (req, res) => {
    console.log(req.body)
        var user = new User();      
        user.firstName = req.body.firstName;  
        user.lastName = req.body.lastName; 
        user.sex = req.body.sex;
        user.age = req.body.age;
        user.password = req.body.password;
        user.password2 = req.body.password2;
        console.log(user)

        user.save(  err => {
            if (err) {
                res.status(501).send(err);
            };
            res.status(200).json({ message: 'User created!' });
        });
        
    });

router.get('/users', (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(users);
        });
    });

router.get('/users/:id', (req, res) => {
        Bear.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json(user);
        });
    });

router.put('/users/:id', (req, res) => {
        Bear.findById(req.params.id, (err, user) => {

            if (err) {
                res.send(err);
            }
            user.firstName = req.body.firstName;  
        user.lastName = req.body.lastName; 
        user.sex = req.body.sex;
        user.age = req.body.age;
        user.password = req.body.password;
        user.password2 = req.body.password2;
            user.save(err =>  {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'User updated!' });
            });

        });
    });

router.delete('/users/:id', (req, res) => {
        Bear.deleteOne({
            _id: req.params.id
        }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;


