package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.databaseconnection.ConnectDatabase
import org.springframework.web.bind.annotation.*
@CrossOrigin
@RestController
class SignInController {
    @GetMapping("/signin")
    fun signIn(@RequestHeader("username") username: String,
               @RequestHeader("password") password: String): String {
        val databaseConnection = ConnectDatabase()
        val loginState = databaseConnection.login("SELECT * FROM users WHERE username LIKE '%$username%' AND password like '%$password%'")
        return "user found"
    }
}
