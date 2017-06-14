var alphabetPass = [];
var numPass;
var charPass;
var flag=0;

  function generate()
   {

    if(flag===1)
    {
      alphabetPass = [];
      flag=0;
    }
    var str,i=0,count,flag2 =0;
    str = document.getElementById("string").value;
     var splChars = "*|,\":<>[]{}`\';()@&$#%1234567890";
    for (var i = 0; i < str.length; i++)
     {
      if ((splChars.indexOf(str.charAt(i)) != -1)||((str[i]==" ")&&(str[i+1]==" ")))
      {
        flag2 = 1;
        break;
      }
    }
    if(flag2 === 1)
    {
      alert ("Please do NOT enter special charecters or double space or numbers in the text fiels");
      window.location.reload();
    }
    console.log("Length1 : " + str.length);
    console.log("val  of the length is: " + str.length);
    var pos = str.length -1;
    console.log("value at string length index " + str[pos]);
    if (((str[pos])===" ")||(((str[pos])==="."))||(((str[pos])==="!")))
    {
      console.log("entered condition");
      str = str.slice(0, -1);
    }
    console.log("Length2:  " + (str.length -1));
    var wordCount = 0;
    // the below function is for counting the number of words in the input text
    for(var j=0;j<str.length;j++)
    {
      if(str[j] === " ")
      wordCount++;
    }
    if(wordCount<3)
    {
      alert("Please enter a sentence with more than 4 words to generate password.");
      window.location.reload();
    }
    var wordCount1 = str.indexOf(' ');
    if(((wordCount1)>9)&&((wordCount1)<=18))
    {
      wordCount1 =  wordCount1 - 9;
    }
    else if ((wordCount1)>18)
    {
        alert("Sentence too complicated. Try using words with alphabet count less than 18");
        window.location.reload();
    }
    var strRev;
    strRev = str.split(" ").reverse().join(" ");

    var wordCount2 = strRev.indexOf(' ');
    if(((wordCount2)>9)&&((wordCount2)<=18))
    {
      wordCount2 =  wordCount2 - 9;
    }
    else if ((wordCount2)>18)
    {
        alert("Sentence too complicated. Try using words with alphabet count less than 18");
        window.location.reload();
    }
    var key;
    key = ((wordCount1*wordCount1)+(wordCount2*wordCount2));

    numPass = [wordCount1,key,wordCount2];
    numPass = numPass.join("");
    charPass = numPass;
    // console.log("The numerical part of the password= " + numPass);
    for(i= 0;i<charPass.length;i++)
    {
      switch (numPass[i])
      {
        case '0':
        charPass = charPass.replace("0",")");
            break;
        case '1':
        charPass = charPass.replace("1","!");
            break;
        case '2':
        charPass = charPass.replace("2","@");
            break;
        case '3':
        charPass = charPass.replace("3","#");
            break;
        case '4':
        charPass = charPass.replace("4","$");
            break;
        case '5':
        charPass = charPass.replace("5","%");
            break;
        case '6':
        charPass = charPass.replace("6","^");
            break;
        case '7':
        charPass = charPass.replace("7","&");
            break;
        case '8':
        charPass = charPass.replace("8","*");
            break;
        case '9':
        charPass = charPass.replace("9","(");
            break;
        default: break;
      }
    }
    // console.log("The charecter part of the password= " + charPass);
    var l=0,k;
    var tmp;
    alphabetPass.push(str[0]);
    for(i=1;i<str.length;i++)
    {
      if(str[i-1] === " ")
      {
        tmp= str[i];
        alphabetPass.push(tmp);
      }
    }
    alphabetPass = alphabetPass.join(""); //alphabetic part
    // console.log("The alphabetic part of the password= " + alphabetPass);
     var finalPass = [];
     finalPass.push(alphabetPass);
     finalPass.push(numPass);
     finalPass.push(charPass);
     finalPass = finalPass.join("");
     console.log("Final password is: " + finalPass);
      document.getElementById("showBlock").style.display = "block";
      document.getElementById("password").innerHTML = finalPass;
      document.getElementById("remember0").innerHTML = "Your given sentence: " + str;
      document.getElementById("remember").innerHTML = "The starting " + alphabetPass.length + " letters: " + alphabetPass + " of the password are the initial letters of the words of the sentence.";
      document.getElementById("remember1").innerHTML = "Now, number of alphabets in the 1st word of the sentence: " + wordCount1;
      document.getElementById("remember2").innerHTML = "Again, number of alphabets in the last word of the sentence: " + wordCount2;
      document.getElementById("remember3").innerHTML = "Thus, we take sum of square of: " + wordCount1 + " and " + wordCount2 + " which is: " + (wordCount1*wordCount1) + " + " + (wordCount2*wordCount2) + " = " + ((wordCount1*wordCount1)+(wordCount2*wordCount2));
      document.getElementById("remember4").innerHTML = "After that we concatenate " +  wordCount1 + " with " + ((wordCount1*wordCount1)+(wordCount2*wordCount2)) + " and " + wordCount2 + " to get " + numPass;
      document.getElementById("remember5").innerHTML = "To get the special charecters, press the keyboard's shift key and type " + numPass + ". You will get : " + charPass;
      document.getElementById("remember6").innerHTML = "Finally concatenate " + alphabetPass + " with " + numPass + " and " + charPass + " to get: " + finalPass;
      document.getElementById("remember7").style = "display: block;"
      document.getElementById("shuffle0").style.display = "block";
      document.getElementById("shuffle").style.display = "block";
      document.getElementById("shuffle2").style.display = "block";
      document.getElementById("shuffle3").style.display = "block";
      document.getElementById("shuffle4").style.display = "block";
      document.getElementById("shuffle5").style.display = "block";
      flag=1;
      window.location.href = "#showBlock";

  }
