import messaging from '@react-native-firebase/messaging';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('✅ Message handled in the background!', remoteMessage.notification);
});

export default function App() {

    // Request permission from user
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('✅ Authorization status:', authStatus);
        } else {
            console.log('❌ Permission not granted');
        }
    };

    useEffect(() => {
        // Initialize FCM and handlers
        const initFirebaseMessaging = async () => {
            await requestUserPermission();

            // Get the FCM token
            const fcmToken = await messaging().getToken();
            console.log('📲 FCM Token:', fcmToken);
        };

        initFirebaseMessaging();

        // When the app is opened from a quit state by tapping on the notification
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        '🔁 Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                }
            });

        // When the app is in the background and user taps the notification
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                '🔁 Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });

        // Foreground message listener
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('📩 Foreground message received:', remoteMessage);
            Alert.alert(
                remoteMessage.notification?.title || 'New Notification',
                remoteMessage.notification?.body || 'You have a new message!'
            );
        });

        // Clean up the listener
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>🔔 Push Notifications (FCM)</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
