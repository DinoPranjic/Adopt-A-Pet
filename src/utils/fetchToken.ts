const fetchToken = async (url: string) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.REACT_APP_API_KEY as string);
  params.append("client_secret", process.env.REACT_APP_SECRET as string);

  const token = await fetch(url, {
    method: "POST",
    body: params
  }).then((res) => {
    return res.json();
  }).catch((err) => {
    console.log(err);
  })
  return token;
}

export {
  fetchToken
};