# GMOD presentation 2016
## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development

After cloning the repo, your first order of business is to open terminal and run `npm install`

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll


## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

# Presenting

Spectacle comes with a built in presenter mode. It shows you a slide lookahead, current time and your current slide.

To present:

- Run `npm start`
- Open two browser windows on two different screens
- On your screen visit [http://localhost:3000/?presenter](http://localhost:3000/?presenter)
- On the presentation screen visit [http://localhost:3000](http://localhost:3000) 

**Fullscreen** can be toggled via browser options, or by hovering over the bottom right corner of your window until the fullscreen icon appears and clicking it.
