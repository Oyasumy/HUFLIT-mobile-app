import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
import { PrimaryColor, SPACING, TextColor1, width } from "../common/Theme";
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Schedule = () => {
  const ref = React.useRef();
  const [items, setItems] = useState({});
  const [state, setState] = useState({
    "2020-11-10": [
      {
        name: "Design UI",
        room: "B56",
        part: "3",
        long: "4-6",
        teacher: "John Joe",
      },
    ],
    "2020-11-11": [
      {
        name: "nhung nguyen ly co ban cua chi ngia mac lenin",
        room: "B56",
        part: "3",
        long: "4-6",
        teacher: "John Joe John Joe John Joe John Joe",
      },
    ],
    "2020-11-13": [],
    "2020-11-14": [
      { name: "item 3 - any js object" },
      { name: "any js object" },
    ],
    "2020-12-18": [
      { name: "item 3 - any js object" },
      { name: "any js object" },
    ],
  });

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Design ui",
              height: Math.max(50, Math.floor(Math.random() * 150)),
              room: "B56",
              part: "3",
              long: "4-6",
              teacher: "John Joe",
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    console.log("ok");
    var avatar = "";
    try {
      avatar = item.room.slice(0, 1);
    } catch (error) {
      avatar = "A";
    }
    console.log(avatar);
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "auto",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  {item.room}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginVertical: 3,
                    maxWidth: width / 1.8,
                  }}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    opacity: 0.7,
                    marginVertical: 3,
                  }}
                >
                  <Text style={{ fontSize: 15, marginRight: SPACING }}>
                    Số tiết: {item.part}
                  </Text>
                  <Text>Tiết: {item.long}</Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    maxWidth: width / 1.8,
                    opacity: 0.7,
                  }}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  GV: {item.teacher}
                </Text>
              </View>
              <Avatar.Text label={avatar} color={TextColor1} backgroundColor={PrimaryColor}/>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#fdc" }}>
      <Agenda
        ref={ref}
        // items={items}
        items={state}
        // loadItemsForMonth={loadItems}
        selected={"2020-11-11"}
        // style={{ backgroundColor: "#666" }}
        renderItem={renderItem}
        onDayPress={(day) => {
          console.log("day pressed", day);
        }}
        onRefresh={() => console.log("refreshing...")}
        onDayChange={() => {}}
      />
    </View>
  );
};

export default Schedule;
