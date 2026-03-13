export async function loginUser(email, password) {
    const response = await fetch("https://fakestoreapi.com/users"); 

    if(!response.ok){
      throw new Error("Failed to fetch users.")
    }
    const users = await response.json();

    const userMatched = users.find(
      (user) => user.email === email && user.password === password
    );
    
    if(!userMatched){
      throw new Error("Invalid email or password.");
    }
    return userMatched;
}