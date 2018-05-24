import React, { Component } from "react";
import { Image, TouchableHighlight } from "react-native";

import {
	View,
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,	
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

const ReactN = require("react-native");
const { Platform, Dimensions } = ReactN;

import styles from "./styles";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/icon.png");
const drawerUserIcon = require("../../../assets/iv_default_profile.png");

const datas = [
	{
		name: "선상24 홈",
		route: "Home",
		icon: "md-cog",
		bg: "#009be8",
	},
    {
		name: "선상24 혜택알림",
		route: "Benefit",
		icon: "md-color-wand",
		bg: "#777777",
	},
	{
		name: "회원 예약내역",
		route: "Benefit",
		icon: "md-clipboard",
		bg: "#777777",
	},
	{
		name: "즐겨찾기 리스트",
		route: "Benefit",
		icon: "md-star",
		bg: "#777777",
    },
    {
		name: "이벤트 및 공지사항",
		route: "Notice",
		icon: "md-volume-up",
		bg: "#777777",
		// types: "N"
    },
    {
		name: "선상24 안내",
		route: "Intro",
		icon: "md-information-circle",
		bg: "#777777",
    },
    {
		name: "고객만족센터",
		route: "CustomerCenter",
		icon: "md-help-circle",
		bg: "#777777",
    },
    {
		name: "설정",
		route: "#",
		icon: "md-settings",
		bg: "#777777",
    },
    {
		name: "관리자",
		route: "#",
		icon: "md-lock",
		bg: "#777777",
	},
];

export default class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			appVersion : "1.0.0",
            userIcon : drawerUserIcon,
			subBanner: "https://service.sunsang24.com/upload/board/201708/92e6a27f08f07af354cfc1d88ab5a0cb_mini.jpg"
		};
	}

	componentDidMount(){
		const callUriVersion = "http://service.sunsang24.com/v1/customer/version";		
		fetch(callUriVersion).then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				appVersion: responseJson.version
			})
		})

		const callUriSubBanner = "http://service.sunsang24.com/v1/customer/banner?mode=sub";		
		fetch(callUriSubBanner).then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				subBanner: responseJson.image.mini,	
			})
        })
	}

	render() {
		return (
			<Container>
				<View style={Platform.OS === "ios" ? {padding: 10} : null } />
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<View style={{height:100}}>
						<Image style={styles.drawerUserIcon} source={this.state.userIcon} />
						<Text style={styles.textLogin}>로그인 해 주세요!</Text>
						<Button small style={{marginLeft:87,marginTop:3,backgroundColor:"gray"}} onPress={() => this.props.navigation.navigate("Login")}><Text>로그인 / 회원가입</Text></Button>
						<Icon active name="ios-arrow-forward" style={{ color: "#009be8", fontSize: 50, marginLeft:250, marginTop: -50 }} onPress={() => this.props.navigation.navigate("Login")} />
					</View>
					<View>
						<TouchableHighlight onPress={() => this.props.navigation.navigate("SubBanner")}>
							<Image style={styles.drawerBanner} source={{uri: this.state.subBanner}} />
						</TouchableHighlight>
					</View>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button onPress={() => this.props.navigation.navigate(data.route)} style={{height:40}}>
								<Left>
									<Icon active name={data.icon} style={{ color: data.bg, fontSize: 26, width: 30 }} />
									<Text style={[styles.text, { color: data.bg}]}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 0.5 }}>
										<Badge
											style={{
												borderRadius: 20,
												height: 25,
												width: 25,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types}`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
                    <Badge style={styles.versionBadge}><Text style={styles.badgeText}>Version : {this.state.appVersion}</Text></Badge>
                    <Text style={styles.copyrightText}>Copyright ⓒ 2017 SANDAGO All rights reserved.</Text>
				</Content>
			</Container>
		);
	}
}