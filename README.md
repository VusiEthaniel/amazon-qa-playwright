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

The following defects were identified during UI-level testing.  
Tests were intentionally aligned to observed system behaviour, and missing or incomplete functionality was logged as defects rather than forcing failing automation.

---

### DEF-001: Login does not authenticate unregistered users
**Area:** Authentication – Sign In  
- **Expected:** User should be guided to create an account or shown a validation message  
- **Actual:** User remains on login page with no feedback  
- **Severity:** Medium  
- **Status:** Open  

---

### DEF-002: No validation feedback for invalid login credentials
**Area:** Authentication – Sign In  
- **Expected:** Error message displayed for incorrect email or password  
- **Actual:** No validation message shown  
- **Severity:** Medium  
- **Status:** Open  

---

### DEF-003: Create Account button does not trigger navigation or registration flow
**Area:** Authentication – Create Account  
- **Expected:** User should be redirected to account creation page or shown registration form  
- **Actual:** Clicking “Create your Amazon Account” produces no navigation or UI change  
- **Severity:** High  
- **Status:** Open  

---

### DEF-004: Account creation does not persist new users
**Area:** Authentication – Create Account  
- **Expected:** Newly created user should be saved and able to log in  
- **Actual:** No confirmation or persistence of user data observed  
- **Severity:** Medium  
- **Status:** Open  

---

### DEF-005: Cart cannot be viewed after adding items
**Area:** Cart  
- **Expected:** User should be able to navigate to cart after adding items  
- **Actual:** No cart navigation or cart view available  
- **Severity:** High  
- **Status:** Open  

---

### DEF-006: Items cannot be removed from cart
**Area:** Cart  
- **Expected:** User should be able to remove items from cart  
- **Actual:** No remove functionality available  
- **Severity:** Medium  
- **Status:** Open  

---

### DEF-007: No visual feedback when adding items to cart
**Area:** Cart  
- **Expected:** Visual confirmation (cart count, message, or state change) after adding item  
- **Actual:** No visible feedback provided to user  
- **Severity:** Medium  
- **Status:** Open  


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

