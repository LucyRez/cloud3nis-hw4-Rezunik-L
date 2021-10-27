import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../redux/actions";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Note from "./Note";

const NoteList = ({ navigation, route }) => {
  const [noteItems, setNoteItems] = useState([]);

  const notes = useSelector((state) => state.notes);
  const isLoaded = useSelector((state) => state.isLoaded);
  const dispatch = useDispatch();

  const handleEditNote = (note, id, title, image) => {
    let editedNote = {
      id: id,
      text: note,
      title: title,
      image: image,
      time: new Date().toLocaleString(),
    };

    const index = noteItems.findIndex((item) => item.id === editedNote.id);

    const newNotes = [...noteItems];
    newNotes[index] = editedNote;
    setNoteItems(newNotes);
  };

  React.useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchNotes());
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.notesContainer}>
          {notes?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("Edit", {
                    item: item,
                  })
                }
              >
                <Note id={item.id} text={item.text} title={item.title}></Note>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("Create Note")}>
        <View style={styles.buttonWrapper}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}> + </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 80,
  },
  notesContainer: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
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
  buttonWrapper: {
    zIndex: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: "flex-end",
  },
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#0879",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    notes: state,
  };
};

export default NoteList;
