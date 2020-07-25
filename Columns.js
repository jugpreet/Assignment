import React from "react";
import { Button } from "antd";
export default function(pm) {
  return [
    {
      title: "Name",
      dataIndex: "real_name",
      rowKey: "real_name",
      key: "real_name"
    },
    {
      title: "Time Zone",
      dataIndex: "tz",
      rowKey: "tz",
      key: "tz"
    },

    {
      title: "Activity Period",
      dataIndex: "id",
      rowKey: "",
      key: "",
      render: (key, rowData) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90px"
          }}
        >
          <Button type="primary" onClick={() => pm.onView(rowData)}>
            view
          </Button>
        </div>
      )
    }
  ];
}
