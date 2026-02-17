(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BeliSekarang = function() {
	this.initialize(img.BeliSekarang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,46);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.bt_1a = function() {
	this.initialize(img.bt_1a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,55);


(lib.bt_1b = function() {
	this.initialize(img.bt_1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,67);


(lib.bt_2a = function() {
	this.initialize(img.bt_2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,55);


(lib.bt_2b = function() {
	this.initialize(img.bt_2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,67);


(lib.bt_3a = function() {
	this.initialize(img.bt_3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,55);


(lib.bt_3b = function() {
	this.initialize(img.bt_3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,67);


(lib.bt_4a = function() {
	this.initialize(img.bt_4a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,55);


(lib.bt_4b = function() {
	this.initialize(img.bt_4b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,67);


(lib.img_cherry = function() {
	this.initialize(img.img_cherry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.img_lattetea = function() {
	this.initialize(img.img_lattetea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.img_lemontea = function() {
	this.initialize(img.img_lemontea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.img_pandan = function() {
	this.initialize(img.img_pandan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,20);


(lib.tap = function() {
	this.initialize(img.tap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,98);


(lib.Temukanvarianrasabaru = function() {
	this.initialize(img.Temukanvarianrasabaru);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,34);


(lib.Triangle1 = function() {
	this.initialize(img.Triangle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,364);


(lib.Warning = function() {
	this.initialize(img.Warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,54);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Temukanvarianrasabaru();
	this.instance.setTransform(-128.9,-28.45,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-128.9,-28.4,257.8,28.4), null);


(lib.tap_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tap();
	this.instance.setTransform(-114.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tap_1, new cjs.Rectangle(-114.5,-98,229,98), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A6KeZMAAAg8xMA0VAAAMAAAA8xg");
	this.shape.setTransform(-0.5,53.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-168,-141,335,389), null);


(lib.mc_beli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BeliSekarang();
	this.instance.setTransform(-82.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_beli, new cjs.Rectangle(-82.5,-46,165,46), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-40.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-40.5,-20,81,20), null);


(lib.line2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Triangle1();
	this.instance.setTransform(-156,-364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(-156,-364,312,364), null);


(lib.img04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_pandan();
	this.instance.setTransform(-112.5,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img04, new cjs.Rectangle(-112.5,-225,225,225), null);


(lib.img03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_cherry();
	this.instance.setTransform(-112.5,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img03, new cjs.Rectangle(-112.5,-225,225,225), null);


(lib.img02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_lattetea();
	this.instance.setTransform(-112.5,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img02, new cjs.Rectangle(-112.5,-225,225,225), null);


(lib.img01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_lemontea();
	this.instance.setTransform(-112.5,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img01, new cjs.Rectangle(-112.5,-225,225,225), null);


(lib.ic04b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_4b();
	this.instance.setTransform(-43.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic04b, new cjs.Rectangle(-43.5,-67,87,67), null);


(lib.ic04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_4a();
	this.instance.setTransform(-37.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic04, new cjs.Rectangle(-37.5,-55,75,55), null);


(lib.ic03b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_3b();
	this.instance.setTransform(-38,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic03b, new cjs.Rectangle(-38,-67,76,67), null);


(lib.ic03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_3a();
	this.instance.setTransform(-32,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic03, new cjs.Rectangle(-32,-55,64,55), null);


(lib.ic02b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_2b();
	this.instance.setTransform(-38,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic02b, new cjs.Rectangle(-38,-67,76,67), null);


(lib.ic01b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_1b();
	this.instance.setTransform(-43.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic01b, new cjs.Rectangle(-43.5,-67,87,67), null);


(lib.ic01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_1a();
	this.instance.setTransform(-37.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic01, new cjs.Rectangle(-37.5,-55,75,55), null);


(lib.ic02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bt_2a();
	this.instance.setTransform(-32,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ic02, new cjs.Rectangle(-32,-55,64,55), null);


(lib.bt04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Al8EZIB8ozIJ9AAIjYI1g");
	this.shape.setTransform(0.025,-28.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt04, new cjs.Rectangle(-38.1,-56.6,76.30000000000001,56.6), null);


(lib.bt03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Ak/ERIABolIJ+AAIhYIpg");
	this.shape.setTransform(0,-27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt03, new cjs.Rectangle(-32,-55.4,64,55.4), null);


(lib.bt02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Ak/kUIJ+AAIABIlIonAEg");
	this.shape.setTransform(0,-27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt02, new cjs.Rectangle(-32,-55.4,64,55.4), null);


(lib.bt01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Al8kaIJ9AAIB8IzIohACg");
	this.shape.setTransform(0.025,-28.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt01, new cjs.Rectangle(-38.1,-56.6,76.30000000000001,56.6), null);


(lib.beli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_beli();
	this.instance.setTransform(0,-23,1,1,0,0,0,0,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8909,scaleY:0.8909,y:-23.05},71).to({scaleX:1,scaleY:1,y:-23},72).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-46,165,46);


// stage content:
(lib.Veev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {lemon:70,latte:105,cherry:140,pandan:175};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59,70,100,135,170,210];
	// timeline functions:
	this.frame_59 = function() {
		this.bt01.alpha = 0.05;
		this.bt02.alpha = 0.05;
		this.bt03.alpha = 0.05;
		this.bt04.alpha = 0.05;
		
		this.bt01.addEventListener("click", function() {
		    this.gotoAndPlay("lemon");
		}.bind(this));
		
		this.bt02.addEventListener("click", function() {
		    this.gotoAndPlay("latte");
		}.bind(this));
		
		this.bt03.addEventListener("click", function() {
		    this.gotoAndPlay("cherry");
		}.bind(this));
		
		this.bt04.addEventListener("click", function() {
		    this.gotoAndPlay("pandan");
		}.bind(this));
	}
	this.frame_70 = function() {
		this.link01.alpha = 0.05;
		this.link02.alpha = 0.05;
		this.link03.alpha = 0.05;
		this.link04.alpha = 0.05;
		
		// Invisible stage button (opens URL)
		this.link01.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/shop/pod-vape-veev-one-lemon-tea.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.link02.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/shop/pod-vape-veev-one-latte-tea.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.link03.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/shop/pod-vape-veev-one-cherry.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.link04.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/shop/pod-vape-veev-one-pandan-coffee.html", "_blank");
		    }, 100);
		}.bind(this));
	}
	this.frame_100 = function() {
		this.stop();
	}
	this.frame_135 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_210 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(11).call(this.frame_70).wait(30).call(this.frame_100).wait(35).call(this.frame_135).wait(35).call(this.frame_170).wait(40).call(this.frame_210).wait(1));

	// Layer_4
	this.instance = new lib.Warning();
	this.instance.setTransform(0,426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211));

	// Layer_17
	this.link01 = new lib.stageBtn();
	this.link01.name = "link01";
	this.link01.setTransform(160.55,128.35,0.9552,0.9099,0,0,0,0.1,0);

	this.link02 = new lib.stageBtn();
	this.link02.name = "link02";
	this.link02.setTransform(160.55,128.35,0.9552,0.9099,0,0,0,0.1,0);

	this.link03 = new lib.stageBtn();
	this.link03.name = "link03";
	this.link03.setTransform(160.55,128.35,0.9552,0.9099,0,0,0,0.1,0);

	this.link04 = new lib.stageBtn();
	this.link04.name = "link04";
	this.link04.setTransform(160.55,128.35,0.9552,0.9099,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.link01}]},70).to({state:[{t:this.link02}]},35).to({state:[{t:this.link03}]},35).to({state:[{t:this.link04}]},35).wait(36));

	// Layer_15
	this.bt04 = new lib.bt04();
	this.bt04.name = "bt04";
	this.bt04.setTransform(265.85,387.25,1,1,0,0,0,0,-28.4);

	this.bt03 = new lib.bt03();
	this.bt03.name = "bt03";
	this.bt03.setTransform(197,386.65,1,1,0,0,0,0,-27.8);

	this.bt02 = new lib.bt02();
	this.bt02.name = "bt02";
	this.bt02.setTransform(123,386.65,1,1,0,0,0,0,-27.8);

	this.bt01 = new lib.bt01();
	this.bt01.name = "bt01";
	this.bt01.setTransform(54.1,387.25,1,1,0,0,0,0,-28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt01},{t:this.bt02},{t:this.bt03},{t:this.bt04}]},59).wait(152));

	// Layer_18
	this.instance_1 = new lib.tap_1();
	this.instance_1.setTransform(160.35,400.95,1,1,0,0,0,0,-49);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:139.45,y:404.75,alpha:1},9).to({_off:true},31).wait(142));

	// Layer_12
	this.instance_2 = new lib.beli();
	this.instance_2.setTransform(160.5,276.35,0.6661,0.6661,0,0,0,0,-22.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({regY:-23,scaleX:1,scaleY:1,y:292,alpha:1},10).wait(25).to({regY:-22.9,scaleX:0.6661,scaleY:0.6661,y:276.35,alpha:0},0).to({regY:-23,scaleX:1,scaleY:1,y:292,alpha:1},10).wait(25).to({regY:-22.9,scaleX:0.6661,scaleY:0.6661,y:276.35,alpha:0},0).to({regY:-23,scaleX:1,scaleY:1,y:292,alpha:1},10).wait(25).to({regY:-22.9,scaleX:0.6661,scaleY:0.6661,y:276.35,alpha:0},0).to({regY:-23,scaleX:1,scaleY:1,y:292,alpha:1},10).wait(26));

	// Layer_11
	this.instance_3 = new lib.img01();
	this.instance_3.setTransform(160,160,0.8973,0.8973,0,0,0,0,-112.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.img02();
	this.instance_4.setTransform(160,160,0.8973,0.8973,0,0,0,0,-112.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.img03();
	this.instance_5.setTransform(160,160,0.8973,0.8973,0,0,0,0,-112.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.img04();
	this.instance_6.setTransform(160,160,0.8973,0.8973,0,0,0,0,-112.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).to({_off:true},25).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).to({_off:true},25).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).to({_off:true},25).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(175).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(26));

	// Layer_14
	this.instance_7 = new lib.ic01b();
	this.instance_7.setTransform(54,392.25,1,1,0,0,0,0,-27.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.ic02b();
	this.instance_8.setTransform(123.25,392.25,1,1,0,0,0,0,-27.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.ic03b();
	this.instance_9.setTransform(197.1,392.25,1,1,0,0,0,0,-27.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.ic04b();
	this.instance_10.setTransform(266.7,392.25,1,1,0,0,0,0,-27.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({alpha:1},10).to({_off:true},25).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).to({x:123.35,alpha:1},10).to({_off:true},25).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140).to({_off:false},0).to({x:197.4,alpha:1},10).to({_off:true},25).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(175).to({_off:false},0).to({x:266.05,alpha:1},10).wait(26));

	// Layer_10
	this.instance_11 = new lib.txt();
	this.instance_11.setTransform(159.9,342.35,0.7113,0.7113,0,0,0,0,-14.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,y:335.25,alpha:1},10).wait(167));

	// Layer_9
	this.instance_12 = new lib.ic04();
	this.instance_12.setTransform(258.65,403,0.9255,0.9255,0,0,0,0.1,-27.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({regX:0,regY:-27.5,scaleX:1,scaleY:1,x:266.5,y:386.5,alpha:1},15).to({_off:true},151).wait(26));

	// Layer_8
	this.instance_13 = new lib.ic03();
	this.instance_13.setTransform(194.25,403,0.9255,0.9255,0,0,0,0,-27.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({regY:-27.5,scaleX:1,scaleY:1,x:197,y:386.5,alpha:1},15).to({_off:true},116).wait(25).to({_off:false},0).wait(36));

	// Layer_7
	this.instance_14 = new lib.ic02();
	this.instance_14.setTransform(125.85,403,0.9255,0.9255,0,0,0,0.1,-27.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).to({regX:0,regY:-27.5,scaleX:1,scaleY:1,x:123,y:386.5,alpha:1},15).to({_off:true},81).wait(25).to({_off:false},0).wait(71));

	// Layer_6
	this.instance_15 = new lib.ic01();
	this.instance_15.setTransform(61.45,403,0.9255,0.9255,0,0,0,0,-27.4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({regY:-27.5,scaleX:1,scaleY:1,x:53.5,y:386.5,alpha:1},15).to({_off:true},46).wait(25).to({_off:false},0).wait(106));

	// Layer_5
	this.instance_16 = new lib.logo_1();
	this.instance_16.setTransform(160.5,10,1,1,0,0,0,0,-10);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({y:24,alpha:1},10).wait(192));

	// Layer_3
	this.instance_17 = new lib.line2();
	this.instance_17.setTransform(160,63,1,1,0,0,0,0,-182);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({y:182,alpha:1},15).wait(192));

	// Layer_2
	this.instance_18 = new lib.line2();
	this.instance_18.setTransform(160.25,-129.95,2.4121,2.4121,0,0,0,0.1,-182);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({_off:false},0).to({x:161.75,y:221.4,alpha:1},15).wait(187));

	// Layer_1
	this.instance_19 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(211));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-329,594.0999999999999,989.4);
// library properties:
lib.properties = {
	id: 'C367BB1542B2134B954A9886EE17E6C2',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BeliSekarang.png", id:"BeliSekarang"},
		{src:"images/BG.png", id:"BG"},
		{src:"images/bt_1a.png", id:"bt_1a"},
		{src:"images/bt_1b.png", id:"bt_1b"},
		{src:"images/bt_2a.png", id:"bt_2a"},
		{src:"images/bt_2b.png", id:"bt_2b"},
		{src:"images/bt_3a.png", id:"bt_3a"},
		{src:"images/bt_3b.png", id:"bt_3b"},
		{src:"images/bt_4a.png", id:"bt_4a"},
		{src:"images/bt_4b.png", id:"bt_4b"},
		{src:"images/img_cherry.png", id:"img_cherry"},
		{src:"images/img_lattetea.png", id:"img_lattetea"},
		{src:"images/img_lemontea.png", id:"img_lemontea"},
		{src:"images/img_pandan.png", id:"img_pandan"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/tap.png", id:"tap"},
		{src:"images/Temukanvarianrasabaru.png", id:"Temukanvarianrasabaru"},
		{src:"images/Triangle1.png", id:"Triangle1"},
		{src:"images/Warning.png", id:"Warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C367BB1542B2134B954A9886EE17E6C2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;