var posts=["blogs/713c1ac0.html","blogs/1155b381.html","blogs/66f88466.html","blogs/81b624c3.html","blogs/b9528813.html","blogs/3006dc10.html","blogs/2d14aaf0.html","blogs/2b7e9eb2.html","blogs/6fbd99c.html","blogs/22e916fa.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };