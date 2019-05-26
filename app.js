
$(document).ready(function(){
    $(".replies").html("Turn off replies");
    $("#status").change(function(){
      var st=this.checked;
      if(st){
      $(".replies").html("Turn off replies");
      $(".reply-notification").css("display","none");
      }
      else{
        $(".replies").html("Turn on replies");
        $(".reply-notification").css("display","block");
         }
    });
    loadData();
  
    $('#msg').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
          if(event.target.value===""){
              alert("empty");
            }
          else{
            $('.discussion').append(`
                <div class="messages">
                    <p class="inline">${event.target.value}</p>
                </div>
            ` );
            }	
    
    
        
         } //if enter key pressed
    });
   
  });

  function loadData()
  {
    $.getJSON("https://api.myjson.com/bins/hpq90", function( data ){
                    console.log(data);
                    const chats = $('.chatbox');
                    for (let i = 0; i < data.length; i++) 
                        {
                            chats.append(`
                                <div class="member">
                                    <img src="${ data[i].src}" alt="">
                                    <div class="info">
                                        <h3>${ data[i].title}</h3>
                                        <p>${ data[i].body}</p>
                                    </div>
                                </div> `);
                        } //for loop

                   }
           ); //getJSON
    $.getJSON("https://api.myjson.com/bins/1f8mjw", function( data ){
                  console.log(data);
                  const livechat = $('.discussion');
                  for (let i = 0; i < data.length; i++) 
                      {
                          livechat.append(`
                          <div class="messages">
                              <p class="inline">${data[i].body}</p>
                          </div> `
                          );
                      } //for loop

            }
         );
  }