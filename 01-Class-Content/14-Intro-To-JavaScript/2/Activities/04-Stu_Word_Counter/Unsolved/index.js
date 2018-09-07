function wordcount(mstring){
    // Convert string to an array of words
   var w=mstring.split(" ");
   //wstringarray is the array split from mstring
   var f={};
   w.forEach(function(i) {
       if(i=="BRABRA"){
        f[i].push = "You are cute"
       }
       else {
          f[i].push= 1
       }
   // console.log(f);
    });

// //        if (currentword in wordf){
//          wordf[currentword]+=1;
//        }
//        else {
//          wordf[currentword]=1;
//        }
// //    }
  console.log(f);
   //return f;
  //return wordf;
}
wordcount("I am BRABRA always miss you BRABRA OOD but you and I just done");
//console.log(f);
