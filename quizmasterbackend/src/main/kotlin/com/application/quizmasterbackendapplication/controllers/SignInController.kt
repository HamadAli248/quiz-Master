package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.query.QueryDatabase
import org.springframework.web.bind.annotation.*
data class SignInResult(val Result: String , val Permissions:String)

@CrossOrigin
@RestController
class SignInController {
    @PostMapping("/signin")
    fun signIn(@RequestHeader("username") username: String,
               @RequestHeader("password") password: String): SignInResult {
        val databaseConnection = QueryDatabase()
        val loginState = databaseConnection.login("SELECT * FROM users WHERE username LIKE '%$username%' AND password like '%$password%'")
        return if (loginState === "[]"){
            SignInResult("Invalid User", "Invalid")
        }else {
            val queryForPermission =databaseConnection.queryForPermission("select permissions from users where username='$username'")
            var queryForPermissionValue= queryForPermission.toString().drop(29)
            var finalValue = queryForPermissionValue?.dropLast(2);
            SignInResult("Valid User","$finalValue")
        }
    }
}
