export const getPosts = async() => {
  try {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts", );
    return response.json();
  } catch( err ) {
    console.log( err.message );
  }
};