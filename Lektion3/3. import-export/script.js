import User from "./Models/user.js";
import UserService from "./Services/userService.js";
import{validate, sendMessage} from "./Functions/functions.js";  

const user = new User('KaLlE', 'KarLsSon', 'kalle@karlsson.com', 'password');

// UserService.signUp(user); 

validate(user, u=>UserService.signUp(u)); 

sendMessage('kalle', message => console.log(message)); 

