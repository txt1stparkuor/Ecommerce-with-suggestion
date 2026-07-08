# 🛒 E-Commerce & AI Recommendation Platform

![React](https://img.shields.io/badge/React-19.x-blue?logo=react) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen?logo=springboot) ![Python](https://img.shields.io/badge/Python-3.x-yellow?logo=python) ![MySQL](https://img.shields.io/badge/MySQL-8+-orange?logo=mysql) ![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)

> A comprehensive, full-stack E-Commerce platform featuring a custom-built product recommendation engine, secure concurrent checkout processing, and a highly responsive modern frontend.

This repository serves as the central architectural overview of the system. The project is divided into three distinct codebases. Please visit the specific repositories below to view the source code.

### 📌 Repository Links
* 💻 **Frontend Client (React):** [txt1stparkuor/Ecommerce-with-suggestion-FE](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-FE/tree/develop)
* ⚙️ **Backend Core API (Spring Boot):** [txt1stparkuor/Ecommerce-with-suggestion-BE](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-BE/tree/develop)
* 🧠 **Recommendation Engine (Python):** [txt1stparkuor/Ecommerce-Amazon-Recommendation-Service](https://github.com/txt1stparkuor/Ecommerce-Amazon-Recommendation-Service)

---

## 📖 About The Project

This project was built to simulate a high-traffic, real-world online storefront. It goes beyond basic CRUD operations by addressing complex e-commerce challenges such as **transaction safety during concurrent checkouts**, **intelligent product discovery**, and **optimized client-side rendering**.

### ✨ Core System Features

* **🛡️ Secure Order Processing:** Checkout flows are protected by **Idempotency Keys** (preventing duplicate payments/orders) and **JPA Optimistic Locking** (preventing inventory race conditions).
* **🤖 AI-Powered Recommendations:** Integrates with an external Python microservice to deliver hybrid product recommendations, enhancing product discovery.
* **⚡ High-Performance Client:** Utilizes TanStack Query for advanced API caching, skeleton loading, and stale-data invalidation, ensuring a seamless shopping experience.
* **🔐 Robust Authentication:** Stateless JWT authentication and OAuth2 (Google SSO) integration, backed by strict Role-Based Access Control (RBAC).
* **🔍 Dynamic Catalog Search:** A generic pagination and dynamic filtering system powered by Spring Data JPA Specifications.

---

## 🛠️ System Architecture & Tech Stack

The application follows a decoupled, service-oriented architecture.

### 1. Frontend Client ([View Code](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-FE/tree/develop))
* **Core:** React.js (v19) & Vite
* **State Management & Caching:** TanStack React Query, Redux Toolkit
* **UI & Styling:** Ant Design, Tailwind CSS, PostCSS
* **Form Handling:** React Hook Form, Yup validation
* **Deployment:** Docker, Nginx Reverse Proxy

### 2. Backend Core API ([View Code](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-BE/tree/develop))
* **Core:** Java, Spring Boot 3.x, Spring Web MVC
* **Security:** Spring Security, JWT, OAuth2 Resource Server / Client
* **Database & ORM:** MySQL, Spring Data JPA, Hibernate
* **Data Mapping & Validation:** MapStruct, Jakarta Bean Validation
* **External Services:** Cloudinary (Media Storage), Apache Commons CSV (Data Export), Flyway (Database Migrations)

### 3. Recommendation Service ([View Code](https://github.com/txt1stparkuor/Ecommerce-Amazon-Recommendation-Service))
* **Language:** Python
* **Functionality:** Ingests e-commerce data (seeded via Flyway) to compute and serve hybrid product recommendations based on user interactions and product similarities.

---

## 📸 System Preview

| Storefront & Product Discovery | AI Product Recommendations |
| :---: | :---: |
| <img src="https://placehold.co/600x400/png?text=Add+Screenshot+Here" width="400"/> | <img src="https://placehold.co/600x400/png?text=Add+Screenshot+Here" width="400"/> |
| **Shopping Cart & Checkout** | **Admin Dashboard** |
| <img src="https://placehold.co/600x400/png?text=Add+Screenshot+Here" width="400"/> | <img src="https://placehold.co/600x400/png?text=Add+Screenshot+Here" width="400"/> |

---

## 🚀 Getting Started

To run the full ecosystem locally, you will need to start the services in the following order:

1. **Database:** Set up a local MySQL instance and configure the credentials in the Backend `application.yml`.
2. **Backend:** Clone the [Backend Repo](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-BE/tree/develop) and run via Maven. *Note: Flyway will automatically execute migrations to seed the database upon startup.*
3. **Recommendation Service:** Clone the [Python Repo](https://github.com/txt1stparkuor/Ecommerce-Amazon-Recommendation-Service) and follow its internal instructions to connect it to the seeded MySQL database.
4. **Frontend:** Clone the [Frontend Repo](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-FE/tree/develop), run `npm install`, set your environment variables to point to the Spring Boot API, and run `npm run dev` (or build the Docker/Nginx container).
