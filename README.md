# Address Formatter API

![Approach](https://github.com/madhavanand-github/address-formatter/blob/master/img/approach.jpg)

## Step to Run Locally

1. Clone the repository `git clone https://github.com/madhavanand-github/address-formatter.git`
2. Run `npm i` or `npm install` to install all dependencies.(Ensure NodeJS & NPM are pre-installed)
3. Start the server `node app.js` or `nodemon app.js`;
4. Send a `POST` request via `Postman` or `Thunder Client - VSCode Extension` on URL `localhost:3000/format-address`

## 1️⃣ Request Format

```json
{
	"building" : ,
	"street" : ,
	"locality" : ,
	"landmark" : ,
	"vtc" : ,
	"subdistrict" : ,
	"district" : ,
	"pincode" : ,
	"state" : 
}
```

> 🛑 In the request body, any number of fields in any order among only above mention fields are accepted in lowercase(`state` instead of `State`) in JSON.

## 2️⃣ Response Format

```json
{
	"building" : ,
	"street" : ,
	"locality" : ,
	"landmark" : ,
	"vtc" : ,
	"subdistrict" : ,
	"district" : ,
	"pincode" : ,
	"state" : ,
	"single-string-address" :
}
```

> 🛑 Response will include all the fields sent in request body along with an additional `single-string-address` field & repetitive fields will be assigned `null` in JSON.

## 3️⃣ Dependencies

1. `nodemon` - For ease in developement.
2. `express` - Backend Framework to build API.
3. `google-search-results-nodejs` - To fix local language address & spelling mistake. (by serpapi.com )
4. `serp` - Optional as an alternate to 3rd, if we want to deploy our own.

## 4️⃣ Handling of Edge/Boundary Cases

1. Non Availabilty of Some of the Address Components (Like Locality, Sub-District) ✅ (Add GIF)
2. Repetitive Components. ✅
3. Extreme Repetitive Components. ✅
4. Handling of Minor Spelling Mistakes in English. ✅ 🪲
5. Availability of Special Characters. ✅
6. Handling of Local Language Address. ✅ 🪲

## 5️⃣ Extra Security/Features

1. Robust Against empty request. ✅  

![empty-request](https://github.com/madhavanand-github/address-formatter/blob/master/gif/empty-request.gif)  

2. Check if field's name are correct. ✅  

![field-name-checker](https://github.com/madhavanand-github/address-formatter/blob/master/gif/field-name-checker.gif)

3. Log/Audit of API working in console. ✅    

![empty-request](https://github.com/madhavanand-github/address-formatter/blob/master/gif/log.gif)

## 6️⃣ Approach Video


## 7️⃣ Deployment

1. [Format-Address-Heroku](https://format-address.herokuapp.com/)
2. [Git-Heroku](https://git.heroku.com/format-address.git)