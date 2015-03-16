var args = process.argv.slice(2);

if(args.length === 2){
  //separated by space
  console.log(args[1]);
}else{
  //separated by equals
  var word = args[0].split('=').pop();
  //wrapped in quotes?
  word = word.replace(/"/g,'');
  console.log(word);
}
