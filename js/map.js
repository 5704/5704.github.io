//draw(xx,yy,value):画一个方块,x坐标,y坐标,方块种类
//draw_map(map):画一整个地图,会清除之前画的,map二维数组

function draw_map(map,$canvas){
	var drawing=$canvas[0];
	if(drawing.getContext){
		var context=drawing.getContext("2d");
		context.scale(1, 0.68);
		context.clearRect(0,0,1000,1000);
	}
	var x = map.length;
	//var y = map[0].length;
	var y=x;
	console.log("大小：("+x+","+y+")");
	for(i=0;i<x;i++){
//		console.log("画第",i,"行");
		for(j=0;j<y;j++){
			draw(i,j, map[i][j] ,$canvas);
		}
	}
}

function draw(xx,yy,value,$canvas){
	var drawing=$canvas[0];
	var color = ["black","skyblue","red","purple","green"];
	//# 0墙壁不可通过(0)
	//# 1可通过(+)
	//# 2火灾不可通过并有排斥力(-)
	//# 3人物（移动）(-)
	//# 4 出口(+)

	if(drawing.getContext){
		var context=drawing.getContext("2d");
		context.fillStyle=color[value];
		size=10;
		context.fillRect( (yy*size) , (xx*size) , size , size+1);
		
		//context.fillStyle="red";
		//context.fillStyle="rgba(0,0,255,0.5)";
		//context.fillRect(30,30,50,50);
		//context.clearRect(30,30,30,30);
	}
}

for(l=maps.length-1;l>=0;l--){
	
//	var $button = $("<button></button>");
//	$button.attr("onclick","draw_map(maps["+l+"],"+'$("#canvas'+l+'"))');
//	$button.html("画第"+l+"个map");
//	$("#side").append($button);
	
	var $canvas = $("<canvas></canvas>");
	$canvas.attr("id","canvas"+l);
	$("body").append($canvas);
	draw_map(maps[l],$canvas);
	if(l!=0) $("#side").append( $("<br>") );
}

$("canvas").click(function(){
	$(this).toggleClass("clicked");
});
//draw_map(maps[0],$("canvas:first"));