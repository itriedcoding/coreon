// examples/basic-usage.js

import Coreon from '../src/index.js';

// Initialize the Coreon framework
const app = new Coreon();

// Define a simple component
const MyComponent = app.component('MyComponent', {
  template: '<div>Hello, Coreon!</div>',
  data() {
    return {
      message: 'Welcome to Coreon.js!'
    };
  },
  mounted() {
    console.log(this.message);
  }
});

// Register the component
app.registerComponent(MyComponent);

// Create a simple route
app.router.addRoute('/', () => {
  app.render(MyComponent);
});

// Start the application
app.start();