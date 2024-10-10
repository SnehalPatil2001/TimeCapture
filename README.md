# TimeCapture

## Overview

This project is a simple JavaScript program that retrieves and displays the current date and time in a user-friendly format. It shows the current time in a 12-hour format, along with the corresponding day, month, year, and day of the week.

## Features

- Displays the current time in a 12-hour format with AM/PM notation.
- Provides the current year, month, date, and day of the week.
- Outputs the information to the console.

## Prerequisites
1.**Install Node.js**
  -Download Node.js from the [official website](https://nodejs.org/).
  - Follow the installation instructions for your operating system (Windows, macOS, or Linux).
  - After installation, verify Node.js and npm (Node Package Manager) are installed by running the following commands in your terminal:
    ```bash
    node -v
    npm -v
    ```

## Code Explanation

### Variables

- `daylist`: An array containing the names of the days of the week.
  
### Time Calculation

- The program checks the current hour and formats the time accordingly:
  - If the hour is less than or equal to 12, it adds "AM".
  - If the hour is greater than 12, it subtracts 12 and adds "PM".

### Output

- Logs the formatted time, year, month, date, and day of the week to the console.

## How to Run

1. Copy the code into a JavaScript environment (e.g., a web browser console or a Node.js environment).
2. Run the code to see the current date and time displayed in the console.

## Example Output

Time : 3 : 45 : 12 PM. Year : 2024 Month : 9 Date : 1 Day : Sunday

## Notes

- The month is zero-indexed (January is 0, December is 11).
- The date is represented by the day of the month.

## How to Contribute
1. Create a branch: Work on a new feature or bug fix in a separate branch
2. Make changes: Update the code, ensuring it adheres to the project's style and functionality.
3. Submit a Pull Request: Share your changes for review. Be sure to describe your changes and why they are needed.

## License

This project is open source and available for modification and distribution under the MIT License.

## Output of Screenshot
![image alt](https://github.com/SnehalPatil2001/TimeCapture/blob/06b5d3b95eb099afcc026666e41ece2a047f4324/Output_Screenshot.png)
