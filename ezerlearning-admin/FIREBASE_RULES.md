# Firebase Security Rules Configuration

## 1. Firebase Realtime Database Rules (`database.rules.json`)
Copy and paste these rules into your [Firebase Console > Realtime Database > Rules](https://console.firebase.google.com/):

```json
{
  "rules": {
    ".read": true,
    ".write": true,
    "leads": {
      ".read": true,
      ".write": true
    },
    "payments": {
      ".read": true,
      ".write": true
    },
    "courses": {
      ".read": true,
      ".write": true
    },
    "heroSlides": {
      ".read": true,
      ".write": true
    },
    "ezerDefinition": {
      ".read": true,
      ".write": true
    },
    "aboutVideos": {
      ".read": true,
      ".write": true
    },
    "hiringPartners": {
      ".read": true,
      ".write": true
    },
    "executiveLeaders": {
      ".read": true,
      ".write": true
    },
    "seniorMentors": {
      ".read": true,
      ".write": true
    },
    "writtenTestimonials": {
      ".read": true,
      ".write": true
    },
    "videoTestimonials": {
      ".read": true,
      ".write": true
    },
    "faqList": {
      ".read": true,
      ".write": true
    },
    "contactInfo": {
      ".read": true,
      ".write": true
    },
    "popupConfig": {
      ".read": true,
      ".write": true
    },
    "blogs": {
      ".read": true,
      ".write": true
    },
    "achievements": {
      ".read": true,
      ".write": true
    }
  }
}
```

## 2. Cloud Firestore Security Rules (`firestore.rules`)
Copy and paste these rules into your [Firebase Console > Firestore Database > Rules](https://console.firebase.google.com/):

```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
