const parseEnv = () => {
  Object.keys(process.env)
    .filter((variable) => variable.startsWith("RSS_"))
    .forEach((variable) => console.log(process.env[variable]));
};

parseEnv();
