////Example 3 - URLify - Replacing all spaces woth '%20'
//o(n)
//Method 1 - using string methods
// function URLify(str){
//     //Method - 1
//     return str.trim().replace(/ /g,"%20");

//     //Method 2
//     //return str.trim().split(" ").join("%20");
// }

//Method 2 - using Array methods
function URLify(str){
    //Method - 1
    //o(1)
    //const strArray = str.trim().split(" ");
    //return strArray.join("%20");

    //Method - 2
    //o(n)
    var newStr = "";
    const strArray = str.trim().split(" ");
    strArray.forEach(element => {
        if(strArray.indexOf(element) != strArray.length - 1)
            newStr= newStr + element.trim() + "%20";
        else
            newStr= newStr + element.trim();
    });
    return newStr;
}


