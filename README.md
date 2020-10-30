# FriendStar
------------
**Register User**

  `Create new user`

* **URL**

  `/users/register`

* **Method:**

  `POST`

* **URL Params**

	none

* **Data Params**

	`
		{
			"first_name": "Matt",
			"last_name": "Damon",
			"username": "mattDamon",
			"email": "matt@mail.com",
			"password": "w124098w"
		}
	`
* **Success Response:**

  * **Code:** 201 CREATED
    **Content:**
		```json
		[
	  	{
				"id": 1,
				"first_name": "Matt",
				"last_name": "Damon",
				"username": "mattDamon",
				"email": "matt@mail.com",
				"password": "$2a$10$g7EAJuW1ZlxoA9XQMkyGh.NLVbYPECFXoed/GYtAMF2M/qyBhwPDi",
    		"updatedAt": "2020-10-30T03:40:04.313Z",
    		"createdAt": "2020-10-30T03:40:04.313Z"
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`


------------------
**Login User**

  `login user`

* **URL**

  `/users/login`

* **Method:**

  `POST`

* **URL Params**

	none

* **Data Params**

	`
		{
			"username": "mattDamon",
			"password": "w124098w"
		}
	`
* **Success Response:**

  * **Code:** 200 OK
    **Content:**
		```json
		[
	  	{
				"username": "mattDamon",
				"password": "nhc8wq9wyh012"
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`


------------------
**Create Tweet**

  `Create a new tweet`

* **URL**

  `/tweets`

* **Method:**

  `POST`

* **URL Params**

	none

* **Data Params**

	`
		{
			"content": "hello guys!"
		}
	`
* **Success Response:**

  * **Code:** 200 OK
    **Content:**
		```json
		[
	  	{
				"content": "hello guys!"
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`


------------------
**Show All Tweet**

  `Return json data contain user's tweet`

* **URL**

  `/tweets`

* **Method:**

  `GET`

* **URL Params**

	none

* **Data Params**

	none

* **Success Response:**

  * **Code:** 200 OK
    **Content:**
		```json
		[
	  	{
				 "id": 1,
        "content": "hello guys!",
        "createdAt": "2020-10-29T09:02:29.759Z",
        "updatedAt": "2020-10-29T09:02:29.759Z",
        "UserId": 1
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`


------------------
**Edit Tweet**

  `Update specific tweet based on id`

* **URL**

  `/tweets/:id`

* **Method:**

  `PUT`

* **URL Params**

	**Required:**

	`id=[integer]`

* **Data Params**

	`
		{
			"content": "whats up!"
		}
	`

* **Success Response:**

  * **Code:** 200 OK
    **Content:**
		```json
		[
	  	{
				 "id": 1,
        "content": "whats up!",
        "createdAt": "2020-10-29T09:02:29.759Z",
        "updatedAt": "2020-10-29T09:02:29.759Z",
        "UserId": 1
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`


------------------
**Delete Tweet**

  `Delete specific tweet based on id`

* **URL**

  `/tweets/:id`

* **Method:**

  `DELETE`

* **URL Params**

	**Required:**

	`id=[integer]`

* **Data Params**

	none

* **Success Response:**

  * **Code:** 200 OK
    **Content:**
		```json
		[
	  	{
				"msg": "Delete success!"
	 		}
		]
		```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR
    **Content:** `{ error : "Internal Server Error" }`
