import { CLIENT_ID, CLIENT_SECRET } from "../../secrets";

const fetchToken = async (url: string) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);

  const token = await fetch(url, {
    method: "POST",
    body: params
  }).then((res) => {
    console.log(res);
    return res.json();
  }).catch((err) => {
    console.log(err);
  })

  return token;
}

export {
  fetchToken
};