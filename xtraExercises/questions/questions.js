/* 

=================================
=================================

Describe what happens when a user types google.com into the browser?

1) Computer reaches out to the DNS
    - Domain Name Service
2) DNS responds with an IP Addresss
    - Similar to the address of a house. Where this site can be found.
3) Computer takes the IP Address and creates an HTTP REQUEST
4) HTTP hits your Router
5) Router then hits ISP (Internet Service Provider)
    - ISP is connected to a network or computers Tier 2 Network
6) ISP asks the Tier 2 Network => Tier 1 Network
    - Tier 1 Network
7) Tier 1 Network takes the HTTP request and retrieves it
8) "The Black Box" then send the information back through the same channels that retrieved it.
    - HTTP Response
9) HTTP Response is a large object sent back
    - HTML
    - CSS
    - JavaScript

=================================
=================================

In as much detail as possible, explain how you would localize an application?



=================================
=================================

Tell me two advantages of testing your code?

=================================
=================================

Name three strategies for fixing cross - browser inconsistencies.
What are some tools and strategies you use to prevent shipping unstable code to production ?
    What factors influence whether you’ll take a progressive enhancement vs.graceful degradation approach to building an application ?
        Define the term ‘MVC’ and explain how an application is architected when following MVC patterns.
What does CORS stand for and what issue does it address ?
    In as much detail as possible, describe the request - response cycle.
Tell me 3 new features of CSS3.
Can you describe what responsive design is to you and how you would implement it ?
    What’s the difference between display: inline and display: inline - block ?
        What is a pseudo class?What are they used for?
            Describe z - index and how stacking context is formed.
If you have two elements inside of an outer containing element, one with float: left; and the other with float: right, how can you ensure that the containing element expands around the floated elements and does not collapse ?
    Why is it, in general, a good idea to leave the global scope of a website as- is and never touch it ?
        What does event bubbling or event propagation mean ?
            What’s the difference between undefined and null
In as much detail as possible, explain how JSON Web Tokens work.
What is Ajax ?
    What is "use strict";?What are the advantages and disadvantages to using it ?
        Explain why the following doesn’t work as an IIFE: function foo() { } ();.What needs to be changed to properly make it an IIFE ? Why ?
            What are the pros and cons of using Promises instead of callbacks ?
                What is a closure, and how / why would you use one ?
                    What advantages does React offer ? What about disadvantages ?
                        Why is it generally a good idea to position CSS < link > s between < head ></head > and JS < script > s just before </body >? Do you know any exceptions ?
                            In an HTML file, what does the ‘doctype’ keyword do?
                                Give an example of a self - closing HTML tag.
                                    What’s the difference between window.onload and onDocumentReady
Give an example of an element that is considered a ‘block - level’ element ? An example of an inline element ? What’s the difference between block - level and inline elements ?
    What could we use instead of < b > tags for bold and < i > tags for italics to make our HTML more semantic ?
        What is the purpose of article, section, header and footer tags ? Please explain with an example and why we should not use divs.
What are HTML data attributes ?Z