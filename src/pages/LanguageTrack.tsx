// ...existing code...

type LanguageTrack = {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradient: string;
  totalLevels: number;
  color?: string;
  levels: Array<{
    id: number;
    title: string;
    description: string;
    topics: string[];
    codeExample?: string;
    estimatedTime: string;
    difficulty: string;
    prerequisites?: number[];
  }>;
};

export type { LanguageTrack };

// ...existing code...


export const languageTracks: LanguageTrack[] = [
  {
    id: 'html',
    name: 'HTML',
    icon: '📝',
    description: 'Master the foundation of web development with HTML structure and semantics',
    color: 'orange',
    gradient: 'from-orange-400 to-red-500',
    totalLevels: 10,
    levels: [
      {
        id: 1,
        title: 'Basic Structure & Tags',
        description: 'Learn HTML document structure, basic tags, and how to create your first webpage',
        difficulty: 'beginner',
        topics: ['HTML Document Structure', 'Head and Body Tags', 'Headings', 'Paragraphs', 'Basic Formatting'],
        estimatedTime: '30 minutes',
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first webpage!</p>
</body>
</html>`
      },
      {
        id: 2,
        title: 'Forms & Input Elements',
        description: 'Create interactive forms with various input types and validation',
        difficulty: 'beginner',
        topics: ['Form Elements', 'Input Types', 'Labels', 'Buttons', 'Form Validation'],
        estimatedTime: '45 minutes',
        prerequisites: [1]
      },
      {
        id: 3,
        title: 'Semantic HTML5',
        description: 'Use semantic elements to create meaningful and accessible web structures',
        difficulty: 'intermediate',
        topics: ['Semantic Elements', 'Article', 'Section', 'Header', 'Footer', 'Nav'],
        estimatedTime: '40 minutes',
        prerequisites: [1, 2]
      },
      {
        id: 4,
        title: 'Multimedia & Embedding',
        description: 'Embed images, videos, audio, and external content',
        difficulty: 'intermediate',
        topics: ['Images', 'Video', 'Audio', 'Iframes', 'Canvas', 'SVG'],
        estimatedTime: '50 minutes',
        prerequisites: [3]
      },
      {
        id: 5,
        title: 'Tables & Data',
        description: 'Create and style data tables with proper structure',
        difficulty: 'intermediate',
        topics: ['Table Structure', 'Headers', 'Rows', 'Columns', 'Styling Tables'],
        estimatedTime: '35 minutes',
        prerequisites: [3]
      },
      {
        id: 6,
        title: 'Advanced Forms',
        description: 'Build complex forms with custom validation and accessibility',
        difficulty: 'intermediate',
        topics: ['Custom Validation', 'Fieldsets', 'Progress', 'Datalist', 'Form Accessibility'],
        estimatedTime: '60 minutes',
        prerequisites: [2, 5]
      },
      {
        id: 7,
        title: 'Accessibility & ARIA',
        description: 'Make your websites accessible to all users with ARIA and best practices',
        difficulty: 'advanced',
        topics: ['ARIA Labels', 'Screen Readers', 'Keyboard Navigation', 'Semantic Markup'],
        estimatedTime: '55 minutes',
        prerequisites: [3, 6]
      },
      {
        id: 8,
        title: 'Web Components',
        description: 'Create reusable custom elements with Web Components',
        difficulty: 'advanced',
        topics: ['Custom Elements', 'Shadow DOM', 'Templates', 'Slots'],
        estimatedTime: '70 minutes',
        prerequisites: [7]
      },
      {
        id: 9,
        title: 'Progressive Enhancement',
        description: 'Build websites that work everywhere with progressive enhancement',
        difficulty: 'advanced',
        topics: ['Feature Detection', 'Graceful Degradation', 'Performance', 'Compatibility'],
        estimatedTime: '65 minutes',
        prerequisites: [8]
      },
      {
        id: 10,
        title: 'Modern HTML APIs',
        description: 'Explore cutting-edge HTML APIs and browser features',
        difficulty: 'advanced',
        topics: ['Web Storage', 'Geolocation', 'File API', 'Drag & Drop', 'Service Workers'],
        estimatedTime: '80 minutes',
        prerequisites: [9]
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '🎨',
    description: 'Style beautiful and responsive websites with modern CSS techniques',
    color: 'blue',
    gradient: 'from-blue-400 to-purple-500',
    totalLevels: 10,
    levels: [
      {
        id: 1,
        title: 'CSS Basics & Selectors',
        description: 'Learn CSS syntax, selectors, and how to style HTML elements',
        difficulty: 'beginner',
        topics: ['CSS Syntax', 'Selectors', 'Properties', 'Values', 'Colors'],
        estimatedTime: '40 minutes'
      },
      {
        id: 2,
        title: 'Box Model & Layout',
        description: 'Understand the CSS box model and basic layout principles',
        difficulty: 'beginner',
        topics: ['Box Model', 'Margin', 'Padding', 'Border', 'Width', 'Height'],
        estimatedTime: '45 minutes',
        prerequisites: [1]
      },
      {
        id: 3,
        title: 'Flexbox Layout',
        description: 'Master flexible box layout for modern web design',
        difficulty: 'intermediate',
        topics: ['Flex Container', 'Flex Items', 'Alignment', 'Direction', 'Wrap'],
        estimatedTime: '60 minutes',
        prerequisites: [2]
      },
      {
        id: 4,
        title: 'CSS Grid',
        description: 'Create complex layouts with CSS Grid system',
        difficulty: 'intermediate',
        topics: ['Grid Container', 'Grid Items', 'Tracks', 'Areas', 'Alignment'],
        estimatedTime: '75 minutes',
        prerequisites: [3]
      },
      {
        id: 5,
        title: 'Responsive Design',
        description: 'Build websites that work on all devices and screen sizes',
        difficulty: 'intermediate',
        topics: ['Media Queries', 'Viewport', 'Breakpoints', 'Mobile-First'],
        estimatedTime: '55 minutes',
        prerequisites: [3, 4]
      },
      {
        id: 6,
        title: 'Animations & Transitions',
        description: 'Add life to your designs with CSS animations and transitions',
        difficulty: 'intermediate',
        topics: ['Transitions', 'Animations', 'Keyframes', 'Transform', 'Timing Functions'],
        estimatedTime: '65 minutes',
        prerequisites: [3]
      },
      {
        id: 7,
        title: 'Advanced Selectors & Pseudo-classes',
        description: 'Master complex selectors and pseudo-class techniques',
        difficulty: 'advanced',
        topics: ['Advanced Selectors', 'Pseudo-classes', 'Pseudo-elements', 'Attribute Selectors'],
        estimatedTime: '50 minutes',
        prerequisites: [1, 5]
      },
      {
        id: 8,
        title: 'CSS Variables & Custom Properties',
        description: 'Use CSS custom properties to create maintainable stylesheets',
        difficulty: 'advanced',
        topics: ['CSS Variables', 'Custom Properties', 'Theming', 'Dynamic Styles'],
        estimatedTime: '45 minutes',
        prerequisites: [7]
      },
      {
        id: 9,
        title: 'Modern CSS Features',
        description: 'Explore cutting-edge CSS features and techniques',
        difficulty: 'advanced',
        topics: ['Container Queries', 'Subgrid', 'Logical Properties', 'Color Functions'],
        estimatedTime: '70 minutes',
        prerequisites: [8]
      },
      {
        id: 10,
        title: 'Performance & Optimization',
        description: 'Optimize CSS for performance and maintainability',
        difficulty: 'advanced',
        topics: ['Performance', 'Critical CSS', 'Optimization', 'Best Practices'],
        estimatedTime: '60 minutes',
        prerequisites: [9]
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    description: 'Bring your websites to life with interactive JavaScript programming',
    color: 'yellow',
    gradient: 'from-yellow-400 to-orange-500',
    totalLevels: 10,
    levels: [
      {
        id: 1,
        title: 'Variables & Data Types',
        description: 'Learn JavaScript basics: variables, data types, and operators',
        difficulty: 'beginner',
        topics: ['Variables', 'Data Types', 'Operators', 'Console', 'Comments'],
        estimatedTime: '45 minutes',
        codeExample: `// Variables and data types
let name = "JavaScript";
const year = 2025;
let isAwesome = true;

console.log("Welcome to " + name + "!");`
      },
      {
        id: 2,
        title: 'Functions & Scope',
        description: 'Master functions, parameters, return values, and scope',
        difficulty: 'beginner',
        topics: ['Functions', 'Parameters', 'Return', 'Scope', 'Arrow Functions'],
        estimatedTime: '50 minutes',
        prerequisites: [1]
      },
      {
        id: 3,
        title: 'Arrays & Objects',
        description: 'Work with complex data structures and object manipulation',
        difficulty: 'beginner',
        topics: ['Arrays', 'Objects', 'Methods', 'Properties', 'Iteration'],
        estimatedTime: '60 minutes',
        prerequisites: [2]
      },
      {
        id: 4,
        title: 'DOM Manipulation',
        description: 'Interact with HTML elements and modify web pages dynamically',
        difficulty: 'intermediate',
        topics: ['DOM', 'Selectors', 'Events', 'Element Manipulation', 'Styling'],
        estimatedTime: '65 minutes',
        prerequisites: [3]
      },
      {
        id: 5,
        title: 'Events & Interactivity',
        description: 'Handle user interactions and create responsive interfaces',
        difficulty: 'intermediate',
        topics: ['Event Listeners', 'Event Object', 'Event Delegation', 'Form Handling'],
        estimatedTime: '55 minutes',
        prerequisites: [4]
      },
      {
        id: 6,
        title: 'Async/Await & Promises',
        description: 'Handle asynchronous operations and API calls',
        difficulty: 'intermediate',
        topics: ['Promises', 'Async/Await', 'Callbacks', 'Error Handling', 'API Calls'],
        estimatedTime: '70 minutes',
        prerequisites: [5]
      },
      {
        id: 7,
        title: 'ES6+ Features',
        description: 'Modern JavaScript features and syntax improvements',
        difficulty: 'intermediate',
        topics: ['Destructuring', 'Template Literals', 'Modules', 'Classes', 'Spread Operator'],
        estimatedTime: '60 minutes',
        prerequisites: [3, 6]
      },
      {
        id: 8,
        title: 'APIs & Fetch',
        description: 'Connect to external APIs and handle data exchange',
        difficulty: 'advanced',
        topics: ['Fetch API', 'REST APIs', 'JSON', 'Error Handling', 'Authentication'],
        estimatedTime: '75 minutes',
        prerequisites: [6, 7]
      },
      {
        id: 9,
        title: 'Object-Oriented Programming',
        description: 'Apply OOP principles in JavaScript development',
        difficulty: 'advanced',
        topics: ['Classes', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Prototypes'],
        estimatedTime: '80 minutes',
        prerequisites: [7, 8]
      },
      {
        id: 10,
        title: 'Advanced Patterns & Frameworks',
        description: 'Explore design patterns and popular JavaScript frameworks',
        difficulty: 'advanced',
        topics: ['Design Patterns', 'Module Pattern', 'MVC', 'Framework Introduction', 'Best Practices'],
        estimatedTime: '90 minutes',
        prerequisites: [9]
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    description: 'Build robust applications with Java enterprise programming',
    color: 'red',
    gradient: 'from-red-400 to-pink-500',
    totalLevels: 10,
    levels: [
      {
        id: 1,
        title: 'Syntax & Basic Concepts',
        description: 'Learn Java syntax, variables, and fundamental programming concepts',
        difficulty: 'beginner',
        topics: ['Java Syntax', 'Variables', 'Data Types', 'Operators', 'Control Structures'],
        estimatedTime: '60 minutes',
        codeExample: `public class HelloJava {
    public static void main(String[] args) {
        String message = "Hello, Java!";
        int year = 2025;
        
        System.out.println(message + " Welcome to " + year);
    }
}`
      },
      {
        id: 2,
        title: 'Object-Oriented Programming',
        description: 'Master classes, objects, inheritance, and polymorphism',
        difficulty: 'beginner',
        topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
        estimatedTime: '75 minutes',
        prerequisites: [1]
      },
      {
        id: 3,
        title: 'Collections & Data Structures',
        description: 'Work with Java collections framework and data structures',
        difficulty: 'intermediate',
        topics: ['ArrayList', 'HashMap', 'Sets', 'Queues', 'Iterators'],
        estimatedTime: '70 minutes',
        prerequisites: [2]
      },
      {
        id: 4,
        title: 'Exception Handling',
        description: 'Handle errors gracefully with Java exception mechanisms',
        difficulty: 'intermediate',
        topics: ['Try-Catch', 'Throw', 'Custom Exceptions', 'Finally', 'Error Types'],
        estimatedTime: '55 minutes',
        prerequisites: [2, 3]
      },
      {
        id: 5,
        title: 'File I/O & Streams',
        description: 'Read and write files, work with input/output streams',
        difficulty: 'intermediate',
        topics: ['File Operations', 'Streams', 'Readers', 'Writers', 'Serialization'],
        estimatedTime: '65 minutes',
        prerequisites: [4]
      },
      {
        id: 6,
        title: 'Multithreading',
        description: 'Create concurrent applications with Java threading',
        difficulty: 'advanced',
        topics: ['Threads', 'Synchronization', 'Executors', 'Concurrent Collections', 'Thread Safety'],
        estimatedTime: '85 minutes',
        prerequisites: [5]
      },
      {
        id: 7,
        title: 'Generics & Annotations',
        description: 'Use generics for type safety and annotations for metadata',
        difficulty: 'advanced',
        topics: ['Generic Classes', 'Type Parameters', 'Wildcards', 'Annotations', 'Reflection'],
        estimatedTime: '70 minutes',
        prerequisites: [3, 6]
      },
      {
        id: 8,
        title: 'Design Patterns',
        description: 'Implement common design patterns in Java applications',
        difficulty: 'advanced',
        topics: ['Singleton', 'Factory', 'Observer', 'Strategy', 'MVC Pattern'],
        estimatedTime: '80 minutes',
        prerequisites: [2, 7]
      },
      {
        id: 9,
        title: 'Spring Framework',
        description: 'Build enterprise applications with Spring framework',
        difficulty: 'advanced',
        topics: ['Spring Core', 'Dependency Injection', 'Spring Boot', 'REST APIs', 'Database Integration'],
        estimatedTime: '95 minutes',
        prerequisites: [8]
      },
      {
        id: 10,
        title: 'Advanced Java & Performance',
        description: 'Optimize Java applications and explore advanced features',
        difficulty: 'advanced',
        topics: ['JVM Tuning', 'Memory Management', 'Performance', 'Lambda Expressions', 'Stream API'],
        estimatedTime: '90 minutes',
        prerequisites: [9]
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    description: 'From basics to AI: master Python for web development, data science, and machine learning',
    color: 'green',
    gradient: 'from-green-400 to-blue-500',
    totalLevels: 10,
    levels: [
      {
        id: 1,
        title: 'Syntax & Basic Concepts',
        description: 'Learn Python syntax, variables, and fundamental programming concepts',
        difficulty: 'beginner',
        topics: ['Python Syntax', 'Variables', 'Data Types', 'Operators', 'Input/Output'],
        estimatedTime: '45 minutes',
        codeExample: `# Welcome to Python!
name = "Python"
year = 2025
is_awesome = True

print(f"Hello {name}! Welcome to {year}!")
print(f"Is Python awesome? {is_awesome}")`
      },
      {
        id: 2,
        title: 'Data Structures',
        description: 'Master Python lists, dictionaries, tuples, and sets',
        difficulty: 'beginner',
        topics: ['Lists', 'Dictionaries', 'Tuples', 'Sets', 'List Comprehensions'],
        estimatedTime: '55 minutes',
        prerequisites: [1]
      },
      {
        id: 3,
        title: 'Functions & Modules',
        description: 'Create reusable code with functions and organize with modules',
        difficulty: 'beginner',
        topics: ['Functions', 'Parameters', 'Return Values', 'Modules', 'Packages'],
        estimatedTime: '50 minutes',
        prerequisites: [2]
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        description: 'Apply OOP principles in Python development',
        difficulty: 'intermediate',
        topics: ['Classes', 'Objects', 'Inheritance', 'Methods', 'Properties'],
        estimatedTime: '65 minutes',
        prerequisites: [3]
      },
      {
        id: 5,
        title: 'File Handling & Exceptions',
        description: 'Work with files and handle errors gracefully',
        difficulty: 'intermediate',
        topics: ['File Operations', 'Exception Handling', 'Context Managers', 'CSV', 'JSON'],
        estimatedTime: '60 minutes',
        prerequisites: [4]
      },
      {
        id: 6,
        title: 'Libraries & Packages',
        description: 'Explore Python ecosystem and popular libraries',
        difficulty: 'intermediate',
        topics: ['pip', 'Virtual Environments', 'requests', 'datetime', 'os'],
        estimatedTime: '55 minutes',
        prerequisites: [5]
      },
      {
        id: 7,
        title: 'Web Development (Flask/Django)',
        description: 'Build web applications with Python frameworks',
        difficulty: 'advanced',
        topics: ['Flask Basics', 'Routes', 'Templates', 'Django Introduction', 'Database Integration'],
        estimatedTime: '85 minutes',
        prerequisites: [6]
      },
      {
        id: 8,
        title: 'Data Science & Pandas',
        description: 'Analyze and manipulate data with pandas and numpy',
        difficulty: 'advanced',
        topics: ['NumPy', 'Pandas', 'Data Analysis', 'Visualization', 'Data Cleaning'],
        estimatedTime: '80 minutes',
        prerequisites: [6]
      },
      {
        id: 9,
        title: 'Machine Learning Basics',
        description: 'Introduction to machine learning with scikit-learn',
        difficulty: 'advanced',
        topics: ['ML Concepts', 'Scikit-learn', 'Classification', 'Regression', 'Model Evaluation'],
        estimatedTime: '90 minutes',
        prerequisites: [8]
      },
      {
        id: 10,
        title: 'Advanced Python & Frameworks',
        description: 'Master advanced Python concepts and modern frameworks',
        difficulty: 'advanced',
        topics: ['Decorators', 'Generators', 'Async/Await', 'FastAPI', 'Best Practices'],
        estimatedTime: '95 minutes',
        prerequisites: [7, 9]
      }
    ]
  }
];
export default LanguageTrack;
