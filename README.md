# CPG Coding Test

The CPG Coding Test is a way for you to showcase your own approach to coding. It allows you to create something with your own style and preferences. You can change the code to match your own preferences however you like. Feel free to change the setup, code or approach however you like. PLEASE READ ALL INSTRUCTIONS BELOW BEFORE STARTING.

### The Task

You are required to create a simple auto-search feature, as you type, the data is checked against a Node server and the response is then loaded in with Vue. You can style this however you wish and can implement it however you wish but you MUST use Vue and Node to accomplish this. This has already been setup for you in the source code provided. Some general tips on starting:

- The point of entry for the web app can be found in the 'web/index.js' file -- work from this file for your Vue app code
- The server with the response can be found in the './server/app.js' file -- work from this file to complete the Node server setup
- The data can be found in the './server/data.js' file, which is then loaded into the Node './server/app.js' file
- The SASS styling is contained in style tags which contains the 'lang=scss' attribute in the VUE files
- You can alter the setup of the runtime by editing the 'webpack.config.js' file if necessary

## Getting Started

### Prerequisites

- NodeJS (v14.17.0)
- NPM (v6.14.13)

### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the Node modules with the following command:

    npm install

### Step 2 - Running the App

After installing the Node modules, you must start two locally hosted servers. The first server is the Node back-end server, which runs the NodeJS files found in the './server' folder, and the second is the front-end server, which runs the Vue app files found in the './web' folder. The servers can be started by running the following commands by separated CLI (make sure you’re using the correct versions of Node and NPM per the prerequisites above):

    npm run dev
    npm run server

The first command will create a front-end server at http://localhost:9000 (which should automatically open in your browser), and the second one will start the Node back-end server at http://localhost:3000, with Nodemon, so that updates happen automatically on save.

## Front-End App Folder

All of the front end source code can be found in the './web' folder. A description of each subfolder is as follows:

### Images

Here you can (optionally) place images into the './web/images/' folder.

### Styles

We use Sass as the CSS preprocessor on the project. The styles in style tag with 'lang=scss' attribute will be automatically compiled. If there is any questions in Sass installation, please refer to [Sass-lang](https://sass-lang.com/)

### Scripts

All of the Javascript can be found in here. The App uses Vue so all of these files are written with Vue templates and compiled via Webpack. The Webpack setup can be found in the 'config/webpack.config.js' file. These files are ran with the '[@vue-loader](https://vue-loader.vuejs.org)' loader, which will enable you to write ES6 and Vue Code.

The code is all initialized from the 'web/index.js' file, so that should be your initial point of call for the App.

### Third party

Third party can be used to contain any third party libraries that you may want to use with your app.


## Node Back-End Server Folder

### app.js

The source code for the back end server can be found in the './server' folder, specifically in the app.js file. The app.js file includes starter code for you to create your own HTTP server, which will listen on port 3000 and create a data response, loading the product data from the data.js file, in JSON format. In addition to the comments in the app.js file, review the [NodeJS http.serverResponse documentation](https://nodejs.org/api/http.html#http_class_http_serverresponse).

To start the server on its own you can run this command:

    npm run server

### data.js

The data in the data.js file uses the following JSON Schema:

    {
        id: '001',  // ID number for the product
        name: '鲜鸡蛋 30枚',  // The products name
        image: '/images/product/001.jpg',  // The location of the image for the product
        price: 44.9,  // The price of the product in the set currency
        tags: ['鸡蛋', '早餐'],  // The tags for the product
        isActive: true,  // Is the product actively in stock
    }

## Additional Submission Guidelines

- Please DELETE the node_modules folder prior to sending your code for review
- Don't forget to include CSS/SCSS styling
- If any additional commands are necessary to run your code, please make sure this is documented
- It is recommended to complete the test within about 2 hours, but you are welcomed to spend more time in optimizing details.
- Feel free to leave comments to explain your ideas.
