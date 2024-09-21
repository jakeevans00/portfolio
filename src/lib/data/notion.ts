export const notes = [
  {
    id: "107585bf-0976-80be-bd03-fc6fd27a95d2",
    dateCreated: "2024-09-19",
    icon: "📜",
    title:
      "Oracle’s Netsuite: 2 Months of Shameless, Self-Guided Reverse Engineering",
    description:
      "My thoughts and takeaways from working in Oracle’s Netsuite ERP",
    urlPath: "netsuite-first-impressions",
    tags: ["Javascript", "API", "Review"],
    blocks: [
      {
        component: "Heading1",
        text: "10,000 ft view",
      },
      {
        component: "Paragraph",
        text: "This is a great piece of code to study as a newer-than-many-if-not-most software engineer such as myself. Examples, good and bad, abound in this product, making work interesting and educational on most days. I’ll use this article as an opportunity to explore some thoughts, and write down the stuff I might want to remember later. ",
      },
      {
        component: "Heading1",
        text: "Why am I here?",
      },
      {
        component: "Paragraph",
        text: "As a college student and an aspiring 10x senior software engineer, I find myself drawn to complex systems like NetSuite. Joking of course, I started working with it out of necessity.",
      },
      {
        component: "Paragraph",
        text: "I currently work part-time at a mid-size finance company that manages their books, employee records, and transaction data in Netsuite. Alas, they are short on staff that are capable of scripting and connecting various systems together, which is where I come in. I have started to transplant Advanced Customer support. For better or worse, my customizations have made me familiar with the tool and the in-house technical consultant for the product.",
      },
      {
        component: "Heading1",
        text: "What is NetSuite?",
      },
      {
        component: "Paragraph",
        text: "At its core, NetSuite is a cloud-based ERP system that helps businesses manage everything from finances to customer relationships. It’s a massive tool, and because of its scale, it’s easy to get lost in the thousands of features and configurations. Customizations are generally best avoided, but in my case, what’s done is done - my company began tweaking settings years ago. I’m just here to keep things in one piece. And if you know JavaScript and SQL, you have pretty much everything you need to pop the hood and get tweaking. ",
      },
      {
        component: "Heading1",
        text: "The Good, the Bad, and the Ugly",
      },
      {
        component: "Heading2",
        text: "The Good:",
      },
      {
        component: "BulletedListItem",
        text: "Learning Opportunities:",
      },
      {
        component: "BulletedListItem",
        text: "The Debugger: ",
      },
      {
        component: "Heading2",
        text: "The Bad:",
      },
      {
        component: "BulletedListItem",
        text: "Documentation:",
      },
      {
        component: "Heading2",
        text: "The Ugly:",
      },
      {
        component: "BulletedListItem",
        text: "Legacy Code:",
      },
      {
        component: "Heading1",
        text: "Final Thoughts",
      },
      {
        component: "Paragraph",
        text: "More to come, that’s for sure. I’m hoping to attach articles that have helped me, review Netsuite’s official courses (which I have yet to take), and attach some code snippets of cool stuff I’ve found. Until then, cya!",
      },
    ],
  },
  {
    id: "f2492571-76f8-413e-9eaa-a720af016889",
    dateCreated: "2024-09-19",
    icon: "📤",
    title: "Receiving Email through EmailJS",
    description:
      "What I learned from using EmailJS in my project. How to do it and when you shouldn’t",
    urlPath: "emailjs",
    tags: ["API", "Fullstack", "Tutorial"],
    blocks: [
      {
        component: "Heading1",
        text: "Overview",
      },
      {
        component: "Paragraph",
        text: "The first time I built a portfolio (a few years ago), I shied away from adding mail server functionality to my app. I incorrectly assumed that using a frontend framework like React (as opposed to Express, Nest, etc) would make it impossible to securely connect to an email service. Turns out I was wrong! (Not the first time)",
      },
      {
        component: "Heading3",
        text: "What is EmailJS?",
      },
      {
        component: "Paragraph",
        text: "EmailJS is a service that allows you to send emails directly from your JavaScript code without the need for a backend server. It leverages email templates and a straightforward API that can pretty much be tossed into any application.",
      },
      {
        component: "Heading1",
        text: "Tutorial",
      },
      {
        component: "Heading3",
        text: "Step 1: Set Up Your EmailJS Account",
      },
      {
        component: "NumberedListItem",
        text: "Create an Account: Sign up for a free EmailJS account at EmailJS.",
      },
      {
        component: "NumberedListItem",
        text: 'Create an Email Service: Once you’re logged in, navigate to the "Email Services" section and add your email provider (like Gmail, Outlook, etc.).',
      },
      {
        component: "NumberedListItem",
        text: 'Create a Template: Go to the "Email Templates" section and set up a new email template. Define the subject and body, and use placeholders for dynamic content (e.g., {{name}}, {{message}}).',
      },
      {
        component: "NumberedListItem",
        text: 'Get Your User ID: You\'ll need this for authentication. Find it in the "Dashboard" section.',
      },
      {
        component: "Heading3",
        text: "Step 2: Set Up Your React (or whatever) App",
      },
      {
        component: "Paragraph",
        text: "If you haven't created a React app yet, you can do so using Create React App (or vite if you’re cool):",
      },
      {
        component: "CodeBlock",
        code: "npx create-react-app emailjs-react\ncd emailjs-react",
        language: "shell",
      },
      {
        component: "Heading3",
        text: "Step 3: Install EmailJS SDK",
      },
      {
        component: "Paragraph",
        text: "Install the EmailJS SDK with npm:",
      },
      {
        component: "CodeBlock",
        code: "npm install emailjs-com",
        language: "shell",
      },
      {
        component: "Heading3",
        text: "Step 4: Create the Emal Form Component",
      },
      {
        component: "Paragraph",
        text: "Now, let’s create a form component where visitors can send emails. Create a new file called EmailForm.js:",
      },
      {
        component: "CodeBlock",
        code: '<span class="hljs-comment">// EmailForm.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;\n<span class="hljs-keyword">import</span> emailjs <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;emailjs-com&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-title function_">EmailForm</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">const</span> [name, setName] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n  <span class="hljs-keyword">const</span> [email, setEmail] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n  <span class="hljs-keyword">const</span> [message, setMessage] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n  <span class="hljs-keyword">const</span> [status, setStatus] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">sendEmail</span> = (<span class="hljs-params">e</span>) =&gt; {\n    e.<span class="hljs-title function_">preventDefault</span>();\n\n    <span class="hljs-keyword">const</span> templateParams = {\n      name,\n      email,\n      message,\n    };\n\n    emailjs.<span class="hljs-title function_">send</span>(<span class="hljs-string">&#x27;YOUR_SERVICE_ID&#x27;</span>, <span class="hljs-string">&#x27;YOUR_TEMPLATE_ID&#x27;</span>, templateParams, <span class="hljs-string">&#x27;YOUR_USER_ID&#x27;</span>)\n      .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-title function_">setStatus</span>(<span class="hljs-string">&#x27;Email sent successfully!&#x27;</span>);\n        <span class="hljs-title function_">clearForm</span>();\n      }, <span class="hljs-function">(<span class="hljs-params">err</span>) =&gt;</span> {\n        <span class="hljs-title function_">setStatus</span>(<span class="hljs-string">&#x27;Failed to send email. Please try again.&#x27;</span>);\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);\n      });\n  };\n\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">clearForm</span> = (<span class="hljs-params"></span>) =&gt; {\n    <span class="hljs-title function_">setName</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-title function_">setEmail</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-title function_">setMessage</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n  };\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{sendEmail}</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your Name&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{name}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setName(e.target.value)} required /&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your Email&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{email}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setEmail(e.target.value)} required /&gt;\n      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Your Message&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{message}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(e)</span> =&gt;</span> setMessage(e.target.value)} required&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Send Email<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      {status &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{status}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></span>\n  );\n};\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">EmailForm</span>;',
        language: "javascript",
      },
      {
        component: "Heading3",
        text: "Step 5: Use the Email Form in Your App",
      },
      {
        component: "Paragraph",
        text: "Now, include the EmailForm component in your main application file. Open App.js and import the component:",
      },
      {
        component: "CodeBlock",
        code: '<span class="hljs-comment">// App.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">EmailForm</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./EmailForm&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Contact Us<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">EmailForm</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></span>\n  );\n};\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span>;',
        language: "javascript",
      },
      {
        component: "Heading3",
        text: "Step 6: Test Your Application",
      },
      {
        component: "NumberedListItem",
        text: "Run Your React App: Start your app using:",
      },
      {
        component: "NumberedListItem",
        text: "Open in Browser: Navigate to http://localhost:3000 (or the URL displayed in your terminal).",
      },
      {
        component: "NumberedListItem",
        text: "Fill Out the Form: Test the form by entering your details and sending an email.",
      },
      {
        component: "Heading3",
        text: "Bam, that’s it so good luck and have fun",
      },
    ],
  },
  {
    id: "b256f263-bdda-4a33-90b0-5d9ca64d6f34",
    dateCreated: "2024-09-16",
    icon: "🧑🏽‍💻",
    title: "Notion as a CMS",
    description: "Using Notion as my content source for external applications",
    urlPath: "notion-blog",
    tags: ["API", "Notion", "Tutorial"],
    blocks: [
      {
        component: "Paragraph",
        text: "If you take notes with Notion, this is for you. ",
      },
      {
        component: "Heading1",
        text: "Overview",
      },
      {
        component: "Paragraph",
        text: "You’ve heard of SaaS and PaaS and BaaS. Get ready for the latest and greatest aaS yet - NaaBaaS (Notion as a Backend as a Service). ",
      },
      {
        component: "Heading3",
        text: "Idea",
      },
      {
        component: "Paragraph",
        text: "The idea was simple. Use Notion to power my portfolio’s blog functionality, and make pushing updates as easy as possible. ",
      },
      {
        component: "Paragraph",
        text: "Some of my intuitive ideas were as follows:",
      },
      {
        component: "BulletedListItem",
        text: "Leverage Notion’s built-in deployment capabilities and somehow embed the pages into my site",
      },
      {
        component: "BulletedListItem",
        text: "Use Notion’s API to extract my blog data, and convert JSON to Svelte components",
      },
      {
        component: "BulletedListItem",
        text: "Use a 3rd party library to npm install my way to victory. ",
      },
      {
        component: "Paragraph",
        text: "There are great options for #3. A couple “eh” ones for #1. Of course I opted for #2. ",
      },
      {
        component: "Heading1",
        text: "Steps",
      },
      {
        component: "Heading3",
        text: "Notion Setup",
      },
      {
        component: "NumberedListItem",
        text: "Set up your Notion integration (Menu → Connect To → Manage Connections)",
      },
      {
        component: "Image",
        text: "",
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/db3adc64-2954-4f92-817f-4c257437946a/36faf469-4e4d-41fa-9f05-cbeb093da661/Screenshot_2024-09-20_at_5.08.01_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240921T091419Z&X-Amz-Expires=3600&X-Amz-Signature=97636cf9162f05ed7b3b9da3c711c75e1e5ab1c4573b1db93e66a2bbd7cfd246&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        component: "NumberedListItem",
        text: "Select “Develop or manage integrations”",
      },
      {
        component: "Image",
        text: "",
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/db3adc64-2954-4f92-817f-4c257437946a/d18ae39b-aa7e-4200-b1bc-4fe4706b25c9/Screenshot_2024-09-20_at_5.09.40_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240921T091419Z&X-Amz-Expires=3600&X-Amz-Signature=8fc2ccee86653ae2ccd9dd0f31bac20f5b7444dafe70ee54aab0684cd74739ed&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
      {
        component: "NumberedListItem",
        text: "Name integration, keep internal, and uncheck the box for “make user info available”",
      },
      {
        component: "NumberedListItem",
        text: "Return to the desired database and connect to new integration (Menu → Connect To → <Integration-Name>",
      },
      {
        component: "Heading3",
        text: "Node.js + Typescript",
      },
      {
        component: "Paragraph",
        text: "The next few steps are used to extract and parse the data from your selected database",
      },
      {
        component: "NumberedListItem",
        text: "Initialize a node project npm init -y",
      },
      {
        component: "NumberedListItem",
        text: "Install Notion API and dotenv using npm install @notionhq/client dotenv",
      },
      {
        component: "NumberedListItem",
        text: "Create an entry point file called index.js and create a structure like this 👇🏽",
      },
      {
        component: "CodeBlock",
        code: '<span class="hljs-comment">// index.js (pseudo code)</span>\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Client</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@notionhq/client&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DataFetcher</span>, <span class="hljs-title class_">DataTransformer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lib&quot;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">DATABASE_NAME</span> = <span class="hljs-string">&quot;Example&quot;</span>;\n<span class="hljs-keyword">const</span> notion = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Client</span>({ <span class="hljs-attr">auth</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">API_KEY</span> });\n\n<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {\n\t<span class="hljs-keyword">const</span> fetcher = <span class="hljs-keyword">new</span> <span class="hljs-title class_">DataFetcher</span>(notion, <span class="hljs-variable constant_">DATABASE_NAME</span>);\n\t<span class="hljs-keyword">await</span> fetcher.<span class="hljs-title function_">getDatabaseId</span>();\n  <span class="hljs-keyword">const</span> pages = fetcher.<span class="hljs-title function_">getDatabasePages</span>();\n  <span class="hljs-keyword">await</span> fetcher.<span class="hljs-title function_">saveToFile</span>(pages, outPath);\n  \n  <span class="hljs-keyword">const</span> transformer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">DataTransformer</span>(inputfile);\n\t<span class="hljs-keyword">await</span> transformer.<span class="hljs-title function_">loadPages</span>();\n\t<span class="hljs-keyword">await</span> transformer.<span class="hljs-title function_">parseData</span>();\n\t<span class="hljs-keyword">await</span> transformer.<span class="hljs-title function_">saveTransformedPages</span>(outPath);\n)',
        language: "javascript",
      },
      {
        component: "Paragraph",
        text: "Note: This code is meraly outline and not intended as a working sample.",
      },
      {
        component: "CodeBlock",
        code: '<span class="hljs-comment">// DataFetcher.js</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DataFetcher</span> {\n\tprivate notionClient;\n\tprivate databaseId?;\n\t\n\t<span class="hljs-title function_">constructor</span>(<span class="hljs-params">notion, databaseId?</span>) { ... }\n\t\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">getDatabaseIdFromQuery</span>(<span class="hljs-params">dbName</span>) {\n\t\t<span class="hljs-keyword">try</span> {\n\t\t\t<span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">notion</span>.<span class="hljs-title function_">search</span>({\n\t\t\t\t<span class="hljs-attr">query</span>: query\n\t\t\t\t...\n\t\t\t\t<span class="hljs-comment">// Get from API docs</span>\n\t\t\t\t<span class="hljs-comment">// https://developers.notion.com/reference/post-search</span>\n\t\t\t\t<span class="hljs-variable language_">this</span>.<span class="hljs-property">databaseId</span> = response.<span class="hljs-property">results</span>[<span class="hljs-number">0</span>].<span class="hljs-property">id</span>;\n\t\t\t} <span class="hljs-keyword">catch</span>(err) { }\n\t\t}\n\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">getDatabasePages</span>(<span class="hljs-params"></span>) {\n\t\t<span class="hljs-keyword">try</span> {\n\t\t\t<span class="hljs-keyword">const</span> { results } = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">notion</span>.<span class="hljs-property">databases</span>.<span class="hljs-title function_">query</span>({\n\t\t\t\t<span class="hljs-attr">database_id</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">databaseId</span>,\n\t\t\t});\n\t\t\t\n\t\t\t<span class="hljs-keyword">const</span> { pagesWithBlocks } = <span class="hljs-keyword">await</span> <span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">all</span>(\n\t\t\t\tresults.<span class="hljs-title function_">map</span>(<span class="hljs-title function_">async</span> (page) =&gt; {\n\t\t\t\t\t<span class="hljs-keyword">const</span> blocks = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getBlocks</span>(page.<span class="hljs-property">id</span>);\n\t\t\t\t}\n\t\t\t\t<span class="hljs-keyword">return</span> pagesWithBlocks;\n\t\t\t} <span class="hljs-keyword">catch</span> (err) { }\n\t\t}\n\t\t\n\t\t<span class="hljs-comment">// getBlocks is a helper that uses this API endpoint</span>\n\t\t<span class="hljs-comment">// https://developers.notion.com/reference/get-block-children</span>\n\t\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">saveToFile</span>(<span class="hljs-params">pages, outPath</span>) {\n\t\t<span class="hljs-keyword">await</span> fs.<span class="hljs-title function_">writeFile</span>(outPath, <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(pages, <span class="hljs-literal">null</span>, <span class="hljs-number">2</span>));\n\t}',
        language: "javascript",
      },
      {
        component: "Paragraph",
        text: "The output of the Fetcher class is huge. Just a few pages can quickly generate thousands of lines of JSON code. This is what our Transformer is for",
      },
      {
        component: "CodeBlock",
        code: '<span class="hljs-comment">// DataTransformer.js</span>\n\n<span class="hljs-keyword">class</span> <span class="hljs-title class_">DataTransformer</span> {\n\tprivate inputFile;\n\tprivate pages = [];\n\t\n\t<span class="hljs-title function_">constructor</span>(<span class="hljs-params">inputFile, pages</span>) { ... }\n\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">loadPages</span>(<span class="hljs-params"></span>) {\n\t\t<span class="hljs-keyword">try</span> {\n\t\t\t<span class="hljs-keyword">const</span> data = fs.<span class="hljs-title function_">readFile</span>(...)\n\t\t\t<span class="hljs-variable language_">this</span>.<span class="hljs-property">pages</span> = <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(data);\n\t\t}\n\t}\n\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">transformPages</span>(<span class="hljs-params"></span>) {\n\t\tpages.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> {\n\t\t\t<span class="hljs-keyword">const</span> { <span class="hljs-comment">// destructure what you can }} = page;</span>\n\t\t\t<span class="hljs-keyword">return</span> {\n\t\t\t\t..., \n\t\t\t\t<span class="hljs-attr">blocks</span>: <span class="hljs-title function_">resolveBlocks</span>(children);\n\t\t\t}\n\t\t}\n\t}\n\t\n\t<span class="hljs-keyword">async</span> <span class="hljs-title function_">saveTransformedPages</span>(<span class="hljs-params">outPath</span>) {\n\t\tfs.<span class="hljs-title function_">writeFile</span>(...)\n\t}\n\t\n\tresolveBlocks = <span class="hljs-function">(<span class="hljs-params">blocks</span>) =&gt;</span> {\n\t\t<span class="hljs-keyword">return</span> blocks\n      .<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">block</span>) =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(block.<span class="hljs-property">type</span>);\n        <span class="hljs-keyword">const</span> blockHandler =\n          <span class="hljs-variable language_">this</span>.<span class="hljs-property">blockMap</span>[block.<span class="hljs-property">type</span> <span class="hljs-keyword">as</span> keyof <span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">blockMap</span>];\n        <span class="hljs-keyword">if</span> (blockHandler) {\n          <span class="hljs-keyword">return</span> <span class="hljs-title function_">blockHandler</span>(block);\n        }\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;NOT SUPPORTED:&quot;</span>, block.<span class="hljs-property">type</span>);\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;\n      })\n     }\n     \n   private blockMap = {\n\t   <span class="hljs-attr">paragraph</span>: <span class="hljs-function">(<span class="hljs-params">block</span>) =&gt;</span> { ... },\n\t   <span class="hljs-attr">image</span>: <span class="hljs-function">(<span class="hljs-params">block</span>) =&gt;</span> { ... },\n\t   <span class="hljs-attr">heading_1</span>: <span class="hljs-function">(<span class="hljs-params">block</span>) =&gt;</span> { ... }\n\t   <span class="hljs-comment">// extend as needed</span>\n\t  }\n\t}',
        language: "javascript",
      },
      {
        component: "Heading3",
        text: "Now what?",
      },
      {
        component: "Paragraph",
        text: "If you either cloned my repo or tried to fill in the gaping holes in my pseudo-code (congrats btw), then you are now the proud owner of a clean and intelligible JSON document. The next step is to write a React (or Svelte, Vue, etc) component that can consume the data in the exported format. As an example, I’ll attach my component (Svelte) below:",
      },
      {
        component: "CodeBlock",
        code: '&lt;script lang=<span class="hljs-string">&quot;ts&quot;</span>&gt;\n  <span class="hljs-keyword">const</span> <span class="hljs-title function_">renderBlock</span> = (<span class="hljs-params">block: {\n    component: string;\n    text: string;\n    code: string;\n  }</span>) =&gt; {\n    <span class="hljs-keyword">switch</span> (block.<span class="hljs-property">component</span>) {\n      <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Paragraph&quot;</span>:\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`&lt;p class=&quot;my-1&quot;&gt;<span class="hljs-subst">${block.text}</span>&lt;/p&gt;`</span>;\n      <span class="hljs-keyword">case</span> <span class="hljs-string">&quot;Heading1&quot;</span>:\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`&lt;h1 class=&quot;text-3xl my-4 font-bold&quot;&gt;<span class="hljs-subst">${block.text}</span>&lt;/h1&gt;`</span>;\n\t     <span class="hljs-comment">// etc</span>\n    }\n  };\n&lt;/script&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-col justify-center mx-auto sm:px-16 sm:mt-2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-6&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/notes&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-primary hover:text-accent&quot;</span>&gt;</span>Go Back<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-4xl lg:text-5xl font-bold mb-8 lg:leading-tight&quot;</span>&gt;</span>\n    {data.note.icon}\n    {data.note.title}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-neutral-400 flex flex-col gap-2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-3 gap-4&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-span-1 flex gap-2 items-center&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">IonList</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;inline&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Tags<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-span-2&quot;</span>&gt;</span>\n        {#each data.note.tags as tag}\n          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xs bg-primary text-white rounded-full px-2 mr-2&quot;</span>\n            &gt;</span>{tag}&lt;/span\n          &gt;\n        {/each}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid grid-cols-3 gap-4 mb-8&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-span-1 flex gap-2 items-center&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">BiCalendar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;inline&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Date Created<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-span-2&quot;</span>&gt;</span>\n        {new Date(data.note.dateCreated).toLocaleDateString()}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  {#each data.note.blocks as block}\n    {@html renderBlock(block)}\n  {/each}\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</span>',
        language: "javascript",
      },
      {
        component: "Heading1",
        text: "Further Help",
      },
      {
        component: "Paragraph",
        text: "If you get stuck, check out the code on Github or reach out via the “Contact” section of this website!",
      },
      {
        component: "Paragraph",
        text: "https://github.com/jakeevans00/notion-scripts",
      },
    ],
  },
  {
    id: "0abe1081-424e-420b-bf3e-e9d2b3ac6cea",
    dateCreated: "2024-09-14",
    icon: "🗒️",
    title: "The First Note",
    description: "First post & about this blog",
    urlPath: "first-note",
    tags: ["Blog", "Rambles"],
    blocks: [
      {
        component: "Paragraph",
        text: "Taravangian is probably my favorite character of all time.",
      },
      {
        component: "Paragraph",
        text: "For those (*cough plebs) who don’t know, he exists in the Cosmere - Brandon Sanderson’s universe - and suffers from a novel, yet oddly relatable, curse. ",
      },
      {
        component: "Paragraph",
        text: "Simply put, he is blessed with capacity. Capacity for overwhelming intelligence or boundless compassion, but never both simultaneously. And here’s the rub - each day of his life he is dealt a different hand. His intelligence varies wildly from absent on one day to transcendant, even god-like, on another.",
      },
      {
        component: "Paragraph",
        text: "When I call this relatable, I am not implying that I’m a genius. But I do feel like my own intelligence, on any given day, lies somewhere on a frustratingly wide spectrum. Some days I feel brilliant, bold, and confident in the connections my mind forms. Other days, I feel a latency to my thoughts that annoys me to no end. I hate that feeling, that I can’t articulate my thoughts or succinctly answer someone’s questions.",
      },
      {
        component: "Paragraph",
        text: "Which brings me here, to my purpose in writing “notes” for a hypothetically wider audience. Because writing refines thinking, and I think we all could use a little work at that.",
      },
      {
        component: "Heading3",
        text: "My Purpose in Writing a Blog",
      },
      {
        component: "NumberedListItem",
        text: "Teaching. A profession which sadly garners less respect than it is due. But a skill that underpins every successful sales rep, CEO, or software team lead. In my job and general life, I don’t get too many opportunities to strengthen this skillset. I hope my pseudo-blog can address that shortcoming. ",
      },
      {
        component: "NumberedListItem",
        text: "Technical communication. A subset of teaching that distinguishes Fireship and the Primeagen from the average dev. One of my goals this year is to become more technically articulate. The ability to describe tools, techniques, and technologies at any level of abstraction is invaluable at the interview table and every step beyond.",
      },
      {
        component: "NumberedListItem",
        text: "Learning. The scourge of modern web development is the amount of abstraction supporting most frameworks. Before you go crazy thinking I only regurgitate the thoughts of those smarter than me, let me say that I - as a junior dev - am uniquely qualified to express this idea. Because of the abstraction, most newer programmers deify the code inside their node_modules folder 🙏. The wrappers, decorators, props, dependencies, and type declarations fill them simultaneously with wonder and imposter syndrome. Surely, they could never write code like this. I won’t sugercoat it… most often, their code is miles beyond what your paltry GitHub offerings might be. I know they exceed my own. But until we take the learn to truly understand how things work, we will live in fear. I hope that by posting my methods here, I will feel pressured to dive a little deeper and answer the questions that could otherwise be brushed off. It works doesn’t it?",
      },
      {
        component: "NumberedListItem",
        text: "Legitimacy. I’ve built plenty of apps now. Written a lot of 💩 code. Solved plenty of real-world business problems through my job. Not claiming to be na, but I suspect that I’ll never even feel competent if I don’t monitor my progress. My final goal in posting here is that I can observe the problems I have understood — and solved — and believe in myself through the precedent I have set.",
      },
      {
        component: "Paragraph",
        text: "And that’s it! If you read this, awesome 😂",
      },
    ],
  },
];
