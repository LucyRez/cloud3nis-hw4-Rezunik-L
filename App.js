import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={NoteList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create Note"
            component={CreateNote}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit"
            component={EditNote}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
