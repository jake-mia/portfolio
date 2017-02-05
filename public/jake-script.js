$( document ).ready(function() {
        console.log( "document loaded" );


var listitems = '<li><a href="#">site 1</a></li><li><a href="#">site 2</a></li><li><a href="#">site 3</a></li>'


        // $('#list-box').on('click', 'button', function() {
        // // run this code
        // console.log("got it");
        // $(this).closest('#list-box').append(listitems);
        // //$('#list-box').children('ul').first().append(listitems);
        // });

        $('button').click(function () {
          var myitems = $(this).closest('#list-box').children('ul').children();
          if (myitems.first().is( ":hidden" ) ) {
                myitems.slideDown( "slow" );
          } else {
                myitems.hide();
          }
        });


        // $('button').on('click', function() {
        // // run this code
        // console.log("got it");
        // $('#list-box').children('ul').first().text('');
        // });



    });
