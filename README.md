# job-Application-Tracker

## Question & Answer:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    | No                | getElementById                 | getElementsByClassName        | querySelector         | querySelectorAll |
    | ---------------------- | ---------------------- | -------------- | ------------- | ------------------- |
    | 1         | Selects one element by its id         | Selects elements by class name |Selects the first matching element           | Selects all matching elements                  |
    | 2         | Returns Single Element         | Returns HTMLCollection |Returns First Match           | Returns NodeList                  |

2. How do you create and insert a new element into the DOM?

   Step 1: Select the Parent Element
    ```js
    const parentId = document.getElementById(id);
    ```
   Step 2: Create the new element
   ```js
    const newCard = document.createElement("div");
    ```
   Step 3: Add text or html
   ```js
   newCard.innerText = "added text by Najmul";
   ```
   Or,
    ```js
   newCard.innerHTML = `<p>added a parragrap</p>`;
   ```
     Step 4: Append the Element
   ```js
   parentId.appendChild(newCard);
   ```
3. What is Event Bubbling? And how does it work?
   ### Event Bubbling
   Event Bubbling  is a JavaScript behavior when an event occurs on a child element, the event propagates upward to its parent, then to its           grandparent, and continues up to the document level.
   
   ### Works:
   child  → parent → grandparent.... →.... document

  
   ### Example(image below):
   
    When you click the Link tag ```<a></a>```:
   
    1. The link's event fires first <a>.
    2. Then the event moves to the element <p> (parent element).
    3. after the event moves to the element <section>
    4. After, it goes to the <body>.
    5.  After that, it goes to the <html>.
    6. Finally, it reaches the document.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/06a0d716-5a4c-4774-9aab-a838106c614b" />

4. What is Event Delegation in JavaScript? Why is it useful?

   ### Event Delegation 
     Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element to handle events for its child         elements.
   ### Why is Event Delegation Useful?
   1. Better Performance
   2. Works for Dynamic Elements
   3. Cleaner Code
5. What is the difference between preventDefault() and stopPropagation() methods?
   Difference Between preventDefault() and stopPropagation()
   | Method              | Stops Default Action? | Stops Bubbling? |
   | ------------------- | --------------------- | --------------- |
   | `preventDefault()`  | Yes                 |  No            |
   | `stopPropagation()` | No                  | Yes           |

