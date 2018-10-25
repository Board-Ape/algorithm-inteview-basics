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

1) Determine where to localize language wise
    - Deep localization or Minimum Viable Localization
2) Choose the translators
    - In-house, Crowdsourcing, Outsourcing
3) Internationalize your application 
    - Extract UI strings and create resource files
4) Set-up translators abd reference guides for translators

=================================
=================================

Tell me two advantages of testing your code?

=================================
=================================

Name three strategies for fixing cross - browser inconsistencies?

1) Polyfills - provide features that don't exist at all: converting es6 to es5
2) <DOCTYPE>
3) Using prefixes within the CSS
4) Validators for CSS and HTML

=================================
=================================

What are some tools and strategies you use to prevent shipping unstable code to production ?

1) Testing - Continuous Integration: Unit, Integration and Functional
2) Having mutiple environemnts: Production, Deployment, Staging

=================================
=================================

What factors influence whether you’ll take a progressive enhancement vs. graceful degradation approach to building an application?

1) Speed and time

=================================
=================================

Define the term ‘MVC’ and explain how an application is architected when following MVC patterns?

This is a design pattern
1) Model: cares about data. How is the data being retrieved
2) View: cares about DOM. It's the browser API you use for HTML manipulations
3) Controller: cares about event handling. 

=================================
=================================

What does CORS stand for and what issue does it address?

1) Crosss Origin Resource Sharing = Who or how data can be accessed

=================================
=================================

In as much detail as possible, describe the request - response cycle?

1) Parsing URL
    - Type URL into Browser
        - Check first in Browser Cache, None => Check DNS
        - DNS is simply a translator for the URL to IP
    - Browser then parses the URL for protocol, host, request URI
    - Forms an HTTP request
2) Sending Request
    - Socket connection opened => HTTP Request sent => Web Server Receives
3) Server Response
    - Host checks for info to process Request
    - Sends back Response headers, and requested data
4) Browser Rendering
    - Browser receives to parse into the DOM and displays
5) HTTP persistent connection
    - Transmission Control Protocol - so a new connection doesn't always need to be sent

=================================
=================================

Tell me 3 new features of CSS3.

1) CSS Selectors and Psuedo-selectors
2) RGBA color - transparency
3) Broder-radius
4) Drop-Shadows / Text Shadows
5) Linear Gradients / Radial Gradients

=================================
=================================

Can you describe what responsive design is to you and how you would implement it?

- Responsive design is that approach that design and development should be based around varying scrren sizes.

=================================
=================================

What’s the difference between display: inline and display: inline-block ?

- In terms of ignoring and respecting margins and padding
    Inline = margin left and right are considered but not top or bottom
    Inline-block = all margins are considered

=================================
=================================

What's 

=================================
=================================

What is a pseudo class? What are they used for?

=================================
=================================

Describe z-index and how stacking context is formed?

=================================
=================================

If you have two elements inside of an outer containing element, one with float: left; and the other with float: right, how can you ensure that the containing element expands around the floated elements and does not collapse?

=================================
=================================

Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

=================================
=================================

What does event bubbling or event propagation mean?

=================================
=================================

What’s the difference between undefined and null?

=================================
=================================

In as much detail as possible, explain how JSON Web Tokens work.
What is Ajax?

=================================
=================================

What is "use strict"? What are the advantages and disadvantages to using it ?

=================================
=================================

Explain why the following doesn’t work as an IIFE: function foo() { } ();. What needs to be changed to properly make it an IIFE? Why?

=================================
=================================

What are the pros and cons of using Promises instead of callbacks?

=================================
=================================

What is a closure, and how/swhy would you use one?

=================================
=================================

What advantages does React offer? What about disadvantages?

=================================
=================================

Why is it generally a good idea to position CSS < link > s between < head ></head > and JS < script > s just before </body >? Do you know any exceptions?

=================================
=================================

In an HTML file, what does the ‘doctype’ keyword do?

=================================
=================================

Give an example of a self-closing HTML tag?

=================================
=================================

What’s the difference between window.onload and onDocumentReady?

=================================
=================================

Give an example of an element that is considered a ‘block - level’ element? An example of an inline element? What’s the difference between block - level and inline elements?

=================================
=================================

What could we use instead of < b > tags for bold and < i > tags for italics to make our HTML more semantic?

=================================
=================================

What is the purpose of article, section, header and footer tags?

=================================
=================================

Please explain with an example and why we should not use divs?

=================================
=================================

What are HTML data attributes?

=================================
=================================

*/