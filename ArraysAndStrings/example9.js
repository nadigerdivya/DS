////Example 9 - String Rotation - If one string is a rotation of another string.
//o(n) + o(n) = o(2n) ==> o(n);
function isRotation(input1,input2){
    let rotationPoint = 1;
    let result = false;
    if(isSubString(input1,input2) == true){
        while(rotationPoint <= input1.length){
            let i1 = input1.slice(0,rotationPoint);
            let i2 = input1.slice(rotationPoint, input1.length);
            newstring = i2+i1;
            if(newstring == input2){
                return result = true;;
            }
            rotationPoint++;
        }
        return result;
    }
    return result;
}

//o(n)
function isSubString(input1,input2){
    let result = false;
    if(input1.length == input2.length){ 
        for(let i = 0; i < input1.length; i++){
            if(input2.indexOf(input1[i]) != -1){
                result = true;
                continue;
            }
                
            else
                return result;
        }
    }
    return result;
}
