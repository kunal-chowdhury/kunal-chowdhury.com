function LazyLoadYouTubeVideos(){try{var e=document.querySelectorAll(".youtube");if(e.length==0){return;};for(t=0;t<e.length;t++){var r="https://img.youtube.com/vi/"+e[t].dataset.embed+"/hqdefault.jpg",a=new Image;a.src=r,a.alt='Click to play the Youtube Video',a.title='Click to play the Youtube Video',a.addEventListener("load",void e[t].appendChild(a)),e[t].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}}catch{}} LazyLoadYouTubeVideos();