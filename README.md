# notification-app-firebase
# google-service.json olish kerak firebasedan
# firebase -> project settings -> general -> your apps -> SHA certificate fingerprints -> google-service.json
# firebase-adminsdk ni ulash kerak

<!--
firebase-adminsdk
{
  "type": "service_account",
  "project_id": "----",
  "private_key_id": "----",
  "private_key": "----",
  "client_email": "----",
  "client_id": "----",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "----",
  "universe_domain": "googleapis.com"
} -->

<!--
 google.service.json
{
  "project_info": {
    "project_number": "",
    "project_id": "",
    "storage_bucket": "---"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "---",
        "android_client_info": {
          "package_name": "----"
        }
      },
      "oauth_client": [],
      "api_key": [
        {
          "current_key": "----"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": []
        }
      }
    }
  ],
  "configuration_version": "1"
}
-->
