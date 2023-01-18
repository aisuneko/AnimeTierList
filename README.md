# AnimeTierList
> This is a fork of [Qnnie's original project](https://github.com/Qnnie/AnimeTierList), mainly for personal use. 
> ## New features:
> - Fully customizable tier breakpoints (modifiable in `src/helpers.js`) and dynamic tier generation (the original project simply has default tiers hardcoded in it, making it difficult to customize the tier ranks)
> - Adjustable color gradient as seen in tier rank boxes. This is powered by rainbowvis.js and is controllable by the following url query string parameters: `?start_color=<color_name>&end_color=<color_name>` (color names are taken from [here](http://www.w3.org/TR/css3-color/#svg-color))
> - De-bloated and minified to an extent, with useless user-side fluff (e.g. homepage) removed, thus acting as a REST API-only backend. Simply enter the correct url path for the desired pages - for example, `/anilist/<username>`. 
> ## Known issues:
> - Tested with AniList only (since I'm an AniList user). MyAnimeList and Kitsu routes aren't guaranteed to work without bugs. Also, the original author's MAL-only solution for customizable tier list settings might not work in this fork (I might fix it in the future though).
>- Currently you still have to edit the said source code and run the project locally if you want custom tier ranks. Perhaps there is a way to turn it into a neat API interface?


## Original Project README:

---
---
<img src='src/public/images/HomePreview.png'>
<img src='src/public/images/ListPreview.png'>

## NOTE

MAL lists cap at 900.

## About

Just a fun little project that converts your MAL and or AniList to a tier list. Feel free to improve any aspect and send in a pull
request <3

## Customize (For MAL Only)

**Put the following inside your bio** <br><br>
Heres my profile as an example https://myanimelist.net/profile/Qnnie
<br>
<br>
Background Image: {background}image url{/background}
<br>
<br>
Your top bar can be different colors.
<br>
<br>
Colors can be <br>
Hex ex: {topbar}#ffffff{/topbar}
<br>
RGB: {topbar}rgb(255,0,0){/topbar}
<br>
or even slightly transparent with RGBA {topbar}rgba(255,0,0,0.5){/topbar}
<br>
Normal ex: {topbar}green{/topbar}
<br><br>
CUSTOM RANKS
ex: {ratings}SS,S,A,B,C,D,F,F,F,F{/ratings} <br>
SS = 10
<br>S = 9
<br>A = 8
<br>B = 7
<br>C = 6
<br>D = 5
<br>F = 4-1

## Tips

<ul>
    <li>You can actually take a screenshot of your list by using browser extensions.</li>
    <li>If you're only getting a section like "Plan to watch" You need to go to your list settings and remove that as your default</li>
</ul>

## WIP

<ul>
    <li>Working on general bugs</li>
</ul>

## How to run locally

<ol>
  <li>open up command line tool for the following commands</li>
  <li>git clone https://github.com/Qnnie/AnimeTierList</li>
  <li>cd AnimeTierList</li>
  <li>npm install</li>
  <li>node src/app.js</li>
</ol>
