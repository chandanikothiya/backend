const express = require('express')
const router = express.Router();

const categoryRouter = require('./category.routes')
const courseRouter = require('./course.routes')
const sectionRouter = require('./section.routes')
const contentRouter = require('./content.routes')
const quizRouter = require('./quiz.routes')
const quizcontentRouter = require('./quiz_content.routes')
const resultRouter = require('./result.router')
const userRouter = require('./user.router')
const wishlistRouter = require('./wishlist.routes')
const cartRouter = require('./cart.routes')
const admissionRouter = require('./admission.routes')
const progressRouter = require('./progress.routes')
const reviewRouter = require('./review.routes')
const paymentRouter = require('./payment.routes')
const couponRouter = require('./coupon.routes')
const cardRouter = require('./card.routes')
const certificateRouter = require('./certificate.routes')
const blogRouter = require('./blog.routes')
const termsconditionRouter = require('./terms_condition.routes')
const register = require('./register.routes')

//http://localhost:8080/api/v1/category
router.use('/category',categoryRouter)

//http://localhost:8080/api/v1/course
router.use('/course',courseRouter)

//http://localhost:8080/api/v1/section
router.use('/section',sectionRouter)

//http://localhost:8080/api/v1/content
router.use('/content',contentRouter)

//http://localhost:8080/api/v1/quiz
router.use('/quiz',quizRouter)

//http://localhost:8080/api/v1/quizcontent
router.use('/quizcontent',quizcontentRouter)

//http://localhost:8080/api/v1/result
router.use('/result',resultRouter)

//http://localhost:8080/api/v1/user
router.use('/user',userRouter)

//http://localhost:8080/api/v1/wishlist
router.use('/wishlist',wishlistRouter)

//http://localhost:8080/api/v1/cart
router.use('/cart',cartRouter)

//http://localhost:8080/api/v1/admission
router.use('/admission',admissionRouter)

//http://localhost:8080/api/v1/progress
router.use('/progress',progressRouter)

//http://localhost:8080/api/v1/review
router.use('/review',reviewRouter)

//http://localhost:8080/api/v1/payment
router.use('/payment',paymentRouter)

//http://localhost:8080/api/v1/coupon
router.use('/coupon',couponRouter)

//http://localhost:8080/api/v1/card
router.use('/card',cardRouter)

//http://localhost:8080/api/v1/certifiacte
router.use('/certifiacte',certificateRouter)

//http://localhost:8080/api/v1/blog
router.use('/blog',blogRouter)

//http://localhost:8080/api/v1/termscondition
router.use('/termscondition',termsconditionRouter)

//http://localhost:8080/api/v1
router.use('/register',register)

module.exports = router