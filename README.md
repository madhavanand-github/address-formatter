# Address Formatter API

Address Formatter API for UIDAI Hackathon(Add GIF + Photo)

## Step to Run Locally

1. Clone the repository `git clone https://github.com/madhavanand-github/address-formatter.git`
2. Run `npm i` or `npm install` to install all dependencies.(Ensure NodeJS & NPM are pre-installed)
3. Start the server `node app.js` or `nodemon app.js`;
4. Send a `POST` request via `Postman` or `Thunder Client - VSCode Extension` on URL `localhost:3000/format-address`

## Request Format

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

## Response Format

## Dependencies

1. `nodemon` - For ease in developement.
2. `express` - Backend Framework to build API.

## Handling of Edge/Boundary Cases

1. Non Availabilty of Some of the Address Components (Like Locality, Sub-District) ✅ (Add GIF)
2. Repetitive Components. 🔁
3. Extreme Repetitive Components. 🔁
4. Handling of Minor Spelling Mistakes in English.
5. Availability of Special Characters. ✅
6. Handling of Local Language Address. 

## Extra Security/Features

1. Robust Against empty request. ✅ (Add GIF)
2. Check if fields are correct or complaint. ✅ (Add GIF)
3. Log/Audit of API working in console. ✅ (Add GIF)

## Approach Video & Presenatation

