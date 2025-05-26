function indexOfIgnoreCase(s1, s2) {
  // write your code here
  let s=s1.toLowerCase();
  s2=s2.toLowerCase();
  let found=false;
  for(let i=0;i<s.length-1;i++){
    for(let j=i+1;j<=s.length;j++){
      let sub=s.slice(i,j);
    // console.log(sub);
      if(sub==s2){
        found=true;
        break;
      }
    }
    if(found) return i;
  }

        return -1;
    
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
