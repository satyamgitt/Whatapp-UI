// var arr=[{name:'Satyam Rao',img:'images/image6.jpg',message:'Hello I am satyam'},{}]

// SEARCHING PEOPLE FROM GIVEN LIST
const search = () => {
    let searchBox = document.getElementById("searchname").value.toUpperCase();   //
    let storItems = document.getElementById("left-side-items");
    let product = document.querySelectorAll(".container2");
    //if someone search in search box, want to rearrange products according to the product name

    let pname = storItems.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let filter = product[i].getElementsByTagName("h5")[0];

        if (filter) {
            let textvalue = filter.innerHTML || filter.innerText

            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }

}





// MESSAGE SENDING AND RECEVING

var value = document.getElementById('checkbox').value;    //TAKING VALUE FROM CHECKBOX
const check = () => {
    if (value == 'on') {
        value = 'off'
    }
    else if (value == 'off') {
        value = 'on'
    }
}
const arrayMessage = [];    //MADE ARRAY FOR PUSSING MESSAGE
let boolean = true;          // here i have taken boolean value true for further use

function send() {
    const message = document.getElementById('inputMessage').value; //TAKING USER INPUT

    let list = ""

    let content = document.getElementById('middle-content')      // accessing blank array

    if (value == 'on' && message !== "") {
        arrayMessage.push(
            { message: message, boolean: true }     )         
    }
    else if (value == 'off' && message !== "") {
        arrayMessage.push({ message: message, boolean: false })
    }


    arrayMessage.forEach((obj) => {                       // here in "arraymessage"  we are pussing obj 
        if (obj.boolean == true) {
            list += "<p>" + obj.message + "</p>"        // this "message" is taken from obj
        }
        else if (obj.boolean == false) {
            list += "<p class='li-receive'>" + obj.message + "</p>"
        }
    })
    content.innerHTML = list;      //  list putting in blank array


}











