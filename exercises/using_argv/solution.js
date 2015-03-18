var args = process.argv.slice(2);

if(args.length === 2){
  console.log(args[1]);
}else{
  var word = args[0].split('=').pop();
  word = word.replace(/"/g,'');
  console.log(word);
}
