import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';


export default function App() {

  const askForPermission =  (permissions) => {
    request(permissions).then((result) => {

      console.log(result);

    });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.CAMERA);
        } else {
          askForPermission(PERMISSIONS.ANDROID.CAMERA);
        }
      }}>

        <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
        } else {
          askForPermission(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        }
      }}
      
      >
        <Text style={styles.buttonText}>Image Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.CONTACTS);
        } else {
          askForPermission(PERMISSIONS.ANDROID.READ_CONTACTS);   
        }
      }}
      
      style={styles.button}>
        <Text style={styles.buttonText}>Contacts Permission</Text>
      </TouchableOpacity>

    <TouchableOpacity 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.MICROPHONE);
        } else {
          askForPermission(PERMISSIONS.ANDROID.RECORD_AUDIO);   
        }
      }}
      
      style={styles.button}>
        <Text style={styles.buttonText}>MicroPhone Permission</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.CALENDARS);
        } else {
          askForPermission(PERMISSIONS.ANDROID.READ_CALENDAR);   
        }
      }}
      
      >
        <Text style={styles.buttonText}>Calender Permission</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          askForPermission(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);   
        }
      }}
      
      >
        <Text style={styles.buttonText}>Location Permission</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      
      onPress= { () => {
        if (Platform.OS === 'ios') {
          askForPermission(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
        } else {
          askForPermission(PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
            PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,
            PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);   
        }
      }}
      
      >
        <Text style={styles.buttonText}>Bluetooth Permission</Text>
      </TouchableOpacity>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
