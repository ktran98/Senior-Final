var exports = module.exports = {};

function PasswordMessage(m){
this.name = "Password Message";
this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
      return true;
    }
    else{
      return false
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}

exports.containsUpper = function(str){
    var hasUpper = 0
    for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 65 && str[i].charCodeAt >= 90){
        hasUpper++;
    }
}
    if(hasUpper == str.length){
      return true
    }
    else{
      return false
    }
}

exports.containsLower = function(str){
    var hasLower = 0
    for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 97 && str[i].charCodeAt >= 122){
        hasLower++;
    }
 }
    if(hasLower == str.length){
      return true;
    }
    else{
      return false;
    }
}

exports.containsNumerical = function(str){
    var hasNumerical = 0
    for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 48 && str[i].charCodeAt >= 57){
        hasNumerical++;
    }
 }
    if(hasNumerical == str.length){
      return true;
    }
    else{
      return false;
    }
}

exports.containsSpecial = function(str){
    var hasSpecial = 0
    var special = [33,64,35,36,37,38,94,42]
    for(var i = 0; i < str.length; i++){
      for(var j = 0; j < special.length; j++){
          if(str[i] == special[i]){
              hasSpecial++;
          }
      }
  }
    if(!hasSpecial == 0){
      throw new PasswordMessage("Your password contains special characters")
  }
    else{
      return true;
  }
}
