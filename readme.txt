// Used: 

 - Frontend
TypeScript
React
RTK Query
Formik
Sass
yup & RegExp validation

 - Server
TypeScript
NestJs
Swagger

 - Other
eslint
prettier
docker

// Launch without docker

(in client folder)
- npm ci (or npm i)
- create .env and add string (REACT_APP_API_URL=http://localhost:5500)
- npm start 

(in server folder)
- npm ci (or npm i)
- create .env and add string (PORT=5500)
- nest start


// Launch with docker

 - Build docker client (in client folder)
docker build . -t dockerized-react
docker run -p 3000:3000 -d dockerized-react

 - Build docker server (in server server)
docker build -t nii_server .
docker run nii_server


// Swagger

http://localhost:5500/api/docs


