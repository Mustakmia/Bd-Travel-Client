(this["webpackJsonpbd-travel"]=this["webpackJsonpbd-travel"]||[]).push([[0],{109:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},118:function(e,t,c){},120:function(e,t,c){},123:function(e,t,c){},125:function(e,t,c){"use strict";c.r(t);c(104);var s=c(0),a=c.n(s),i=c(41),n=c.n(i),r=c(33),l=c(18),o=(c(109),c(10)),j=c(89),d={apiKey:"AIzaSyCtZdR1mS0tj11BCfZEd3HwLfjk2Ly93OI",authDomain:"travel-fe4ed.firebaseapp.com",projectId:"travel-fe4ed",storageBucket:"travel-fe4ed.appspot.com",messagingSenderId:"135379131081",appId:"1:135379131081:web:3b6a7c07b94dc092ebcb18",measurementId:"G-LTHPX4ZS0V"},h=function(){Object(j.a)(d)},b=c(53);h();var x=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(""),n=Object(o.a)(i,2),r=n[0],l=n[1],j=Object(s.useState)(!0),d=Object(o.a)(j,2),h=d[0],x=d[1],m=Object(b.b)(),u=new b.a;Object(s.useEffect)((function(){var e=Object(b.c)(m,(function(e){a(e||{}),x(!1)}));return function(){return e}}),[m]);return{handleGoogle:function(){return x(!0),Object(b.d)(m,u).finally((function(){return x(!1)}))},user:c,error:r,setUser:a,setError:l,logOut:function(){x(!0),Object(b.e)(m).then((function(){a({})})).catch((function(e){})).finally((function(){return x(!1)}))},isLoading:h}},m=c(1),u=Object(s.createContext)(),O=function(e){var t=e.children,c=x();return Object(m.jsx)(u.Provider,{value:c,children:t})},p=c(3),g=c(5),f=c(143),A=function(){var e=Object(s.useState)({name:"",img:"",fee:"",des:""}),t=Object(o.a)(e,2),c=t[0],a=t[1],i=function(e){var t=e.target,s=t.name,i=t.value;a(Object(g.a)(Object(g.a)({},c),{},Object(p.a)({},s,i)))};return Object(m.jsx)("div",{className:"bg-warning",children:Object(m.jsxs)("div",{className:"event-title text-white pt-3",children:[Object(m.jsx)("h1",{className:"fw-bold",children:"Travel New Location"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)(f.a,{onSubmit:function(e){fetch("http://localhost:7000/card",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("Successfully added a new Event")})),e.preventDefault()},className:"w-50 mx-auto",children:[Object(m.jsxs)(f.a.Group,{className:"mb-3 fw-bold",controlId:"formGroupText",children:[Object(m.jsx)(f.a.Label,{children:"Event Title"}),Object(m.jsx)(f.a.Control,{onChange:i,name:"name",type:"text",placeholder:"Enter Neme"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3 fw-bold",controlId:"formGroupText",children:[Object(m.jsx)(f.a.Label,{children:"Image Ulr"}),Object(m.jsx)(f.a.Control,{onChange:i,name:"img",type:"text",placeholder:"Set image url"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3",controlId:"formGroupText",children:[Object(m.jsx)(f.a.Label,{children:"Fee"}),Object(m.jsx)(f.a.Control,{onChange:i,name:"fee",type:"number",placeholder:"Event Fee"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3 fw-bold",controlId:"formGroupText",children:[Object(m.jsx)(f.a.Label,{children:"Description"}),Object(m.jsx)(f.a.Control,{onChange:i,name:"des",as:"textarea",rows:3,placeholder:"Event Description"})]}),Object(m.jsx)(f.a.Group,{className:"mb-3",controlId:"formGroupPassword",children:Object(m.jsx)(f.a.Control,{className:"text-white bg-primary border-0 fw-bold",type:"submit"})})]})})]})})},v=(c(114),function(){return Object(m.jsxs)("div",{className:"text-center mx-auto",children:[Object(m.jsx)("h1",{children:"World Tour"}),Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{className:"header-title",children:"Always Choose Good"}),Object(m.jsx)("p",{className:"header-description container",children:"Biblical Study Trips Travel the Text offers 9-14 day study programs to the lands of the Bible. All programs are designed for those who dream of visiting the land of the Bible as serious students of the Text. Each study program offers a unique curriculum developed and taught by Geoff Carroll. All study is on-site, as we seek to engage the land from the perspectives of the original audience."})]}),Object(m.jsxs)("div",{className:"row container w-100 m-auto",children:[Object(m.jsx)("div",{className:"col-md-6 col-lg-6 col-sm-12 second-section-img",children:Object(m.jsx)("img",{className:"h-100 w-100",src:"https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg",alt:""})}),Object(m.jsxs)("div",{className:"col-md-6 col-lg-6 col-sm-12 second-sendtion",children:[Object(m.jsx)("h2",{className:"second-sendtion-title",children:"Know Us"}),Object(m.jsxs)("p",{className:"second-sendtion-desc container",children:[Object(m.jsx)("span",{className:"about-p",children:"P"})," Travel the Text offers 9-14 day study programs to the lands of the Bible. All programs are designed for those who dream of visiting the land of the Bible as serious students of the Text. Each study program offers a unique curriculum developed and taught by Geoff Carroll. All study is on-site, as we seek to engage the land from the perspectives of the original audience. *Per Covid-19 all study trip dates are currently subject to change and we are not currently adding new group members to any existing trips. We do have a waitlist and will email this group when we are able to begin planning new trips, and/or filling available spaces on upcoming trips that have been already planned or rescheduled. Please click here to add your name to that list!"]})]})]}),Object(m.jsxs)("div",{className:"third-section text-center mt-5",children:[Object(m.jsxs)("h2",{className:"third-section-title ",children:["Out Travel"," ",Object(m.jsx)("span",{style:{fontSize:"200%",color:"tomato"},children:"g"}),"uide"]}),Object(m.jsx)("p",{className:"third-section-desc mt-3"})]}),Object(m.jsxs)("div",{className:"row container w-100 m-auto expert-section",children:[Object(m.jsxs)("div",{className:"col-md-6 col-lg-3 col-sm-12 expert h-200 w-200",children:[Object(m.jsx)("img",{className:"h-200 w-200",src:"https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:""}),Object(m.jsx)("h4",{children:"Mr.Robert Bruce"}),Object(m.jsx)("h5",{className:"mt-2",children:"Natural specialist"}),Object(m.jsx)("h6",{children:"From London"})]}),Object(m.jsxs)("div",{className:"col-md-6 col-lg-3 col-sm-12 expert h-200 w-200",children:[Object(m.jsx)("img",{className:"h-200 w-200",src:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:""}),Object(m.jsx)("h4",{children:"Mr.Mukharjee"}),Object(m.jsx)("h5",{className:"mt-2",children:"History specialist"}),Object(m.jsx)("h6",{children:"From Kolkata"})]}),Object(m.jsxs)("div",{className:"col-md-6 col-lg-3 col-sm-12 expert h-200 w-200",children:[Object(m.jsx)("img",{className:"h-200 w-200",src:"https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:""}),Object(m.jsx)("h4",{children:"Ms.Suchy"}),Object(m.jsx)("h5",{className:"mt-2",children:"Map specialist"}),Object(m.jsx)("h6",{children:"From Mayanmay"})]}),Object(m.jsxs)("div",{className:"col-md-6 col-lg-3 col-sm-12 expert h-200 w-200",children:[Object(m.jsx)("img",{className:"h-200 w-200",src:"https://images.unsplash.com/photo-1605038593290-475661bfbba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:""}),Object(m.jsx)("h4",{children:"Mr.Kasem Khan"}),Object(m.jsx)("h5",{className:"mt-2",children:"Travel specialist"}),Object(m.jsx)("h6",{children:"From Bangladesh"})]})]}),Object(m.jsx)("div",{className:"four-section",children:Object(m.jsxs)("div",{className:"expert-1",children:[Object(m.jsx)("h2",{children:"All Guide "}),Object(m.jsx)("img",{src:" https://media.istockphoto.com/photos/they-are-the-best-in-their-field-picture-id531722057?s=612x612",alt:""})]})})]})}),w=(c(115),function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"baner",src:"https://image.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg",alt:""})})}),N=c(144),y=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(N.a,{fade:!0,className:"clients",children:[Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",alt:"First slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"First slide label"}),Object(m.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://image.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg",alt:"Second slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"Second slide label"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://image.freepik.com/free-photo/tourists-having-fun-coast_23-2147641179.jpg",alt:"Third slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"Third slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://image.freepik.com/free-photo/lost-tourists-finding-way_23-2147643219.jpg",alt:"Third slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"4 slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block",src:"https://img.freepik.com/free-photo/woman-with-backpack-exploring-nature_23-2148928007.jpg?size=338&ext=jpg",alt:"Third slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"5 slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://image.freepik.com/free-photo/two-male-hiker-sitting-top-rock-mountain-looking-scenic-view_23-2148182804.jpg",alt:"Third slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"6 slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]}),Object(m.jsxs)(N.a.Item,{children:[Object(m.jsx)("img",{className:"d-block ",src:"https://img.freepik.com/free-photo/travelers-with-ma_23-2147641148.jpg?size=338&ext=jpg",alt:"Third slide"}),Object(m.jsxs)(N.a.Caption,{children:[Object(m.jsx)("h3",{children:"7 slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})},C=c(137),T=c(146),B=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Our Best Services"}),Object(m.jsxs)(C.a,{children:[Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Img,{variant:"top",src:"data:image/png;base64,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"}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{children:"Card title"}),Object(m.jsx)(T.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]}),Object(m.jsx)(T.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Img,{variant:"top",src:"data:image/png;base64,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"}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{children:"Card title"}),Object(m.jsxs)(T.a.Text,{children:["This card has supporting text below as a natural lead-in to additional content."," "]})]}),Object(m.jsx)(T.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Img,{variant:"top",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAYAAADIWo5HAAAABHNCSVQICAgIfAhkiAAAAZNJREFUaEPtWj1Ow1AMttMKdUCojAzQHAFu0CplpjcgDNBs5QbADeiWbuEEzQFaqZwAOAFNQGKkQgyAQoxffvjpgDrHfkMSRVm+z/b3vWcHoVht97lZb7wOCFIXAe3yfaXuRLeAVpi8rQ9nwebCYENz2T9+3E1rn+PKAl+OIhORvG90DAloIl9rvNyIAV+SwSRMRq097HrROSfCWaVSfUUwKcAROl50Ly76PwRdcwbEtCJhlfuMiBaiCchcwGQAAUVcBvPKhfgfQIzZZsytIgPoYuK3WAzlrFL8lYBcBDUDtARUA1QE1QXUBuXsAgD+7APYBwMLMZBEQErEjR9w9Swg+TT4fRiSlPrLWLUEtAQEd4RUA8qOkIqgYAbUBdQF1AXkDkbUBtUGi8mQYBfMR2NKgGAGNAMklwCPxe+w249D/lXqQGIVsPhdoXMS99CCsUQC2AQ72W9yjhcH/HAoiQQT/am/Y1rj+XL6D5eINJBAAhEOp6Pt02wr/Btw23uy6+lHDyxoVpKIFBaJtRbO/K15ie8LKV3lSw795bYAAAAASUVORK5CYII="}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{children:"Card title"}),Object(m.jsx)(T.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),Object(m.jsx)(T.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Img,{variant:"top",src:"data:image/png;base64,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"}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{children:"Card title"}),Object(m.jsx)(T.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),Object(m.jsx)(T.a.Footer,{children:Object(m.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})]})},S=c(138),k=c(139),I=c(91),E=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("http://localhost:7000/card").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(m.jsx)(m.Fragment,{children:0!==c.length?Object(m.jsxs)("div",{className:"my-5",children:[Object(m.jsxs)("h1",{className:"text-danger",children:["World",Object(m.jsx)("span",{children:"Package Details"})]}),Object(m.jsx)("div",{className:"tour-card",children:Object(m.jsx)(S.a,{children:Object(m.jsx)(k.a,{xs:1,md:3,className:"g-4",children:c.map((function(e){return Object(m.jsx)(I.a,{children:Object(m.jsxs)(T.a,{style:{border:" 3px solid tomato"},children:[Object(m.jsx)(T.a.Img,{style:{height:"220px"},variant:"top",src:e.img}),Object(m.jsxs)(T.a.Body,{className:"bg-dark text-light",children:[Object(m.jsx)(T.a.Title,{children:e.name}),Object(m.jsxs)(T.a.Text,{children:["Population:",e.population]}),Object(m.jsxs)(T.a.Text,{children:["Tour Price:",e.price]}),Object(m.jsxs)(T.a.Text,{children:["Time:",e.time]}),Object(m.jsxs)(T.a.Text,{children:["Country:",e.country]}),Object(m.jsx)(r.b,{to:"/selected/".concat(e._id),children:Object(m.jsx)("button",{className:"btn mx-1 bg-warning text-white ",children:"Book Now"})})]})]})},"id")}))})})})]}):Object(m.jsx)("h1",{children:"Loading..."})})},G=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)(E,{}),Object(m.jsx)(B,{}),Object(m.jsx)(y,{})]})},U=function(){return Object(s.useContext)(u)},H=function(){var e,t=U(),c=t.handleGoogle,s=t.setUser,a=t.setError,i=Object(l.h)(),n=Object(l.g)(),r=(null===(e=i.state)||void 0===e?void 0:e.from)||"/home";return Object(m.jsxs)("div",{className:"my-5",children:[Object(m.jsx)("h2",{children:"login With Google"}),Object(m.jsx)("button",{onClick:function(){c().then((function(e){s(e.user),n.push(r)})).catch((function(e){a(e.message)}))},className:"btn bg-warning text-white border-0",children:"Google SingIn"})]})},D=c(140),M=c(100),F=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){fetch("http://localhost:7000/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);return Object(m.jsx)("div",{children:0!==c.length?Object(m.jsxs)(S.a,{children:[Object(m.jsx)("h1",{className:"text-center ",children:"User Management"}),Object(m.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Event"}),Object(m.jsx)("th",{children:"User Name"}),Object(m.jsx)("th",{children:"User email"}),Object(m.jsx)("th",{children:"Action"})]})}),c.map((function(e){return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),Object(m.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),Object(m.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),Object(m.jsx)("td",{children:Object(m.jsx)(M.a,{onClick:function(){return t=e._id,void(window.confirm("are you sure to delete this ?")&&fetch("http://localhost:7000/users/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){alert("Deleted Seccessfully");var s=c.filter((function(e){return e._id!==t}));a(s)}})));var t}})})]})})}))]})]}):Object(m.jsx)("h1",{children:"Loading..."})})},Y=function(){var e=U().user,t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){fetch("http://localhost:7000/users").then((function(e){return e.json()})).then((function(t){var c=t.filter((function(t){return t.email===e.email}));i(c)}))}),[e.email]);return Object(m.jsx)(m.Fragment,{children:0!==a.length?Object(m.jsx)(S.a,{className:"my-5",children:Object(m.jsx)(k.a,{xs:1,md:4,sm:1,className:"g-4",children:a.map((function(e){return Object(m.jsx)(I.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(T.a.Img,{variant:"top",src:null===e||void 0===e?void 0:e.img}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{className:"fw-bold",children:null===e||void 0===e?void 0:e.title}),Object(m.jsxs)(T.a.Text,{children:[Object(m.jsx)("h6",{children:"Traveller"}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis, sit exercitationem error ab distincti",Object(m.jsx)("p",{children:null===e||void 0===e?void 0:e.date})]})]}),Object(m.jsx)("button",{onClick:function(){return t=e._id,void(window.confirm("Are you sure wanna remove this item?")&&fetch("http://localhost:7000/users/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){alert("Deleted Seccessfully");var c=a.filter((function(e){return e._id!==t}));i(c)}})));var t},className:"btn bg-warning text-white border-0",children:"Cancel"})]})},e._id)}))})}):Object(m.jsx)("h1",{children:"Please wait ..."})})},K=c(7),R=["children"],P=function(e){var t=e.children,c=Object(K.a)(e,R),s=U(),a=s.user;return s.isLoading?Object(m.jsx)("h1",{className:"text-center",children:"Please Wait..."}):Object(m.jsx)(l.b,Object(g.a)(Object(g.a)({},c),{},{render:function(e){var c=e.location;return a.email?t:Object(m.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},L=c(94),z=function(){var e=U().user,t=Object(l.i)().id,c=Object(s.useState)({}),a=Object(o.a)(c,2),i=a[0],n=a[1],r=Object(s.useState)({}),j=Object(o.a)(r,2),d=j[0],h=j[1];Object(s.useEffect)((function(){fetch("http://localhost:7000/card").then((function(e){return e.json()})).then((function(e){var c=e.find((function(e){return e._id===t}));n(c)}))}),[t]);return Object(m.jsx)("div",{children:Object(m.jsx)(S.a,{children:Object(m.jsxs)("div",{className:"row py-5",children:[Object(m.jsx)("div",{className:"col-12 col-md-6",children:Object(m.jsx)("img",{src:null===i||void 0===i?void 0:i.img,alt:"",className:"w-100 h-100"})}),Object(m.jsx)("div",{className:"col-12 col-md-6 text-start",children:Object(m.jsxs)(f.a,{onSubmit:function(t){var c=d;c.title=i.name,c.name=e.displayName,c.img=i.img,c.email=e.email,h(c),fetch("http://localhost:7000/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("Successfull added your package")})),t.preventDefault()},children:[Object(m.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(f.a.Label,{children:"Your Selected Package"}),Object(m.jsx)(f.a.Control,{value:null===i||void 0===i?void 0:i.name,type:"text",placeholder:"Your Name"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(f.a.Label,{children:"Your Name"}),Object(m.jsx)(f.a.Control,{value:null===e||void 0===e?void 0:e.displayName,type:"text",placeholder:"Your Name"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(f.a.Label,{children:"Email address"}),Object(m.jsx)(f.a.Control,{value:null===e||void 0===e?void 0:e.email,type:"email",placeholder:"Enter email"})]}),Object(m.jsxs)(f.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(f.a.Label,{children:"Date"}),Object(m.jsx)(f.a.Control,{onChange:function(e){var t=Object(g.a)({},d);t.date=e.target.value,h(t)},type:"date",placeholder:"date",required:!0})]}),Object(m.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})})},Z=c(96),W=c.n(Z),V=c(95),Q=c.n(V),J=c(97),q=c.n(J),X=c(98),_=c.n(X),$=(c(118),function(){return Object(m.jsxs)("div",{className:"container-fluid p-0",children:[Object(m.jsxs)("div",{className:"bg-secondary p-3 text-white",children:[Object(m.jsxs)("div",{className:"py-5 d-lg-flex justify-content-around",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{style:{width:"50px",marginLeft:"5px"},src:"",alt:""}),Object(m.jsx)("h3",{children:"BD Travel "}),Object(m.jsxs)("p",{className:"mb-0",children:['"We Provide best Tour ',Object(m.jsx)("br",{}),' to make you happy"']})]}),Object(m.jsxs)("div",{className:"text-start",children:[Object(m.jsx)("h4",{children:"Connect With Us"}),Object(m.jsx)("p",{className:"fw-bold",children:"Information"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"text-color fas fa-phone-alt"})," (+009934500050)"]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"text-color fas fa-mobile-alt"})," (+8801766145227)"]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("i",{className:"text-color far fa-envelope"})," ",Object(m.jsx)("a",{className:"text-white",href:"musyafijur52@gmail.com",children:"bd_travel_24/7@gmail.com"})]})]}),Object(m.jsxs)("div",{className:"text-start",children:[Object(m.jsx)("p",{children:"Get Help"}),Object(m.jsx)("p",{children:"Read FAQs"}),Object(m.jsx)("p",{children:"Views All Products"}),Object(m.jsx)("p",{children:"Stay With Us "})]})]}),Object(m.jsx)("p",{children:"Follow Us"}),Object(m.jsxs)("p",{className:"d-md-flex justify-content-center",children:[Object(m.jsx)(Q.a,{sx:{mr:2}}),Object(m.jsx)(W.a,{sx:{mr:2}}),Object(m.jsx)(q.a,{sx:{mr:2}}),Object(m.jsx)(_.a,{sx:{mr:2}})]})]}),Object(m.jsxs)("p",{className:"mb-0 p-3 text-center text-white bg-info",children:["Copyright",Object(m.jsx)("i",{className:"far fa-copyright"})," 2022 DailyShop All right reserved."]})]})}),ee=c(142),te=c(145),ce=c(141),se=c(90),ae=(c(120),function(){var e=U(),t=e.user,c=e.logOut;return Object(m.jsx)("div",{children:Object(m.jsx)(ee.a,{className:"nav",bg:"dark",expand:"lg",children:Object(m.jsxs)(S.a,{fluid:!0,children:[Object(m.jsx)(ee.a.Brand,{className:"text-light",href:"#",children:"Bd Travel"}),Object(m.jsx)(ee.a.Toggle,{"aria-controls":"navbarScroll"}),Object(m.jsxs)(ee.a.Collapse,{id:"navbarScroll",children:[Object(m.jsxs)(te.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(m.jsx)(te.a.Link,{className:"text-light",as:r.b,to:"/home",children:"Home"}),Object(m.jsxs)(te.a,{className:"me-auto my-2 my-lg-0 text-light fw-bold",style:{maxHeight:"100px"},navbarScroll:!0,children:[(null===t||void 0===t?void 0:t.email)&&Object(m.jsx)(te.a.Link,{className:"text-light",as:r.b,to:"/order",children:"My Order"}),(null===t||void 0===t?void 0:t.email)&&Object(m.jsx)(te.a.Link,{className:"text-light",as:r.b,to:"/createNewEvent",children:"Create New Event"}),(null===t||void 0===t?void 0:t.email)&&Object(m.jsx)(te.a.Link,{className:"text-light",as:r.b,to:"/management",children:"Managment"})]}),Object(m.jsx)("div",{}),Object(m.jsx)(te.a.Link,{className:"text-light",as:r.b,to:"/about",children:"About"})]}),Object(m.jsxs)(ce.a,{title:"Link",id:"navbarScrollingDropdown",children:[Object(m.jsx)(ce.a.Item,{href:"#action3",children:"Action"}),Object(m.jsx)(ce.a.Item,{href:"#action4",children:"Another action"}),Object(m.jsx)(ce.a.Divider,{}),Object(m.jsx)(ce.a.Item,{href:"#action5",children:"Something else here"})]}),Object(m.jsx)(te.a.Link,{href:"#",enabled:!0,children:"Link"}),Object(m.jsxs)(f.a,{className:"d-flex",children:[Object(m.jsx)(se.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(m.jsx)(L.a,{variant:"outline-success",children:"Search"})]}),(null===t||void 0===t?void 0:t.email)?Object(m.jsx)(r.b,{to:"/login",children:Object(m.jsx)("button",{onClick:c,children:"Log out"})}):Object(m.jsx)(r.b,{to:"/login",children:Object(m.jsx)("button",{children:"Login"})})]})]})})})});var ie=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(ae,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(G,{})}),Object(m.jsx)(l.b,{path:"/home",children:Object(m.jsx)(G,{})}),Object(m.jsx)(l.b,{path:"/order",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(l.b,{path:"/management",children:Object(m.jsx)(F,{})}),Object(m.jsx)(l.b,{path:"/about",children:Object(m.jsx)(v,{})}),Object(m.jsx)(P,{path:"/selected/:id",children:Object(m.jsx)(z,{})}),Object(m.jsx)(l.b,{path:"/createNewEvent",children:Object(m.jsx)(A,{})}),Object(m.jsx)(l.b,{path:"/aboutUs",children:Object(m.jsx)(v,{})}),Object(m.jsx)(l.b,{path:"/login",children:Object(m.jsx)(H,{})})]}),Object(m.jsx)($,{})]})})})},ne=(c(123),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,147)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))});n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),ne()}},[[125,1,2]]]);
//# sourceMappingURL=main.d2ef94a6.chunk.js.map