This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project shows how to authenticate react app with WebApi using latest React Hooks and Redux.

In order to run this project, you need create a webapi project using Visual Studio 2017 with Authentication type "Individual".

The following packages are used: Redux, React-Redux, Redux-Logger, Redux-Thunk, Redux-Persist, React-router-dom, Querystring, Axios and Bootstrap. The project uses only functional components with React 16.8 Hooks which makes the application very easy to write and use. This project will be useful for somebody trying to persist the authentication in Redux, In this project you will see Register, Login and Logout functionality using WebApi token based authentication and all API calls are done using Axios Post/Get methods.

You have to change the webapi address in react, i am using http://localhost:64414/...., you change according to your port and address.

Regarding axios, if you passing parameters to post/get methods, axios will not create querystring you need to use package called querystring and pass the required parameters and will work as expected.

Note:-

If you are trying to add for example products/customers to this webapi project, you can make it only authenticated user to view the products and customers after login. Once you login successfully the Bearer Token will be stored in Redux variable called bearerToken and IsLoggedIn will be true. The value can be accessed anytime you click on product/customer you need to pass the bearerToken.
