const apiKey = "WSHU5yVPgH7cqMLBHDu0eDTSMHe9tj6gulyNYV5JwH7aODbSToEA09QkR_7ix61o3ojfXoGsTcHgvARnJxYmL_OK9aM928-85veFaoFkYt9hV7JqByWhO2YDJh2RXXYx";

const Yelp = { 
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=30`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
}

export default Yelp;