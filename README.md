### Project #22 - Redux Store
This README provides an overview of the e-commerce platform project for Module #22, which involves refactoring the existing application to use Redux for managing global state instead of React's Context API.
## Introduction
In this project, I will refactor the e-commerce platform from Activity 26 to utilize Redux for state management. Redux is a popular library for managing complex state in large-scale React applications. By using Redux, we can remove the state management from the React ecosystem and ensure a more scalable and maintainable application.

## User Story
As a senior engineer working on an e-commerce platform, I are tasked with integrating Redux to manage global state in place of the Context API. This will improve the scalability and manageability of the website's state management.

## Acceptance Criteria
To successfully complete this project, I must ensure that the following criteria are met:

The e-commerce platform must use Redux to manage global state instead of the Context API.
The React front end must access the Redux store using a Redux provider.
The app should use reducers to determine changes to its global state, replacing the use of the Context API.
State data should be extracted from the Redux store instead of using the Context API.
Actions should be dispatched using Redux instead of the Context API.
Mock-Up
The mock-up provided demonstrates the general appearance and functionality of the web application. It shows how a user can register, navigate the products page, select a category, choose a product, view product details, and add/remove items from their shopping cart. The user can also proceed to checkout from their shopping cart.

## Getting Started
To add Redux to the application, follow the Redux Fundamentals basic tutorial. Make sure to review all the documentation, including newer methods and Hooks if applicable.

You will also need to make front-end and back-end changes to integrate the Stripe API for payment processing. Refer to the Stripe docs on testing your integration for using test credentials.

Important: Ensure that your npm version is >=7.0 to install peer dependencies like GraphQL when deploying to Heroku. Update your package.json file as follows:

json

{
  "engines": {
    "npm": "7.x"
  }
}
## Deploy
This is my github link: https://github.com/nhunguyen-debug/state-project-fromrice.git <br>
This is deployed link: https://stateapp-challenge-0775bb01b159.herokuapp.com/
## Mock-Up

This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

Finally, the user can check out by going to their shopping cart, as shown in the following animation:

![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)
