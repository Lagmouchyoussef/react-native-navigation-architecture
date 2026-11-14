import React from 'react';
import { View, Text } from 'react-native';

export default function ExerciseDetailsScreen({ route }) {
  const exerciseId = route.params?.exerciseId;
  const exerciseName = route.params?.exerciseName ?? 'Unnamed exercise';

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{exerciseName}</Text>
      <Text>Exercise ID: {exerciseId ?? 'Not provided'}</Text>
    </View>
  );
}