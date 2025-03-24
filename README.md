Natural Language Google Calendar Event Parser

This is a lightweight web-based calendar tool that lets users quickly add 
events using natural language input. Instead of clicking around, users can simply type phrases like:

    meeting at 4pm on Oct 20
    lunch tmrw 11
    gym every Mon at 6am 
    
The parser understands flexible language and converts it into structured event data that gets displayed on a calendar.


1. Clone the Repository
    git clone https://github.com/OtisLau/event_parser_extention.git
    cd event_parser_extention

2. Install Dependencies
   npm install

3.  Bundle the Project
    npx webpack
    
5. Load the Extension into Chrome
   Open Chrome and go to chrome://extensions
   Enable Developer mode (top right)
   Click “Load unpacked”
   Select the /dist folder (must include manifest.json and bundled .js files)
   Your extension should now be loaded and active!


 
