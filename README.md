###############################################
# Crossover Video Portal                      #
-Backend is provided by @Crossover            #
-Frontend @Copyright Le Duy Khanh             # 
###############################################

# How to run:
>node index.js 
	to run backend with mongodb instance is running
>gulp
	to rebuild frontend bundle files

# How the site works
- Login page:
	+ You need to log in to see the videos list
	+ Sample credentials ali password
- Videos list page:
	+ A list of videos
	+ You are not able to play or rate the videos from here
	+ Clicking on any video items will bring you to a video detail page, which allow you to play the video

# Techstacks Used:
	- Gulp
	- NodeJS
	- ReactJS
	- mongodb

# Project structure
- Frontend:
	Follows the "flux" structure:
		+ Constants: all constants
		+ Components: all frontend components
		+ Services: all backend function calls
		+ Dispatchers: the basic dispatcher
		+ Actions: connect backend and frontend by using dispatcher
		+ Stores: all frontend data, to be shared among components
