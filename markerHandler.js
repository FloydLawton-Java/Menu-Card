AFRAME.registerComponent("marker-handler", {
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
         //   console.log("marker is found")
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost", ()=>{
           // console.log("marker is lost")
           this.handleMarkerLost();
        });
    },
    handleMarkerFound: function(){
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div"); 
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button"); 
        var orderButtton = document.getElementById("order-button");

        ratingButton.addEventListener("click", ()=>{
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in Progress",
            });
        });
        orderButtton.addEventListener("click", ()=>{
            swal({
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-black-icon.png",
                title: "Thanks for Ordering",
                text: "Your Order will be Served soon at your table!!",
            })
        })
    },
    handleMarkerLost: function(){
        // Changing button div visibility 
        var buttonDiv = document.getElementById("button-div"); 
        buttonDiv.style.display = "none";
    }
})