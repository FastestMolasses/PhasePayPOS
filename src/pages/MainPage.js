// import React, {Component} from 'react';
// import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native';

// // type Props = {};
// // export default class App extends Component<Props> {
// export default class MainPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { selectedItems: [],
//                    total: 0 };
//   }

//   onPress() {

//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.left}>
//           {/* <View style={styles.list}>
//             <ScrollView>
            

//             </ScrollView>
//           </ View> */}
//           <View style={styles.enterTotal}>
//             <Text>Enter Total: $</Text>
//             <TextInput placeholder="0.00"onChangeText={(text) => this.setState({text})} />
//           </View>
//           <Button onPress={}
//                   title="Select Customer"
//                   color="#54BFE3"
//                   accessibilityLabel="Select Customer"
//           />
//         </View>
//         <View style={styles.right}>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/macaroons.jpg')} style={styles.itemImages} />
//             <Text>Macaroon</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/cupcake.jpg')} style={styles.itemImages} />
//             <Text>Cupcake</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/brownie.jpg')} style={styles.itemImages} />
//             <Text>Brownie</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/croissant.jpg')} style={styles.itemImages} />
//             <Text>Croissant</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/donut.jpg')} style={styles.itemImages} />
//             <Text>Donut</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Image source={require('../imgs/cheesecake.jpg')} style={styles.itemImages} />
//             <Text>Cheesecake</Text>
//           </TouchableOpacity>
          
//         </View>
//       </View>

      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//   },
//   left: {
//     flexDirection: 'column',
//     flex: 0.4,
//     backgroundColor: '#f0f0f5',
//     justifyContent: 'space-between'
//   },
//   list: {
//     // borderBottomWidth: 2,
//     padding: 4,
//     //font & size
//   },
//   enterTotal: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start'
//   },
//   right: {
//     flexDirection: 'row',
//     flex: 0.6,
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     backgroundColor: '#E8E8E8'
//   },
//   item: {
//     padding: 5,
//     margin: 5,
//     backgroundColor: '#FFFFFF',
//     height: 100,
//     width: 100
//   },
//   itemImages: {
//     flex: 1,
//     alignSelf: 'stretch',
//     width: undefined,
//     height: undefined
//   }
// });