var bookName = document.getElementById("bookName");
var bookUrl = document.getElementById("bookUrl");
var delet = document.getElementById("del");
var tblGroup = document.getElementById("tblGroup");
var empty = document.querySelectorAll(".form-group p");
var links;

if (localStorage.getItem("links") != null) {
  links = JSON.parse(localStorage.getItem("links"));
  displayData(links);
} else {
  links = [];
  tblGroup.innerHTML = "";
}


function addLink() {
  var link = {
    name: bookName.value,
    url: bookUrl.value,
  };
  cheackEmptyData();
  links.push(link);
  localStorage.setItem("links", JSON.stringify(links));
  displayData(links);
  clearData();
}

function displayData(lnk){
    var str = '';
    for(var i =0 ; i< lnk.length ; i++){
        str +=`
        <div class="child mt-5 mb-4">
            <div class="btn-container d-flex justify-content-between align-items-center w-50 py-4">
                <h4 class="fs-bold ms-3">${lnk[i].name}</h4>
                <div class="btn-container">
                    <button class="btn btn-primary me-3" onclick='goUrl("${lnk[i].url}")'>Visit</button>
                    <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                </div>
            </div>
        </div>
        `
        tblGroup.innerHTML = str;
    }
}

function del(ind){
    links.splice(ind , 1);
    localStorage.setItem("links", JSON.stringify(links));
    displayData(links);
    console.log(links.length)
    if(links.length == 0){
      tblGroup.innerHTML = "";
    }
}


function cheackEmptyData(){
  if(bookName.value == ""){
    empty[0].classList.remove("d-none");  
  }else{
    empty[0].classList.add("d-none");  
  }
  if(bookUrl.value == ""){
    empty[1].classList.remove("d-none");  
  }else{
    empty[1].classList.add("d-none");  
  }
}

function clearData(){
    bookName.value = "";
    bookUrl.value = "";
}

function goUrl(url){
    window.open(url);
}