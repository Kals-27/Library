let Book=[{
    title:"The Great Gatsby",
    author: "F. Scott Fitzgerald ",
     yearPublished:1925,
     readStatus:10
    },{
        title:"Dune" ,
        author: "Frank Herbertarper",
         yearPublished: 1965,
         readStatus:67
     },
     {
        title:"Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
         yearPublished: 1920,
         readStatus:19
     },
     {
        title:"Gone Girl",
        author: "Gillian Flynn",
         yearPublished: 2012,
         readStatus:1
     },
     {
        title:"The Power of Habit: Why We Do What We Do in Life and Business",
        author: "Charles Duhigg",
         yearPublished: 2012,
         readStatus:0
     },
]

   function   toggle(){
    for(let i=0;i<lib.length;i++){
    if(lib[i].readStatus>0){
        document.write( "toggle status for"+lib[i].title+" is "+true+"<br>");
    }
    else{
        document.write( "toggle status for"+lib[i].title+" is "+false+"<br>");
    }}
 }
let lib=[];
for(let i=0;i<Book.length;i++){
    lib[i]=Book[i];
}
function getSummary(){
    for(let i=0;i<lib.length;i++){
     document.write("The Book "+lib[i].title+" is written by "+lib[i].author+" in the year "+lib[i].yearPublished+"<br>");
    }
   }
function addbk(){
    lib.push({title:prompt("title name of the book to be entered?",""),author:prompt("author name of the book to be entered?",""),yearPublished:prompt("published year of the book to be entered?","")});
    alert("Book is added");
    alert("To check the result, go to getSummary()");
   //document.write(lib);
}
function addbkfr(){
    lib.unshift({title:prompt("title name of the book to be entered?",""),author:prompt("author name of the book to be entered?",""),yearPublished:prompt("published year of the book to be entered?","")});
    alert("Book is added at front");
    alert("To check the result, go to getSummary()");
    //document.write(lib);
}
function rembk(){
    lib.pop();
    alert("Book is removed at the back");
    alert("To check the result, go to getSummary()");
}

function rembkfr(){
    lib.shift();
    alert("Book is removed at the front");
    alert("To check the result, go to getSummary()");
}

    function removebkbyTit(title){
        for(let i=0;i<lib.length;i++){
            if(lib[i].title== title){
                return i;
            }
        }
    }
    function removebkbyTitle(){
        let n=removebkbyTit(prompt("enter the book title?",""));
        lib.splice(n,1);
        alert("To check the result, go to getSummary()");
    }
  
    function getbyreadstat(){
        let st=lib.filter(temp=>temp.readStatus>0);
        for(let i=0;i<st.length;i++){
            document.write("books with positive ReadStatus:");
            document.write(st[i].title+"<br>");
        }
      
     }
     function getsublib(){
     let num=prompt("enter the starting point?","");
     let num1=prompt("enter the ending point?","");
     lib=lib.slice(num,num1);
     
     lib.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"</br>"}`);
           
        }
        document.write("</br>");
       
    })
     }
     
function getAllTitles(){
    const titles = lib.map(item => {
        const container = {};
        for(let i=0;i<lib.length;i++){
            container[item.title]=lib[item.title];
        }
    
        return container;
       
})
console.log(titles);
document.write("Go to getSummary() to check the difference");}
   
   
function getBooksByAuthor(){
    let aut=prompt("enter the author name?","");
    console.log(aut);
let AuthBook = lib.filter(function(b){
return b.author==aut;
});
document.write("</br>");
AuthBook.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"</br>"}`);
       
    }
    document.write("</br>");
   
})}
function getBooksPublishedBefore(){
    let year=prompt("enter the year?","");
const BookYear=lib.filter(function(b){
return b.yearPublished<year;
});
//document.write(BookYear);
BookYear.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})
}