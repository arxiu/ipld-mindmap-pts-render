(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var i=n(7),o=n.n(i),r=n(24),a=n.n(r),s=(n(48),n(12)),l=n(0),u=n(1),c=n(4),d=n(2),h=n(5),f=n(3),v=n(6),p=n(41),g=n.n(p),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).canvRef=o.a.createRef(),n.space=null,n.form=null,n.pressingTimeout=null,n.state={isPressing:!1,isLongPress:!1,touchStartTimestamp:0,pressStartPointer:null},document.addEventListener("visibilitychange",n.onVisibilityChange.bind(Object(f.a)(Object(f.a)(n)))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._create(),this._loop()}},{key:"componentDidUpdate",value:function(){this._loop()}},{key:"onVisibilityChange",value:function(e,t){"visible"==document.visibilityState?this.space.resume():this.space.pause()}},{key:"_loop",value:function(){this.props.loop?this.space.play():this.space.playOnce(0)}},{key:"animate",value:function(e,t){}},{key:"start",value:function(e,t){}},{key:"resize",value:function(e,t){}},{key:"action",value:function(e,t,n,i){}},{key:"_create",value:function(){this.space=new v.a(this.canvRef,this.onCanvasReady).setup({bgcolor:this.props.background,resize:!0,retina:!0}),this.form=this.space.getForm(),this.space.add(this),this.space.bindMouse().bindTouch(),this.onPressTimeReached=this.onPressTimeReached.bind(this)}},{key:"onCanvasReady",value:function(){}},{key:"onPinchStart",value:function(e){this.props.onPinchStart&&this.props.onPinchStart(e)}},{key:"onPinchMove",value:function(e){this.props.onPinchMove&&this.props.onPinchMove(e)}},{key:"onPinchEnd",value:function(e){this.props.onPinchEnd&&this.props.onPinchEnd(e)}},{key:"onTouchStart",value:function(e){this.pressingTimeout&&clearTimeout(this.pressingTimeout),this.pressingTimeout=setTimeout(this.onPressTimeReached,this.props.longPressDelay),this.props.onPressStart&&this.props.onPressStart(this.space.pointer),this.setState({isPressing:!0,pressStartPointer:this.space.pointer})}},{key:"onPressTimeReached",value:function(){this.state.isPressing&&(Math.abs(this.space.pointer.$subtract(this.state.pressStartPointer).magnitude())<5&&this.onLongPressStart())}},{key:"onLongPressStart",value:function(){this.props.onLongPressStart&&this.props.onLongPressStart(this.space.pointer),this.setState({isLongPress:!0})}},{key:"onTouchEnd",value:function(e){this.props.onPressEnd&&this.props.onPressEnd(this.space.pointer),this.state.isLongPress&&this.props.onLongPressEnd&&this.props.onLongPressEnd(),this.setState({isPressing:!1,isLongPress:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(g.a,{style:{touchAction:"none"},stopPropagation:!0,preventDefault:!0,onPinchMove:this.onPinchMove.bind(this),onPinchStart:this.onPinchStart.bind(this),onPinchEnd:this.onPinchEnd.bind(this),onTouchStart:this.onTouchStart.bind(this),onTouchEnd:this.onTouchEnd.bind(this),onMouseDown:this.onTouchStart.bind(this),onMouseUp:this.onTouchEnd.bind(this)},o.a.createElement("div",{className:this.props.name||""},o.a.createElement("canvas",{height:800,onContextMenu:function(e){e.preventDefault()},ref:function(t){return e.canvRef=t}})))}}]),t}(o.a.Component);b.defaultProps={name:"pt",background:"#ff0",resize:!0,retina:!0,loop:!0};var y=function e(){Object(l.a)(this,e)},k=n(25),m=n(81),w=function(){function e(t){if(Object(l.a)(this,e),!e.isLink(t))throw new Error("Object is not a valid link",t);this._link=m.format(t["/"])}return Object(u.a)(e,[{key:"link",get:function(){return this._link}}],[{key:"isLink",value:function(e){if(!e)return!1;if(!e["/"])return!1;try{new k(e["/"])}catch(t){return!1}return!0}},{key:"getNewObj",value:function(e){var t={};return t["/"]=e,t}}]),e}(),O=function(){function e(t){if(Object(l.a)(this,e),!e.isLinkWrap(t))throw new Error("Object is no LinkWrap Type");this._wrap=new w(t.link)}return Object(u.a)(e,[{key:"link",get:function(){return this._wrap.link}},{key:"wrap",get:function(){return this._wrap}}],[{key:"isLinkWrap",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?e.link?!!w.isLink(e.link)||(t&&console.error("LinkWrapType: !LinkType.isLink(obj.link)",e),!1):(t&&console.error("LinkWrapType: !obj.link",e),!1):(t&&console.error("LinkWrapType: !obj",e),!1)}},{key:"getNewObj",value:function(e){var t={};return t.link=w.getNewObj(e),t}}]),e}(),R=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(l.a)(this,t),!t.isNode(e))throw new Error("Object is not a valid NodeType");if((n=Object(c.a)(this,Object(d.a)(t).call(this,e)))._origin=new O(e.origin),n._relations=[],n._targetCids=[],n._nodeCid=i,e.relations){var o=!0,r=!1,a=void 0;try{for(var s,u=e.relations[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var h=s.value;n._addRelation(h)}}catch(f){r=!0,a=f}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}}return n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"_addRelation",value:function(e){var t=new S(e);this._relations.push(t),this._targetCids.push(t.target.link)}},{key:"hasTarget",value:function(e){return-1!==this._targetCids.indexOf(e)}},{key:"newOriginFork",value:function(e){var n=t.clone(this);return n._origin=new O(O.getNewObj(e)),n}},{key:"addRelationFork",value:function(e,n){var i=t.clone(this),o=S.getNewObj(e,n);return i._addRelation(o),i}},{key:"removeRelationFork",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.clone(this),o=0;o<=i._relations.length;o++){var r=i._relations[o];if(r.target.link===e){if(!r.type)return i._relations.splice(o,1),i._targetCids.splice(o,1),i;if(r.type.link===e)return i._relations.splice(o,1),i._targetCids.splice(o,1),i}}return console.warn("No match for removeRelationFork",e,n,this),i}},{key:"toObj",value:function(){var e=this.origin.link,n=this.targetCids;return t.getNewObj(e,n)}},{key:"nodeCid",get:function(){return this._nodeCid}},{key:"origin",get:function(){return this._origin}},{key:"relations",get:function(){return this._relations}},{key:"targetCids",get:function(){return this._targetCids}}],[{key:"isNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return t&&console.error("Node: !obj"),!1;if(!e.origin)return t&&console.error("Node: !obj.origin"),!1;if(!O.isLinkWrap(e.origin))return t&&console.error("Node: !LinkWrapType.isLinkWrap(obj.origin)"),!1;if(e.relations){if(!Array.isArray(e.relations))return t&&console.error("Node: !Array.isArray(obj.relations)"),!1;var n=!0,i=!1,o=void 0;try{for(var r,a=e.relations[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;if(!S.isRelation(s))return t&&console.error("!RelationType.isRelation(r)"),!1}}catch(l){i=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}}return!0}},{key:"getNewObj",value:function(e,t){var n={};n.origin=O.getNewObj(e),n.relations=[];var i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value,u=S.getNewObj(l);n.relations.push(u)}}catch(c){o=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}},{key:"clone",value:function(e){var n=new t(e.toObj());return n._nodeCid=null,n}}]),t}(y),S=function(){function e(t){if(Object(l.a)(this,e),!e.isRelation(t))throw new Error("Object is not a valid RelationType");this._target=new O(t.target),t.type?this._type=t.type:this._type=null}return Object(u.a)(e,[{key:"target",get:function(){return this._target}},{key:"type",get:function(){return this._type}}],[{key:"isRelation",value:function(e){return!!e&&(!!e.target&&!!O.isLinkWrap(e.target))}},{key:"getNewObj",value:function(e,t){var n={};return n.target=O.getNewObj(e),t&&(n.type=O.getNewObj(t)),n}}]),e}(),_=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"arrowPointer",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.3,o=t.$subtract(e),r=t;o.magnitude()&&(o.unit(),r=o.$unit().add(t)),o.multiply(n);var a=new v.f(o.y,-o.x).multiply(i),s=new v.f(-o.y,o.x).multiply(i),l=new v.c(o,a,s);return l.moveTo(r),l}},{key:"randomPt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=new v.f([v.j.randomInt(t),v.j.randomInt(t)]);return n.add(e).subtract(.5*t),n}}]),e}(),j=function(){function e(t){Object(l.a)(this,e),this.form=t}return Object(u.a)(e,[{key:"bubble",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#eee";this.form.fillOnly(n),this.form.point(e,t,"circle")}},{key:"bubbleOutline",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#f36",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;this.form.strokeOnly(n,i),this.form.point(e,t,"circle")}},{key:"arrow",value:function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#000",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2,a=new v.c(e,t),s=v.d.crop(a,new v.f(n,n),0),l=v.d.crop(a,new v.f(i,i),1),u=new v.c(s,l);this.form.strokeOnly(o,r),this.form.line(u);var c=_.arrowPointer(s,l);this.form.fillOnly(o,1),this.form.polygon(c)}},{key:"text",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#333",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];this.form.font(12).alignText("center"),this.form.fill(i);var r=v.g.fromCenter(t,n);o?this.form.paragraphBox(r,e,1.2,"middle",!0):this.form.textBox(r,e,"middle","\u2026")}}]),e}(),C=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"nodeRadius",value:function(){return e._canReferenceNodes?e._nodeRadius*e._zoom:e.originRadius()}},{key:"originRadius",value:function(){return e._originRadius*e._zoom}},{key:"nodeArm",value:function(){return e._nodeArm*e._zoom}},{key:"setZoom",value:function(t){e._zoom=t}},{key:"updateAction",value:function(t){"up"===t&&(e._isPressing=!1),"down"===t&&(e._isPressing=!0)}},{key:"isPressing",get:function(){return e._isPressing}},{key:"downSelection",get:function(){return e._clickDownBurlSelection},set:function(t){e._clickDownBurlSelection=t}},{key:"upSelection",get:function(){return e._clickUpBurlSelection},set:function(t){e._clickUpBurlSelection=t}},{key:"hoverSelection",get:function(){return e._currentBurlSelection},set:function(t){e._currentBurlSelection=t}},{key:"dragSelection",get:function(){return e._currentDragBurlSelection},set:function(t){e._currentDragBurlSelection=t}},{key:"canReferenceNodes",set:function(t){e._canReferenceNodes=t},get:function(){return e._canReferenceNodes}}]),e}();C._zoom=1,C._originRadius=50,C._nodeRadius=1.2*C._originRadius,C._nodeArm=100,C._isPressing=!1,C._clickDownBurlSelection=null,C._clickUpBurlSelection=null,C._currentBurlSelection=null,C._currentDragBurlSelection=null,C._canReferenceNodes=null;var P={UNDEFINED:"undefined",TEXT:"text",IMAGE:"image"},N=function(){function e(t,n){Object(l.a)(this,e),this._oid=t,this._pt=n,this._nodes=[],this._fileExtension=P.UNDEFINED,this._file=null,this._btn=null,this._isHover=!1,this._size=new v.f(C.originRadius(),C.originRadius()),this._downTimestamps=[]}return Object(u.a)(e,[{key:"addNode",value:function(e){var t=!0,n=!1,i=void 0;try{for(var o,r=this._nodes[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){if(o.value.nodeCid===e.nodeCid)return}}catch(a){n=!0,i=a}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}this._nodes.push(e),this._size.to(C.nodeRadius())}},{key:"removeNode",value:function(e){for(var t=0;t<=this._nodes.length;t++)if(this._nodes[t].nodeCid===e.nodeCid)return void this._nodes.splice(t,1)}},{key:"setInteraction",value:function(e,t,n,i,o){var r=this;return this._btn=v.i.fromCircle(new v.c(this._pt,this._size)),this._btn.on("down",function(t,n){var i=Date.now();i-r._downTimestamps[r._downTimestamps.length-1]>400?r._downTimestamps=[i]:r._downTimestamps.push(i);var o=r._downTimestamps.length;e(n,r,o)}),this._btn.on("up",function(e,n){t(n,r)}),this._btn.onHover(function(e,t){r._isHover=!0,n(t,r)},function(e,t){r._isHover=!1,i(t,r)}),this._btn.on("move",function(e,t){r.isHover&&o(t,r)}),this._btn}},{key:"oid",get:function(){return this._oid}},{key:"pt",get:function(){return this._pt}},{key:"nodes",get:function(){return this._nodes}},{key:"file",set:function(e){this._file=e},get:function(){return this._file}},{key:"preview",get:function(){return this._file.toString("utf-8")}},{key:"hasPreview",get:function(){return!!this._file}},{key:"btn",get:function(){return this._btn}},{key:"isHover",get:function(){return this._isHover}}]),e}(),x=function(){function e(t,n){Object(l.a)(this,e),this._burl=t,this._node=n}return Object(u.a)(e,[{key:"burl",get:function(){return this._burl}},{key:"node",get:function(){return this._node}},{key:"id",get:function(){return this.node?this._node.nodeCid:this._burl.oid}}]),e}(),I=function(){function e(t){Object(l.a)(this,e),this._oid=t,this._parents=[]}return Object(u.a)(e,[{key:"addParent",value:function(e){this._parents.push(e)}},{key:"oid",get:function(){return this._oid}},{key:"parents",get:function(){return this._parents}}]),e}(),T=n(25),B=n.n(T),D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this)))._isReady=!1,e._ipfs=null,e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"init",value:function(e){var t=this;e?(this._ipfs=e,this._ipfs.id().then(function(e){console.log("Peer id",e),t.isJsIpfs(e)?t._ipfs.isOnline()?t.onIpfsReady():t.props.ipfs.on("start",function(){t.onIpfsReady()}):t.onIpfsReady()})):console.warn("No ipfs yet...")}},{key:"onIpfsReady",value:function(){this._isReady=!0,this.emit("ready")}},{key:"isJsIpfs",value:function(e){return-1!==e.agentVersion.indexOf("js")}},{key:"loadDag",value:function(e,t){this._ipfs.dag.get(e,function(n,i){if(n)return console.warn("ipfs.dag.get",e,n),void t(null,e);var o=i.value;t(o,e)})}},{key:"loadFile",value:function(e,t){this._ipfs.files.cat(e,function(n,i){n?console.warn("ipfs.files.cat...",e,n):t(i)})}},{key:"addIPLDObj",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this._ipfs.dag.put(e,{format:"dag-cbor",hashAlg:"sha2-256"},function(e,n){if(e)throw e;var i=n.toBaseEncodedString();t(i)})}},{key:"getCodec",value:function(e){return new B.a(e).codec}},{key:"isDag",value:function(e){var t=this.getCodec(e);return"dag-cbor"===t||"dag-pb"===t}},{key:"isReady",get:function(){return this._isReady}}]),t}(n(102).EventEmitter),L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).start.worldIsReady=!1,n.state.activeCids={},n.world=null,n.nodes={},n.burls={},n.parents={},n.borningNode=new v.f(0,0),n.selectedId=null,n.selectedRelation=void 0,n.selectedIdHistory=[],n.paint={},n.background=null,document.onkeydown=n.checkKey.bind(Object(f.a)(Object(f.a)(n))),n.onCanvasReady=n.onCanvasReady.bind(Object(f.a)(Object(f.a)(n))),n.onBurlDown=n.onBurlDown.bind(Object(f.a)(Object(f.a)(n))),n.onBurlUp=n.onBurlUp.bind(Object(f.a)(Object(f.a)(n))),n.onBurlHover=n.onBurlHover.bind(Object(f.a)(Object(f.a)(n))),n.onBurlLeave=n.onBurlLeave.bind(Object(f.a)(Object(f.a)(n))),n.onBurlMove=n.onBurlMove.bind(Object(f.a)(Object(f.a)(n))),n.ipfsController=new D,n.onIpfsReady=n.onIpfsReady.bind(Object(f.a)(Object(f.a)(n))),n.ipfsController.on("ready",n.onIpfsReady),n._ptsToDraw=[],n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){"zoom"in e&&this.onZoomChange(e.zoom),"canReferenceNodes"in e&&(C.canReferenceNodes=e.canReferenceNodes),JSON.stringify(e.cids)!==JSON.stringify(this.props.cids)&&this.state.worldIsReady&&this.ipfsController.isReady&&this.setCids(e.cids)}},{key:"componentDidUpdate",value:function(e){!e.ipfs&&this.props.ipfs&&this.ipfsController.init(this.props.ipfs)}},{key:"onCanvasReady",value:function(){this.paint=new j(this.form)}},{key:"onIpfsReady",value:function(){this.setCids(this.props.cids)}},{key:"setCids",value:function(e){if(this.state.worldIsReady&&this.ipfsController.isReady){var t=!0,n=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var a=o.value;this.burls[a]||this.loadCID(a)}}catch(s){n=!0,i=s}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}}}},{key:"loadCID",value:function(e){var t=this;e&&(e in this.state.activeCids||(this.newBurl(e),this.ipfsController.isDag(e)?this.ipfsController.loadDag(e,function(n){R.isNode(n)?(t.onCidLoaded(e),t.createNode(n,e)):t.createIPLD(n,e)}):(console.log("Loading something else"),this.loadFile(e,function(n){t.onCidLoaded(e),t.burls[e].file=n}))))}},{key:"onCidLoaded",value:function(e){this.addBurlToWorld(e),this.setActiveCids(this.props.cids)}},{key:"addBurlToWorld",value:function(e){var t=e;e in this.nodes&&(t=this.nodes[e].origin.link);var n=this.burls[t].pt;this.world.add(n,t)}},{key:"createIPLD",value:function(e,t){var n=this;this.ipfsController.loadFile(t,function(e){n.onCidLoaded(t),n.burls[t].file=e})}},{key:"newBurl",value:function(e){if(!this.nodes[e]&&!this.burls[e]){var t=_.randomPt(this.space.center);this.props.borningNodeCid===e&&(t=this.props.borningNodePt);var n=this.makeParticle(e,t),i=new N(e,n);this.burls[e]=i,i.setInteraction(this.onBurlDown,this.onBurlUp,this.onBurlHover,this.onBurlLeave,this.onBurlMove);var o=new I(e);return this.parents[e]=o,i}}},{key:"makeParticle",value:function(e,t){return new v.e(t).size(C.nodeArm())}},{key:"createNode",value:function(e,t){if(!this.nodes[t]){var n=new R(e,t);this.nodes[t]=n;var i=n.origin.link;this.loadCID(i);var o=n.targetCids,r=!0,a=!1,s=void 0;try{for(var l,u=o[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var c=l.value;this.loadCID(c),this.parents[c].addParent(t)}}catch(d){a=!0,s=d}finally{try{r||null==u.return||u.return()}finally{if(a)throw s}}this.burls[i].addNode(n),this.removeBurl(t)}}},{key:"removeBurl",value:function(e){C.upSelection&&C.upSelection.burl.oid===e&&(C.upSelection=null),C.hoverSelection&&C.hoverSelection.burl.oid===e&&(C.hoverSelection=null),C.downSelection&&C.downSelection.burl.oid===e&&(C.downSelection=null);try{this.world.removeParticle(e)}catch(t){console.error("Couldn't remove particle",e)}delete this.burls[e]}},{key:"onBurlDown",value:function(e,t,n){var i=this.getBurlSelection(e,t);2===n&&(C.dragSelection=i),C.hoverSelection=i,C.downSelection=i}},{key:"onBurlUp",value:function(e,t){var n=this.getBurlSelection(e,t);C.hoverSelection=n,C.upSelection=n,C.dragSelection=null,this.checkBorningRelation()}},{key:"onBurlHover",value:function(e,t){C.hoverSelection=this.getBurlSelection(e,t)}},{key:"onBurlLeave",value:function(e,t){C.hoverSelection=null}},{key:"onBurlMove",value:function(e,t){C.hoverSelection=this.getBurlSelection(e,t)}},{key:"getBurlSelection",value:function(e,t){if(!this.props.canReferenceNodes)return new x(t,null);var n=this.getClosestNodeRelationToPointer(e,t),i=n.node,o=n.distance;if(null===o)return new x(t,null);var r=e.$subtract(t.pt).magnitude();return new x(t,r<=o?null:i)}},{key:"getClosestNodeRelationToPointer",value:function(e,t){var n=null,i=null,o=!0,r=!1,a=void 0;try{for(var s,l=t.nodes[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var u=s.value,c=!0,d=!1,h=void 0;try{for(var f,p=u.relations[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var g=f.value,b=t.pt,y=this.getTargetPt(g.target.link),k=new v.c(b,y),m=v.b.fromCenter(t.pt,C.nodeRadius()),w=v.b.intersectLine2D(m,k),O=!0,R=!1,S=void 0;try{for(var _,j=w[Symbol.iterator]();!(O=(_=j.next()).done);O=!0){var P=_.value,N=e.$subtract(P).magnitude();null==i?(i=N,n=u):N<i&&(i=N,n=u)}}catch(x){R=!0,S=x}finally{try{O||null==j.return||j.return()}finally{if(R)throw S}}}}catch(x){d=!0,h=x}finally{try{c||null==p.return||p.return()}finally{if(d)throw h}}}}catch(x){r=!0,a=x}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return{node:n,distance:i}}},{key:"paintPt",value:function(e){this._ptsToDraw.push(e)}},{key:"onZoomChange",value:function(e){C.setZoom(e),this.toAll(this.burls,function(e){e.pt.radius=C.nodeArm()})}},{key:"start",value:function(e,t){console.log("start"),this.world=new v.k(this.space.innerBound,.01,new v.f(0,0)),this.setState({worldIsReady:!0}),this.setCids(this.props.cids)}},{key:"resize",value:function(){console.log("create")}},{key:"addForces",value:function(e){var t=!0,n=!1,i=void 0;try{for(var o,r=e.relations[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var a=o.value,s=e.origin.link;if(!this.burls[s])return;var l=this.getTargetFinalOrigin(a.target.link),u=this.burls[s].pt,c=this.burls[l].pt,d=u.$subtract(c).$multiply(-1);u.addForce(d),c.addForce(d.multiply(-1))}}catch(h){n=!0,i=h}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}}},{key:"getTargetPt",value:function(e){return this.burls[e]?this.burls[e].pt:this.nodes[e]?this.getTargetPt(this.nodes[e].origin.link):void 0}},{key:"getTargetFinalOrigin",value:function(e){return this.burls[e]?e:this.nodes[e]?this.getTargetFinalOrigin(this.nodes[e].origin.link):void 0}},{key:"paintNodeTree",value:function(e){var t=this.burls[e.origin.link].pt;this.paint.bubbleOutline(t,C.nodeRadius(),"#f3f");var n=!0,i=!1,o=void 0;try{for(var r,a=e.relations[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value.target.link,l=this.getTargetPt(s);this.paint.arrow(t,l,0,0,"#f3f"),this.nodes[s]?this.paintNodeTree(this.nodes[s]):this.paint.bubbleOutline(l,C.originRadius(),"#f3f")}}catch(u){i=!0,o=u}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}}},{key:"action",value:function(e,t,n){C.updateAction(e),this.toAll(this.burls,function(i,o){v.h.track([i.btn],e,new v.f(t,n))})}},{key:"animate",value:function(e,t){var n=this;this.moveDragBurl(),this.props.autoLayout&&(this.toAll(this.nodes,this.addForces.bind(this),!0),this.world.update(t)),this.paintBorningNode(),this.paintAll(),this.paintFocusTree(C.hoverSelection),this.paintBorningRelation(),!0===this.props.isDebug&&this.world.drawParticles(function(e,t){n.form.strokeOnly("#9993").point(e,e.radius,"circle")})}},{key:"moveDragBurl",value:function(){C.dragSelection&&C.dragSelection.burl.pt.to(this.space.pointer)}},{key:"toAll",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var i in e)e.hasOwnProperty(i)&&(n&&!1===this.state.activeCids[i]||t(e[i],i))}},{key:"checkBorningRelation",value:function(){C.downSelection&&C.upSelection&&C.downSelection.burl.oid!==C.upSelection.burl.oid&&(C.downSelection.node&&C.downSelection.node.hasTarget(C.upSelection.burl.oid)||this.addRelation(C.downSelection,C.upSelection))}},{key:"addRelation",value:function(e,t){var n=this;this.getBurlSelectionId(t,function(t){e.node?n.addRelationToNode(e.node,t):n.addRelationToContent(e.burl.oid,t)})}},{key:"addRelationToNode",value:function(e,t,n){var i=e.addRelationFork(t,n);this.updateNode(e,i.toObj())}},{key:"addRelationToContent",value:function(e,t,n){var i=R.getNewObj(e,[t]);this.props.onNewNode(i)}},{key:"getBurlSelectionId",value:function(e,t){e.node?this.ipfsController.addIPLDObj(e.node.toObj(),t):t(e.burl.oid)}},{key:"replaceBurlNode",value:function(e,t,n){e.removeNode(t),e.addNode(n)}},{key:"updateNode",value:function(e,t){var n=this;this.ipfsController.addIPLDObj(t,function(i){var o=new R(t,i);n.props.onReplaceCid(e.nodeCid,o.nodeCid);var r=n.burls[e.origin.link];n.replaceBurlNode(r,e,o);var a=n.parents[e.nodeCid].parents,s=!0,l=!1,u=void 0;try{for(var c,d=a[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var h=c.value,f=n.nodes[h],v=f.removeRelationFork(e.nodeCid).addRelationFork(i);n.updateNode(f,v.toObj())}}catch(p){l=!0,u=p}finally{try{s||null==d.return||d.return()}finally{if(l)throw u}}})}},{key:"bubbleUpUpdate",value:function(e,t){var n=this;this.props.onReplaceCid(e,t);var i=this.parents[e];if(!i)throw new Error("node with no origin parent object, this should not happen..",e);var o=!0,r=!1,a=void 0;try{for(var s,l=function(){var i=s.value,o=n.nodes[i],r=o.removeRelationFork(e).addRelationFork(t).toObj();n.ipfsController.addIPLDObj(r,function(e){n.ipfsController.addIPLDObj(o.toObj(),function(t){var i=n.burls[o.oid];n.replaceBurlNode(i,o,r),n.bubbleUpUpdate(t,e)})})},u=i.parents[Symbol.iterator]();!(o=(s=u.next()).done);o=!0)l()}catch(c){r=!0,a=c}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}}},{key:"setActiveCids",value:function(e){var t=this.state.activeCids;this.toAll(t,function(e,n){t[n]=!1});var n=t,i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var l=a.value;n=Object.assign(n,this.getLeaveCids(l))}}catch(u){o=!0,r=u}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}this.setState({activeCids:n})}},{key:"getLeaveCids",value:function(e){var t=this,n={};if(n[e]=!0,this.nodes[e]){var i=this.nodes[e];n[i.origin.link]=!0,this.toAll(i.relations,function(e){var i=e.target.link;n=Object.assign(n,t.getLeaveCids(i))})}return n}},{key:"paintBorningNode",value:function(){null!=this.props.borningNodeText&&(this.paint.bubble(this.props.borningNodePt,C.originRadius(),"#eee"),this.props.borningNodeText?this.paint.text(this.props.borningNodeText,this.props.borningNodePt,1.5*C.originRadius()):this.paint.text("What's in your mind?",this.props.borningNodePt,1.5*C.originRadius(),"#333"))}},{key:"paintBorningRelation",value:function(){if(C.isPressing&&C.downSelection){var e=C.downSelection.burl.pt,t=this.space.pointer,n=0;C.hoverSelection&&(t=C.hoverSelection.burl.pt,n=C.hoverSelection.id in this.nodes?C.nodeRadius():C.originRadius());var i=C.downSelection.id in this.nodes?C.nodeRadius():C.originRadius();this.paint.bubbleOutline(e,i,"#f36"),this.paint.arrow(e,t,i,n,"#f36")}}},{key:"selectNewId",value:function(e){this.burls[e].pt&&(this.selectedIdHistory[this.selectedIdHistory.length-1]!==e&&this.selectedIdHistory.push(e),this.selectedId=e,this.selectedRelation=null)}},{key:"selectPreviousId",value:function(){this.selectedRelation?this.selectedRelation=null:this.selectedIdHistory.length<=1||(this.selectedIdHistory.pop(),this.selectedId=this.selectedIdHistory[this.selectedIdHistory.length-1])}},{key:"selectNextRelation",value:function(e){var t=this._nodes[this.selectedId];if(t){var n=this.getRelationIndex(t,this.selectedRelation);if(void 0!==n){var i=(n+e)%t.relationships.length;i<0&&(i=t.relationships.length+i);var o=t.relationships[i];o&&(this.selectedRelation=o.destinationNode)}else t.relationships&&(this.selectedRelation=t.relationships[0].destinationNode)}}},{key:"getRelationIndex",value:function(e,t){return e.relations.findIndex(function(e){return e.link===t})}},{key:"checkKey",value:function(e){"38"===(e=e||window.event).keyCode?this.selectNewId(this.selectedRelation):"40"===e.keyCode?this.selectPreviousId():"37"===e.keyCode?this.selectNextRelation(-1):"39"===e.keyCode&&this.selectNextRelation(1)}},{key:"treeDown",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};if(!e)throw new Error("No cid on tree down");if(this.nodes[e]){var r=this.nodes[e],a=!0,s=!1,l=void 0;try{for(var u,c=r.relations[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){o(r,u.value,t)}}catch(b){s=!0,l=b}finally{try{a||null==c.return||c.return()}finally{if(s)throw l}}n(r,t),i(r.origin.link,t),t++;var d=!0,h=!1,f=void 0;try{for(var v,p=r.relations[Symbol.iterator]();!(d=(v=p.next()).done);d=!0){var g=v.value;this.treeDown(g.target.link,t,n,i,o)}}catch(b){h=!0,f=b}finally{try{d||null==p.return||p.return()}finally{if(h)throw f}}}else i(e,t)}},{key:"paintFocusTree",value:function(e){var t=this;e&&t.treeDown(e.id,1,function(e,n){var i=t.burls[e.origin.link].pt;t.paint.bubbleOutline(i,1*C.nodeRadius(),"#f36")},function(e,n){var i=t.burls[e];i.hasPreview?(t.paint.bubbleOutline(i.pt,1*C.originRadius(),"#f36"),t.paint.text(i.preview,i.pt,1.5*C.originRadius()*1,"#8B4B62")):(t.paint.bubbleOutline(i.pt,1*C.originRadius(),"#f36"),t.paint.text(i.oid,i.pt,1.5*C.originRadius()*1,"#BB6F6B88",!1))},function(e,n,i){var o=t.burls[e.origin.link].pt,r=t.getTargetPt(n.target.link),a=n.target.link in t.nodes?C.nodeRadius():C.originRadius();t.paint.arrow(o,r,1*C.nodeRadius(),a,"#f36")})}},{key:"paintAll",value:function(){var e=this;this.bubbleDownFromCids(this.props.cids,function(t,n){if(e.props.canReferenceNodes){var i=e.burls[t.origin.link].pt;e.paint.bubbleOutline(i,C.nodeRadius(),"#999")}},function(t,n){var i=e.burls[t];i?i.hasPreview?(e.paint.bubble(i.pt,C.originRadius(),"#fff8"),e.paint.bubbleOutline(i.pt,C.originRadius(),"#999"),e.paint.text(i.preview,i.pt,1.5*C.originRadius(),"#999")):(e.paint.bubble(i.pt,C.originRadius(),"#fff8"),e.paint.bubbleOutline(i.pt,C.originRadius(),"#999"),e.paint.text(i.oid,i.pt,1.5*C.originRadius(),"#9999",!1)):console.warn("no burl for content",t)},function(t,n,i){var o=e.burls[t.origin.link].pt,r=e.getTargetPt(n.target.link),a=n.target.link in e.nodes?C.nodeRadius():C.originRadius();e.paint.arrow(o,r,C.nodeRadius(),a,"#999")})}},{key:"bubbleDownFromCids",value:function(e,t,n,i){var o=!0,r=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var u=s.value;this.treeDown(u,1,t,n,i)}}catch(c){r=!0,a=c}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}}},{key:"getActiveCids",value:function(){var e=[];for(var t in this.state.activeCids)this.state.activeCids.hasOwnProperty(t)&&!0===this.state.activeCids[t]&&e.push(t);return e}}]),t}(b),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={text:"..."},document.onkeydown=e.checkKey.bind(Object(f.a)(Object(f.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"checkKey",value:function(e){e=e||window.event,!this.isMobileOrTablet()&&13===e.keyCode&&e.shiftKey||13===e.keyCode&&this.props.onReturn&&this.props.onReturn(this.props.text)}},{key:"isMobileOrTablet",value:function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}},{key:"onChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"getZIndex",value:function(e){return e?-1:"auto"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{position:"relative",zIndex:this.getZIndex(this.props.hide)}},o.a.createElement("div",{style:{position:"absolute"}},o.a.createElement("textarea",{ref:function(t){e.nameInput=t},value:this.props.text,onChange:this.onChange.bind(this),autoFocus:!0})))}}]),t}(o.a.Component),F=n(42),A=n.n(F),H=n(26),z=n.n(H),M=n(8).Buffer,U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={pauseAnimation:!1,currentZoom:1,lastZoom:1,borningNodeText:null,borningNodePt:null,cids:[],ipfs:null,autoLayout:!1,isDebug:!1,src:"",canReferenceNodes:!0},n.replaceCid=n.replaceCid.bind(Object(f.a)(Object(f.a)(n))),n.addNode=n.addNode.bind(Object(f.a)(Object(f.a)(n))),n.addTextOrigin=n.addTextOrigin.bind(Object(f.a)(Object(f.a)(n))),n.resolveIPNS=n.resolveIPNS.bind(Object(f.a)(Object(f.a)(n))),n.onHashChanged=n.onHashChanged.bind(Object(f.a)(Object(f.a)(n))),A()().then(function(e){console.warn("Got IPFS"),n.setState({ipfs:e}),n.checkHash()}).catch(function(e){return console.error}),window.addEventListener("hashchange",n.onHashChanged,!1),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onHashChanged()}},{key:"onHashChanged",value:function(){this.checkHash()}},{key:"checkHash",value:function(){var e=z.a.parse(window.location.hash);this.loadProperties(e)}},{key:"loadProperties",value:function(e){var t=!0,n=!1,i=!0;"src"in e&&this.loadSrc(e.src),"autoLayout"in e&&(t="true"===e.autoLayout),"isDebug"in e&&(n="true"===e.isDebug),"canReferenceNodes"in e&&(i="true"===e.canReferenceNodes),this.setState({autoLayout:t,isDebug:n,canReferenceNodes:i})}},{key:"loadSrc",value:function(e){var t=this;this.state.ipfs&&this.loadDag(e,function(e){t.setState({cids:e.cids})})}},{key:"addTextOrigin",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n={path:"origin.txt",content:M.from(e,"utf8")};this.state.ipfs?this.state.ipfs.files.add(n,function(e,n){if(e)throw e;var i=n[0].hash;t(i)}):console.warn("Loading IPFS")}},{key:"replaceCid",value:function(e,t){var n=this.state.cids.indexOf(e);if(-1!==n){var i=Object(s.a)(this.state.cids);i.splice(n,1,t),this.setState({cids:i})}}},{key:"addNode",value:function(e){var t=this;this.addIpldObj(e,function(e){t.addCID(e)})}},{key:"addIpldObj",value:function(e,t){this.state.ipfs.dag.put(e,{format:"dag-cbor",hashAlg:"sha2-256"},function(e,n){if(e)throw e;var i=n.toBaseEncodedString();t(i)})}},{key:"save",value:function(){var e=this,t={};t.cids=Object(s.a)(this.state.cids),this.addIpldObj(t,function(t){e.setState({src:t}),e.makeHash()})}},{key:"makeHash",value:function(){var e={};e.src=this.state.src,e.autoLayout=this.state.autoLayout,e.canReferenceNodes=this.state.canReferenceNodes,e.isDebug=this.state.isDebug;var t=z.a.stringify(e);window.location.hash=t}},{key:"addCID",value:function(e){-1===this.state.cids.indexOf(e)?this.setState({cids:Object(s.a)(this.state.cids).concat([e])}):console.log("cid exists already",e),this.save()}},{key:"publishToIPNS",value:function(e){var t=this;this.state.ipfs.name.publish(e,function(e,n){console.log(n),n&&(console.log("https://gateway.ipfs.io/ipns/".concat(n.name)),t.state.ipfs.name.resolve(n.name,function(e,t){console.log("resolving",t)}))})}},{key:"resolveIPNS",value:function(e){var t=this;this.state.ipfs.name.resolve(e,function(e,n){if(console.log("IPNS resolved",n),n&&n.path){var i=n.path.replace("/ipfs/","");console.log(i),t.addCID(i)}})}},{key:"handleChange",value:function(e){this.setState({variance:e.target.value})}},{key:"handleClick",value:function(e){}},{key:"onPinchStart",value:function(e){this.setState({lastZoom:this.state.currentZoom})}},{key:"onPinchMove",value:function(e){var t=e.zoom,n=this.state.lastZoom*t;this.setState({currentZoom:n})}},{key:"onPressStart",value:function(e){}},{key:"onLongPressStart",value:function(e){this.setState({borningNodeText:"",borningNodePt:e,cid:null})}},{key:"onLongPressEnd",value:function(e){this.setState({hasFocus:!0})}},{key:"onInputChange",value:function(e){this.setState({borningNodeText:e})}},{key:"onInputReturn",value:function(e){var t=this;e&&this.addTextOrigin(e,function(e){t.setState({borningNodeCid:e}),t.addCID(e)}),this.setState({hasFocus:!1,borningNodeText:null})}},{key:"getInvisibleInput",value:function(){return o.a.createElement(E,{onChange:this.onInputChange.bind(this),onReturn:this.onInputReturn.bind(this),text:this.state.borningNodeText,hide:!this.state.isDebug})}},{key:"loadDag",value:function(e,t){this.state.ipfs.dag.get(e,function(n,i){if(n)return console.warn("ipfs.dag.get",e,n),void t(null,e);var o=i.value;t(o,e)})}},{key:"render",value:function(){var e=o.a.createElement("div",null);return this.state.hasFocus&&(e=this.getInvisibleInput()),o.a.createElement("div",{className:"App",style:{touchAction:"none"},onClick:this.handleClick.bind(this)},e,o.a.createElement("div",null,o.a.createElement(L,{ipfs:this.state.ipfs,cids:this.state.cids,name:"IPLDRender",background:"#fff",onPinchStart:this.onPinchStart.bind(this),onPinchMove:this.onPinchMove.bind(this),onLongPressStart:this.onLongPressStart.bind(this),onLongPressEnd:this.onLongPressEnd.bind(this),onPressStart:this.onPressStart.bind(this),longPressDelay:500,borningNodeText:this.state.borningNodeText,borningNodePt:this.state.borningNodePt,borningNodeCid:this.state.borningNodeCid,onNewNode:this.addNode,onReplaceCid:this.replaceCid,zoom:this.state.currentZoom,loop:!0,autoLayout:this.state.autoLayout,isDebug:this.state.isDebug,canReferenceNodes:this.state.canReferenceNodes})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,n){e.exports=n(109)},48:function(e,t,n){}},[[43,2,1]]]);
//# sourceMappingURL=main.360a1bd3.chunk.js.map