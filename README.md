# 🛒 Playwright E-Commerce Automation Framework

## 📖 Project Overview

This project demonstrates automated end-to-end testing of an e-commerce web application using **Playwright** and **TypeScript**. The framework is designed following the **Page Object Model (POM)** design pattern to improve test maintainability, reusability, and scalability.

The project showcases industry-standard automation practices, including reusable page objects, centralized locators, clean test architecture, and robust assertions.

---

## 🚀 Features

* End-to-End Web Automation Testing
* Page Object Model (POM) Architecture
* TypeScript-Based Framework
* Cross-Browser Testing Support
* Reusable Components and Utilities
* Explicit Assertions and Validations
* HTML Reporting
* Easy CI/CD Integration

---

## 🛠️ Tech Stack

| Technology      | Purpose                  |
| --------------- | ------------------------ |
| Playwright      | Web Automation Framework |
| TypeScript      | Programming Language     |
| Node.js         | Runtime Environment      |
| Playwright Test | Test Runner              |
| Git & GitHub    | Version Control          |

---

## 📂 Project Structure

```text
playwright-ecommerce-automation/
│
├── pages/
│   ├── addToCart/addtoCart.page.ts
│   ├── checkout/checkout.page.ts LoginPage.ts
│   ├── homePage/home.page.ts
│   ├── removeFromCart/removeCart.page.ts
│   
│
├── tests/
│   ├── addToCart.spec.ts
│   ├── checkout.spec.ts
│   ├── homePage.spec.ts
│   └── removeFromCart.spec.ts
│
├── playwright.config.ts
├── package.json
├── globalSetup.ts
└── README.md
```

---

## 🎯 Test Scenarios Covered

### Authentication

* User Login
* Invalid Login Validation
* User Logout

### Product Management

* Search Products
* View Product Details
* Add Products to Cart

### Shopping Cart

* Verify Cart Items
* Update Quantity
* Remove Items from Cart

### Checkout

* Complete Purchase Flow
* Verify Order Confirmation

---

## 🏗️ Page Object Model (POM)

This framework follows the Page Object Model design pattern:

* Each application page is represented by a separate class.
* Locators and page actions are centralized.
* Test scripts remain clean and readable.
* UI changes can be handled with minimal code updates.

## 🎓 Learning Objectives

This project demonstrates:

* Playwright Automation Best Practices
* Page Object Model (POM) Implementation
* Clean and Maintainable Test Architecture
* Real-World E-Commerce Automation Scenarios
* Scalable Test Framework Design
