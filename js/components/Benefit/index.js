import React, { Component } from "react";
import { View } from "react-native";
import MyWebView  from 'react-native-webview-autoheight';
import { Container, Header, Left, Right, Title, Body, Content, Button, Icon } from "native-base";

import styles from "./styles";

export default class Benefit extends Component {
	render() {
		return (
			<Container>
				<Header style={styles.Header} androidStatusBarColor="#009be8">
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{fontWeight:"600"}}>선상24 혜택알림</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <View>
                        <MyWebView 
                            source={{uri: 'https://service.sunsang24.com/web/customer/benefit'}}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                        />
                    </View>
                </Content>
			</Container>
		);
	}
}