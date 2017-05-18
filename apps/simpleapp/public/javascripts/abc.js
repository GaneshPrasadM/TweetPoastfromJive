function onViewer(viewer) {
    console.log("Ur in abc.js");
           $("#btn_discuss").click(function () { 
             console.log("Entered J query"); 
              var tweet=$("#discussion").val();
              console.log("This is my tweet");
              console.log(tweet);
          
        //  T.post('statuses/update',tweet,tweeted); 
           }); 
    };

    module.exports=onViewer;