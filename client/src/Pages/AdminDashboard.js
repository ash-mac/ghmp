import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const AdminDashboard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const tokenJsonString = localStorage.getItem("userInfo").toString();
  const tokenJsonObject = JSON.parse(tokenJsonString);
  const token = tokenJsonObject.token;
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getAvailableRequest = async () => {
    const data = await axios.get(
      "http://localhost:5001/api/room/availableRequest",
      config,
    );
    setData(data);
    await new Promise((r) => setTimeout(r, 2000));
  };
  useEffect(() => {
    getAvailableRequest();
  }, []);
  //   console.log(data);
  console.log(data);
  useEffect(() => {
    if (typeof data !== undefined) {
      //loading
      setLoading(false);
    }
  }, [data]);
  // await new Promise(r => setTimeout(r, 2000));

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        data.data.map((d) => (
          <Accordion>
            <Card style={{ margin: 10 }} key={d._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {d.guestName}
                  </Accordion.Toggle>
                </span>

                <div>
                  {/* <Button href={`/note/${d._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button> */}
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {d.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <ReactMarkdown>{d.address}</ReactMarkdown>
                    {/* <ReactMarkdown>{d.numberOfGuests}</ReactMarkdown> */}

                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">
                        {d.arrivalTime.substring(0, 10)}
                      </cite>
                      <cite title="Source Title">
                        {d.departureTime.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
