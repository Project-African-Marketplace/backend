## African Marketplace (Backend)

## Endpoint Documentation

The current endpoints for this backend are described below

The API is currently [live on Heroku](https://africanmarketplace-backend.herokuapp.com/)! 

## API Documentation 

Endpoint starting with /api/auth are related to login/signup process.

### Register

**Endpoint**: `[POST] /api/auth/register`

**Input**: pass in an object containing the following registration information.

|   Key    | Type | Required |     Notes      |
|----------|------|----------|----------------|
| username |string|   Yes    | must be unique |
| password |string|   Yes    |                |

**Output**: on success, returns an object in the following format.

```
{
    "user_id": 3,
    "username": "Mike",
    "password": "$2a$08$c9uiTQBxRqQ7.FCLqdSzMutUgOKf52y5dJTAU/4dWtsUVZ1ETF32K"
}
```


### Login
**Endpoint**: `[POST] /api/auth/login`

**Input**: pass in an object containing the following login information.

|   Key    | Type | Required |                Notes                       |
|----------|------|----------|--------------------------------------------|
| username |string|   Yes    | user must exist in the database            |
| password |string|   Yes    | password must be valid for the target user |

**Output**: on success, returns an object in the following format.

```
{
    "message": "Welcome Mike!",
    "token": #encrypted token
}
```
### Get All Categories

**Endpoint**: `[GET] /api/category`

**Output**: on success, returns an object in the following format.

```
[
    {
        "category_id": 1,
        "category": "Animal Products"
    },
    {
        "category_id": 2,
        "category": "Beans"
    },
    {
        "category_id": 3,
        "category": "Cereals - Maize"
    },
    {
        "category_id": 4,
        "category": "Cereals - Other"
    },
    ....
]
```

## Products List

Endpoint starting with `/api/products` are related to product information.

### Get All Products By Category ID

**Endpoint**: `[GET] /api/products/:id`

**Output**: on success, returns an object in the following format.

```
[
    {
        "product_id": 15,
        "product": "Agwedde Beans",
        "description": "fresh",
        "price": 5,
        "category_id": 2,
        "category": "Beans"
    },
    {
        "product_id": 16,
        "product": "Beans",
        "description": "fresh",
        "price": 5,
        "category_id": 2,
        "category": "Beans"
    },
    {
        "product_id": 17,
        "product": "Beans (K132)",
        "description": "fresh",
        "price": 5,
        "category_id": 2,
        "category": "Beans"
    },
    ...
]
```


### Create New Product

**Endpoint**: `[POST] /api/products`

**Input**: pass in an object containing the following login information.

|    Key      |  Type  | Required | 
|-------------|--------|----------|
| product    | string |   Yes    |
| description | string |   No     | 
| price       | integer|   Yes    |                                            
| category    | string |   Yes    |

**Output**: on success, returns an object in the following format.

```
{
    "product_id": 119,
    "product": "foo",
    "description": "bar",
    "price": 5,
    "category_id": 2
}
```

### Update Product
**Endpoint**: `[PUT] /api/products/:product_id`

**Input**: pass in an object containing the following login information.

|    Key      |  Type  | Required | 
|-------------|--------|----------|
| product     | string |   No     |
| description | string |   No     | 
| price       | integer|   No     |    

**Output**: on success, returns an object in the following format.

```
[
    {
        "product_id": 2,
        "product": "Muffin",
        "description": "Delicious",
        "price": 1,
        "category_id": 1
    }
]
```

### Delete Product
**Endpoint**: `[DELETE] /api/products/:id`

**Output**: on success, returns an object in the following format.

```
[
    {
        "product_id": 2,
        "product": "Exotic Eggs",
        "description": "fresh",
        "price": 5,
        "category_id": 1
    }
]
```

