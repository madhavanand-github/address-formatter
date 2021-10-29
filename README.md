# Address Formatter API

Address Formatter API for UIDAI Hackathon

## Step to Run Locally

1. Clone the repository `git clone https://github.com/madhavanand-github/address-formatter.git`
2. Run `npm i` or `npm install` to install all dependencies.(Ensure NodeJS & Npm are installed)
3. Start the server `node app.js` or `nodemon app.js`;
4. `POST` a request via `Postman` or `Thunder Client VSCode Extension` on URL `localhost:3000/`

## Resources Link

1. [Hinglish Research](https://medium.com/inspiredbrilliance/interpreting-hinglish-conversations-79dab7cabd47)
2. [Textblob](https://pypi.org/project/textblob/)
3. [indic-trans](https://github.com/libindic/indic-trans)
4. [Hunspell](https://pypi.org/project/hunspell/)

## Dependencies

1. `nodemon` - For ease in developement.
2. `express` - Backend Framework to build API.

## Address Fields Accepted

```json
{
	"building" : ,
	"street" : ,
	"locality" : ,
	"landmark" : ,
	"vtc" : ,
	"sub-district" : ,
	"district" : ,
	"pincode" : ,
	"state" : 
}
```

> 🛑 In the request body, any number of fields among above mention fields are accepted in lowercase, e.g. `state` instead of `State`.

## Handling of Edge/Boundary Cases

1. Non Availabilty of Some of the Address Components (Like Locality, Sub-District) ✅ (Add GIF)
2. Repetitive Components. 🔁
3. Handling of Minor Spelling Mistakes in English.
4. Availability of Special Characters.
5. Handling of Local Language Address.

## Extra Security/Features

1. Robust Against empty request. ✅ (Add GIF)
2. Check if fields are correct or complaint. ✅ (Add GIF)
3. Doesn't process an empty field. ✅ (Add GIF)
4. Log/Audit of working. ✅ (Add GIF)
