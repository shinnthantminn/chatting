import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Center,
  NativeBaseProvider,
  Text,
  Button,
  VStack,
  Box,
  View,
  Container,
  Avatar,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import React, {Component} from 'react';
import {
  faArrowLeft,
  faUser,
  faInfoCircle,
  faCamera,
  faImage,
  faMicrophone,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COMMON_STYLES, {COLORS, FONTS} from './styles.js';
import logo_pannthee from './panthee-logo.png';

export class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  handleFocus = () => {
    this.state.focus ? 'null' : this.setState({focus: true});
  };
  handleBlur = () => {
    this.setState({focus: false});
    Keyboard.dismiss();
  };
  render() {
    const {width, height} = Dimensions.get('window');
    console.log(this.state);

    return (
      <NativeBaseProvider>
        <SafeAreaView
          style={{
            flex: 0,
            backgroundColor: COLORS.WHITE,
          }}
        />
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" />
          <Box
            style={{
              paddingHorizontal: 10,
              height: 60,
              maxWidth: width,
              overflow: 'hidden',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderColor: COLORS.GRAY,
              borderBottomWidth: 3,
            }}>
            <Box
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={this._onClickedBack}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                }}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size={20}
                  style={{
                    color: 'black',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handlePress}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  paddingLeft: 10,
                  flexDirection: 'row',
                }}>
                <FontAwesomeIcon
                  icon={faUser}
                  size={30}
                  style={{
                    color: 'black',
                    marginRight: 10,
                  }}
                />
                <Box>
                  <Text bold>Pann Thee Teacher</Text>
                  <Text style={{color: COLORS.THEME}}>Available Now</Text>
                </Box>
              </TouchableOpacity>
            </Box>

            <TouchableOpacity
              onPress={this._onClickedBack}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
              }}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                size={20}
                style={{
                  color: COLORS.THEME,
                }}
              />
            </TouchableOpacity>
          </Box>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Container
                style={{
                  maxWidth: width,
                  flex: 1,
                  // height: 600,
                  justifyContent: 'space-between',
                  // flexDirection: 'column',
                }}>
                <Box
                  flexDirection="row"
                  style={{
                    marginTop: 10,
                  }}>
                  <Image
                    source={logo_pannthee}
                    style={{
                      width: 30,
                      height: 35,
                      // marginHorizontal: 10,
                    }}
                  />
                  <Box
                    style={{
                      paddingVertical: 5,
                      backgroundColor: COLORS.GRAY,
                      borderRadius: 8,
                      borderColor: COLORS.GRAY,
                      borderWidth: 1,
                      maxWidth: 300,
                      // paddingHorizontal: 5,
                    }}>
                    <Text fontSize="sm" maxWidth={300} bold>
                      Welcome from Pannthee Application {'\n'} You can ask here
                      what u want.
                    </Text>
                  </Box>
                </Box>

                <View
                  style={{
                    borderTopColor: COLORS.GRAY,
                    borderTopWidth: 3,
                    width: width,
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: this.state.focus ? 50 : 0,
                    // transform: [{translateX: this.state.focus ? -120 : 0}],
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FontAwesomeIcon
                      style={{
                        marginRight: 15,
                        // display: this.state.focus ? 'none' : 'flex',
                      }}
                      icon={faCamera}
                      size={20}
                      color={COLORS.THEME}
                    />
                    <FontAwesomeIcon
                      style={{
                        marginRight: 15,
                        // display: this.state.focus ? 'none' : 'flex',
                      }}
                      icon={faImage}
                      size={20}
                      color={COLORS.THEME}
                    />
                    <FontAwesomeIcon
                      style={{
                        marginRight: 15,
                        // display: this.state.focus ? 'none' : 'flex',
                      }}
                      icon={faMicrophone}
                      size={20}
                      color={COLORS.THEME}
                    />
                  </View>
                  <TextInput
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    placeholder="Message"
                    style={{
                      borderRadius: 50,
                      marginRight: 15,
                      backgroundColor: COLORS.GRAY,
                      width: this.state.focus ? '60%' : '60%',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size={20}
                    color={COLORS.THEME}
                  />
                </View>
              </Container>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </NativeBaseProvider>
    );
  }
}

export default ChatScreen;
