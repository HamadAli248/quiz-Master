package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.query.QueryDatabase
import com.google.gson.Gson
import org.springframework.web.bind.annotation.*
data class ResponseData(val Result: String)
@CrossOrigin
@RestController
class QuizController {
    val databaseConnection = QueryDatabase()

    @GetMapping("/quiz")
    fun signIn(@RequestHeader("quizname") quizname: String): String {
        val quizQuestions = databaseConnection.queryForQuizQuestions("SELECT * FROM $quizname")
        var gson = Gson()
        return gson.toJson(quizQuestions)
    }

    @PostMapping("/addquestions")
    fun addQuestions(@RequestHeader("quizname") quizname: String,
                     @RequestHeader("permission") permission: String,
                     @RequestHeader("id") id: Int,
                     @RequestHeader("question") question: String,
                     @RequestHeader("correctAnswer") correctAnswer: String,
                     @RequestHeader("incorrectAnswer1") incorrectAnswer1: String,
                     @RequestHeader("incorrectAnswer2") incorrectAnswer2: String,
                     @RequestHeader("incorrectAnswer3") incorrectAnswer3: String,
                     @RequestHeader("incorrectAnswer4") incorrectAnswer4: String): ResponseData {
        return if (permission == "Edit") {
            val addingQuestionsResult = databaseConnection.updateQuiz("insert into $quizname (id, question, correctAnswer, incorrectAnswer1,incorrectAnswer2,incorrectAnswer3,incorrectAnswer4) values ('$id', '“$question”', '“$correctAnswer”', '“$incorrectAnswer1”', '“$incorrectAnswer2”','“$incorrectAnswer3”','“$incorrectAnswer4”')")
            return if (addingQuestionsResult.contains("org.sql2o.Connection@")) {
                ResponseData("added questions successfully")
            }else {
                ResponseData("could not update the questions as it already exits")
        }
        }else{
            ResponseData("you are not allowed to add questions")
        }
    }

    @PostMapping("/deletequizquestions")
    fun deleteQuizQuestions(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("permission") permission: String,
                            @RequestHeader("id") id: Int ):ResponseData{
        return if (permission == "Edit") {
            databaseConnection.updateQuiz("DELETE from $quizname WHERE id=$id")
            ResponseData("data deleted successfully")
        }else{
            ResponseData("you are not allowed to change data")
        }
    }
    @PostMapping("/updatequizquestions")
    fun updateQuizQuestions(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("permission") permission: String,
                            @RequestHeader("id") id: Int,
                            @RequestHeader("question") question: String,
                            @RequestHeader("correctAnswer") correctAnswer: String,
                            @RequestHeader("incorrectAnswer1") incorrectAnswer1: String,
                            @RequestHeader("incorrectAnswer2") incorrectAnswer2: String,
                            @RequestHeader("incorrectAnswer3") incorrectAnswer3: String,
                            @RequestHeader("incorrectAnswer4") incorrectAnswer4: String): ResponseData{
        return if (permission == "Edit") {
            databaseConnection.updateQuiz("UPDATE $quizname SET question = '$question',correctanswer = '$correctAnswer',incorrectAnswer1 ='$incorrectAnswer1',incorrectAnswer2 ='$incorrectAnswer2',incorrectAnswer3='$incorrectAnswer3',incorrectAnswer4='$incorrectAnswer4' where id=$id")
            ResponseData("update successfully")
        }else{
            ResponseData("You don't have access to change quiz questions")
        }
    }
    @PostMapping("/createquiz")
    fun createQuiz(@RequestHeader("quizname") quizname: String,
                   @RequestHeader("permission") permission: String):ResponseData{
        return if (permission == "Edit") {
            val createQuizResult = databaseConnection.updateQuiz("CREATE TABLE $quizname (id serial PRIMARY KEY,question VARCHAR (50) UNIQUE NOT NULL, correctAnswer VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer1 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer2 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer3 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer4 VARCHAR (50) UNIQUE NOT NULL)")
            return if (createQuizResult.contains("org.sql2o.Connection@")) {
                ResponseData("created $quizname successfully")
            }else {
                ResponseData("could not create quiz as $quizname already exits")
            }
        }else{
            ResponseData("You don't have access to create quiz")
        }
    }

    @PostMapping("/deletequiz")
    fun deleteQuiz(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("permission") permission: String,): String{
        return if (permission == "Edit") {
            val deleteQuizResult = databaseConnection.updateQuiz("DROP TABLE $quizname")
            return if (deleteQuizResult.contains("org.sql2o.Connection@")) {
                "deleted $quizname successfully"
            }else{
                "could not delete as $quizname does not exit"
            }
        }else{
            "You don't have access to change quiz questions"
        }
    }
}