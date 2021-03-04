package com.application.quizmasterbackendapplication

import com.application.quizmasterbackendapplication.services.AddingNewUsers
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class QuizMasterBackendApplication

fun main(args: Array<String>) {
	runApplication<QuizMasterBackendApplication>(*args)
//	val addUsers = AddingNewUsers()
//	addUsers.storeData()
}
