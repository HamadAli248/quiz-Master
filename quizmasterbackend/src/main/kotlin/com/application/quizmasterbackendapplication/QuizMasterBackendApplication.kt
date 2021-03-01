package com.application.quizmasterbackendapplication

import com.application.quizmasterbackendapplication.databaseconnection.ConnectDatabase
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class QuizMasterBackendApplication

fun main(args: Array<String>) {
	runApplication<QuizMasterBackendApplication>(*args)
	val databaseConnection = ConnectDatabase()
	databaseConnection.connectWithDataBase()
}
