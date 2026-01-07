import express from "express";
import FlightController from "./flight.controler.js";
import AccessControl from "../middlewares/access.control.js";
const FlightRouts = express.Router();

const flight = new FlightController();


FlightRouts.post("/create", AccessControl("admin"), (req, res, next) => {

})

FlightRouts.put("/update", AccessControl("admin"), (req, res, next) => {

})

FlightRouts.get("/read", AccessControl("admin", "user"), (req, res, next) => {

})


FlightRouts.delete("/delete", AccessControl("admin"), (req, res, next) => {

})



FlightRouts.get("/search", AccessControl("admin", "user"), (req, res, next) => {

})

export default FlightRouts;