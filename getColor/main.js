// Add this to the top of your main.js file
const { Artboard, Rectangle, Ellipse, Text, Color } = require("scenegraph");// XD拡張APIのクラスをインポート
//const { alert, error } = require("./lib/dialogs.js"); //ダイアログのクラスインポート

//temporary shim until setTimeout is added to XD
//global.setTimeout = (fn) => { fn() }
//global.clearTimeout = (fn) => {}
//const $ = require("./lib/jquery");

var el,R1_255,B1_255,G1_255,R1,B1,G1,R2_255,B2_255,G2_255,R2,B2,G2,colorL1,colorL2,nodeL1,nodeL2,nodeL1test,nodeL2test;

function helloHandlerFunction(selection) { // メインのファンクション
  console.log("my function is called!"); // Developer Consoleに出力
  //console.log(documentRoot.items);

  el = new Text(); // XDのTextクラスからインスタンスを生成
  el.text = "Hello, World!";
  el.styleRanges = [ // テキストのスタイルを設定
    {
      length: el.text.length,
      fill: new Color("#99CC00"),
      fontSize: 24
    }
  ];

  //nodeL1test = documentRoot.items.length;
  //nodeL2test = documentRoot.items[0];
  nodeL1test = selection.items[0];
  nodeL2test = selection.items[1];

  console.log("test:The selected node is nodeL1: " + nodeL1test);
  console.log("test:The selected node is nodeL2: " + nodeL2test);

  //selection.insertionParent.addChild(el); // XDノードツリーにテキストオブジェクトを追加
  //documentRoot.items[0].addChild(el); // XDノードツリーにテキストオブジェクトを追加
  //el.moveInParentCoordinates(100, 100); // テキストオブジェクトの表示位置を指定

  //dummy
  //nodeL1 = new Rectangle();
  nodeL1 = nodeL1test;
  //nodeL1.width = 30;
  //nodeL1.height = 20;
  //nodeL1.moveInParentCoordinates(30,20);
  //nodeL1.fill = new Color("000000");

  //nodeL2 = new Rectangle();
  nodeL2 = nodeL2test;
  //nodeL2.width = 40;
  //nodeL2.height = 30;
  //nodeL2.moveInParentCoordinates(60,10)
  //nodeL2.fill = new Color("ffffff");

  //documentRoot.items[0].addChild(nodeL1);
  //documentRoot.items[0].addChild(nodeL2);

  /*nodeL1.moveInParentCoordinates(100, 100);
  nodeL2.moveInParentCoordinates(100, 100);

  nodeL1.moveInParentCoordinates(100, 100);
  nodeL2.moveInParentCoordinates(100, 100);*/

  /*----------------------------------------------------------------
  一つ目の色
  ------------------------------------------------------------------*/
  R1_255 = nodeL1.fill.r/255; 
  B1_255 = nodeL1.fill.b/255;
  G1_255 = nodeL1.fill.g/255;

  if(R1_255 < 0.03928){
     R1 = R1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R1 = Math.pow(((R1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R1-->" + R1); // Developer Consoleに出力

  if(B1_255 < 0.03928){
     B1 = B1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B1 = Math.pow(((B1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B1-->" + B1); // Developer Consoleに出力

  if(G1_255 < 0.03928){
     G1 = G1_255/12.92;
  }else{
    //Math.pow(num1,num2)
     G1 = Math.pow(((G1_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度G1-->" + G1); // Developer Consoleに出力

  /*----------------------------------------------------------------
  ２つ目の色
  ------------------------------------------------------------------*/
 R2_255 = nodeL2.fill.r/255; 
 B2_255 = nodeL2.fill.b/255;
 G2_255 = nodeL2.fill.g/255;

  if(R2_255 < 0.03928){
     R2 = R2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     R2 = Math.pow(((R2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度R2-->" + R2); // Developer Consoleに出力

  if(B2_255 < 0.03928){
     B2 = B2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     B2 = Math.pow(((B2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度B2-->" + B2); // Developer Consoleに出力

  if(G2_255 < 0.03928){
     G2 = G2_255/12.92;
  }else{
    //Math.pow(num1,num2)
     G2 = Math.pow(((G2_255 + 0.055)/1.055),2.4);
  }
  console.log("色の相対輝度G2-->" + G2); // Developer Consoleに出力
  
  //色の相対輝度出し方
  colorL1 = ((R1 * 0.2126) + (G1 * 0.7152) + (B1 * 0.0722));
  colorL2 = ((R2 * 0.2126) + (G2 * 0.7152) + (B2 * 0.0722));

  //console.log("色のコントラスト比@colorL1:colorL2-->" + colorL1 + " : " + colorL2); // Developer Consoleに出力
  console.log("色のコントラスト比@colorL1:colorL-->" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) ); // Developer Consoleに出力
  showAlert();
}

let dialog;
let htmlString;
function showAlert() {
    /* we'll display a dialog here */
    console.log("アラート");
    //let htmlString = "<p>" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) + "</p>";
    dialog = document.createElement("dialog");
    htmlString = document.createElement("div");
    htmlString.innerHTML = `
        <style>
        dialog {
        background: #FFFFFF;
        }
        header,main,footer {
        padding: 5px;
        display: block;
        }
        footer {
        text-align: center;
        /*border: solid #000000 1px;*/
        }
        button {
        margin: 0 auto;
        }
        form {
        width: auto;
        }
        h1,h2,
        .h1,.h2{
        padding: 5px 20px;
        text-align: center;
        background: transparent;
        display: block;
       }
        .h2{
        font-size: 24px;
        }
        .box1 > p,
        .box2 > p {
        background: #FFFFFF;
        text-align: center;
        }
        .box {
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        }
        .icon {
        border-radius: 4px;
        width: 24px;
        height: 24px;
        overflow: hidden;
        }
        .box {
        display: flex;
        justify-content: center;
        /*border: solid #000000 1px;*/
        width: 400px;
        margin-top:1em;
        }
        .dummy {
        width: 400px;
        padding:2em;
        white-space: normal;
        background-color:${nodeL1.fill.toHex()};
        color:${nodeL2.fill.toHex()};
        }
        .box1 {
        width:150px;
        height:50px;
        /*border: solid #000000 1px;*/
        background-color:${ nodeL1.fill.toHex() };
        }
        .box2 {
        width:150px;
        height:50px;
        /*border: solid #000000 1px;*/
        background-color:${ nodeL2.fill.toHex() };
        }
        </style>
        <form method="dialog">
          <header>
            <h1>コントラスト比<br><small>Contrast Ratio</small></h1>
          </header>
          <main>
            <h2 class="h2">判定<br>${ ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) }</h2>
            <div class="box">
              <div class="box1">
                <p>色１[${nodeL1.fill.toHex()}] </p>
              </div>
              <div class="box2">
                <p>色２[${nodeL2.fill.toHex()}] </p>
              </div>
            </div>

            <div>
	            <p><small>※クリックすると入れ替わります</small></p>
                <p class="dummy" onclick="chengeElement();">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
            </div>

          </main>
          <footer>
            <!--button type="button" id="cancel">やり直す</button-->
            <button type="submit" id="ok" uxp-variant="cta">閉じる</button>
          </footer>
        </form>
    `;
    
    //await alert("色のコントラスト比" + htmlString);
    document.body.appendChild(dialog);
    dialog.appendChild(htmlString);
    dialog.showModal();
    console.log(document.body.innerHTML);

    function chengeElement(){
    	var elt1 = document.getElementsByClassName("box1");
    	var elt2 = document.getElementsByClassName("box2");

    	elt1[0].style.backgroundColor = "blue";
    	elt2[0].style.backgroundColor = "blue";
    }/**/

		    	var elt1 = document.getElementsByClassName("box1");
		    	var elt2 = document.getElementsByClassName("box2");
		    	console.log(elt1[0].style.color);
		    	console.log(elt2[0].style.background);
    /*const chengeElement = document.getElementByClassName("dummy");
          chengeElement.addEventListener('click', () => {
		    	var elt1 = document.getElementsByClassName("box1");
		    	var elt2 = document.getElementsByClassName("box2");
		    	console.log(elt1);
		    	console.log(elt2);

		    	elt1.style.color = "blue";
		    	elt2.style.backgroundColor = "blue";
            };


    const cancelBtn = document.getElementById("cancel");
          cancelBtn.addEventListener('click', () => {
        　　 dialog.remove();
            return false;
            }, false);*/
}

async function showError() {
    /* we'll display a dialog here */
    console.log("エラー");

    let htmlString = "<p>" + ((Math.max(colorL1,colorL2)+0.05)/(Math.min(colorL1,colorL2)+0.05)).toFixed(2) + "</p>";
    await alert("色のコントラスト比" + htmlString);

}

module.exports = { // コマンドIDとファンクションの紐付け
  commands: {
    helloCommand: helloHandlerFunction
  }
};
