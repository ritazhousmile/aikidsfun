# AKidsFun Project Techniques

This document outlines the main technologies, frameworks, and techniques used in the AKidsFun application.

## Technology Stack

### Backend
- **Ruby on Rails (5.2.3)**: The application is built on Rails, providing MVC architecture and RESTful API endpoints
- **Ruby (2.4.10)**: The programming language used for the backend
- **PostgreSQL**: Database system for persistent data storage
- **Redis**: Used for action cable/websockets to enable real-time chat features

### Frontend
- **React (15.4.2)**: JavaScript library for building interactive UI components
- **Foundation**: CSS framework for responsive design and UI components
- **Webpacker**: Rails integration with webpack for JavaScript module bundling
- **SCSS/CSS**: Used for styling the application

### DevOps & Infrastructure
- **Docker**: Containerized development environment
- **Docker Compose**: Multi-container Docker applications
- **Nginx** (in production): Web server for static assets
- **Puma**: Application server for Ruby on Rails

## Key Features & Implementation Details

### User Authentication
- **Devise**: Ruby gem for flexible authentication with user registration, session management
- **Bcrypt**: Password hashing for secure authentication

### File Storage & Image Uploads
- **CarrierWave**: File upload and attachment library integrated with Active Record
- **Fog** (in production): Cloud file storage for AWS S3 integration
- **File Storage in Development**: Local file system storage with properly configured volume mappings

### Real-Time Communication
- **Action Cable**: Rails implementation of WebSockets for real-time features
- **Chat System**: Real-time messaging between users

### React Integration with Rails
- **Webpacker**: Integration of React with Rails
- **react-router-dom**: Client-side routing for React components
- **Props and state management**: Data flow through React components

### Asset Pipeline
- **Asset Precompilation**: Rails asset pipeline for CSS/JS/image processing
- **Sprockets**: Rails asset bundling and preprocessing
- **Source Maps**: Development tools for debugging frontend code

### Database Structure
- **Active Record Associations**: Relationships between models (users, playdates, messages)
- **Database Migrations**: Version-controlled database schema evolution
- **PostgreSQL**: RDBMS with support for complex queries and data types

### Styling & UI
- **Foundation Framework**: Responsive design system with grid layout
- **Custom CSS Components**: Hand-crafted styling for specific UI elements
- **Mobile-Responsive Design**: Adaptable layouts for different screen sizes

### Development Tools
- **Docker Development Environment**: Containerized development for consistency
- **Volume Mapping**: Persistent storage between container restarts
- **Hot Module Replacement**: Webpack development server for instant feedback

## Docker Configuration

The application uses Docker for development, with the following services:
- **Web**: Rails application server
- **Webpack**: Frontend asset compilation
- **DB**: PostgreSQL database
- **Redis**: In-memory data structure store for ActionCable
- **Bundle Update**: One-time service for dependency management

Each service is configured with appropriate volumes for data persistence and proper networking for interconnectivity.

## Deployment Considerations

For production deployment, the application is configured to:
- Use S3 storage for user uploads
- Precompile assets for improved performance
- Configure environment-specific settings through ENV variables

## Best Practices Implemented

- **Separation of Concerns**: Clear distinction between frontend and backend code
- **RESTful Design**: Structured API endpoints following REST principles
- **Responsive Design**: Mobile-first approach with Foundation framework
- **Asset Management**: Proper handling of static assets and user uploads
- **Environment-Specific Configuration**: Different settings for development and production 