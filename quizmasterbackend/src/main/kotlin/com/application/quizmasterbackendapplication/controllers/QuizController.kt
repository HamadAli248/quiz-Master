package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.databaseconnection.ConnectDatabase
import org.springframework.web.bind.annotation.*
@CrossOrigin
@RestController
class QuizController {
    @GetMapping("/quiz")
    fun signIn(@RequestHeader("quizname") quizname: String):String{
        println(quizname)
        val databaseConnection = ConnectDatabase()
        databaseConnection.queryForQuizQuestions("SELECT * FROM $quizname")
        return "data fetched successfully"
    }

    @PostMapping("/addquestions")
    fun addQuestions(@RequestHeader("quizname") quizname: String,
                     @RequestHeader("id") id: Int,
                     @RequestHeader("question") question: String,
                     @RequestHeader("correctAnswer") correctAnswer: String,
                     @RequestHeader("incorrectAnswer1") incorrectAnswer1: String,
                     @RequestHeader("incorrectAnswer2") incorrectAnswer2: String,
                     @RequestHeader("incorrectAnswer3") incorrectAnswer3: String,
                     @RequestHeader("incorrectAnswer4") incorrectAnswer4: String):String{
        val databaseConnection = ConnectDatabase()
        databaseConnection.updateQuiz("insert into $quizname (id, question, correctAnswer, incorrectAnswer1,incorrectAnswer2,incorrectAnswer3,incorrectAnswer4) values ('$id', '“$question”', '“$correctAnswer”', '“$incorrectAnswer1”', '“$incorrectAnswer2”','“$incorrectAnswer3”','“$incorrectAnswer4”')")
        return "added questions successfully"

    }

    @PostMapping("/deletequizquestions")
    fun deleteQuizQuestions(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("id") id: Int ):String{
        val databaseConnection = ConnectDatabase()
        databaseConnection.updateQuiz("DELETE from $quizname WHERE id=$id")
        return "data deleted successfully"
    }
    @PostMapping("/updatequizquestions")
    fun updateQuizQuestions(@RequestHeader("quizname") quizname: String,
                            @RequestHeader("id") id: Int,
                            @RequestHeader("change") change: String,
                            @RequestHeader("value") value: String):String{
        val databaseConnection = ConnectDatabase()
        databaseConnection.updateQuiz("UPDATE $quizname SET $change='$value' where id=$id")
        return "update successfully"
    }
}