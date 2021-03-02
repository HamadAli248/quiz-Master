package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.query.QueryDatabase
import com.google.gson.Gson
import org.springframework.web.bind.annotation.*
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
                     @RequestHeader("incorrectAnswer4") incorrectAnswer4: String): String {
        return if (permission == "edit") {
            val addingQuestionsResult = databaseConnection.updateQuiz("insert into $quizname (id, question, correctAnswer, incorrectAnswer1,incorrectAnswer2,incorrectAnswer3,incorrectAnswer4) values ('$id', '“$question”', '“$correctAnswer”', '“$incorrectAnswer1”', '“$incorrectAnswer2”','“$incorrectAnswer3”','“$incorrectAnswer4”')")
            return if (addingQuestionsResult.contains("org.sql2o.Connection@")) {
                "added questions successfully"
            }else {
                "could not update the questions as it already exits"
        }
        }else{
            "you are not allowed to add questions"
        }
    }

    @PostMapping("/deletequizquestions")
    fun deleteQuizQuestions(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("permission") permission: String,
                            @RequestHeader("id") id: Int ):String{
        return if (permission == "edit") {
            databaseConnection.updateQuiz("DELETE from $quizname WHERE id=$id")
            "data deleted successfully"
        }else{
            "you are not allowed to change data"
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
                            @RequestHeader("incorrectAnswer4") incorrectAnswer4: String): String{
        return if (permission == "edit") {
            databaseConnection.updateQuiz("UPDATE $quizname SET question = '$question',correctanswer = '$correctAnswer',incorrectAnswer1 ='$incorrectAnswer1',incorrectAnswer2 ='$incorrectAnswer2',incorrectAnswer3='$incorrectAnswer3',incorrectAnswer4='$incorrectAnswer4' where id=$id")
            "update successfully"
        }else{
            "You don't have access to change quiz questions"
        }
    }
    @PostMapping("/createquiz")
    fun createQuiz(@RequestHeader("quizname") quizname: String,
                   @RequestHeader("permission") permission: String):String{
        return if (permission == "edit") {
            val createQuizResult = databaseConnection.updateQuiz("CREATE TABLE $quizname (id serial PRIMARY KEY,question VARCHAR (50) UNIQUE NOT NULL, correctAnswer VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer1 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer2 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer3 VARCHAR (50) UNIQUE NOT NULL,incorrectAnswer4 VARCHAR (50) UNIQUE NOT NULL)")
            return if (createQuizResult.contains("org.sql2o.Connection@")) {
                "created $quizname successfully"
            }else {
                "could not create quiz as $quizname already exits"
            }
        }else{
            "You don't have access to create quiz"
        }
    }

    @PostMapping("/deletequiz")
    fun deleteQuiz(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("permission") permission: String,): String{
        return if (permission == "edit") {
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