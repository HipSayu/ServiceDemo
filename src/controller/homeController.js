import userService from '../service/userService';


const handleHello = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async  (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", {userList});
}

const handleCreateUser = (req, res) => {
    let email = req.body.Email;
    let password = req.body.Password;
    let username = req.body.Username;

    userService.createNewUser(email, password, username);
    
    return res.redirect("/users");
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/users");
}


const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    userData = user
    // if (user && user.length > 0){
    //     userData = user[0];
    // }
    return res.render("update_User.ejs",{userData})
}
const handleUpdateUsers = async(req, res) =>{
    let email = req.body.Email;
    let username = req.body.Username;
    let id = req.body.Id;
    await userService.UpdateUserInfor(username, email, id)
    return res.redirect("/users");
}

module.exports = {
    handleHello,
    handleUserPage,
    handleCreateUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUsers
}