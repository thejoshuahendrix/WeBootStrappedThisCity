# WeBootStrappedThisCity
WeBootStrappedThisCity is a MERN stack application 


## Home Page

![Main Page](https://github.com/thejoshuahendrix/WeBootStrappedThisCity/blob/main/images/webootstrappedthiscty1.PNG?raw=true)


## Posts Page

![Posts Page](https://github.com/thejoshuahendrix/WeBootStrappedThisCity/blob/main/images/webootstrappedthiscty2.PNG?raw=true)

## When you click the Add Item Button

![Modal Page](https://github.com/thejoshuahendrix/WeBootStrappedThisCity/blob/main/images/webootstrappedthiscty3.PNG?raw=true)


## How to use
You must utilize MongoDBAtlas and have your own API key, importing that API key into server.js.

Note line 11 in server.js:
I used the path ./config/keys and code something like this.



` module.exports  = {
    mongoURI: "mongodb+srv://yourusername:password@yourmongodbURL"
};
`

After getting your MongoDB setup you can simply run: `npm run dev`
