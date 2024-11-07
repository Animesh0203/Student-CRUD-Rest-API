Student API
Project Overview
This project is a RESTful API developed to perform CRUD (Create, Read, Update, Delete) operations on a list of students. Each student record contains the following attributes:

ID (integer): Unique identifier for each student.
Name (string): Full name of the student.
Age (integer): Age of the student.
Email (string): Contact email of the student.
The API is designed to support multiple users and requests, with in-memory data storage for fast access. Additionally, the API integrates with Ollama to generate AI-based summaries for each student's profile.

Note: Ollama integration may require a high-core CPU system for optimal performance.

Technologies Used
Java
Spring Boot - For building and running the REST API.
ConcurrentHashMap - For thread-safe in-memory data storage.
AtomicInteger - For unique ID generation.
Ollama API - For generating AI-based summaries for student profiles.
Prerequisites
Java (version 11 or higher)
Maven (for building and running the project)
Ollama (for summary generation, installed locally on systems with high-core CPUs)
