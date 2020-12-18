# 2020 Favourite Book List React App
A React.js app using useState and useEffect hooks to create a component based list on my favourite books of the year. Books can be removed from the array based on user interest. When all books are removed the list is refreshed. Images have links to purchase the book from the Guardian bookshop (where images and text were taken from). I fed information from the Guardian Bookshop website into my own API hosted here: https://nikldev0.github.io/data/book_list_project.json. 

## Key Features 

1. Books can be removed from the array based on user interest.
2. When all books are removed the list is refreshed.
3. Images link to corresponding Guardian Bookshop page. 

 ![Book List Example](/BookListReadMeExample.gif)
 
 ## Things learnt/practiced:
 
 1. useState and useEffect hook in React.
 2. Manipulating JSON files and creating and hosting my own API. 
 3. NPM methods to host this project on GitHub pages.
 4. Editing the manifest.json file to personalise the project favicon.
 
 
## Challenges I overcame: 

1. Creating the Read more/Show less feature took some experimenting but was eventually fixed using the substring method.
2. Mapping the Book component to the Books prop initially involved several lines of code that were difficult to read. This was eventually fixed using the ES6 spread operator (...) to quickly map all object properties across.
