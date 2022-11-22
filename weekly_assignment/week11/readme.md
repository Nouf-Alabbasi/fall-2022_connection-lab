
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

Another thing I wanted to do was to allow the shapes to be looked at from all angles. (some thing like [this](https://aframe.io/examples/showcase/modelviewer/)). However I didn't manage to get that to work. I looked at a few pieces of code that had the feature I wanted but didn't manage to find the tag/feature that controlled the user's ability to grab the shape and rotate it. I tried to follow [this](https://stackoverflow.com/questions/65525381/a-frame-super-hands-rotate-grabbed-object) but it wasn't what I wanted to do. I think that what I want to do has to do with the camera tag, but I am not sure.
'''
  <a-camera> </a-camera>
'''

I was able to add texture to the shapes by adding the texture imgs as an asset then adding it in the shape as a src
'''
<a-assets>
<img id="cone" crossorigin="anonymous" src="https://t3.ftcdn.net/jpg/01/22/71/42/360_F_122714277_FjVC7634ONpqXEne04b98SnscDgjAs1G.jpg">
</a-assets>
...
<a-cone .... src="#cone"></a-cone>
'''