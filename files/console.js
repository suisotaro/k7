onload=()=>{var newe=document.createElement("div");newe.id="console";newe.style="position:absolute;left:0;bottom:0;width:100%;height:150px;overflow:auto;border:solid 1px #ccc;background:#111;box-sizing:border-box;color:#fff;padding:2px 10px;";document.body.appendChild(newe);console.log=(a)=>{var c=document.createElement("p");var b=newe.querySelector("p:first-child");c.appendChild(document.createTextNode(a));newe.insertBefore(c,b)};}
