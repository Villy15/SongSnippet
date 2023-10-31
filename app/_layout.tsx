import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        title: 'SongSnippet',
      }}
    />
  );
}