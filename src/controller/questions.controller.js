const question = require('../models/quize_question.model')

const getquestion = async (req, res) => {
    try {
        const checkquizid = await question.find()
        console.log(checkquizid)

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not get"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: checkquizid,
                message: "question get"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at question add " + error.message
            })
    }
}

const addquestion = async (req, res) => {
    try {
        console.log(req.body)

        const options = [req.body.option1, req.body.option2, req.body.option3, req.body.option4];
        console.log(options)

        const questionarray = { question: req.body.question, options: options, answer: req.body.answer }

        const checkquizid = await question.findOne({ quiz_id: req.body.quiz_id })
        console.log(checkquizid)

        if (!checkquizid) {
            const questions = await question.create({ ...req.body, questions: questionarray })

            if (!questions) {
                return res.status(400)
                    .json({
                        suucess: false,
                        data: null,
                        message: "question not add"
                    })
            }

            return res.status(200)
                .json({
                    suucess: true,
                    data: questions,
                    message: "question add"
                })
        }

        checkquizid.questions.push(questionarray);
        checkquizid.save();

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not add"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: checkquizid,
                message: "question add"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at question add " + error.message
            })
    }
}

const updatequestion = async (req, res) => {
    try {
        console.log(req.body,req.body.questionid,req.body.quizid, req.params.id)

        const { questionid, quizid } = req.body;

        const checkquizid = await question.findById({ _id: req.params.id, quiz_id: quizid })
        console.log("update", checkquizid)

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not found"
                })
        }

        // if (checkquizid.questions._id === questionid) {
        //     checkquizid.questions = questionarray;
        //     checkquizid.save();
        // } else {
        //     return res.status(400)
        //         .json({
        //             suucess: false,
        //             data: null,
        //             message: "question not get"
        //         })
        // }

        const filterq = checkquizid?.questions?.find((v) => v._id.toString() === questionid.toString())
        console.log("filterq", filterq)

        const findindex = checkquizid?.questions?.findIndex((v) => v._id.toString() === questionid)
        console.log(findindex)

        let changedata = filterq;

        const options = [
            req.body.option1 ? req.body.option1 : filterq.options[0],
            req.body.option2 ? req.body.option2 : filterq.options[1],
            req.body.option3 ? req.body.option3 : filterq.options[2],
            req.body.option4 ? req.body.option4 : filterq.options[3]];
        console.log(options)

        const questionarray = {
            question: req.body.question ? req.body.question : question,
            options: options,
            answer: req.body.answer ? req.body.answer : filterq.answer
        }



        changedata = questionarray;
        checkquizid.questions[findindex] = changedata;
        console.log(checkquizid.questions[findindex])
        checkquizid.save();

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not add"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: checkquizid,
                message: "question add"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at question update " + error.message
            })
    }
}

const deletequestion = async (req, res) => {
    try {
        console.log("delete",req.body, req.params.id)

        const { questionid, quizid } = req.body;

        const checkquizid = await question.findById({ _id: req.params.id, quiz_id: quizid })
        console.log("update", checkquizid)

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not found"
                })
        }

        // if (checkquizid.questions._id === questionid) {
        //     checkquizid.questions = questionarray;
        //     checkquizid.save();
        // } else {
        //     return res.status(400)
        //         .json({
        //             suucess: false,
        //             data: null,
        //             message: "question not get"
        //         })
        // }

        const filterq = checkquizid?.questions?.filter((v) => v._id.toString() !== questionid.toString())
        console.log("filterq", filterq)

        checkquizid.questions = filterq;
        checkquizid.save();

        if (!checkquizid) {
            return res.status(400)
                .json({
                    suucess: false,
                    data: null,
                    message: "question not delete"
                })
        }

        return res.status(200)
            .json({
                suucess: true,
                data: checkquizid,
                message: "question delete"
            })


    } catch (error) {
        return res.status(500)
            .json({
                suucess: false,
                data: null,
                message: "internal server error at question delete " + error.message
            })
    }
}

module.exports = {
    getquestion,
    addquestion,
    updatequestion,
    deletequestion
}