(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a(35)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=(a(28),a(7)),m=a(8),o=a(10),u=a(6),s=a(9),p=(a(29),a(5)),E=a(1),d=(a(30),a(18)),h=a.n(d),f=a(19),g=a.n(f),v=a(15),b=a.n(v),y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.e,null,l.a.createElement(E.c,{path:"/",exact:!0,element:l.a.createElement("img",{src:h.a,alt:"miasto"})}),l.a.createElement(E.c,{path:"/products",element:l.a.createElement("img",{src:b.a,alt:"miasto"})}),l.a.createElement(E.c,{path:"/contact",element:l.a.createElement("img",{src:g.a,alt:"miasto"})}),l.a.createElement(E.c,{path:"/admin",element:l.a.createElement("img",{src:b.a,alt:"miasto"})}),l.a.createElement(E.c,{path:"*",element:l.a.createElement("img",{src:b.a,alt:"miasto"})})))},j=(a(31),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),k=function(){var e=j.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(p.c,{to:e.path,exact:e.exact?"true":"false"},e.name))});return l.a.createElement("nav",{className:"main"},l.a.createElement("ul",null,e))},w=function(e){var t=e.title,a=e.author,n=e.text;return l.a.createElement("article",{style:{marginTop:40}},l.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),l.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),l.a.createElement("p",{style:{fontSize:15}},n))},x=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."},{id:2,title:"Czym jest paradoks fermiego?",author:"Ania Kwiatkowska",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."}],O=function(){var e=x.map(function(e){return l.a.createElement(w,Object.assign({key:e.id},e))});return l.a.createElement("div",{className:"home"},e)},N=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0&&a.setState({value:e.target.value,isEmpty:!1}),a.setState({value:e.target.value})},a.handleFormIsEmpty=function(){a.state.value||alert("Masz niewype\u0142niony formularz.")},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Napisz do nas"),l.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),l.a.createElement("button",{onClick:this.handleFormIsEmpty},"Wy\u015blij")))}}]),t}(l.a.Component)),S=function(e){return l.a.createElement("article",{className:"product"},l.a.createElement("h1",null,e.id))},q=function(){var e=Object(E.r)().id;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Strona produktu"),l.a.createElement(S,{id:e}),l.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},C=function(){return l.a.createElement(E.e,null,l.a.createElement(E.c,{path:"",element:l.a.createElement(E.a,{to:"/login"})}))},z=function(){return l.a.createElement("div",null,"Nie ma takiej strony")},F=function(){return l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Podaj login",l.a.createElement("input",{type:"text"})),l.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",l.a.createElement("input",{type:"password"})),l.a.createElement("button",null,"Zaloguj"))},J=(a(33),["car","bike","motorcycle"]),L=function(){var e=J.map(function(e){return l.a.createElement("li",{key:e},l.a.createElement(p.b,{to:"/product/".concat(e)},e))});return l.a.createElement("div",{className:"products"},l.a.createElement("h2",null,"Lista produkt\xf3w"),l.a.createElement("div",null,l.a.createElement("ul",null,e)))},P=function(){return l.a.createElement(E.e,null,l.a.createElement(E.c,{path:"/",element:l.a.createElement(O,null)}),l.a.createElement(E.c,{path:"/products",element:l.a.createElement(L,null)}),l.a.createElement(E.c,{path:"/product/:id",element:l.a.createElement(q,null)}),l.a.createElement(E.c,{path:"/contact",element:l.a.createElement(N,null)}),l.a.createElement(E.c,{path:"/admin",element:l.a.createElement(C,null)}),l.a.createElement(E.c,{path:"/login",element:l.a.createElement(F,null)}),l.a.createElement(E.c,{path:"*",element:l.a.createElement(z,null)}))},B=(a(34),function(){var e=Object(E.r)(),t=Object(E.n)();return console.log("Route Params:",e),console.log("Location:",t),l.a.createElement("div",null,l.a.createElement("p",null,"Jeste\u015b na ",l.a.createElement("span",null,"stronie g\u0142\xf3wnej")))}),I=function(){var e=Object(E.r)(),t=Object(E.n)();return console.log("Route Params:",e),console.log("Location:",t),l.a.createElement("div",null,l.a.createElement("p",null,"Jeste\u015b na ",l.a.createElement("span",null,t.pathname)))},Q=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Stopka"),l.a.createElement(E.e,null,l.a.createElement(E.c,{path:"/",element:l.a.createElement(E.b,null)},l.a.createElement(E.c,{index:!0,element:l.a.createElement(B,null)}))),l.a.createElement(E.e,null,l.a.createElement(E.c,{path:"/:page",element:l.a.createElement(E.b,null)},l.a.createElement(E.c,{index:!0,element:l.a.createElement(I,null)}))))},A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement(y,null)),l.a.createElement("main",null,l.a.createElement("aside",null,l.a.createElement(k,null)),l.a.createElement("section",{className:"page"},l.a.createElement(P,null))),l.a.createElement("footer",null,l.a.createElement(Q,null))))}}]),t}(n.Component);c.a.render(l.a.createElement(A,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.957fe6da.chunk.js.map