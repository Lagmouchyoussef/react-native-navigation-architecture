import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WorkoutLogScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Workout Log</Text>
      <Button
        title="View exercise"
        onPress={() =>
          navigation.navigate('ExerciseDetails', {
            exerciseId: 12,
            exerciseName: 'Squat',
          })
        }
      />
    </View>
  );
}