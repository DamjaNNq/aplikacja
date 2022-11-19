import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import  React from 'react';
import { StyleSheet, View, Text , FlatList,  ScrollView } from 'react-native';

const Example = () => {
  
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};
const styles1 = StyleSheet.create({
  AppStyle: {
    flex: 1,
    //padding: 20,
    backgroundColor:'#4D426D' 

},

})  