package com.application.quizmasterbackendapplication.databaseconnection


import org.sql2o.Connection
import org.sql2o.Sql2o
import java.sql.DriverManager
import java.util.*

private const val DB_URL = "jdbc:postgresql://localhost:5432/quizmasterapp"
private const val USERNAME = "quizmasterapp"
private const val PASSWORD = "password"
class ConnectDatabase() {
    fun connectWithDataBase() {
        prepareDb()
        val sql2o = Sql2o(DB_URL, USERNAME, PASSWORD)
        sql2o.open().use { conn ->
//            insert(1, "hamad", "test","hamad@email.com","admin", conn)
            query(conn)
//            update(conn)
//            query(conn)
//            delete(conn)
//            query(conn)
        }
    }

    fun delete(conn: Connection) {
        conn.createQuery("""delete from mytbl where id=1""").executeUpdate()
    }

    fun update(conn: Connection) {
        conn.createQuery("""update mytbl set name = 'Hi!'""").executeUpdate()
    }

    fun insert(id:Int,username:String,password: String,email: String,permissions:String, conn: Connection) {
        conn.createQuery("""insert into users values(:id, :username, :password,:email,:permissions)""")
                .addParameter("id", id)
                .addParameter("username", username)
                .addParameter("password", password)
                .addParameter("email", email)
                .addParameter("permissions", permissions)
                .executeUpdate()
    }

    private fun query(conn: Connection) {
        val sql = "select * from users"
        val users = conn.createQuery(sql).executeAndFetch(User::class.java)
        println(users)
    }

    data class User(val id: Int, val username: String, val password: String, val email: String,val permissions: String)

    private fun prepareDb() {
        Class.forName("org.postgresql.Driver")
        val conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD)
//        conn.createStatement().use { stmt ->
//            with(stmt) {
//                executeUpdate("create table user(id serial PRIMARY KEY,username VARCHAR (50) UNIQUE NOT NULL, password VARCHAR (100) NOT NULL,email VARCHAR (355) UNIQUE NOT NULL,permissions VARCHAR (355) UNIQUE NOT NULL )")
//            }
//        }
        // Notice
        // the `conn` should not be closed, otherwise the db will be destroyed
    }

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
