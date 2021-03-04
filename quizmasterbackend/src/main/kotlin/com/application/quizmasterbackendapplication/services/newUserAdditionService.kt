package com.application.quizmasterbackendapplication.services

import com.application.quizmasterbackendapplication.query.QueryDatabase
import com.google.gson.Gson
import org.mindrot.jbcrypt.BCrypt
import org.springframework.stereotype.Service

data class NewUser(val id: Int, val username: String, val password: String,val permissions: String) {}
@Service
class AddingNewUsers {
    val mydata ="""
        {
        "id": "3",
        "username": "newUser3",
        "password": "mypassword",
        "permissions":"Restricted"
    }
    """
    fun storeData(){
        val data = Gson().fromJson<NewUser>(mydata, NewUser::class.java)
        val id = data.id;
        val username = data.username
        val password = HashPassword(data.password)
        val permissions = data.permissions
        storeNewUser(id,username,password, permissions)
    }
    fun HashPassword(password: String):String {
         val hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt())
        println(hashedPassword)
        return hashedPassword
    }
    fun storeNewUser(userId : Int, userUsername: String,UserPassword:String, userPermissions:String ){
        val databaseConnection = QueryDatabase()
        val addNewUsers = databaseConnection.addUsers("insert into users (id, username, password, permissions) values ('$userId', '$userUsername', '$UserPassword' , '$userPermissions')")
        println(addNewUsers)
    }
}