package com.application.quizmasterbackendapplication.query

import org.sql2o.Sql2o
import java.util.*

class QueryDatabase() {
    val sql2o = Sql2o("jdbc:postgresql://localhost:5432/quizmasterapp", "quizmasterapp", "password")
    fun login(sqlQuery:String): String {
        return sql2o.open().use { conn ->
            var sql = sqlQuery
            val result = conn.createQuery(sql).executeAndFetch(User::class.java)
            return@use result.toString()
        }
    }
    fun queryForPermission(sqlQuery:String): MutableList<UserPermissions>? {
        return sql2o.open().use { conn ->
            var sql = sqlQuery
            return@use conn.createQuery(sql).executeAndFetch(UserPermissions::class.java)
        }
    }

    fun queryForQuizQuestions(sqlQuery:String): MutableList<QuizQuestions>? {
        return sql2o.open().use { conn ->
            var sql = sqlQuery
            return@use conn.createQuery(sql).executeAndFetch(QuizQuestions::class.java)
        }
    }

    fun updateQuiz(sqlQuery:String): String {
        return sql2o.open().use { conn ->
            try {
                var sql = sqlQuery
                val result = conn.createQuery(sql).executeUpdate()
                return@use result.toString()
            }catch (e: Exception) {
                return@use e.toString()
            }
        }
    }
    fun updateUserPermission(sqlQuery:String): String {
        return sql2o.open().use { conn ->
            try {
                var sql = sqlQuery
                val result = conn.createQuery(sql).executeUpdate()
                return@use result.toString()
            }catch (e: Exception) {
                return@use e.toString()
            }
        }
    }
    data class UserPermissions(val permissions: String)
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
