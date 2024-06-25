# Random Quote Machine

The Random Quote Machine is a React-based application that displays inspirational quotes to users. Each time the user interacts with the application, a new quote is randomly selected and displayed along with the author's name. The application also features dynamic theming, changing the application's background color with each new quote.

## Features

- **Random Quotes**: Displays a new quote and author each time the user requests.
- **Dynamic Theming**: Changes the background color of the application with each new quote.
- **Responsive Design**: Ensures a consistent experience across various devices and screen sizes.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the latest version of [Node.js](https://nodejs.org/) installed on your machine. This project was built with React, so having Node.js is necessary for npm commands.

### Installation

1. Clone the repository
1. Navigate to the project directory: `cd RandomQuoteMachine`
1. Install dependencies:
    1. NPM packages: `npm install`
    1. Font Awesome library:
        1. Install the Font Awesome SVG Core package: `npm install @fortawesome/fontawesome-svg-core`
        1. Install the free brands icon content package: `npm i --save @fortawesome/free-brands-svg-icons`
        1. Install the React component: `npm i --save @fortawesome/react-fontawesome@latest`
1. Start the development server: `npm start`
1. This command runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

### Usage

Simply click on the "New Quote" button to generate a random quote. The application will display a new quote and change the background color.