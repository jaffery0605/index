function createNode(element)
{
  return document.createElement(element);

}
function append(parent,el)
{
  return parent.appendChild(el);
}
var ul=document.getElementById("parent");
fetch('https://randomuser.me/api/?results=15')
.then((resp)=>resp.json())
.then((json)=>{
  var data=json.results;
  var users=data.map((user)=>{
    var list=createNode('li');
    var name=createNode('p');
    var email=createNode('p');
    var mobile=createNode('p');
    var image=createNode('img');
    name.innerHTML=user.name.first+' '+user.name.last
    // name.innerHTML=$(user.name.first) $(user.name.last);
    mobile.innerHTML= user.cell;
    email.innerHTML=user.email;
    image.src=user.picture.large;
    append(list,image);
    append(list,email);
    append(list,mobile);
    append(list,name);
    append(ul,list);
  })
});
