import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import Http from './utilities/Http';
import ListOfMovies from './Components/ListOfMovies';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      const http = new Http();
      const { results } = await http.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=ed39ee08ec54d4f75c25cd699b43e3b1'
      );

      console.log(results);
      setMovies(results);
    })();

    return () => {};
  }, []);

  if (movies.length < 1) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView>
          <ListOfMovies movies={movies} />
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
