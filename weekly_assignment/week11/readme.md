
I thought I would be able to create the Aframe object in a part of the screen and have regular html under it so that the user can scroll down to the site, but that wasn't possible. I tried to do this by placeing the shapes in a div and defining the height of that div, then adding a div under it to check if I could scroll down to the second div.
''' 
<style>
#shapes{
	height: 100px;
	width: 100%;
}

#second_div{
	height: 100px;
	width: 100%;
}
</style>
<body>
	<div id = "shapes">
		<a-scene>
			<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
			...
		</a-scene>
	</div>
	<div id = "second_div">
		hiii
	</div>
</body>

''' 

Another thing I wanted to do was to allow the shapes to be looked at from all angles.
some thing like [this](https://aframe.io/examples/showcase/modelviewer/)