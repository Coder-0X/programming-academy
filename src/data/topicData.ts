export interface TopicDetails {
  name: string;
  theory: string;
  syntax: string;
  example: string;
  description: string;
}

export const topicData: Record<string, TopicDetails> = {
  // HTML Topics
  "HTML Structure": {
    name: "HTML Structure",
    description: "HTML (HyperText Markup Language) provides the basic structure for web pages using elements and tags.",
    theory: `HTML is the backbone of every webpage. It uses a hierarchical structure of elements defined by tags.

Key concepts:
• Tags are enclosed in angle brackets < >
• Most tags come in pairs: opening <tag> and closing </tag>
• Tags can have attributes that provide additional information
• HTML documents have a standard structure with DOCTYPE, html, head, and body sections

The document follows a tree-like structure where elements can contain other elements, creating parent-child relationships.`,
    syntax: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page Title</title>
</head>
<body>
    <element attribute="value">Content</element>
</body>
</html>`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph with <strong>bold text</strong>.</p>
    <a href="https://example.com">Visit Example</a>
</body>
</html>`
  },

  "Text Elements": {
    name: "Text Elements",
    description: "HTML provides various elements for structuring and formatting text content.",
    theory: `Text elements in HTML allow you to structure content semantically and provide meaning to different parts of your text.

Heading elements (h1-h6):
• Create a hierarchy of importance
• h1 is most important, h6 is least important
• Should be used in logical order

Paragraph elements:
• Contain blocks of text
• Automatically add spacing before and after

Inline text elements:
• <strong> for important text (usually bold)
• <em> for emphasized text (usually italic)
• <span> for generic inline container`,
    syntax: `<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>

<!-- Paragraphs -->
<p>Paragraph text here</p>

<!-- Inline formatting -->
<p>This is <strong>important</strong> and <em>emphasized</em> text.</p>`,
    example: `<article>
    <h1>Introduction to Web Development</h1>
    
    <h2>What is HTML?</h2>
    <p>HTML stands for <strong>HyperText Markup Language</strong>. 
    It is the <em>standard markup language</em> for creating web pages.</p>
    
    <h2>Getting Started</h2>
    <p>To begin learning HTML, you need:</p>
    <p>A text editor and a web browser. That's it!</p>
    
    <h3>Basic Concepts</h3>
    <p>HTML uses <span style="color: blue;">tags</span> to structure content.</p>
</article>`
  },

  "Links and Images": {
    name: "Links and Images",
    description: "Learn how to create hyperlinks and embed images to make your web pages interactive and visually appealing.",
    theory: `Links and images are fundamental elements that make the web interactive and visually rich.

Links (Anchor elements):
• Connect pages together
• Can link to other websites, pages, or sections
• Use the href attribute to specify destination
• Can open in new windows/tabs with target="_blank"

Images:
• Embed visual content in web pages
• Use src attribute for image source
• Alt attribute provides accessibility and fallback text
• Can be resized with width/height attributes
• Should always include meaningful alt text for screen readers`,
    syntax: `<!-- Links -->
<a href="URL">Link text</a>
<a href="URL" target="_blank">Open in new tab</a>
<a href="#section">Link to page section</a>

<!-- Images -->
<img src="image.jpg" alt="Description">
<img src="image.jpg" alt="Description" width="300" height="200">`,
    example: `<!-- Navigation Links -->
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="https://google.com" target="_blank">Google</a>
</nav>

<!-- Article with image -->
<article>
    <h2>Beautiful Sunset</h2>
    <img src="sunset.jpg" 
         alt="Orange and pink sunset over calm ocean waters" 
         width="500" 
         height="300">
    
    <p>Check out this <a href="#gallery">photo gallery</a> for more images.</p>
    
    <p>Photo credit: <a href="mailto:photographer@example.com">John Doe</a></p>
</article>`
  },

  // HTML Topics - Complete Coverage
  "HTML Document Structure": {
    name: "HTML Document Structure",
    description: "The fundamental structure and organization of HTML documents including DOCTYPE, html, head, and body elements.",
    theory: `HTML documents follow a specific hierarchical structure that browsers understand and parse correctly.

Essential components:
• DOCTYPE declaration defines the HTML version
• <html> element is the root container
• <head> contains metadata not visible on the page
• <body> contains all visible content
• Proper nesting creates a logical document tree

Document structure affects:
• SEO and search engine crawling
• Accessibility for screen readers
• Browser rendering performance
• Validation and standards compliance`,
    syntax: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A sample HTML page">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is the main content area.</p>
    </main>
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>`
  },

  "Head and Body Tags": {
    name: "Head and Body Tags",
    description: "Understanding the distinction and proper use of head and body sections in HTML documents.",
    theory: `The head and body elements serve different purposes in HTML documents:

Head section contains:
• Metadata about the document
• Links to external resources (CSS, scripts)
• SEO-related information
• Character encoding and viewport settings
• Not visible to users directly

Body section contains:
• All visible content
• Text, images, videos, forms
• Interactive elements
• The actual webpage content users see`,
    syntax: `<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="description" content="Page description">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <h1>Visible Content</h1>
    <p>This appears on the webpage</p>
</body>`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta information -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learning HTML head and body tags">
    <meta name="keywords" content="HTML, tutorial, web development">
    
    <!-- Page title -->
    <title>Head vs Body Example</title>
    
    <!-- External resources -->
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- Visible content starts here -->
    <header>
        <h1>Understanding HTML Structure</h1>
        <nav>
            <a href="#section1">Section 1</a>
            <a href="#section2">Section 2</a>
        </nav>
    </header>
    
    <main>
        <section id="section1">
            <h2>What goes in the head?</h2>
            <p>Metadata, links to stylesheets, and other non-visible elements.</p>
        </section>
        
        <section id="section2">
            <h2>What goes in the body?</h2>
            <p>All the content that users can see and interact with.</p>
        </section>
    </main>
</body>
</html>`
  },

  "Headings": {
    name: "Headings",
    description: "HTML heading elements (h1-h6) create a hierarchical structure for content organization.",
    theory: `HTML headings provide semantic structure and hierarchy to content:

Heading levels (h1-h6):
• h1: Most important heading (page title)
• h2: Major section headings
• h3-h6: Subsection headings in order
• Should follow logical hierarchy
• Important for SEO and accessibility

Best practices:
• Use only one h1 per page
• Don't skip heading levels
• Use for structure, not styling
• Screen readers use headings for navigation`,
    syntax: `<h1>Main Page Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>`,
    example: `<article>
    <h1>Complete Guide to Web Development</h1>
    
    <h2>Frontend Development</h2>
    <p>Frontend focuses on user interface and experience.</p>
    
    <h3>HTML Fundamentals</h3>
    <p>HTML provides the structure for web pages.</p>
    
    <h4>Semantic Elements</h4>
    <p>Use meaningful HTML elements for better accessibility.</p>
    
    <h3>CSS Styling</h3>
    <p>CSS controls the visual presentation.</p>
    
    <h4>Responsive Design</h4>
    <p>Making websites work on all devices.</p>
    
    <h2>Backend Development</h2>
    <p>Backend handles server-side logic and data.</p>
    
    <h3>Databases</h3>
    <p>Storing and retrieving data efficiently.</p>
</article>`
  },

  "Paragraphs": {
    name: "Paragraphs",
    description: "The paragraph element (p) is used to structure text content into readable blocks.",
    theory: `Paragraphs are fundamental for text content organization:

Key characteristics:
• Block-level element with automatic spacing
• Contains flowing text content
• Browsers add margin before and after
• Can contain inline elements but not block elements
• Essential for readability and SEO

Accessibility benefits:
• Screen readers pause between paragraphs
• Helps users navigate content logically
• Improves text scanning and comprehension`,
    syntax: `<p>This is a paragraph of text.</p>

<p>This is another paragraph with <strong>bold text</strong> 
and <em>italic text</em> inline.</p>

<p>Paragraphs can contain 
<a href="link.html">links</a> and other inline elements.</p>`,
    example: `<article>
    <h1>The Importance of Web Accessibility</h1>
    
    <p>Web accessibility ensures that websites and web applications are usable by people with disabilities. This includes individuals with visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
    
    <p>According to the <strong>World Health Organization</strong>, over 1 billion people worldwide have some form of disability. By making websites accessible, we create inclusive digital experiences that benefit everyone.</p>
    
    <p>Key accessibility principles include:</p>
    <ul>
        <li>Perceivable information and user interface</li>
        <li>Operable interface and navigation</li>
        <li>Understandable information and UI operation</li>
        <li>Robust content that works with assistive technologies</li>
    </ul>
    
    <p>Implementing accessibility from the start is more cost-effective than retrofitting existing websites. It also improves SEO, usability for all users, and helps avoid legal issues.</p>
    
    <p>Learn more about web accessibility at the <a href="https://www.w3.org/WAI/" target="_blank">W3C Web Accessibility Initiative</a>.</p>
</article>`
  },

  "Basic Formatting": {
    name: "Basic Formatting",
    description: "Essential HTML elements for text formatting including emphasis, importance, and inline styling.",
    theory: `HTML provides semantic elements for text formatting that convey meaning:

Semantic formatting:
• <strong> indicates strong importance (usually bold)
• <em> indicates stress emphasis (usually italic)
• <mark> highlights relevant text
• <small> represents side comments or fine print
• <sub> and <sup> for subscript and superscript

Visual vs. Semantic:
• Use <strong> instead of <b> for important text
• Use <em> instead of <i> for emphasized text
• Semantic elements provide meaning to screen readers
• Better for SEO and accessibility`,
    syntax: `<p>This is <strong>very important</strong> text.</p>
<p>This text has <em>emphasis</em> on it.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>Chemical formula: H<sub>2</sub>O</p>
<p>Mathematical expression: x<sup>2</sup> + y<sup>2</sup></p>
<p><small>This is fine print text.</small></p>`,
    example: `<article>
    <h1>Understanding HTML Text Formatting</h1>
    
    <p>When writing content, it's important to use <strong>semantic HTML elements</strong> rather than relying solely on CSS for styling. This approach ensures that your content is <em>accessible</em> and meaningful to all users.</p>
    
    <p>Here are some examples of proper text formatting:</p>
    
    <h2>Chemical Formulas</h2>
    <p>Water is represented as H<sub>2</sub>O, while carbon dioxide is CO<sub>2</sub>. These subscripts indicate the number of atoms in each molecule.</p>
    
    <h2>Mathematical Expressions</h2>
    <p>The famous equation E = mc<sup>2</sup> shows the relationship between energy and mass. In algebra, we often see expressions like x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup> for the equation of a circle.</p>
    
    <h2>Highlighting Important Information</h2>
    <p>When reviewing code, you might want to <mark>highlight specific sections</mark> that need attention or contain bugs.</p>
    
    <p><small>Note: Always test your HTML in different browsers and with screen readers to ensure accessibility.</small></p>
    
    <p>Remember: <strong>semantic markup</strong> is <em>essential</em> for creating accessible web content that works for everyone.</p>
</article>`
  },

  "Form Elements": {
    name: "Form Elements",
    description: "HTML form elements enable user input and data collection through various interactive controls.",
    theory: `HTML forms are essential for user interaction and data collection:

Core form elements:
• <form> container defines the form boundary
• <input> various input types for different data
• <textarea> multi-line text input
• <select> dropdown menus
• <button> clickable form controls
• <label> associates text with form controls

Form attributes:
• action: where to send form data
• method: GET or POST
• enctype: encoding type for file uploads
• novalidate: disable browser validation

Accessibility requirements:
• Each input needs an associated label
• Use fieldsets for grouping related inputs
• Provide clear error messages and instructions`,
    syntax: `<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <button type="submit">Send</button>
</form>`,
    example: `<form action="/contact" method="POST" novalidate>
    <fieldset>
        <legend>Personal Information</legend>
        
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required 
                   placeholder="Enter your first name">
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required 
                   placeholder="Enter your last name">
        </div>
        
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required 
                   placeholder="your.email@example.com">
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" 
                   placeholder="(555) 123-4567">
        </div>
    </fieldset>
    
    <fieldset>
        <legend>Message Details</legend>
        
        <div class="form-group">
            <label for="subject">Subject *</label>
            <select id="subject" name="subject" required>
                <option value="">Choose a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea id="message" name="message" rows="6" required 
                      placeholder="Please describe your inquiry in detail..."></textarea>
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" name="newsletter" value="yes">
                Subscribe to our newsletter for updates
            </label>
        </div>
    </fieldset>
    
    <div class="form-actions">
        <button type="reset">Clear Form</button>
        <button type="submit">Send Message</button>
    </div>
</form>`
  },

  "Input Types": {
    name: "Input Types",
    description: "Various HTML input types provide specialized controls for different kinds of user data.",
    theory: `HTML5 introduced many input types for better user experience and validation:

Text-based inputs:
• text: basic text input
• email: email validation
• password: hidden text
• search: search functionality
• url: URL validation
• tel: telephone numbers

Number inputs:
• number: numeric input with spinners
• range: slider control
• date, time, datetime-local: date/time pickers

Selection inputs:
• checkbox: multiple selections
• radio: single selection from group
• file: file upload

Special inputs:
• hidden: invisible data
• submit, reset, button: form controls
• color: color picker`,
    syntax: `<!-- Text inputs -->
<input type="text" name="username">
<input type="email" name="email">
<input type="password" name="password">
<input type="search" name="query">
<input type="url" name="website">
<input type="tel" name="phone">

<!-- Number inputs -->
<input type="number" name="age" min="1" max="120">
<input type="range" name="volume" min="0" max="100">

<!-- Date/time inputs -->
<input type="date" name="birthday">
<input type="time" name="appointment">

<!-- Selection inputs -->
<input type="checkbox" name="agree" value="yes">
<input type="radio" name="size" value="small">
<input type="file" name="upload" accept=".pdf,.doc">

<!-- Other inputs -->
<input type="color" name="theme">
<input type="hidden" name="token" value="abc123">`,
    example: `<form action="/registration" method="POST" enctype="multipart/form-data">
    <h2>User Registration Form</h2>
    
    <!-- Basic Information -->
    <fieldset>
        <legend>Basic Information</legend>
        
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required 
               minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+">
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required 
               minlength="8">
        
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
        
        <label for="website">Personal Website:</label>
        <input type="url" id="website" name="website" 
               placeholder="https://example.com">
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" 
               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
               placeholder="123-456-7890">
    </fieldset>
    
    <!-- Personal Details -->
    <fieldset>
        <legend>Personal Details</legend>
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="13" max="120" required>
        
        <label for="birthday">Date of Birth:</label>
        <input type="date" id="birthday" name="birthday" required>
        
        <label for="meetingTime">Preferred Contact Time:</label>
        <input type="time" id="meetingTime" name="meetingTime">
        
        <label for="favoriteColor">Favorite Color:</label>
        <input type="color" id="favoriteColor" name="favoriteColor" value="#3366cc">
        
        <label for="experience">Years of Experience:</label>
        <input type="range" id="experience" name="experience" 
               min="0" max="50" value="5" 
               oninput="this.nextElementSibling.value = this.value">
        <output>5</output> years
        
        <label for="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" name="profilePicture" 
               accept=".jpg,.jpeg,.png,.gif" required>
    </fieldset>
    
    <!-- Preferences -->
    <fieldset>
        <legend>Preferences</legend>
        
        <p>Preferred Programming Languages (check all that apply):</p>
        <label><input type="checkbox" name="languages" value="javascript"> JavaScript</label>
        <label><input type="checkbox" name="languages" value="python"> Python</label>
        <label><input type="checkbox" name="languages" value="java"> Java</label>
        <label><input type="checkbox" name="languages" value="csharp"> C#</label>
        
        <p>Experience Level:</p>
        <label><input type="radio" name="level" value="beginner" required> Beginner</label>
        <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
        <label><input type="radio" name="level" value="advanced"> Advanced</label>
        
        <label for="searchQuery">What would you like to learn?</label>
        <input type="search" id="searchQuery" name="searchQuery" 
               placeholder="Search topics...">
    </fieldset>
    
    <!-- Hidden fields -->
    <input type="hidden" name="referrer" value="homepage">
    <input type="hidden" name="timestamp" value="2025-06-25">
    
    <!-- Form Controls -->
    <div class="form-actions">
        <input type="reset" value="Clear Form">
        <input type="submit" value="Create Account">
    </div>
</form>`
  },

  "Labels": {
    name: "Labels",
    description: "The label element associates descriptive text with form controls for better accessibility and usability.",
    theory: `Labels are crucial for form accessibility and usability:

Purpose and benefits:
• Provide descriptive text for form controls
• Enable screen readers to identify inputs
• Clicking label focuses/activates associated control
• Required for web accessibility compliance
• Improve user experience on mobile devices

Association methods:
• Using 'for' attribute pointing to input's id
• Wrapping the input element inside label
• Implicit association through nesting

Best practices:
• Every form control should have a label
• Use clear, descriptive text
• Position labels consistently
• Consider label placement for mobile usability`,
    syntax: `<!-- Explicit association with 'for' attribute -->
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">

<!-- Implicit association by wrapping -->
<label>
    Password:
    <input type="password" name="password">
</label>

<!-- Multiple inputs in one label -->
<label>
    Phone Number:
    <input type="tel" name="phone" placeholder="(555) 123-4567">
</label>`,
    example: `<form action="/profile" method="POST">
    <h2>Update Your Profile</h2>
    
    <!-- Explicit labeling (recommended for complex layouts) -->
    <div class="form-row">
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required>
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required>
        </div>
    </div>
    
    <!-- Implicit labeling (good for simple forms) -->
    <div class="form-group">
        <label>
            Email Address *
            <input type="email" name="email" required>
        </label>
    </div>
    
    <!-- Complex form controls with labels -->
    <fieldset>
        <legend>Contact Preferences</legend>
        
        <div class="form-group">
            <label for="contactMethod">Preferred Contact Method:</label>
            <select id="contactMethod" name="contactMethod">
                <option value="">Choose one...</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="bio">About You:</label>
            <textarea id="bio" name="bio" rows="4" 
                      placeholder="Tell us about yourself..."></textarea>
        </div>
        
        <!-- Checkbox and radio button labeling -->
        <div class="form-group">
            <fieldset>
                <legend>Communication Preferences:</legend>
                
                <label>
                    <input type="checkbox" name="newsletter" value="yes">
                    Subscribe to weekly newsletter
                </label>
                
                <label>
                    <input type="checkbox" name="promotions" value="yes">
                    Receive promotional offers
                </label>
                
                <label>
                    <input type="checkbox" name="updates" value="yes">
                    Product updates and announcements
                </label>
            </fieldset>
        </div>
        
        <div class="form-group">
            <fieldset>
                <legend>Account Type:</legend>
                
                <label>
                    <input type="radio" name="accountType" value="personal" required>
                    Personal Account
                </label>
                
                <label>
                    <input type="radio" name="accountType" value="business" required>
                    Business Account
                </label>
                
                <label>
                    <input type="radio" name="accountType" value="nonprofit" required>
                    Non-profit Organization
                </label>
            </fieldset>
        </div>
    </fieldset>
    
    <!-- File upload with label -->
    <div class="form-group">
        <label for="profileImage">Profile Picture:</label>
        <input type="file" id="profileImage" name="profileImage" 
               accept=".jpg,.jpeg,.png" aria-describedby="imageHelp">
        <small id="imageHelp">Accepted formats: JPG, JPEG, PNG. Max size: 2MB.</small>
    </div>
    
    <!-- Form submission -->
    <div class="form-actions">
        <button type="submit">Update Profile</button>
        <button type="reset">Reset Changes</button>
    </div>
</form>`
  },

  "Buttons": {
    name: "Buttons",
    description: "HTML button elements provide interactive controls for user actions and form submissions.",
    theory: `Buttons are essential interactive elements in web interfaces:

Button types:
• button: Generic clickable button
• submit: Submits form data
• reset: Resets form to initial state
• Custom buttons with JavaScript events

Implementation options:
• <button> element (recommended)
• <input type="button/submit/reset">
• <a> styled as button (for navigation)

Accessibility considerations:
• Use semantic button elements
• Provide clear, descriptive text
• Ensure keyboard navigation works
• Use ARIA labels when necessary
• Consider focus states and contrast

Best practices:
• Use button for actions, links for navigation
• Provide visual feedback on interaction
• Make buttons large enough for touch devices
• Use consistent styling across site`,
    syntax: `<!-- Basic button element -->
<button type="button">Click Me</button>

<!-- Form submission buttons -->
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>

<!-- Input-based buttons -->
<input type="button" value="Click Me">
<input type="submit" value="Submit">
<input type="reset" value="Reset">

<!-- Button with attributes -->
<button type="button" id="myButton" class="primary" disabled>
    Disabled Button
</button>`,
    example: `<form action="/order" method="POST">
    <h2>Order Confirmation</h2>
    
    <!-- Product selection -->
    <fieldset>
        <legend>Select Products</legend>
        
        <label>
            <input type="checkbox" name="products" value="laptop">
            Laptop - $999
        </label>
        
        <label>
            <input type="checkbox" name="products" value="mouse">
            Wireless Mouse - $29
        </label>
        
        <label>
            <input type="checkbox" name="products" value="keyboard">
            Mechanical Keyboard - $149
        </label>
    </fieldset>
    
    <!-- Action buttons with different purposes -->
    <div class="button-group">
        <!-- Primary action button -->
        <button type="submit" class="btn-primary">
            Place Order
        </button>
        
        <!-- Secondary action button -->
        <button type="button" class="btn-secondary" onclick="calculateTotal()">
            Calculate Total
        </button>
        
        <!-- Reset button -->
        <button type="reset" class="btn-outline">
            Clear Selections
        </button>
        
        <!-- Cancel button (navigation) -->
        <button type="button" class="btn-danger" onclick="window.history.back()">
            Cancel Order
        </button>
    </div>
</form>

<!-- Interactive buttons outside forms -->
<div class="interactive-demo">
    <h3>Interactive Button Examples</h3>
    
    <!-- Toggle button -->
    <button type="button" id="toggleBtn" onclick="toggleTheme()">
        🌙 Switch to Dark Mode
    </button>
    
    <!-- Counter button -->
    <div class="counter">
        <button type="button" onclick="decrement()">-</button>
        <span id="count">0</span>
        <button type="button" onclick="increment()">+</button>
    </div>
    
    <!-- Modal trigger button -->
    <button type="button" onclick="openModal()" aria-haspopup="dialog">
        Open Settings
    </button>
    
    <!-- Download button -->
    <button type="button" onclick="downloadFile()">
        📥 Download Report
    </button>
    
    <!-- Loading button with state -->
    <button type="button" id="loadBtn" onclick="loadData()">
        <span class="btn-text">Load Data</span>
        <span class="btn-spinner" style="display: none;">Loading...</span>
    </button>
    
    <!-- Disabled button with explanation -->
    <button type="button" disabled title="Complete the form to enable this button">
        Submit Application
    </button>
    
    <!-- Button with icon and text -->
    <button type="button" class="btn-icon">
        <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Add New Item
    </button>
</div>

<script>
// Example JavaScript for button interactions
let count = 0;
let isDarkMode = false;

function increment() {
    count++;
    document.getElementById('count').textContent = count;
}

function decrement() {
    count--;
    document.getElementById('count').textContent = count;
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const btn = document.getElementById('toggleBtn');
    btn.textContent = isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode';
    document.body.classList.toggle('dark-mode');
}

function calculateTotal() {
    // Calculate order total logic
    alert('Total calculation would happen here');
}

function openModal() {
    alert('Modal would open here');
}

function downloadFile() {
    alert('File download would start here');
}

function loadData() {
    const btn = document.getElementById('loadBtn');
    const text = btn.querySelector('.btn-text');
    const spinner = btn.querySelector('.btn-spinner');
    
    btn.disabled = true;
    text.style.display = 'none';
    spinner.style.display = 'inline';
    
    // Simulate loading
    setTimeout(() => {
        btn.disabled
        text.style.display = 'inline';
        spinner.style.display = 'none';
    }, 2000);
}
</script>`
  },

  "Form Validation": {
    name: "Form Validation",
    description: "HTML5 form validation provides built-in client-side validation for better user experience and data quality.",
    theory: `Form validation ensures data quality and improves user experience:

HTML5 validation features:
• Built-in validation for input types
• Required attribute for mandatory fields
• Pattern attribute for custom validation
• Min/max attributes for numbers and dates
• Custom validation messages
• CSS pseudo-classes for styling states

Validation states:
• :valid - field contains valid data
• :invalid - field contains invalid data
• :required - field is required
• :optional - field is optional

JavaScript validation:
• Custom validation logic
• Real-time validation feedback
• Form submission prevention
• Better user experience

Best practices:
• Combine client and server-side validation
• Provide clear error messages
• Validate on appropriate events
• Don't rely solely on client-side validation`,
    syntax: `<!-- Required field validation -->
<input type="text" name="username" required>

<!-- Email validation -->
<input type="email" name="email" required>

<!-- Pattern validation -->
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">

<!-- Number range validation -->
<input type="number" min="1" max="100" required>

<!-- Length validation -->
<input type="text" minlength="8" maxlength="20" required>

<!-- Custom validation message -->
<input type="email" required 
       oninvalid="this.setCustomValidity('Please enter a valid email')"
       oninput="this.setCustomValidity('')">`,
    example: `<!-- Registration form with validation -->
<form id="registrationForm" novalidate>
    <div class="form-group">
        <label for="username">Username *</label>
        <input type="text" id="username" name="username" required
               minlength="3" maxlength="20"
               pattern="[a-zA-Z0-9_]+"
               title="Username must be 3-20 characters, letters, numbers, and underscores only">
        <div class="error-message" id="usernameError"></div>
    </div>
    
    <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" required>
        <div class="error-message" id="emailError"></div>
    </div>
    
    <div class="form-group">
        <label for="password">Password *</label>
        <input type="password" id="password" name="password" required
               minlength="8"
               pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}"
               title="Password must be at least 8 characters with uppercase, lowercase, number, and special character">
        <div class="error-message" id="passwordError"></div>
    </div>
    
    <div class="form-group">
        <label for="age">Age *</label>
        <input type="number" id="age" name="age" required
               min="13" max="120">
        <div class="error-message" id="ageError"></div>
    </div>
    
    <div class="form-group">
        <label>
            <input type="checkbox" id="terms" name="terms" required>
            I agree to the Terms of Service *
        </label>
        <div class="error-message" id="termsError"></div>
    </div>
    
    <button type="submit">Create Account</button>
</form>

/* CSS for validation styling */
input:valid { border-color: #28a745; }
input:invalid { border-color: #dc3545; }
.error-message { color: #dc3545; font-size: 0.875rem; }`
  },

  // CSS Topics - Complete Coverage
  "CSS Syntax": {
    name: "CSS Syntax",
    description: "Understanding the fundamental syntax and structure of CSS rules and declarations.",
    theory: `CSS syntax consists of selectors, properties, and values organized into rules:

Basic structure:
• Selector: targets HTML elements
• Declaration block: contains style rules
• Property: aspect to style (color, font-size, etc.)
• Value: how to style the property
• Semicolon: separates declarations
• Curly braces: enclose declaration block

Comments in CSS:
• Use /* comment */ format
• Can span multiple lines
• Help document your styles
• Ignored by browser

Best practices:
• Use consistent indentation
• Organize properties logically
• Group related rules together
• Use meaningful class and ID names`,
    syntax: `/* CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Examples */
h1 {
    color: blue;
    font-size: 24px;
}

.my-class {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
}

#unique-id {
    width: 100%;
    text-align: center;
}`,
    example: `/* Complete CSS example with various syntax elements */

/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element selectors */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
}

h1, h2, h3 {
    margin-bottom: 1rem;
    font-weight: bold;
}

/* Class selectors */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

/* ID selectors */
#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
}

#navigation {
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e0e0e0;
    z-index: 1000;
}

/* Multiple selectors */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    color: #2c3e50;
}

/* Descendant selectors */
.card p {
    margin-bottom: 1rem;
    color: #666;
}

.navigation ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

.navigation ul li {
    margin: 0 1rem;
}

/* Comments for organization */
/* =================================
   UTILITY CLASSES
   ================================= */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 2rem; }

/* =================================
   RESPONSIVE DESIGN
   ================================= */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    .btn {
        width: 100%;
        text-align: center;
    }
}`
  },

  "Properties": {
    name: "Properties",
    description: "CSS properties define what aspect of an element to style, from colors to layout to animations.",
    theory: `CSS properties control different aspects of element appearance and behavior:

Text properties:
• color: text color
• font-family: typeface
• font-size: text size
• font-weight: text thickness
• text-align: horizontal alignment
• text-decoration: underlines, strikethrough

Box properties:
• width, height: element dimensions
• padding: inner spacing
• margin: outer spacing
• border: element outline
• background: element background

Layout properties:
• display: element type (block, inline, flex)
• position: positioning method
• float: text wrapping
• z-index: stacking order

Visual effects:
• opacity: transparency
• transform: 2D/3D transformations
• transition: smooth property changes
• animation: keyframe animations`,
    syntax: `/* Text properties */
color: red;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;

/* Box properties */
width: 300px;
height: 200px;
padding: 20px;
margin: 10px;
border: 1px solid black;
background-color: lightblue;

/* Layout properties */
display: flex;
position: relative;
float: left;
z-index: 10;

/* Effects */
opacity: 0.8;
transform: rotate(45deg);
transition: all 0.3s ease;`,
    example: `/* Comprehensive example showcasing various CSS properties */

/* Typography properties */
.heading {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    text-transform: uppercase;
    color: #2c3e50;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* Box model properties */
.card {
    width: 350px;
    max-width: 100%;
    height: auto;
    min-height: 200px;
    padding: 2rem;
    margin: 1rem auto;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background-color: #ffffff;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Layout properties */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
}

/* Positioning properties */
.sticky-nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.floating-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
}

/* Visual effect properties */
.interactive-element {
    opacity: 0.9;
    transform: translateY(0) scale(1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    filter: brightness(1) contrast(1);
}

.interactive-element:hover {
    opacity: 1;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    filter: brightness(1.1) contrast(1.1);
}

/* Animation properties */
.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Responsive properties */
.responsive-text {
    font-size: clamp(1rem, 4vw, 3rem);
    line-height: clamp(1.2, 1.5, 1.8);
}

.responsive-container {
    width: min(90%, 1200px);
    padding: clamp(1rem, 5vw, 3rem);
}

/* Modern CSS properties */
.modern-card {
    aspect-ratio: 16/9;
    container-type: inline-size;
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(209, 213, 219, 0.3);
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`
  },

  "Values": {
    name: "Values",
    description: "CSS values specify how properties should be styled, including units, colors, and keywords.",
    theory: `CSS values come in different types and formats:

Length units:
• Absolute: px, pt, in, cm, mm
• Relative: em, rem, %, vh, vw, vmin, vmax
• Modern: ch, ex, fr, svw, lvh

Color values:
• Keywords: red, blue, transparent
• Hex: #ff0000, #f00
• RGB: rgb(255, 0, 0), rgba(255, 0, 0, 0.5)
• HSL: hsl(0, 100%, 50%), hsla(0, 100%, 50%, 0.5)

Keywords:
• Global: inherit, initial, unset, revert
• Property-specific: auto, none, center
• Special: currentColor, transparent

Functions:
• calc(): mathematical calculations
• url(): external resources
• var(): CSS custom properties
• min(), max(), clamp(): responsive values`,
    syntax: `/* Length values */
width: 100px;          /* absolute pixel */
height: 50%;           /* relative percentage */
font-size: 1.2em;      /* relative to parent */
margin: 2rem;          /* relative to root font-size */
padding: 5vh;          /* relative to viewport height */

/* Color values */
color: red;                    /* keyword */
background: #3498db;           /* hex */
border-color: rgb(52, 152, 219);  /* rgb */
box-shadow: 0 0 10px rgba(0,0,0,0.3);  /* rgba */
outline-color: hsl(204, 70%, 53%);      /* hsl */

/* Keywords */
display: block;
position: relative;
margin: auto;
text-align: center;

/* Functions */
width: calc(100% - 40px);
background-image: url('image.jpg');
color: var(--primary-color);
font-size: clamp(1rem, 4vw, 3rem);`,
    example: `/* Comprehensive example of CSS values */

:root {
    /* CSS Custom Properties (variables) */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --text-dark: #2c3e50;
    --text-light: #ecf0f1;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

/* Length units examples */
.length-examples {
    /* Absolute units */
    width: 320px;              /* pixels */
    height: 2in;               /* inches */
    border-width: 1pt;         /* points */
    
    /* Relative units */
    font-size: 1.5rem;         /* relative to root font size */
    line-height: 1.6em;        /* relative to element font size */
    padding: 5%;               /* percentage of parent */
    margin: 2ch;               /* character width */
    
    /* Viewport units */
    min-height: 100vh;         /* viewport height */
    max-width: 90vw;           /* viewport width */
    gap: 5vmin;                /* smaller viewport dimension */
}

/* Color value examples */
.color-examples {
    /* Named colors */
    color: darkslateblue;
    border-color: transparent;
    
    /* Hex colors */
    background-color: #ffffff;    /* white */
    outline-color: #f39c12;       /* orange */
    
    /* RGB colors */
    box-shadow: 0 0 20px rgb(231, 76, 60);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    /* HSL colors */
    background: hsl(200, 70%, 50%);
    border: 3px solid hsla(120, 60%, 40%, 0.8);
    
    /* Modern color functions */
    background: color-mix(in srgb, var(--primary-color) 70%, white);
}

/* Function values */
.function-examples {
    /* calc() for calculations */
    width: calc(100% - 4rem);
    height: calc(100vh - 200px);
    font-size: calc(1rem + 0.5vw);
    
    /* min(), max(), clamp() for responsive design */
    width: min(90%, 1200px);
    font-size: max(1rem, 3vw);
    padding: clamp(1rem, 5%, 3rem);
    
    /* url() for external resources */
    background-image: url('../images/pattern.svg');
    cursor: url('custom-cursor.cur'), pointer;
    
    /* var() for custom properties */
    color: var(--primary-color);
    background: var(--secondary-color, #fallback);
    border-radius: var(--border-radius);
    
    /* Multiple backgrounds */
    background: 
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30.5%, rgba(255,255,255,0.1) 70%, transparent 70.5%),
        url('texture.jpg'),
        var(--primary-color);
}

/* Keyword values */
.keyword-examples {
    /* Global keywords */
    margin: auto;                /* centers block elements */
    color: inherit;              /* inherits from parent */
    background: initial;         /* browser default */
    
    /* Property-specific keywords */
    display: none;               /* hides element */
    position: static;            /* normal flow */
    overflow: hidden;            /* clips content */
    text-align: center;          /* centers text */
    
    /* Special keywords */
    color: currentColor;         /* current text color */
    background: transparent;     /* see-through */
}

/* Advanced value combinations */
.advanced-values {
    /* Complex background */
    background: 
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
        linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    
    /* Complex transform */
    transform: 
        translateX(calc(50vw - 50%)) 
        rotate(45deg) 
        scale(1.2) 
        skew(5deg);
    
    /* Complex animation timing */
    animation: 
        slideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
        fadeIn 0.6s ease-in-out 0.2s both;
    
    /* Complex box shadow (multiple shadows) */
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12),
        0 1px 2px rgba(0,0,0,0.24),
        inset 0 0 0 1px rgba(255,255,255,0.1);
    
    /* Complex filter effects */
    filter: 
        brightness(1.1) 
        contrast(1.2) 
        saturate(1.3) 
        drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

/* Container queries with values */
@container (min-width: 400px) {
    .card {
        padding: clamp(1rem, 4cqi, 3rem);
        font-size: max(1rem, 2.5cqi);
    }
}`
  },

  "Colors": {
    name: "Colors",
    description: "CSS provides multiple ways to specify colors for styling elements.",
    theory: `CSS offers several color systems and formats:

Color formats:
• Named colors: 147 predefined color names
• Hex notation: #RRGGBB or #RGB format
• RGB: Red, Green, Blue values (0-255)
• RGBA: RGB with alpha (transparency)
• HSL: Hue, Saturation, Lightness
• HSLA: HSL with alpha transparency

Color keywords:
• transparent: completely see-through
• currentColor: inherits text color
• inherit: uses parent element's color
• initial: browser default color

Color accessibility:
• Contrast ratios for readability
• Color blindness considerations
• Dark mode compatibility
• Sufficient color differentiation

Modern color features:
• CSS custom properties for color themes
• color-mix() for color blending
• Relative color syntax
• Wide gamut color spaces`,
    syntax: `/* Named colors */
color: red;
background-color: lightblue;
border-color: transparent;

/* Hex colors */
color: #FF0000;        /* red */
background: #3498DB;   /* blue */
border: #FFF;          /* white (shorthand) */

/* RGB colors */
color: rgb(255, 0, 0);              /* red */
background: rgba(52, 152, 219, 0.8); /* blue with transparency */

/* HSL colors */
color: hsl(0, 100%, 50%);           /* red */
background: hsla(210, 70%, 53%, 0.9); /* blue with transparency */

/* Special keywords */
color: currentColor;
background: transparent;
border-color: inherit;`,
    example: `/* Complete color system example */

:root {
    /* Color palette using different formats */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* Semantic color names */
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    --color-info: #06b6d4;
    
    /* Neutral colors */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Theme colors with transparency */
    --background-primary: rgba(255, 255, 255, 0.95);
    --background-secondary: rgba(248, 250, 252, 0.8);
    --text-primary: rgba(15, 23, 42, 0.9);
    --text-secondary: rgba(71, 85, 105, 0.8);
}

/* Named color examples */
.named-colors {
    color: darkslateblue;
    background-color: lavender;
    border: 2px solid mediumseagreen;
    outline-color: coral;
}

/* Hex color examples */
.hex-colors {
    /* Full hex notation */
    background: #ff6b6b;
    color: #ffffff;
    border-top: 3px solid #4ecdc4;
    
    /* Short hex notation */
    box-shadow: 0 0 10px #333;
    text-shadow: 1px 1px 2px #000;
}

/* RGB color examples */
.rgb-colors {
    /* Basic RGB */
    background-color: rgb(255, 107, 107);
    color: rgb(255, 255, 255);
    
    /* RGBA with transparency */
    background: rgba(78, 205, 196, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* HSL color examples */
.hsl-colors {
    /* Basic HSL */
    background-color: hsl(354, 100%, 82%);  /* red */
    color: hsl(0, 0%, 20%);                 /* dark gray */
    
    /* HSLA with transparency */
    background: hsla(174, 72%, 56%, 0.9);   /* teal */
    border: 2px solid hsla(240, 100%, 50%, 0.5); /* blue */
}

/* Color theme system */
.light-theme {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --border-color: #e2e8f0;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

.dark-theme {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --border-color: #334155;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Using theme colors */
.themed-component {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px var(--shadow-color);
}

/* Gradient combinations */
.gradient-examples {
    /* Linear gradients */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    
    /* Radial gradients */
    background: radial-gradient(circle, #ff6b6b 0%, #4ecdc4 100%);
    
    /* Complex multi-stop gradient */
    background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 50%,
        #f093fb 100%
    );
    
    /* Conic gradient */
    background: conic-gradient(
        from 0deg,
        red 0deg 60deg,
        yellow 60deg 120deg,
        green 120deg 180deg,
        cyan 180deg 240deg,
        blue 240deg 300deg,
        magenta 300deg 360deg
    );
}

/* Color accessibility examples */
.accessible-colors {
    /* High contrast for readability */
    background: #ffffff;
    color: #2d3748;              /* WCAG AA compliant */
    
    /* Link colors with sufficient contrast */
    --link-color: #2b6cb0;       /* Blue with good contrast */
    --link-visited: #553c9a;     /* Purple for visited links */
    --link-hover: #2c5282;       /* Darker blue on hover */
}

/* Modern color features */
.modern-colors {
    /* Color mixing (future CSS) */
    background: color-mix(in srgb, #ff0000 30%, #0000ff);
    
    /* Relative color syntax (future CSS) */
    --accent: from var(--primary-color) srgb r g b / 0.8;
    
    /* Using currentColor for consistency */
    border: 2px solid currentColor;
    outline-color: currentColor;
}

/* Color animation */
.color-animation {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-size: 300% 300%;
    animation: colorShift 4s ease-in-out infinite;
}

@keyframes colorShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Color states for interactive elements */
.interactive {
    background: var(--primary-500);
    color: white;
    transition: all 0.2s ease;
}

.interactive:hover {
    background: var(--primary-600);
    transform: translateY(-1px);
}

.interactive:active {
    background: var(--primary-700);
    transform: translateY(0);
}

.interactive:focus {
    outline: 2px solid var(--primary-300);
    outline-offset: 2px;
}`
  },

  "Box Model": {
    name: "Box Model",
    description: "The CSS box model describes how elements are structured with content, padding, border, and margin.",
    theory: `The CSS box model is fundamental to understanding layout and spacing:

Box model components (from inside out):
• Content: actual text/images
• Padding: space between content and border
• Border: outline around padding
• Margin: space outside border

Box-sizing property:
• content-box (default): width/height applies to content only
• border-box: width/height includes padding and border
• Padding and border are added to specified dimensions

Visual debugging:
• Use browser dev tools to visualize box model
• * { border: 1px solid red; } shows all boxes
• outline doesn't affect layout (unlike border)

Common issues:
• Margin collapse between adjacent elements
• Padding vs margin usage
• Box-sizing affecting calculations`,
    syntax: `/* Box model properties */
width: 300px;
height: 200px;
padding: 20px;
border: 2px solid black;
margin: 10px;

/* Individual sides */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;

/* Shorthand notation */
padding: 10px 15px;        /* top/bottom left/right */
margin: 10px 15px 20px 5px; /* top right bottom left */

/* Box sizing */
box-sizing: border-box;    /* includes padding/border in width */
box-sizing: content-box;   /* default, width is content only */`,
    example: `/* Box model comprehensive example */

    /* Reset for consistent box model */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    */`,
  },

  // Auto-generated stubs for missing topics
  "API Calls": {
    name: "API Calls",
    description: "",
    theory: "",
    syntax: "",
    example: ""
  },
  "ARIA Labels": {
    name: "ARIA Labels",
    description: "",
    theory: "",
    syntax: "",
    example: ""
  },
  "Advanced Selectors": {
    name: "Advanced Selectors",
    description: "",
    theory: "",
    syntax: "",
    example: ""
  },

  // Continue adding more topics...
  "Java Basics": {
    name: "Java Basics",
    description: "Java is a popular, object-oriented programming language known for its 'write once, run anywhere' philosophy.",
    theory: `Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It's designed to be platform-independent through the Java Virtual Machine (JVM).

Key characteristics:
• Object-oriented: Everything is based on objects and classes
• Platform-independent: Compiled to bytecode, runs on JVM
• Strongly typed: Variables must be declared with specific types
• Automatic memory management: Garbage collection handles memory
• Rich standard library: Extensive built-in functionality

Java program structure:
• Source code in .java files
• Compiled to .class files (bytecode)
• Executed by JVM
• Every application needs a main() method as entry point

Basic syntax rules:
• Case-sensitive
• Statements end with semicolons
• Code blocks enclosed in curly braces
• Comments: // for single line, /* */ for multi-line`,
    syntax: `// Declaration
let variableName;
const CONSTANT_NAME = value;

// Declaration with assignment
let message = "Hello";
const PI = 3.14159;

// Multiple declarations
let a, b, c;
let x = 1, y = 2, z = 3;`,
    example: `// Complete Java program
public class HelloWorld {
    // Main method - entry point of the program
    public static void main(String[] args) {
        // Variable declarations
        String greeting = "Hello, Java!";
        int year = 2024;
        double version = 17.0;
        boolean isRunning = true;
        
        // Output to console
        System.out.println(greeting);
        System.out.println("Year: " + year);
        System.out.println("Java version: " + version);
        System.out.println("Program running: " + isRunning);
        
        // Method call
        displayMessage("Welcome to Java programming!");
    }
    
    // Custom method
    public static void displayMessage(String message) {
        System.out.println("Message: " + message);
    }
}`
  },

  "Classes and Objects": {
    name: "Classes and Objects",
    description: "Classes are blueprints for creating objects, and objects are instances of classes that contain data and methods.",
    theory: `Object-Oriented Programming (OOP) in Java is based on classes and objects.

Classes:
• Blueprints or templates for creating objects
• Define attributes (fields) and behaviors (methods)
• Use 'class' keyword to define
• Should start with capital letter (convention)

Objects:
• Instances of classes
• Created using 'new' keyword
• Have their own copy of instance variables
• Can call methods defined in their class

Key concepts:
• Encapsulation: Hide internal details, expose through methods
• Constructor: Special method to initialize objects
• this keyword: Refers to current object instance
• Access modifiers: public, private, protected, package-private

Instance vs Static:
• Instance members: Belong to specific object instances
• Static members: Belong to the class itself, shared by all instances`,
    syntax: `// Class definition
public class ClassName {
    // Fields (attributes)
    private dataType fieldName;
    
    // Constructor
    public ClassName(parameters) {
        this.fieldName = value;
    }
    
    // Methods
    public returnType methodName(parameters) {
        return value;
    }
}

// Creating objects
ClassName objectName = new ClassName(arguments);`,
    example: `// Person class definition
public class Person {
    // Private fields (encapsulation)
    private String name;
    private int age;
    private String email;
    
    // Constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    
    // Behavior method
    public void introduce() {
        System.out.println("Hi, I'm " + name + ", " + age + " years old.");
    }
    
    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}

// Using the class
public class Main {
    public static void main(String[] args) {
        // Create objects
        Person person1 = new Person("Alice", 25, "alice@example.com");
        Person person2 = new Person("Bob", 30, "bob@example.com");
        
        // Use objects
        person1.introduce();
        person2.introduce();
        
        // Modify object state
        person1.setAge(26);
        System.out.println(person1.toString());
    }
}`
  },

  // Python Topics
  "Python Syntax": {
    name: "Python Syntax",
    description: "Python syntax is clean and readable, using indentation to define code blocks and emphasizing simplicity.",
    theory: `Python is known for its clean, readable syntax that emphasizes code clarity and simplicity.

Key syntax features:
• Indentation defines code blocks (no curly braces)
• No semicolons needed at end of lines
• Dynamic typing: Variables don't need type declarations
• Case-sensitive: 'name' and 'Name' are different
• Snake_case naming convention for variables and functions

Indentation rules:
• Use consistent indentation (4 spaces recommended)
• All statements in same block must have same indentation
• Python will raise IndentationError for incorrect indentation

Comments:
• Single line: # This is a comment
• Multi-line: Triple quotes """ or '''

Python philosophy (The Zen of Python):
• Beautiful is better than ugly
• Explicit is better than implicit
• Simple is better than complex
• Readability counts`,
    syntax: `# Variable assignment
variable_name = value

# Function definition
def function_name(parameters):
    """Optional docstring"""
    # Indented code block
    return value

# Conditional statements
if condition:
    # Indented code
    pass
elif another_condition:
    # Indented code
    pass
else:
    # Indented code
    pass

# Loops
for item in iterable:
    # Indented code
    pass

while condition:
    # Indented code
    pass`,
    example: `# Python program demonstrating syntax
def greet_user(name, age=None):
    """
    Greets a user with their name and optionally their age.
    
    Args:
        name (str): The user's name
        age (int, optional): The user's age
    
    Returns:
        str: A greeting message
    """
    greeting = f"Hello, {name}!"
    
    if age is not None:
        if age < 18:
            greeting += " You're quite young!"
        elif age >= 65:
            greeting += " Respect your elders!"
       
        else:
            greeting += " Nice to meet you!"
    
    return greeting

# Variables and function calls
user_name = "Alice"
user_age = 25

# Function call
message = greet_user(user_name, user_age)
print(message)

# List and loop
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    square = num ** 2
    print(f"{num} squared is {square}")

# Dictionary example
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}

for key, value in person.items():
    print(f"{key}: {value}")`
  },

  "Data Types": {
    name: "Data Types",
    description: "Python has several built-in data types for storing different kinds of information, from numbers to complex data structures.",
    theory: `Python has several built-in data types that are used to store different kinds of data.

Numeric types:
• int: Whole numbers (unlimited precision)
• float: Decimal numbers (64-bit precision)
• complex: Complex numbers with real and imaginary parts

Text type:
• str: String of characters, immutable

Boolean type:
• bool: True or False values

Sequence types:
• list: Ordered, mutable collection [1, 2, 3]
• tuple: Ordered, immutable collection (1, 2, 3)
• range: Sequence of numbers range(5)

Mapping type:
• dict: Key-value pairs {"key": "value"}

Set types:
• set: Unordered collection of unique items {1, 2, 3}
• frozenset: Immutable set

Type checking:
• type() function returns the type of an object
• isinstance() checks if object is instance of specific type`,
    syntax: `# Numbers
integer = 42
floating_point = 3.14159
complex_number = 3 + 4j

# Strings
single_quotes = 'Hello'
double_quotes = "World"
multi_line = """This is a
multi-line string"""

# Boolean
is_true = True
is_false = False

# Collections
my_list = [1, 2, 3, 'mixed', True]
my_tuple = (1, 2, 3)
my_dict = {'key': 'value', 'number': 42}
my_set = {1, 2, 3, 3, 4, 4, 5}  # Duplicates removed

# Type checking
print(type(variable))
print(isinstance(variable, int))`,
    example: `# Demonstrating Python data types

# Numbers
age = 25                    # int
height = 5.9               # float
temperature = -10          # int (negative)
pi = 3.14159              # float
scientific = 1.5e-4       # float (scientific notation)

print(f"Age: {age} (type: {type(age).__name__})")
print(f"Height: {height} (type: {type(height).__name__})")

# Strings
name = "Alice Johnson"
quote = 'She said, "Hello!"'
paragraph = """This is a long
paragraph that spans
multiple lines."""

print(f"Name length: {len(name)}")
print(f"Uppercase name: {name.upper()}")

# Lists (mutable)
fruits = ['apple', 'banana', 'orange']
fruits.append('grape')
fruits[0] = 'pear'  # Modify existing item
print(f"Fruits: {fruits}")

# Tuples (immutable)
coordinates = (10, 20)
rgb_color = (255, 128, 0)
print(f"Coordinates: {coordinates}")

# Dictionaries
student = {
    'name': 'Bob',
    'age': 20,
    'grades': [85, 92, 78],
    'is_enrolled': True
}

print(f"Student name: {student['name']}")
print(f"Average grade: {sum(student['grades']) / len(student['grades'])}")

# Sets (unique values)
unique_numbers = {1, 2, 3, 3, 4, 4, 5}
print(f"Unique numbers: {unique_numbers}")  # {1, 2, 3, 4, 5}

# Type conversions
number_as_string = "42"
string_as_number = int(number_as_string)
print(f"Converted: {string_as_number} (type: {type(string_as_number).__name__})")`
  }
};

export default topicData;