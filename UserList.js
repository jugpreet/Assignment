import React, { Component } from "react";
import { Table, Card, Modal } from "antd";
import Columns from "./Columns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import response from "./test.json";
const localizer = momentLocalizer(moment);

class Userlist extends Component {
  state = {
    visible: false,
    events: [],
    membersList: []
  };

  componentDidMount() {
    this.setState({
      membersList: response.members
    });
  }

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onView = rowData => {
    let events = [];
    rowData.activity_periods.forEach((e, key) => {
      let obj = {};

      obj["id"] = key;
      obj["title"] = `${key}_${rowData.real_name}`;
      obj["start"] = new Date(moment(e.start_time, "LLL"));
      obj["end"] = new Date(moment(e.end_time, "LLL"));
      events.push(obj);
    });
    this.setState({
      visible: true,
      events
    });
  };

  pm = {
    onView: this.onView
  };

  render() {
    const { events } = this.state;
    return (
      <div>
        <Card>
          <Table
            dataSource={this.state.membersList}
            columns={Columns(this.pm)}
            scroll={{ x: true }}
            bordered
            rowKey={(y, i) => i}
          />
        </Card>

        <Modal
          title="Activities"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          width={1250}
          footer={null}
        >
          <Card>
            {events.length && (
              <Calendar
                localizer={localizer}
                defaultDate={events[0].start}
                defaultView="month"
                events={events}
                style={{ height: 500 }}
              />
            )}
          </Card>
        </Modal>
      </div>
    );
  }
}
export default Userlist;
