import React from 'react';
import { View, Text, Button } from 'react-native';

export default function JournalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Journal d'entrainement</Text>
      <Button
        title="Voir un exercice"
        onPress={() =>
          navigation.navigate('DetailsExercice', { exerciceId: 12, nom: 'Squat' })
        }
      />
    </View>
  );
}