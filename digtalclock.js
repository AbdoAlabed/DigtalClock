var arr = ["https://s.hdnux.com/photos/67/32/36/14526368/9/920x920.jpg",'https://media0.giphy.com/media/VtIX2VeyCY1nG/source.gif','https://media0.giphy.com/media/3oz8xBgi2syJQiMJAQ/source.gif',
'http://33.media.tumblr.com/6afce3866f5e444faff2f89299a39966/tumblr_nf2d7yIpZW1todo8fo1_500.gif',"https://media.giphy.com/media/fYa7ZiF1Tqm3K/giphy.gif",
"https://i.imgur.com/BoY59JF.gif?noredirect"]


function digtalClock(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
    var apM = '';
	if(hour > 12){
      apM = 'PM';
	}else{
	  apM = 'AM'
	}
	if(hour !== 12){

	  hour = hour % 12 ;
	}
	if(hour < 10 )
		hour = "0" + hour;
	
	if(minute < 10)
      minute ="0" + minute;

    if(second < 10)
      second = "0" + second;

    
     
    document.getElementById("clock").innerHTML = hour +" : " + minute + " : " + second + " " +apM ;
    var time = setTimeout(digtalClock,1000);
    }

