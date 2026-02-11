# Amazon Clone – QA & Automation Project

## Project Overview
This project demonstrates a complete Quality Assurance approach for an Amazon Clone web application.  
It includes **test design, manual test cases, defect management, and automated UI testing** using Playwright with JavaScript.

The focus is on validating **real user-facing behaviour**, identifying functional and usability gaps, and providing evidence-based reporting.

Application under test:  
https://amazon-vee.netlify.app

---

## Testing Objectives
- Validate core UI functionality and navigation
- Ensure users are not blocked by usability or accessibility issues
- Identify functional limitations and gaps early
- Maintain honest and reproducible defect reporting
- Support regression testing through automation

---

## Scope of Testing

### In Scope
- Homepage UI validation
- Navigation and routing
- Sign In and Create Account (unauthenticated behaviour)
- Cart interaction (Add to Cart – observed behaviour)
- Usability and accessibility-lite checks

### Out of Scope
- Payment and checkout
- Backend services and databases
- Performance and load testing
- Full WCAG accessibility compliance

---

## Test Types Covered
- Smoke Testing
- Functional Testing
- UI Content Validation
- Navigation Testing
- Usability & Accessibility-lite Testing
- Regression Testing

---

## Automation Framework
- **Tool:** Playwright
- **Language:** JavaScript
- **Browser:** Chromium
- **Approach:**  
  - Tests simulate real user journeys  
  - No deep-link assumptions where UI rendering depends on navigation  
  - Stable selectors and refactored helpers used for maintainability  

---

## Project Structure
amazon-qa-playwright/
│
├── tests/
│ ├── homepage.spec.js
│ ├── navigation.spec.js
│ ├── login.spec.js
│ ├── signup.spec.js
│ ├── cart.spec.js
│ └── usability.spec.js
│
├── helpers/
│ └── navigation.js
│
├── docs/
│ ├── test-design/
│ │ └── Amazon_Test_Design_FINAL.docx
│ ├── test-cases/
│ │ └── Amazon_Test_Cases_UPDATED.xlsx
│ └── defects/
│ └── Amazon_Defect_Log_FINAL.xlsx
│
├── playwright.config.js
└── README.md

---

## Test Documentation
The following QA artefacts are version-controlled in this repository:

- **Test Design:**  
  `docs/test-design/Amazon_Test_Design_FINAL.docx`
- **Test Cases:**  
  `docs/test-cases/Amazon_Test_Cases_UPDATED.xlsx`
- **Defect Log:**  
  `docs/defects/Amazon_Defect_Log_FINAL.xlsx`

---

## Defect Management
Defects are logged only when:
- They are reproducible
- They represent real functional or usability gaps
- They have clear business impact

Areas such as Homepage UI, Navigation, and Usability testing passed without defects and are documented accordingly.

---

## Test Execution & Evidence
- Automated tests are executed using Playwright
- Evidence captured includes:
  - Screenshots
  - Videos
  - Traces
  - HTML reports

Reports can be viewed locally using:
npx playwright show-report


---

## Current Test Status
- All automated tests passing
- Defects logged for identified functional limitations
- Documentation fully aligned with executed tests

---

## Key QA Principles Demonstrated
- Test isolation and parallel-safe automation
- Realistic user-flow testing
- Honest handling of incomplete functionality
- Clear traceability between tests, defects, and documentation
- Maintainable test structure using shared helpers

---

## Author
Vusi Mushwana  
ISTQB Certified Tester – Foundation Level