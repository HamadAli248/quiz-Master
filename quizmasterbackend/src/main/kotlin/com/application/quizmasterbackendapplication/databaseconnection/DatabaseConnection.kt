package com.application.quizmasterbackendapplication.databaseconnection

import org.sql2o.Sql2o
import java.util.*

class ConnectDatabase() {
    val sql2o = Sql2o("jdbc:postgresql://localhost:5432/quizmasterapp", "quizmasterapp", "password")
    fun login(sqlQuery:String) {
        sql2o.open().use { conn ->
            var sql = sqlQuery
            val users = conn.createQuery(sql).executeAndFetch(User::class.java)
            println("Result ===========$users")
            if(users === null){
                return@use "successful"
            }
            else{
                return@use "error"
            }
        }
    }
    fun queryForQuizQuestions(sqlQuery:String) {
        sql2o.open().use { conn ->
            var sql = sqlQuery
            val quizQuestions = conn.createQuery(sql).executeAndFetch(QuizQuestions::class.java)
            println("Result ===========$quizQuestions")}
        }
    fun updateQuiz(sqlQuery:String) {
        sql2o.open().use { conn ->
            var sql = sqlQuery
            conn.createQuery(sql).executeUpdate()
        }
    }

    data class User(val id: Int, val username: String, val password: String, val email: String,val permissions: String)
    data class QuizQuestions(val id: Int, val question: String, val correctAnswer: String, val incorrectAnswer1: String,val incorrectAnswer2: String,val incorrectAnswer3: String,val incorrectAnswer4: String)

    fun <T : AutoCloseable?, R> T.use(block: (T) -> R): R {
        try {
            return block(this)
        } finally {
            try {
                this?.close()
            } catch (e: Exception) {
                println(e.toString())
            }
        }
    }
}
