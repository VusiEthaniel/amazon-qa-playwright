# Amazon Clone – QA Automation (Playwright)

This repository contains automated UI tests for an Amazon clone application using **Playwright with JavaScript**.  
The project focuses on **test analysis, UI automation, and defect identification**, rather than forcing unimplemented functionality.

---

## Application Under Test
Amazon Clone (deployed):
https://amazon-vee.netlify.app

---

## Testing Scope

### Authentication (Sign In)
- Navigation from Home to Sign In page
- Validation that users can enter credentials
- Verification of system behaviour for unauthenticated users

> Note: Login currently depends on prior account creation. Tests are aligned to current behaviour and missing logic is logged as defects.

---

## Tools & Technologies
- Playwright
- JavaScript
- Node.js
- Git & GitHub

---

## Test Evidence
Playwright is configured to capture:
- Video recordings of test runs
- Screenshots
- Execution traces

This provides clear and auditable test evidence for both passing and failing scenarios.

---

## Defects Identified

### DEF-001: Login does not authenticate unregistered users
- **Expected:** User should be guided to create an account or shown a validation message
- **Actual:** User remains on login page with no feedback
- **Severity:** Medium

### DEF-002: No validation feedback for invalid login attempts
- **Expected:** Error message displayed for incorrect credentials
- **Actual:** No error message shown
- **Severity:** Medium

---

## ▶️ How to Run Tests Locally

1. Clone the repository  
2. Install dependencies:
npm install
3.  Run tests:
npx playwright test
4. To debug visually:
npx playwright test --headed --debug

---

## Notes
This project is part of a QA portfolio and demonstrates:
- Test case design
- UI automation
- Defect analysis
- Evidence-driven testing

