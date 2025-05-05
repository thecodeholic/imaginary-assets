# Imaginary - AI Photo Editor

A powerful AI-powered photo editing application built with React Native (Expo) for the mobile frontend and Laravel for the backend API. This SaaS application offers various image editing capabilities through a subscription-based model.

## Features

- **Authentication** - Secure user sign up, sign in, and authentication
- **AI Image Editing Tools**:
  - **Generative Fill** - Fill in missing parts of images with AI-generated content
  - **Image Restoration** - Enhance and restore old or damaged photos
  - **Object Removal** - Seamlessly remove unwanted objects from images
  - **Recoloring** - Change the colors of specific objects in images
- **Credits System** - Pay-per-use model with different credit requirements for each operation
- **Payment Integration** - Secure payment processing with Stripe
- **Operation History** - View and manage previous editing operations

## Tech Stack

### Mobile App (React Native)
- **Framework**: Expo (SDK 52)
- **UI/Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router & React Navigation
- **State Management**: React Context API
- **Payments**: Stripe React Native
- **HTTP Client**: Axios

### Backend API (Laravel)
- **Framework**: Laravel 12
- **Authentication**: Laravel Sanctum
- **Image Processing**: Cloudinary
- **Payment Processing**: Stripe PHP SDK
- **Database**: MySQL/PostgreSQL (configurable)

## Project Structure

```
react-native-laravel-app/
├── app/                  # React Native Mobile Application
│   ├── app/              # Expo Router app directory
│   │   ├── (app)/        # Authenticated routes
│   │   ├── sign-in.tsx   # Sign in screen
│   │   └── signup.tsx    # Sign up screen
│   ├── components/       # Reusable UI components
│   ├── config/           # Configuration files
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   └── services/         # API service layer
│
├── api/                  # Laravel Backend API
    ├── app/              # Application code
    ├── config/           # Configuration files
    ├── database/         # Database migrations and seeders
    ├── routes/           # API route definitions
    └── storage/          # Application storage
```
## Source Code
You can get the entire source code of this premium project [from here](https://thecodeholic.com/projects/imaginary-ai-based-saas-mobile-app-with-react-native-and-laravel-api)
