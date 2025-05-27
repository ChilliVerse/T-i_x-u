System.register("chunks:///_virtual/TaiXiuGame.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,n,o,l,a,u,s,c,p,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.defineProperty},function(e){l=e.cclegacy,a=e._decorator,u=e.Button,s=e.Label,c=e.Sprite,p=e.SpriteFrame,h=e.Component}],execute:function(){var b,f,d,y,B,g,T,m,v,L,X,I,w,z,C;l._RF.push({},"4d254AvktJI6b/xNbcuDxqE","TaiXiuGame",void 0);var D=a.ccclass,F=a.property;e("TaiXiuGame",(b=D("TaiXiuGame"),f=F(u),d=F(u),y=F(u),B=F(s),g=F([c]),T=F([p]),b((L=t((v=function(e){function t(){for(var t,i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=e.call.apply(e,[this].concat(l))||this,r(n(t),"betTaiButton",L,n(t)),r(n(t),"betXiuButton",X,n(t)),r(n(t),"rollButton",I,n(t)),r(n(t),"resultLabel",w,n(t)),r(n(t),"diceSprites",z,n(t)),r(n(t),"diceFrames",C,n(t)),o(n(t),"playerBet",""),o(n(t),"diceValues",[1,1,1]),t}i(t,e);var l=t.prototype;return l.start=function(){this.betTaiButton.node.on(u.EventType.CLICK,this.onBetTai,this),this.betXiuButton.node.on(u.EventType.CLICK,this.onBetXiu,this),this.rollButton.node.on(u.EventType.CLICK,this.onRollDice,this)},l.onBetTai=function(){this.playerBet="tai",this.resultLabel.string="Bạn đã cược TÀI",console.log("Player bet: TÀI")},l.onBetXiu=function(){this.playerBet="xiu",this.resultLabel.string="Bạn đã cược XỈU",console.log("Player bet: XỈU")},l.onRollDice=function(){if(!this.playerBet)return this.resultLabel.string="Vui lòng chọn TÀI hoặc XỈU trước!",void console.log("No bet placed");this.diceValues=[Math.floor(6*Math.random())+1,Math.floor(6*Math.random())+1,Math.floor(6*Math.random())+1];for(var e=0;e<this.diceSprites.length;e++)this.diceSprites[e].spriteFrame=this.diceFrames[this.diceValues[e]-1];var t=this.diceValues.reduce((function(e,t){return e+t}),0),i=t>=11&&t<=18?"TAI":"XIU",r=i.toLowerCase()===this.playerBet;console.log("Dice: "+this.diceValues+", Total: "+t+", Result: "+i+", PlayerBet: "+this.playerBet+", IsWin: "+r),this.resultLabel.string="Tổng: "+t+" - Kết quả: "+i+" - "+(r?"Thắng!":"Thua!")},t}(h)).prototype,"betTaiButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(v.prototype,"betXiuButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(v.prototype,"rollButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(v.prototype,"resultLabel",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(v.prototype,"diceSprites",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=t(v.prototype,"diceFrames",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=v))||m));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./TaiXiuGame.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});