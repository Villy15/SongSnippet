import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const HomePage = () => {
  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Home',
        }}
      />
      {/* Add a container that has an image icon inside */}
      <VideoPlaceHolder />
      <LoopSection />
      <PlayBackSpeedSection />

    </View>
  )
}

function VideoPlaceHolder() {
  return (
    <View className='bg-gray-400 h-56 justify-center items-center'>
      <Feather name="video" size={24} color="black" />
    </View>
  )
}

function LoopSection() {
  const [loop, setLoop] = React.useState(false);
  const [startTime, setStartTime] = React.useState('00:00');
  const [endTime, setEndTime] = React.useState('00:00');

  return (
    <View className='bg-slate-100 py-4'>
      <LoopSectionRow text="Start" startTime={startTime} setStartTime={setStartTime} />
      <View className='py-2'/>
      <LoopSectionRow text={"End".padStart(5)} startTime={endTime} setStartTime={setEndTime} />
    </View>
  )
}

function LoopSectionRow({ text, startTime, setStartTime }: { text: string, startTime: string, setStartTime: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <View className='flex-row gap-x-4 justify-center items-center'>
      <Text className='text-2xl'>
        {text}
      </Text>

      <TextInput className='border h-12 w-24 pl-2'>
        {startTime}
      </TextInput>

      <Pressable className='px-6 py-4 bg-gray-400 rounded-sm' onPress={
        () => {
          setStartTime('03:00');

          if (startTime == '03:00') {
            setStartTime('00:00');
          }
        }

      }>
        <Text>
          Now
        </Text>
      </Pressable>

    </View>
  )
}

function PlayBackSpeedSection () {
  const [playBackSpeed, setPlayBackSpeed] = React.useState(1);

  return (
    <View className='bg-slate-200 py-4'>
      <View className='flex-col'>
        {/* Playback speed */}
        <Text className='text-lg pl-4'>
          Playback Speed: {playBackSpeed.toFixed(2)}x
        </Text>

        {/* Playback options */}
        <View className='flex-row px-4 py-4 justify-evenly'>
          <PlayBackOption playBackSpeed={0.25} setPlayBackSpeed={setPlayBackSpeed} />
          <PlayBackOption playBackSpeed={0.50} setPlayBackSpeed={setPlayBackSpeed} />
          <PlayBackOption playBackSpeed={0.75} setPlayBackSpeed={setPlayBackSpeed} />
          <PlayBackOption playBackSpeed={1.00} setPlayBackSpeed={setPlayBackSpeed} />
        </View>

        {/* Playback speed slider */}
        <View className='flex-row px-4 justify-start items-center'>
          <Text className='text-lg font-light pr-4'>
            Custom:
          </Text>

          <Slider
            style={{ width: 260, height: 40 }}
            value={playBackSpeed}
            onValueChange={(value) => setPlayBackSpeed(value)}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>

      </View>
    </View>
  )
}

function PlayBackOption({ playBackSpeed, setPlayBackSpeed }: { playBackSpeed: number, setPlayBackSpeed: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <Pressable className='px-5 py-4 bg-gray-400 rounded-sm' onPress={
      () => {
        setPlayBackSpeed(playBackSpeed);
      }
    }>
      <Text>
        {playBackSpeed.toFixed(2)}x
      </Text>
    </Pressable>
  )
}


export default HomePage