# Firebase CI/CD Deployment Setup Guide

This guide will help you set up automatic deployment to Firebase Hosting whenever you push changes to the master/main branch.

## Prerequisites

1. A Firebase project (create one at [Firebase Console](https://console.firebase.google.com/))
2. A GitHub repository for your portfolio
3. Firebase CLI installed locally (optional, for initial setup)

## Step 1: Update Firebase Project ID

1. Open `.firebaserc` file in your project root
2. Replace `"your-firebase-project-id"` with your actual Firebase project ID
3. You can find your project ID in the Firebase Console

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## Step 2: Set Up Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon (⚙️) → **Project settings**
4. Go to the **Service accounts** tab
5. Click **Generate new private key**
6. Download the JSON file (keep it secure!)

## Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

### Secret 1: FIREBASE_SERVICE_ACCOUNT
- **Name:** `FIREBASE_SERVICE_ACCOUNT`
- **Value:** Copy and paste the entire contents of the service account JSON file you downloaded

### Secret 2: FIREBASE_PROJECT_ID
- **Name:** `FIREBASE_PROJECT_ID`
- **Value:** Your Firebase project ID (e.g., `my-portfolio-12345`)

## Step 4: Commit and Push

1. Make sure all Firebase configuration files are committed:
   ```bash
   git add .firebaserc firebase.json .github/workflows/firebase-deploy.yml
   git commit -m "Add Firebase CI/CD configuration"
   git push origin master
   ```

2. The GitHub Action will automatically trigger and deploy your site!

## Step 5: Verify Deployment

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. You should see your workflow running
4. Once complete, your site will be live at: `https://your-project-id.web.app`

## Workflow Details

The CI/CD pipeline automatically:
- ✅ Triggers on push to `master` or `main` branch
- ✅ Sets up Node.js v16 environment
- ✅ Installs dependencies
- ✅ Builds the production bundle
- ✅ Deploys to Firebase Hosting

## Manual Deployment (Optional)

If you want to deploy manually:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Deployment Fails
- Verify Firebase service account JSON is correct
- Check that project ID matches in `.firebaserc`
- Ensure Firebase Hosting is enabled in your project

### Site Not Updating
- Clear browser cache
- Check Firebase Console → Hosting for deployment history
- Verify the correct branch triggered the workflow

## Custom Domain (Optional)

To add a custom domain:
1. Go to Firebase Console → Hosting
2. Click **Add custom domain**
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Support

For issues:
- Check [Firebase Documentation](https://firebase.google.com/docs/hosting)
- Review [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check workflow logs in the Actions tab

---

**Note:** After the initial setup, every push to master/main will automatically deploy your portfolio! 🚀
