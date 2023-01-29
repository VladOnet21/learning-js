const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

for (let i=0;i<rapperArray.length;i++){
  console.log(rapperArray[i]);
  if(rapperArray[i]==='Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

//s-au folosit apostroafe duble deoarce numele muzicienilor contineau apostroafe simple si sa nu se creeze confuzie