const parseEnv = () => {
  let result = "";

  const rssVars = Object.keys(process.env).filter((variable) =>
    variable.startsWith("RSS_")
  );

  const numRss = rssVars.length;

  rssVars.forEach((variable, index) => {
    result += `${variable}=${process.env[variable]}`;
    if (index !== numRss - 1) result += "; ";
  });

  console.log(result);
};

parseEnv();