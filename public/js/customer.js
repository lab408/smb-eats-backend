$(document).ready(function(){  
	$( "#webform-div" ).click(function() {
    $(".modal").toggleClass("show-modal")
   });
   
   $( "#webchat-div" ).click(function() {
    $("#cai-webclient-builtin-button").trigger("click");
 	});
	
	$( ".modal" ).click(function(event) {''
    if(!$(event.target).closest('.modal-content').length && !$(event.target).is('.modal-content')) {
      $(".modal").toggleClass("show-modal")
    }  
  });
})

function startFlow() {

  var data = {
    recipient: $("#recipient").val(),
    erp: $("#erp").val(),
    orderData: {
        Buyer: $("#Buyer").val(),
        SalesArea: $("#SalesArea").val(),
        Material: $("#Material").val(),
        Quantity: $("#Quantity").val()
    }
  }

  $.ajax({
    type: "POST",
    url: "api/start",
    contentType: "application/json", 
    data: JSON.stringify(data),
    success: function(res, status){
      alert("Workflow ID: " + res.id + " Created!")}
    });
}
