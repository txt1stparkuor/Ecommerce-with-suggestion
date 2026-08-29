# 🛒 E-Commerce & AI Recommendation Platform

![React](https://img.shields.io/badge/React-19.x-blue?logo=react) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen?logo=springboot) ![Python](https://img.shields.io/badge/Python-3.x-yellow?logo=python) ![MySQL](https://img.shields.io/badge/MySQL-8+-orange?logo=mysql) ![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)

> A comprehensive, full-stack E-Commerce platform featuring a custom-built product recommendation engine, secure concurrent checkout processing, and a highly responsive modern frontend.

This repository serves as the central architectural overview of the system. The project is divided into three distinct codebases. Please visit the specific repositories below to view the source code.

### 📌 Repository Links
* 💻 **Frontend Client (React):** [txt1stparkuor/Ecommerce-with-suggestion-FE](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-FE/tree/develop)
* ⚙️ **Backend Core API (Spring Boot):** [txt1stparkuor/Ecommerce-with-suggestion-BE](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-BE/tree/develop)
* 🧠 **Recommendation Engine (Python):** [txt1stparkuor/Ecommerce-Amazon-Recommendation-Service](https://github.com/txt1stparkuor/Ecommerce-Amazon-Recommendation-Service)
* 🪧 **Demo website :** [https://ecommerce-with-suggestion-fe.vercel.app/](https://ecommerce-with-suggestion-fe.vercel.app/)
---

## 📖 About The Project

This project was built to simulate a real-world online storefront. It goes beyond basic CRUD operations by addressing complex e-commerce challenges such as **transaction safety during concurrent checkouts**, **intelligent product discovery**, and **optimized client-side rendering**.

### ✨ Core System Features

* **🛡️ Secure Order Processing:** Checkout flows are protected by **Idempotency Keys** (preventing duplicate payments/orders) and **JPA Optimistic Locking** (preventing inventory race conditions).
* **🤖 AI-Powered Recommendations:** Integrates with an external Python microservice to deliver product recommendations (similar products, users recommendations,..), enhancing product discovery.
* **⚡ High-Performance Client:** Utilizes TanStack Query for advanced API caching, skeleton loading, and stale-data invalidation, ensuring a seamless shopping experience.
* **🔐 Robust Authentication:** Stateless JWT authentication backed by strict Role-Based Access Control (RBAC).
* **🔍 Dynamic Catalog Search:** A generic pagination and dynamic filtering system powered by Spring Data JPA Specifications.
* **🚀 High-Speed Caching:** Utilizes **Redis** to cache expensive recommendation payloads and frequently used apis, drastically reducing latency and database load.

---

## 🛠️ System Architecture & Tech Stack

The application follows a decoupled, service-oriented architecture.

### 1. Frontend Client ([View Code](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-FE/tree/develop))
* **Core:** React.js (v19) & Vite
* **State Management & Caching:** TanStack React Query, Redux Toolkit
* **UI & Styling:** Ant Design, Tailwind CSS
* **Form Handling:** React Hook Form, Yup validation
* **Deployment:** Vercel

### 2. Backend Core API ([View Code](https://github.com/txt1stparkuor/Ecommerce-with-suggestion-BE/tree/develop))
* **Core:** Java, Spring Boot 3.x, Spring Web MVC
* **Security:** Spring Security, JWT, OAuth2 Resource Server / Client
* **Database & Caching:** MySQL, Redis 
* **Data Mapping & Validation:** MapStruct, Jakarta Bean Validation
* **External Services:** Cloudinary (Media Storage), Apache Commons CSV (Data Export), Flyway (Database Migrations)

### 3. Recommendation Service ([View Code](https://github.com/txt1stparkuor/Ecommerce-Amazon-Recommendation-Service))
* **Core:** Python (v3.9+), FastAPI, Uvicorn, Pandas, NumPy
* **Core ML & Recommendation Engine:**
  * **Content-Based (TF-IDF + Cosine Similarity):** Vectorizes product metadata to resolve **item cold-start**.
  * **Collaborative Filtering (SVD):** Uses latent matrix factorization (50 factors) to predict user affinities on unpurchased items.
  * **Hybrid Fusion & Backfilling:** Blends scores ($0.4 \times \text{CB} + 0.6 \times \text{CF}$) and dynamically backfills with trending items to prevent sparse pagination.
---

## 🚀 Live Demo & Cloud Deployment

| Component | Platform / Service | Live URL / Endpoint |
| :--- | :--- | :--- |
| **Frontend Client** | **Vercel**  | [ecommerce-with-suggestion-fe.vercel.app](https://ecommerce-with-suggestion-fe.vercel.app) |
| **Backend Core API** | **Render** (Docker Container) | `https://ecommerce-with-suggestion-be.onrender.com` |
| **AI Recommendation Service** | **Render** (FastAPI Microservice) | `https://ecommerce-amazon-recommendation-service.onrender.com/` |
| **Primary Database** | **TiDB Cloud** (Serverless MySQL 8.0) | Managed Cloud Cluster|
| **Distributed Cache** | **Upstash Redis** (Serverless TLS) | Low-latency caching layer for recommendations |
| **Media & Asset Storage** | **Cloudinary** | Cloud image CDN for product catalogs |

---

### 🔑 Demo Credentials

To explore the application without creating a new account, you can use the pre-configured credentials below:

| Role | Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@gmail.com` | `admin` | Full dashboard access, product management, order processing |
| **Customer** | `AF355FTXYAKFH5NYPRTE7SL3WO3Q@example.com` | `svHAUI2026` | Shopping, cart management, checkout with idempotency keys, reviews |

---

## 🏗️ Cloud Infrastructure & Data Flow

```text
                               ┌────────────────────────┐
                               │   User Web Browser     │
                               └───────────┬────────────┘
                                           │
                                           ▼ HTTPS
                         ┌────────────────────────────────────┐
                         │   React 19 Frontend (Vercel)  │
                         └─────────────────┬──────────────────┘
                                           │
                                           ▼ REST API (JWT Authenticated)
                         ┌────────────────────────────────────┐
                         │ Spring Boot 3.x API (Render Cloud) │
                         └──┬──────────────┬────────────────┬─┘
                            │              │                │
             ┌──────────────┘              │                └──────────────┐
             ▼                             ▼                               ▼
┌─────────────────────────┐   ┌─────────────────────────┐   ┌───────────────────────────┐
│ TiDB Cloud (MySQL DB)   │   │  Upstash Redis (Cache)  │   │ FastAPI AI Service(Render)│
│ • Schema Versioning     │   │ • API Response Caching  │   │ • TF-IDF Cosine Sim       │
│                         │   │                         │   │ • Collaborative SVD Model │
│                         │   │                         │   │ • Pre-trained .pkl engine │
└─────────────────────────┘   └─────────────────────────┘   └───────────────────────────┘
