const menu={
 "Coffee":[["Filter Coffee","South-Indian style",60],["Cappuccino","Rich and creamy",120],["Cold Brew","Steeped 18 hours",150],["Hazelnut Latte","Smooth and nutty",160]],
 "Bakes":[["Butter Croissant","Baked fresh daily",90],["Chocolate Brownie","Warm, with ice cream",130],["Banana Walnut Cake","House special",100]],
 "Bites":[["Paneer Tikka Sandwich","Grilled, with mint mayo",140],["Veg Club Sandwich","Triple-layer",150],["Peri-Peri Fries","Crispy and spicy",120]]
};
const tabs=document.getElementById('tabs'),list=document.getElementById('list');
function show(k){
 [...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
 list.innerHTML=menu[k].map(([a,b,c])=>`<div class="item"><div>${a}<small>${b}</small></div><b>₹${c}</b></div>`).join('');
}
Object.keys(menu).forEach(k=>{const b=document.createElement('button');b.className='tab';b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});
show('Coffee');
document.getElementById('f').addEventListener('submit',e=>{
 e.preventDefault();
 const t=encodeURIComponent('Hi, I am '+document.getElementById('n').value+'. '+document.getElementById('m').value);
 window.open('https://wa.me/910000000000?text='+t,'_blank');
});
