import React, { Component } from "react";
import { View, Image, TouchableHighlight } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text } from "native-base";

import styles from "./styles";

const ReactN = require("react-native");
const { Platform, Dimensions } = ReactN;

const logoImage = require("../../../assets/logo_topbar.png");
const mainFinsingInfo = require("../../../assets/main_fishing_info.png");
const mainFishingSchedule = require("../../../assets/main_fishing_schedule.png");
const mainWeather = require("../../../assets/main_weather.png");


export default class Home extends Component {

	render() {
		return (
			<Container>
				<Header style={styles.Header}>
                    <Left style={{flex:1}}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' style={{color: "white"}} />
                        </Button>
                    </Left>
                    <Body style={{flex:1}}>
						<Image style={styles.logoImage} source={logoImage } />
                    </Body>
                    <Right style={{flex:1}}></Right>
                </Header>
				<Content style={{backgroundColor: "gray"}}>
					<View>
						<Animatable.Image source={mainFinsingInfo} style={styles.mainMenu} animation="bounceInRight" delay={0} />
						<Animatable.Image source={mainFishingSchedule} style={styles.mainMenu} animation="bounceInRight" delay={500} />
						<TouchableHighlight onPress={() => this.props.navigation.navigate("Weather")}>
							<Animatable.Image source={mainWeather} style={styles.mainMenu} animation="bounceInRight" delay={1000} />
						</TouchableHighlight>
					</View>
					<Animatable.View style={styles.copyRight} animation="bounceInRight" delay={1500}>
						<Text style={[styles.copyRightText, {marginTop:20}]}>(주)산다고 경기도 고양시 일산동구 정발산로 24(정왕동) 웨스턴타워 3차 516호</Text>
						<Text style={[styles.copyRightText, {marginTop:2}]}>사업자번호 : 675-81-00671 / 고객센터 전화번호 : 050-724-9503</Text>
						<Text style={[styles.copyRightText, {marginTop:10,marginBottom:20}]}>Copyright ⓒ 2017 SANDAGO All rights reserved.</Text>
					</Animatable.View>
				</Content>
			</Container>
		);
	}
}