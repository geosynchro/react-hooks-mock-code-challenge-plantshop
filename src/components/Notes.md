##  Deliverables

AS a user I can:
1 [] See all plants
    (fetch request from API, render to page)
2 [] Add new plant to the page by submitting form
    (POST request to local database)
3 [] Mark a plant as sold out (clickable button on Plant Card)
    (useState on plantCard as each plant has own button)
4 [] Search for plants by Name and see filtered list of plants.
    (state in APP for list to re-render with filtered plants only)

## Data

- Plant object data 

 {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }

- when calling POST 
    
    headers = {
  "Content-Type": "application/json"
}

-- json object to post
    {
  "name": "string",
  "image": "string",
  "price": number
}

## Advanced Deliverables

as a user i can:
1 [] Update price and still see price after refreshing page
    (PATCH request?)
2 [] I can delete a plant and it is still gone when I refresh page.
    (delete request)


# Data

-for patch

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
```

--for delete


Example Response:

```json
{}