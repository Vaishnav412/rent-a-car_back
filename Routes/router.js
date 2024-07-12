const express = require('express');

const userController = require('../controllers/userController');

const adminController=require('../controllers/adminController')

const detailsController = require('../controllers/detailsController');

const getdetailsController=require('../controllers/getDetailsController')

const wishlistController=require('../controllers/wishListControllers')

const bookingController=require('../controllers/bookingController')

const router =new express.Router();

// register
router.post('/user/register', userController.registerController);

// login

router.post('/user/login',userController.logincontroller)

// bookings

router.post('/booking/add',bookingController.addbooking)

// getallbooking

router.get('/mybookings',bookingController.getAllbookings)

// admin controller

router.post('/admin/login',adminController.adminlogincontroller)

// edit details

router.put('/edit/:_id',getdetailsController.editDetails)

// add details

router.post('/details/add',detailsController.adddetails)

// delete details

router.delete('/details/delete/:id',getdetailsController.deleteDetails)

router.delete('/booking/delete/:id',bookingController.cancelBookings)

// get all details

router.get('/details/getall',getdetailsController.getAlldetailscontroller)

// get single view details

router.get('/details/view/:id',getdetailsController.getAdetails)


router.get('/user/single/view/:_id',userController.getAuserid)

//add wishlist
router.post('/user/wishlist',wishlistController.addToWishlist)

// delete wishlist

router.delete('/user/deletewishlist/:id',wishlistController.cancelwishlist)

// wishlist

router.get('/user/get-wishlist',wishlistController.getwishlist)

module.exports = router;
