import { Router } from "express";
import CreateReminderDto from "../dtos/CreateReminderDto";
import Reminder from "../daos/Reminder";
const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.send(res.json(reminders));
});
router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const rem = new Reminder(title);
  reminders.push(rem);
  res.status(201).send(rem);
});

export default router;
