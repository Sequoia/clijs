var args = process.argv.slice(2);

var found = false;

args.forEach(function(arg, i){
  if(found) return;

  if(/^--word/.test(arg)){
    found=true;
    if(/=/.test(arg)){
      console.log(arg.split('=').pop());
      return;
    }
    console.log(args[i+1]);
  }
});
