import bcrypt from 'bcrypt';
import mysql  from 'mysql2/promise';
import bluebird  from 'bluebird';
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);

const hassUserPassword = (userPassword) => {
    let hasPassword = bcrypt.hashSync(userPassword, salt);
    return hasPassword
}
const createNewUser = async (email, password, username) =>{
    let hashPass = hassUserPassword(password);
  

    try{
        await db.User.create({
                username : username,
                password : hashPass,
                email : email
        })
    }
    catch (err){
        console.log("check error :", err)
    }


}






const getUserList = async () =>{


    let newuser = await db.User.findOne({
        where : {id : 1},
        attributes : ['id', 'username', 'email'],
        include : {model: db.Group,  attributes : ['id', 'name', 'description'],},
        raw: true,
        nest : true
    })

    let role = await db.Group.findAll({
        where : {id : 1},
        include : {model: db.Role},
        raw: true,
        nest : true
    })


    console.log('check newuser: ', newuser)
    console.log('check role: ', role)


    
    let users = [];

    users = await db.User.findAll();
    
    return users;    
    // create the connection, specify bluebird as Promise
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'jwt', Promise: bluebird});

    // // query database
    
    // try{
    //     const [rows, fields] = await connection.execute('SELECT * FROM user');
    //     return rows
    // }
    // catch (err){
    //     console.log("check error :", err)
    // }
}




const deleteUser = async(userid) =>{
    await db.User.destroy({
        where : {id: userid}
    })



    // create the connection, specify bluebird as Promise
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    // try{
    //     const [rows, fields] = await connection.execute('DELETE FROM user WHERE ID = ?', [id]);
    //     return rows
    // }
    // catch (err){
    //     console.log("check error :", err)
    // }


}
const getUserById = async (userid) =>{
    let user = {}
    user = await db.User.findOne({
        where :{id:userid},
    })
    return user.get({plain : true});
    //   // create the connection, specify bluebird as Promise
    //   const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    //   try{
    //       const [rows, fields] = await connection.execute('SELECT * FROM user WHERE ID = ?', [id]);
    //       return rows
    //   }
    //   catch (err){
    //       console.log("check error :", err)
    //   }
}

const UpdateUserInfor = async (username, email, id)=> {
   
    await db.User.update(
        {
            username:username ,email:email
        },
        {
            where : { id: id}

        });
    //  // create the connection, specify bluebird as Promise
    //  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'jwt', Promise: bluebird});
    //  try{
    //      const [rows, fields] = await connection.execute('UPDATE user SET email = ?, username = ? WHERE ID = ?', [email, username, id]);
    //      return rows
    //  }
    //  catch (err){
    //      console.log("check error :", err)
    //  }
}
module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    UpdateUserInfor
}
