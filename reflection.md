### Sean Springer<br>CS 563<br>6/1/2024


## Reflection Document

**Include complete answeres to the following**

1. Where you able to complete the exercises on your own or did you use the videos or the solutions for help?
2. How helpful did you find the exercies in this section? Was there one exercies that was partricularly helpful?
3. Was there something that you wish had been explained better?
4. Were there other exercises that might have helped you learn this week's topic a little better?

# Remember: Do This For Each SECTION (8 total)




### 01 HTML

1. Outside of glancing at the table example to remember the exact tag names, I was able to complete these exercises on my own. I'm still getting used to all the `<input>` and `<label>` tag syntax so I looked at the lecture slides to remind myself which attribute gets the for and which gets the id attribute (label gets the for).
2. I found these very helpful because they utilized all of the different tags that were presented in class.
3. I'm still not 100% about how detailed to get in an images alt attribute. Should we explain the image in great detail or just provide a quick cursory explanation? Also, the example slides showed using leading phrases like "image of" prior to the detailed explanation of the image, however when I WAVE'd the page, it flagged this preceeding phrase as an error stating that it is redundant because most text readers will automatically include that language in the reading.
4. I'm interested to undertand how to handle the actions that occur after pressing an `<input type="submit">` button. I see how it populates the url with the name=value components seperated by & however how does one determine where to send this information and how can we use HTML to parse these inputs?

### 02 Accessibility

1. I completed this exercise on my own, however after reviewing the solutions I realized that I had forgotten to include the value attribute in the radio buttons!
2. These exercises were helpful in reinforcing the basics. I would have liked to understand the aria-attributes better and maybe an example would help with that. Also, using WAVE to help guide the corrections was very helpful!
3. One thing I'm still a bit unsure about is when you need to define the value attribute. In this example, the `<input type=text>` does not require a value because the value appears to come from the input text. However, the radio buttons require a value I guess because the `<label>` name tied to that button does not automatically relate. Generic rules to help remember when to use value would be helpful in my oppinion.
4. Using the aria attributes like aria-expanded and aria-haspopup in examples would be helpful because I still do not understand when to use these specific attributes.

### 03 CSS

1. I'm noticing that, when it comes to css and seaking a desired outlook, that there are many ways to acheive the same appearence. Also there are many ways to target an element, attribute, etc. I was able to perform all the css changes with the help of the textbook for some property lookups. Then I went back through the solutions and found that much of what I had written (although it appeared correctly) was not the same answer given. So, I updated my notebook to match the official solutions for the sake of the grader.
2. I really found the 06-media queries problem to be an excellent review of the entire chapter. It touched on every idea talked about in this section and demonstrated how to think and apply this type of problem to an actual page. The other excercies where helpful in building up to that last exercise.
3. The display: inline-blox property is still a bit mysterious to me in what it properties are block-like and what specific properties are inline-like. Also, sharing any tricks or rules-of-thumb of when to target an element/attribute very specifically vs when to move a particular rule down in the css list would be helpful.
4. Perhaps examples using some of the more complicated / function-like psuedo-classes or psuedo-elements

### 04 Flexbox

1. It took me some time playing around with all of the flex options to understand the difference between some of the reverse terminologies, but otherwise I got there basically on my own.
2. I feel they were helpful for the basics, but I would have liked to had a more complicated exercise that involved setting actual html elements rather than just boxes.
3. The space-evenly vs space-around justify-content differences aren't obvious to me. Also, how does flex work within a complete page? If I wanted to build a standard page with header, main, footer, and 2 side bars, would the entire page be one flex container?
4. I think an application excerice would have been nice. Maybe something with a header, main, aside, and footer. This would help to understand how flex flows for common layout schemes

### 05 CSS-Grid

1. Grid layout makes much more sense to be than flexbox and so the only thing I needed to lookup was the logic for using the grid-template-areas alignment scheme.
2. I think this set of exercises nailed the content very well. The power and simplicity of grid really shines through in these exercises.
3. Perhaps details on aligning objects inside of a grid-item? For example, text centering inside a grid-item box would be helpful.
4. Other than what was mentioned above, I really enjoyed and learned a lot form the css-grid exercises!

### 06 Bootstrap

1. I needed to look up the cards and modal information from https://getbootstrap.com, mostly for syntax and available class names and meaning.
2. It was very helpful. I would have liked to have had a navigation bar example because that flexibility is really impressive!
3. There is just so many options and properties and class names that bootstrap feels overwhelming. I understand that one would likely approach this on a "as-needed" basis so memorizing componenets is not necessary. But most of the examples in the docs.don't explain what certain properties do or don't do and why they should be included, etc. I feel intimated by bootstrap at the moment.
4. The icon and font information from lecture / slides felt a bit rushed and perhaps some experience with these topics would have helped to cement their application; otherwise the exercises touched upon basically all other concepts from the lecture.

### 07 Javascript

1. I did not use the videos on this assignment. I did some googling to determine how to use the functional.js functions and had a lot of trouble with the elaborate destructuring at first but was able to figure it out in the end.
2. The exercises did a good job of jumping around all of the basic JS space. I particularly liked the functional problems becuase they were challenging but also felt rewarding in how much elaborate work could be done in so easily.
3. My big question is with the fetch and the async structure. Is there any other way to store the results of an async operation to a variable other than using a global variable? For example, is there a way to assign to the results of a function that deals with asyn promises? I could not figure out any way to do this. Also, when using global variables to store fetch results, what can I do to ensure that the promise has been fulfilled (i.e. the global variable has the requested JSON data) BEFORE allowing the user to potentially interact with the data? If I have a long query, I wanted to ensure that my results have been fetched before the user presses some button to inderact with the data, for example.
4. An exercising practicing a PUT would be helpful because it would enforce how to build that options object and all the required attributes that are needed in order to create a sufficient post. I'm also interested in how to build an HTTP response to say a GET for example and how to fill the header and body fields of that response.

### 08 JQuery

1. I didn't quite get all the JQuery function chaining opportunities the first try. I still had a tendency to define a variable like `let var = $("div")` and then operate on the `<div>` element. The chaining adds confusion in my oppinion, but I understand that it's an important part of the JQuery infrastructure. Some of the function calls I needed to google and I originally went with `$.get(...)` shorthand rather than the `$.ajax(...)` but adjusted it back when I saw the solution.
2. All of the exercises were helpful in becoming familiar with commonly used JQuery methods and the overall power of their function chaining. The AJAX was particularly interesting in the depth of JQuery utilized.
3. The inner workings of JQuery would have been so much fun to learn about. I also am unsure about what other methods are available for the `$(document)` object besides the `.ready()` method. Do other methods exist to help guide page functionality?
4. We didn't do a lot of fancy selector operations like `.siblings()`, `.parents()`, and `.find()` which may have been useful practice. Otherwise I think JQuery was very well presented.
