import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Radio, Tab, Grid } from "semantic-ui-react";

const Habits = () => {
  const panes = [
    {
      menuItem: "Personal",
      render: () => (
        <Tab.Pane attached={false}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Form.Radio label="1" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="2" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="3" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column>
              <Form.Radio label="4" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="5" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="6" />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Health",
      render: () => (
        <Tab.Pane attached={false}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Form.Radio label="1" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="2" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="3" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column>
              <Form.Radio label="4" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="5" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="6" />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Career",
      render: () => (
        <Tab.Pane attached={false}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Form.Radio label="1" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="2" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="3" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column>
              <Form.Radio label="4" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="5" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="6" />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Money",
      render: () => (
        <Tab.Pane attached={false}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Form.Radio label="1" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="2" />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio label="3" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column>
              <Form.Radio label="4" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="5" />
            </Grid.Column>
            <Grid.Column>
              <Form.Radio label="6" />
            </Grid.Column>
          </Grid>
        </Tab.Pane>
        
      )
    }
  ];

  return (
    <Tab 
    menu={{ borderless: true, attached: false, tabular: false }}
      panes={panes}
    />
    
  );
};
export default Habits;
