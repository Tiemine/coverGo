# Multi-step wizard form

## 💻 About
### The application was made with:
<span style="color: #42b883">Vue 3</span> framework</br>
<span style="color: #a6cc00">Pinia</span> as state manager</br>
<span style="color: #a6cc00">V-test</span> as unit testing tool</br>
Node 16.15.1


This is an application for CoverGo's front-end test.

<img src="./src/assets/miro-example.jpeg" alt="miro example">

The applications needs basically are:

- [x] There should be 3 steps and the last one should take back to the first
- [x] The second step should receive all the data and calculate the premium value based on inputed data
- [x] If the user's age is between 18 and 99 years it should be possible to go to step 3, otherwise a error message will appear
- [x] The last step should show all the users data together and the final premium value


## 👩‍💻 Installing the project

- First git clone this project with the following:

```
git clone https://github.com/Tiemine/coverGo.git
```

- Then go to the project root and run the install command:

```
npm install
```

or

```
yarn install
```

- After that run the following command to run the application:
```
npm run serve
```


## 🔖 Explanations about the code and stack decisions

You can check my stack and code decisions here at my [Technical Design](https://docs.google.com/document/d/1GXNAHYUsfRiTyGqmcR38W14m2sqKy4Tl5gFip2ne6NE/edit?usp=sharing)<br/>
Watch [my Loom](https://www.loom.com/share/3c7d3a685c8d444db27444d9fcd9b023) explaining everything in details<br/>
Check the working application deployed at [Amplify](https://main.d1sqdqrkx3ruzg.amplifyapp.com/)