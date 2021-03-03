package com.application.quizmasterbackendapplication.controllers

import com.application.quizmasterbackendapplication.query.QueryDatabase
import org.springframework.web.bind.annotation.*
@CrossOrigin
@RestController
class AdminController {
    @PostMapping("/changepermission")
    fun signIn(@RequestHeader("username") username: String,
               @RequestHeader("permission") permission: String,
               @RequestHeader("updatePermission") updatePermission: String):ResponseData {
        val databaseConnection = QueryDatabase()
        return if (permission == "Edit") {
            val userPermissionUpdate = databaseConnection.updateUserPermission("UPDATE users SET permissions = '$updatePermission' where username='$username';")
            return if (userPermissionUpdate.contains("org.sql2o.Connection@")) {
                ResponseData("updated user:$username permission to $updatePermission successfully")
            }else {
                ResponseData("could not update the user:$username permission to $updatePermission please try again")
            }
        }else{
            ResponseData("you are not allowed update permissions")
        }
    }
}
