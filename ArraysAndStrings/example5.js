////Example 5 - One Way- Check if the given two strings are one wat edit(insertion / removal / replace) to each other 
//o(n)
function isOneWayEdit(input1, input2){
    let editCount = 0;
    if(input1 === input2)
        return true;
    else if(input1.length > input2.length){ 
        for (let i = 0; i < input1.length; i++) {
            if(input2.indexOf(input1[i]) == -1)
                editCount++;
        }
    }
    else if(input1.length < input2.length){ 
        for (let i = 0; i < input2.length; i++) {
            if(input1.indexOf(input2[i]) == -1)
                editCount++;
        }
    }
    else{                                   
        for (let i = 0; i < input2.length; i++) {
            if(input1.indexOf(input2[i]) == -1)
                editCount++;
        }
    }

    if(editCount <= 1)
        return true;
    else
        return false;
}

//o(n)
function isOneWayEditAction(input1, input2){
    let editCount = 0;
    if(input1 === input2)
        return true;
    else if(input1.length > input2.length){ 
        for (let i = 0; i < input1.length; i++) {
            if(input2.indexOf(input1[i]) == -1){
                input1 = input1.replace(input1[i] ,"");
                editCount++;
            }
                
        }
    }
    else if(input1.length < input2.length){ 
        for (let i = 0; i < input2.length; i++) {
            if(input1.indexOf(input2[i]) == -1){
                input2 = input2.replace(input1[i] ,"");
                editCount++;
            }    
        }
    }
    else{                                   
        for (let i = 0; i < input1.length; i++) {
            if(input1[i] !== input2[i])
                input2[i] = input1[i];
                editCount++;
        }
    }

    document.write(input1 + '==' + input2 +"<br />")

    if(editCount <= 1)
        return true;
    else
        return false;
}
