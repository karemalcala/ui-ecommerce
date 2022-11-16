const apiUsers = "https://jsonplaceholder.typicode.com/users"

export default async function getUsers() {
  try {
    const response = await fetch(apiUsers)
    const responseJson = await response.json()
    if (response.ok) {
      return responseJson
    } else {
      console.warn("Hubo un error al obtener el user");
    }
  } catch (error) {
    console.error("No pudimos hacer la solicitud para obtener el user", error);
  }
}