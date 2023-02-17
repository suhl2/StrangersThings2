const APIURL = 'https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/'

const deletePosts = async (id, token) => {    
    try{
        const response = await fetch(`${APIURL}${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${token}`
            }
    })
        const result = await response.json();
    } catch (error) {
        console.log(error);
    }
} 

export default deletePosts;