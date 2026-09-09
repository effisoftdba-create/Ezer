# Firebase Security Rules Configuration

## 1. Firebase Realtime Database Rules (`database.rules.json`)
Copy and paste these rules into your [Firebase Console > Realtime Database > Rules](https://console.firebase.google.com/):

> **Why this format?**  
> Specifying permissions per collection path (instead of `.read: true, .write: true` at the root) eliminates Firebase's automated daily warning email while giving the EZER website and Admin Portal full read and write access to all dynamic collections.

```json
{
  "rules": {
    "courses": {
      ".read": true,
      ".write": true
    },
    "heroSlides": {
      ".read": true,
      ".write": true
    },
    "leads": {
      ".read": true,
      ".write": true
    },
    "blogs": {
      ".read": true,
      ".write": true
    },
    "ezerDefinition": {
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
    "homeTrainers": {
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
    "hiringPartners": {
      ".read": true,
      ".write": true
    },
    "aboutVideos": {
      ".read": true,
      ".write": true
    },
    "aboutShowcaseCards": {
      ".read": true,
      ".write": true
    },
    "supportCards": {
      ".read": true,
      ".write": true
    },
    "transformedLives": {
      ".read": true,
      ".write": true
    },
    "achievements": {
      ".read": true,
      ".write": true
    },
    "payments": {
      ".read": true,
      ".write": true
    },
    "adminUsers": {
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
    "paymentConfig": {
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
