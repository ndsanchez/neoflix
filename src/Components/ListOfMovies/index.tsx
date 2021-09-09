import React from 'react';
import { FlatList, Image, StyleSheet, Text } from 'react-native';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w440_and_h660_face';

const ListOfMovies = ({ movies }: any) => {
  return (
    <>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => {
          return (
            <>
              <Image
                style={styles.img}
                source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              />
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 440,
    height: 660,
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default ListOfMovies;
