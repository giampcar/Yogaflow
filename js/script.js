
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}


$(".accept").click(function(){
    $(".cookie").hide();

    checkCookie();
  
  });

$(".acceptpartial").click(function(){
    $(".cookie").hide();

    checkCookie();
  
  });


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
  } else {
    user = prompt("Diese Website verwendet Cookies. Weitere Informationen zu den Cookie-Arten finden sich unter den jeweiligen Kategorien. Dort lassen sich auch einzelne Cookies aktivieren. Die Cookie-Einstellungen können jederzeit über den Link im Footer dieser Website angepasst werden","Benutzernamen eingeben oder auf Akzeptieren klicken");
      if (user != "" && user != null) {
      setCookie("username", user, 365);
}
  }
}
