# GitHub Copilot Reflection

## 1. What did you ask Copilot to help build? How did you break it down?

I asked GitHub Copilot to help me improve my React shopping cart application. Instead of asking Copilot to build the entire application at once, I broke the work into smaller steps. First, I asked Copilot to review the existing application and explain the main components, state management, and how products were added and removed from the cart.

After understanding the existing code, I asked Copilot to add a clear message for when the shopping cart was empty. I then asked Copilot to review the application for bugs and usability problems. Finally, I asked Copilot to reconsider a React key change because the same product could be added to the cart more than once.

I tested the application after making the changes to make sure the products displayed correctly, products could be added and removed, totals updated correctly, and the empty-cart message appeared.

## 2. How did your approach to asking questions change?

At first, I asked Copilot for a general explanation of my application. After seeing how it responded, I started asking more specific questions. Instead of asking it to make many changes at once, I gave it one task at a time and explained what I wanted to keep unchanged.

This made the process easier to follow because I could understand each change before moving on to the next one.

## 3. What surprised you?

I was surprised by how much Copilot could understand about the existing React application without me explaining every part of the code. It was able to identify the purpose of different components and explain how the cart state was being managed.

I was also surprised that Copilot could identify a potential issue with the React key being used for cart items. When I asked it to reconsider the change because the same product could be added more than once, it was able to correct the approach.

## 4. What did you learn about the technology?

I learned more about React state management and how a parent component can manage data that is passed to child components through props. I also learned more about rendering lists in React and why keys are important when rendering multiple components.

I also learned that GitHub Copilot is useful for explaining existing code, suggesting changes, and helping find possible problems. However, I still need to test the changes myself instead of assuming that every suggestion is correct.

## 5. What would you do differently?

If I did this assignment again, I would start with a more detailed plan before asking Copilot for changes. I would also test each change immediately after applying it instead of making several changes before testing.

I would continue using smaller and more specific prompts because they made it easier to understand what Copilot was changing and why. I would also spend more time reviewing the generated code instead of simply accepting the suggested changes.

## Copilot Screenshot Evidence

The screenshots included with this assignment show my actual GitHub Copilot interactions:

1. Copilot reviewed and explained the existing React shopping cart application.
2. Copilot helped add a clear empty-cart message.
3. Copilot reviewed the application and identified a potential improvement to the React key.
4. I asked Copilot to reconsider the key after testing the case where the same product could be added more than once.