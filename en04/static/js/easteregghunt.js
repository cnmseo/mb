function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var page = window.location.pathname;
if(page === '/policies'){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var egg = url.searchParams.get("easter");
    if(egg === 'true'){
        document.cookie = `hunt=true`;
        console.log('The Hunt is on!');
    }
}
var hunt = getCookie("hunt");
if(hunt == 'true'){
    console.log('The Hunt is still on!');
    if(page === '/policies'){
        $.ajax({
            url: "egg-finalspace.html"
        }).done(function() {
            console.log('found!');
        });
    }else if(page === '/jobs/web-developer-jobs-in-london'){
        document.cookie = `fourthhegg=Evacuate the city! Engage all defenses! And lets get you a shield! Jobs Contact Us Page and click on the first h2 tag`;
    }else if(page === '/enquiries'){
        document.getElementById("deadpool").addEventListener("click", function(){
            swal(`
        Go home, Sugar Bear, go home.

        You've found the Fifth one!

                    ******
                 ***********
             ############
             ############
                 ***********
                    ******

        You are very Resource-ful!

        JavaScript is one of the most "Common" languages! You should learn it in depth.

        But can you answer question in the easteregghunt.js file on line 74?`);
        });
    }
}

/*

Congratulations!!!

You've found the Sixth and final one!

     ******
   **********
  ############
  ############
   **********
     ******

How would you change the following loop to log like below in the most efficient way?

0,
1,
2,
3,
4

for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

Bonus points for explaining why :)

Send your answer to gabor.farkas@reedonline.co.uk with your CV for a chance to work at Reed.co.uk.

*/