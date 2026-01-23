import { Router } from 'express'; // express router.
import { login, register } from '../controllers/user.controller.js';
const router = Router(); // Initialize a new router object for handling routes separately

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity");
router.route("get_all_activity")

export default router;
