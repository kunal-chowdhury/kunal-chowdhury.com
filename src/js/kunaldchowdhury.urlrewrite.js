setTimeout(function(){try{var o,t,d=new Date(),c=""+d.getFullYear()+(d.getMonth()+1)+d.getDate()+d.getHours()+d.getMinutes(),e=document.querySelector("link[rel='canonical']").href,n=e+(e.includes("?")?"&session=":"?session=")+c+"&pos="+(window.pageYOffset || document.documentElement.scrollTop || window.scrollY),r="";c%2==0&&(o="Google",t="organic",r="https://www.google.com"),c%3==0&&(o="twitter.com",t="social",r="https://twitter.com"),c%5==0&&(o="DuckDuckGo",t="organic",r="https://duckduckgo.com"),c%7==0&&(o="codeproject.com",t="referral",r="https://www.codeproject.com"),c%11==0&&(o="dzone.com",t="social",r="https://dzone.com"),c%13==0&&(o="Bing",t="organic",r="https://www.bing.com"),c%17==0&&(o="facebook.com",t="social",r="https://www.facebook.com"),c%19==0&&(o="linkedin.com",t="social",r="https://www.linkedin.com"),c%23==0&&(o="dotnetkicks.com",t="referral",r="http://dotnetkicks.com"),null==o||""==o?window.location.href=n:(Object.defineProperty(document,"referrer",{get:function(){return r}}),window.location.href=n+"&utm_source="+o+"&utm_medium="+t);}catch{}},240000);