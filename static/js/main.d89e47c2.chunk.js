(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(320)},138:function(e,t,n){},152:function(e,t){},174:function(e,t){},176:function(e,t){},241:function(e,t){},247:function(e,t){},290:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=290},316:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(131),s=n.n(r),i=(n(137),n(138),n(24)),l=n.n(i),c=n(68),u=n(17),p=n(19),m=n(18),d=n(14),y=n(20),f=n(25),b=n(38),h=n.n(b),g=(n(316),[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}]),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={contractURI:""},n.handleInput=function(e){console.log("e: "+e),n.setState({contractURI:e.target.value})},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid mt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("main",{role:"main",className:"col-lg-12 d-flex text-center"},o.a.createElement("div",{className:"content mr-auto ml-auto"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("event: "+t),console.log("this.state.contractURI: "+e.state.contractURI),e.props.setContractURI(e.state.contractURI)}},"NFT Contract Address:",o.a.createElement("input",{className:"text-input-class",type:"text",value:this.state.contractURI,onChange:this.handleInput}),o.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"Lookup NFTs"}))))))}}]),t}(a.Component),w=(a.Component,function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid mt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("main",{role:"main",className:"col-lg-12 d-flex text-center"},o.a.createElement("div",{className:"content mr-auto ml-auto"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),window.location.reload()}},o.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"Start Over"}))))))}}]),t}(a.Component)),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={account:"",taskCount:0,tasks:[],loading:!0,expectedNetwork:!1,image:"",images:[],contractURI:""},n.getJsonLoop=n.getJsonLoop.bind(Object(f.a)(Object(f.a)(n))),n.setContractURI=n.setContractURI.bind(Object(f.a)(Object(f.a)(n))),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var e=Object(c.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.expectedNetwork=!0,new h.a(h.a.givenProvider||"https://mainnet.infura.io/v3/6fec673daf8c4b189cca94c1ac57635a"),this.setState({loading:!1});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"imageContract",value:function(){var e=Object(c.a)(l.a.mark(function e(t){var n,a,o,r,s,i,c,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new h.a(h.a.givenProvider||"https://rpc.ftm.tools/"),a=t,console.log("contractURI: "+a),""==a){e.next=29;break}o=new n.eth.Contract(g,"0x12094ae07817a2630F9F12fbaa4FB81D93ADBA2C");try{o=new n.eth.Contract(g,a)}catch(l){console.log(l)}return r=!0,s=1,e.next=10,o.methods.tokenURI(s).call().then(function(e){return console.log("result: "+e),console.log("result.length: "+e.size),e}).catch(function(e){r=!1});case 10:i=e.sent,c=i.substr(0,i.lastIndexOf("/")),console.log("tokenURITrimmed: "+c),console.log(i.size),i.length-c.length>10&&(c=i),console.log("tokenURITrimmed: "+c),c.includes("ipfs://")&&(c=c.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")),console.log("tokenURITrimmed: "+c);case 18:if(!r){e.next=29;break}return u=c+"/"+s,console.log("tokenString "+u),e.next=23,fetch(u).then(function(e){e.ok?console.log(e.json()):(console.log("failed to fetch"),r=!1)});case 23:try{this.getJsonLoop(s,u)}catch(l){console.log(l)}return e.next=26,this.wait(400);case 26:s++,e.next=18;break;case 29:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),Object(d.a)(t,[{key:"wait",value:function(e){return new Promise(function(t){setTimeout(function(){t()},e)})}},{key:"getJsonLoop",value:function(e,t){var a=this,o=n(317);try{fetch(t).then(function(e){if(e.ok)return e.json();console.log("failed to fetch")}).then(function(t){var n={id:0,image:""};n.id=e;var r=o.decode(o.encode(t)).image;r.includes("ipfs://")&&(r=r.replace("ipfs://","https://gateway.pinata.cloud/ipfs/")),n.image=r,a.state.images.push(n),a.setState({images:a.state.images})}).catch(function(e){console.log(e)})}catch(r){console.log(r)}}},{key:"contractImage",value:function(){console.log(this.state.image)}},{key:"setContractURI",value:function(e){console.log("setting uri: "+e),this.setState({images:[]}),this.setState({contractURI:e});try{this.imageContract(e)}catch(t){console.log(t)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"all"},this.state.expectedNetwork?o.a.createElement("div",null):o.a.createElement("div",{className:"header-text"},"Connect to Fantom mainnet before minting"),o.a.createElement("br",null),o.a.createElement("h1",{className:"header-text"},"NFT Viewer"),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("main",{role:"main",className:"col-lg-6 d-flex justify-content-left"},this.state.loading?o.a.createElement("div",{id:"loader",className:"text-center"},o.a.createElement("p",{className:"text-center"},"Loading...")):o.a.createElement(v,{setContractURI:this.setContractURI,contractURI:this.state.contractURI,state:this.state})),o.a.createElement("main",{role:"main",className:"col-lg-6 d-flex justify-content-right"},this.state.loading?o.a.createElement("div",{id:"loader",className:"text-center"},o.a.createElement("p",{className:"text-center"},"Loading...")):o.a.createElement(w,{state:this.state})))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),this.state.images.map(function(e){return o.a.createElement("img",{key:e.id,src:e.image,alt:"",height:"33.333%",width:"33.333%"})}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.d89e47c2.chunk.js.map