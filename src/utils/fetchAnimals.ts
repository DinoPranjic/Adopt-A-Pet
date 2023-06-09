const fetchAnimals = async (postalCode: string, token: string, distance: string) => {
  const petResults = await fetch(
    `https://api.petfinder.com/v2/animals?location=${postalCode}&distance=${distance}&country=CA`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) =>{
      return res.json();
    }).catch((err) => {
      console.log(err);
    })


    return petResults.animals;
}

export {
  fetchAnimals
};