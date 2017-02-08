# GathererComments
Adds a new comment box to the bottom of card pages on the MTG Gatherer website (useful since the current comment system is disabled).

###Installation Instructions (Chrome):

1. Download [GathererComments.crx](https://github.com/HotelDon/GathererComments/raw/master/GathererComments.crx)
2. Go to Settings (the button with three vertical dots) -> Extensions.
3. Drag GathererComments.crx into the extensions window
4. Select "Add Extension" to add extension.

###Installation Instruction (Firefox):

1. Download [GathererComments.zip](https://github.com/HotelDon/GathererComments/raw/master/GathererComments.zip)
2. Unzip GathererComments.zip into its own folder, somewhere you can access it.
3. Open Menu (the hamburger button) -> Add-ons -> Settings (the sprocket wheel by the search bar) -> Debug add-ons -> Load Temporary Add-on
4. Go to the folder you unzipped the file into, select manifest.json, and select open. 
5. You're all set - however, you will need to do this every time you restart Firefox, as Firefox won't let you permanently install unpublished extensions.

###Installation Instructions (Edge)

1. Sorry, you're on your own with this one.

###Additional Notes:

1. The rules are simple - if your comment is deleted, you broke the rules. The easiest ways to get your comment deleted is to be a jerk, or to abuse the comment box with unicode/whitespace nonsense.
2. Name is mandatory, website and email are not. However, using an email address makes it easier for me to contact you if something happens. The website field is purely for vanity (clicking on your name will lead people to your website).   
3. Each card gets its own comment thread, regardless of the number of printings. This is a change from the original Gatherer comments, where each printing got it's own set of comments.
4. The comment box will disappear when the screen shrinks to below 750px, which is the threshold at which The Gatherer decides you're on a mobile device and switches layouts. Since this is a desktop browser extension, and the comments section looks really weird squished down to mobile size, it's easier just to hide it.
5. The anti-spam features on the comment system I'm using aren't exactly robust, but since these comment boxes aren't just floating around publicly on a web page, it should hopefully be less of an issue. However, if you notice anything weird, please send me a message and let me know about it. 
6. I haven't done anything fancy enough to preclude this from working on IE/Edge, but you're on your own for that one. 