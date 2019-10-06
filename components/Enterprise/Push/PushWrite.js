import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Picker, Text, ScrollView, TouchableOpacity } from 'react-native';
import HeaderLayout from '../../HeaderLayout';
import CheckBox from 'react-native-checkbox';

let hours = [];
let minutes = [];
let tempValue = null;
const employeeList = [
    {idx : 1 , name: '새로미0', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 2 , name: '새로미1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 3 , name: '새로미2', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 4 , name: '새로미3', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 5 , name: '새로미4', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 6 , name: '새로미5', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 7 , name: '새로미6', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
    {idx : 8 , name: '새로미711111111111111', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxaNn9b0FnSsMw4JeQY56QnwPHiywpEieNliuMBGnjlK_OjcF'},
]
getTime = (time)=> {
    return time < 10 ? '0' + time : time + '';
}

for(let ix = 0; ix < 24; ix++){
    tempValue = getTime(ix);
    hours.push({'label' : tempValue + '시' , 'value': tempValue});
}

for(let ix = 0; ix < 60; ix++){
    tempValue = getTime(ix);
    minutes.push({'label' : tempValue + '분' , 'value': tempValue});
}



export default class PushWrite extends Component {
    
    state = {
        selectedHour: '12',
        selectMinute: '30',
        everyDay: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        satruday: false,
        sunday: false,
        checked: false,
    }

    getEmployList = () => {

        return <ScrollView>
                {
                    employeeList.map((currentEmployee, i)=>{

                        return (<View key={i}  style={{width:'100%', paddingTop: 20, paddingLeft: 10,flexDirection:'row', }}>
                                    <View style={{ flex: 0.75, height: 60 }}>
                                        <View style={{flexDirection:'row' }}>
                                            <Image source={{uri: currentEmployee.thumbnail}} style={{width: 80, height:60}}  />
                                            <View style={{justifyContent: 'center',paddingLeft: 10, flex:1  }}>
                                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:15, fontWeight:'bold'}} >{currentEmployee.name}</Text>
                                            </View> 
                                        </View>
                                    </View>
                                    <View style={{flex: 0.25, alignItems: 'flex-end', height:60, padding: 15 }}>
                                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:'100%', height:'100%', borderWidth:1, borderRadius: 5}} onPress={()=>{}}>
                                           { i % 2 == 0 ?   <Text style={{textAlign:'center',}}>{'선택'}</Text> : 
                                                            <Text style={{textAlign:'center', color: '#368AFF'}}>{'해제'}</Text>} 
                                        </TouchableOpacity>
                                    </View>
                                </View>)
                    })
                }
            </ScrollView>
    }

    setAlarmDays = (selectedDay) => {

        if(selectedDay === 'everyDay') 
            this.setState({
                everyDay: !this.state.everyDay,
                monday: !this.state.everyDay,
                tuesday: !this.state.everyDay,
                wednesday: !this.state.everyDay,
                thursday: !this.state.everyDay,
                friday: !this.state.everyDay,
                satruday: !this.state.everyDay,
                sunday: !this.state.everyDay,
            })
        else{
            let currentObj = {};
            currentObj[selectedDay] = !this.state[selectedDay];
            this.setState(currentObj);
        }
    }

    render() {

        const { getEmployList, setAlarmDays } = this;
        const { selectedHour, selectMinute, everyDay, monday, tuesday, wednesday, thursday, friday, satruday, sunday } = this.state;
        const { navigation } = this.props;
        const hoursOption = hours.map((currentObj, idx)=> <Picker.Item key={idx} label={currentObj.label} value={currentObj.value} />)
        const minutesOption = minutes.map((currentObj, idx)=> <Picker.Item key={idx} label={currentObj.label} value={currentObj.value} />)

        return (
            <View style={styles.container}>
                <HeaderLayout   title={'알림등록'} 
                                isRightSideButton={true} 
                                rightSideButton={'저장'} 
                                isHistoryBackButton={true} 
                                leftSideButtonEvent={()=>{navigation.goBack()}} 
                                rightSideButtonEvent={()=>{}}  />
                <ScrollView style={styles.innerContainer}>
                    <View style={{
                            height: 200,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                height: '100%',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={styles.titleText}>{'알림시간'}</Text>
                            </View>
                            <View style={{
                                    flex:1, 
                                    justifyContent: 'center', 
                                    flexDirection: 'row',
                                }}>
                                <Picker selectedValue={selectedHour}
                                        style={{ height: 30, width: 100 }}
                                        onValueChange={(itemValue, itemIndex) => this.setState({ selectedHour: itemValue })}>
                                        {hoursOption}
                                </Picker>
                                <Picker selectedValue={selectMinute}
                                        style={{ height: 30, width: 100 }}
                                        onValueChange={(itemValue, itemIndex) => this.setState({ selectMinute: itemValue })}>
                                        {minutesOption}
                                </Picker>
                            </View>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>반복</Text>
                            </View>
                            <View style={{
                                flex:1, 
                                justifyContent: 'center', 
                            }}>
                                <View style={styles.daysRow}>
                                    <View style={styles.days}><CheckBox label={'매일'} checked={everyDay} onChange={() => {setAlarmDays('everyDay')}} /></View>
                                    <View style={styles.days}><CheckBox label={'월'} checked={monday} onChange={() => {setAlarmDays('monday')}} /></View>
                                    <View style={styles.days}><CheckBox label={'화'} checked={tuesday} onChange={() => {setAlarmDays('tuesday')}} /></View>
                                    <View style={styles.days}><CheckBox label={'수'} checked={wednesday} onChange={() => {setAlarmDays('wednesday')}} /></View>
                                </View>
                                <View style={styles.daysRow}>
                                    <View style={styles.days}><CheckBox label={'목'} checked={thursday} onChange={() => {setAlarmDays('thursday')}} /></View>
                                    <View style={styles.days}><CheckBox label={'금'} checked={friday} onChange={() => {setAlarmDays('friday')}} /></View>
                                    <View style={styles.days}><CheckBox label={'토'} checked={satruday} onChange={() => {setAlarmDays('satruday')}} /></View>
                                    <View style={styles.days}><CheckBox label={'일'} checked={sunday} onChange={() => {setAlarmDays('sunday')}} /></View>
                                </View>
                            </View>
                        </View>
                    </View> 
                    <View style={styles.termContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>제목</Text>
                        </View>
                        <View style={styles.termInput}>
                            <TextInput/>
                        </View>
                    </View>
                    <View style={styles.termContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>내용</Text>
                        </View>
                        <View style={styles.termInput}>
                            <TextInput style={styles.contents} multiline={true}/>
                        </View>
                    </View>
                    <View style={styles.termContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>대상자</Text>
                        </View>
                        <View style={{
                            width:'100%',
                            flex: 1,
                        }}>
                            {getEmployList()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    innerContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    termContainer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    titleContainer: {
        width: 80, 
        height: 40, 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17, 
        fontWeight: 'bold'
    },
    termInput: {
        flex:1, 
        justifyContent: 'center', 
        borderWidth:1, 
        borderColor: '#adadad', 
        paddingLeft: 5
    },
    daysContainer : {
        marginTop: 10,
    },
    daysRow : {
        marginTop: 10,
        flexDirection : 'row',
    },  
    days : {
        marginBottom: 5,
        flex: 1,
    },
    contents: {
        height: 150,
    },

});




