import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import store from "../redux/store";
import { deleteNote, deleteFromServer } from "../redux/actions";

const Note = (props) => {
  const removeNote = () => {
    store.dispatch(deleteFromServer(props.id));
    store.dispatch(deleteNote(props.id));
  };

  return (
    <View style={styles.note}>
      <View style={styles.noteWrapper}>
        <Text style={styles.noteTitle}>{props.title}</Text>
        <Text style={styles.noteText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.deleteIcon} onPress={removeNote}>
        <Feather name="delete" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteWrapper: {
    backgroundColor: "#0879",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  note: {
    position: "relative",
    justifyContent: "center",
  },
  deleteIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    marginRight: 15,
    marginVertical: 10,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 10,
    zIndex: 1,
  },
  noteText: {
    fontSize: 20,
    color: "white",
  },
  noteTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    paddingBottom: 10,
  },
});

export default Note;
