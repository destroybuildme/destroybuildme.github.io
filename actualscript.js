
$( function() {
        $( "#tabs" ).tabs();
} );
$( function() {
    $( "#accordion" ).accordion({
    heightStyle: "content"
    });
} );
function alertme(){
    if (confirm("CONGRATULATIONS! You have been selected to win a free 500 cats! Claim you prize by clicking \"OK\":")) {
       window.location.assign("http://geekprank.com/fake-virus/"); 
    }
}
setTimeout(alertme, ((Math.random() * 70000) + 10000));