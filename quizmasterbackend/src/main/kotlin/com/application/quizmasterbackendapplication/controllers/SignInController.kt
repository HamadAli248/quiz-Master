package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.query.QueryDatabase
import org.mindrot.jbcrypt.BCrypt
import org.springframework.web.bind.annotation.*
data class SignInResult(val Result: String , val Permissions:String)

@CrossOrigin
@RestController
class SignInController {
    @PostMapping("/signin")
    fun signIn(@RequestHeader("username") username: String,
               @RequestHeader("password") password: String): SignInResult {
        val databaseConnection = QueryDatabase()
        val queryForPassword = databaseConnection.login("select password from users where username='$username'")
        return if (queryForPassword.toString() === "[]"){
            SignInResult("Invalid User", "Invalid")
        }else {
            var passwordValue= queryForPassword.toString().drop(23)
            var passwordValueFinalValue = passwordValue?.dropLast(2);
            return if (BCrypt.checkpw("$password", "$passwordValueFinalValue")){
                val queryForPermission =databaseConnection.queryForPermission("select permissions from users where username='$username'")
                var queryForPermissionValue= queryForPermission.toString().drop(29)
                var finalValue = queryForPermissionValue?.dropLast(2);
                SignInResult("Valid User","$finalValue")
            }
            else{
                SignInResult("Incorrect Password", "Invalid")
            }
        }
    }
}
