const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsLen = args.length / 2;
  let output = "";

  for (let i = 0; i < argsLen; i++) {
    let argsPair = args.splice(0, 2);
    output += `${argsPair[0].slice(2)} is ${argsPair[1]}`;
    if (args.length > 0) output += ", ";
  }

  console.log(output);
};

parseArgs();
