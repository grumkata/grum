/*:
 *@author "Grumkata" bishop of the flame 
 *@plugindesc a test plugin to learn rpg mv system
 *
 * 
 * @help
 * this is some help text
 * 
 * @param baseDim
 * @type number
 * @desc the pixel width and height of iso texture images
 * @defult some text
 * 
 * @param isoDim
 * @type number
 * @desc the pixel width and height of iso texture images
 * @defult 32
 * 
 * @param TileSets
 * @type file[]
 * @dir img/isometric/
 * @desc pick your isometric tilesets
 * @default
 * 
 * @param ObjectSheets
 * @type file[]
 * @dir img/isometric/
 * @desc pick yout isometric objects
 * @default
 * 
 * @param SpriteSheets
 * @type file[]
 * @dir img/isometric/
 * @desc pick your isometric spritesheets
 * @default
 * 
 * @param SpriteFrames
 * @type number[]
 * @min 1
 * @max 16
 * @decimals 0
 * @desc number of frames on equivelent spritesheet
 * @default
*/

 //how to call bitmap properly
 //var testBitmap = ImageManager.loadPicture("isometrics-tile_base"); 


 
 
var params = PluginManager.parameters("isometricBase");
(function(){
    //var testBitmap = ImageManager.loadBitmap('img/isometric/',params["TileSets"].slice(1,-1).split(/\s*,\s*/)[0].slice(1,-1),0,false);
    var testBitmap = getIsoTile(0,1,2);
    var aliasCreate = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        aliasCreate.call(this);
        var sprite = new Sprite(testBitmap);
        this._whiteSquare = sprite;
        this.addChild(sprite);
        this._whiteSquare.x=400;
        this._whiteSquare.y=100;
    };
    //commands
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
    }
}());


function getIsoTile(_tileset,_x,_y){
    var _temp_tilset =ImageManager.loadBitmap('img/isometric/',params["TileSets"].slice(1,-1).split(/\s*,\s*/)[_tileset].slice(1,-1),0,false);
    var temp_bitmap = new Bitmap(params["isoDim"],params["isoDim"]);
    _temp_tilset.addLoadListener(function () { temp_bitmap.blt (_temp_tilset,0,0,(_x+1)*params["isoDim"],(_y+1)*params["isoDim"],-32*_x,-32*_y);});
    return temp_bitmap;
}

