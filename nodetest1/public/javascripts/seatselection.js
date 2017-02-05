$(function(){

// $('#btnSeating').on('click', createseating);
createseating();
});
//Note:In js the outer loop runs first then the inner loop runs completely so it goes o.l. then i.l. i.l .i.l .i.l. i.l etc and repeat

function createseating(){
//ideally get this array from service to populate already booked seats
var bookedSeats = [12,14,20];
 var seatingValue = [];
 var seatNumber = 1;
 var seatClass = "seat available";
 for ( var i = 0; i < 6; i++){
   
    for (var j=0; j<4; j++){
      if(bookedSeats.includes(seatNumber))
        seatClass = "seat booked";
      else seatClass = "seat available";

        var seatingStyle = "<div class='"+seatClass+"' id='seat"+seatNumber.toString()+"'><label class='seat-number'>"+seatNumber.toString()+"</div>";
        seatNumber++;
        seatingValue.push(seatingStyle);

         if ( j === 3){
         var seatingStyle = "<div class='clearfix'></div>";
        seatingValue.push(seatingStyle);   
     }
  }   
}

$('#messagePanel').html(seatingValue);

       $(function(){
            $('.seat').on('click',function(){ 


              if($(this).hasClass( "selected" )){
                $( this ).removeClass( "selected" );                  
              }else if(!$(this).hasClass( "booked"))  {
                $( this ).addClass( "selected" );

              }                   
              

            });

            $('.seat').mouseenter(function(){
            if(!$(this).hasClass( "booked" )){     
                $( this ).addClass( "hovering" );

                   $('.seat').mouseleave(function(){ 
                   $( this ).removeClass( "hovering" );
                      
                   });
                 }
            });


       });

};
