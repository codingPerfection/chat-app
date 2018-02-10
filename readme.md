# About

to install packages run from root and from ./front/

```
yarn install
```

To run project navigate to ./back and run index.js and open browser to localhost

App will run on port 80.

On back files are served using gzip compression (where it makes sense) and front is packed using webpack.


## Back
Back uses express for serving static files and socket.io for communication.
All the stuff is on front.

## Front
Front uses react with mobx, communication is done using socket from Store.js and is packed with webpack.

Zipped app is about 80kb.

Thanks for giving me opportunity to do this and I am looking forward to your review.





