## Notes from Jen Kramer's CSS Grid and Flexbox For Responsive Layout V2
<br/>

### Notes
* [Course Website](https://frontendmasters.github.io/grid-flexbox-v2/)
* [Forked Code Pen](https://codepen.io/shaswatPrabhat/pen/MWBKwex)
* A bit about [Box sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing). 
* `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. 
* If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. 
* Always prefer `border-box` compared to `content-box` so that is is easier for mathematics of browser.
* Always be aware of the parent and child.
* If we dont have a `min-height` and a `min-width set, they are as wide as their content.
* Different part of the page can have different media queries
* FlexBox = Flexible Boxes
* Flexbox thinks about itself in terms of rows instead of thinking about itself in in terms of 2 dimensions
* idea of a `main axis` and a `cross axis`
* by default the `main axis` is the column and `cross axis` is row
* Important to distinguish between `flex-parents` and `flex-containers`
* Generally speaking we will need `row` for `flex-direction` and `wrap` for `flex-wrap` for responsive design
*  