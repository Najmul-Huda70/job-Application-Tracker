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
   

