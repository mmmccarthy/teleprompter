## Teleprompter: with Google Spreadsheet integration

### How to Use
1. Create a new Google Sheet using the format found in sheets/News Production.xslx or follow the table below.

     |SLUG|REPORTER|SCRIPT|ANCHOR|
     |-----|-----|------|------|
     |TEST|Reporter|Type your script here....|ANCHOR|

2. Publish your spreadsheet to the web by clicking File > Publish to the web. 

3. Copy your spreadsheet key from the URL. If your url is:
     ```
     https://docs.google.com/spreadsheets/d/1jRxm9zBw2itj0EDHXQ3yQ71fI6BsTJ9MvRqsQI4_TVs/   edit#gid=0
     ```
     your *key* is `1jRxm9zBw2itj0EDHXQ3yQ71fI6BsTJ9MvRqsQI4_TVs`

4. Open the file js/gsheet.js and copy your key into the line 3.
     ```
     var key = "YOUR KEY HERE";
     ```

---
## Original Documentation
You can edit the text right on the page. It'll even save your changes for you if you happen to leave the page.

If you're using an iPad, you can add a shortcut to your home screen for full screen awesomeness.

You can also use some handy keyboard shortcuts. You can adjust the speed & font size at the top right as well. I'm also experimenting with ways to flip the text around for you fancy folks using mirrors.

## Demo Link ##
[http://lab.peterschmalfeldt.com/teleprompter/](http://lab.peterschmalfeldt.com/teleprompter/ "Demo Link")

## Keyboard Shortcuts ##

- **Up**: Increases Font Size
- **Down**: Decreases Font Size
- **Left**: Slows Down Teleprompter
- **Right**: Speeds Up Teleprompter
- **Space**: Starts / Stops Teleprompter
- **Escape**: Resets GUI

Finally, we also made an effort to make sure your text will be easy to read.   So if you are pasting text from a word document, we'll do some cleaning up to make the breaks flow more easily.

Follow me on Twitter for updates: **[@mrmidi](http://twitter.com/mrmidi "Follow @mrmidi on Twitter")**
