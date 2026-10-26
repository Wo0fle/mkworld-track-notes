// Source - https://stackoverflow.com/a/56535307
// Posted by Mason, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-26, License - CC BY-SA 4.0

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const trackList = document.getElementById("track-list");
const trackArray = Array.from(trackList.options, option => option.value.slice(0, -1));

document.querySelector('input').addEventListener('input', function(){
    if (this.value.slice(-1) === '\u2063') {
        selectedTrack = this.value.slice(0, -1);
        for (const track of trackArray) {
            var trackNotes = document.getElementById(track);
            if (selectedTrack === track) {
                trackNotes.style.display = "block";
            } else {
                trackNotes.style.display = "none";
            }
        }
    }
});