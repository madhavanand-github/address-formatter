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

> 🛑 In the request body, please ensure keys are in lowercase like `state` instead of `State`.
> 🛑 There is a provision to add aliases of fields, but for simplicity only one is considered, like for `Street/Road/Lane` only `street` is considered.

## Handling of Edge/Boundary Cases

1. A request with more number of fields.
2. Empty Fields
3. Pincode in address.

## Steps

1. Request Consensus for Security, consistency & Simplicity - Fields & their Order.
2. Request Analysis - Number of fields

## Future Updates

1. Any number of fields & in any order.
2. Authorization token when request sent.
3. 
