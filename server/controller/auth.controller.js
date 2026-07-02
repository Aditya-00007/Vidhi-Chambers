import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

const ADMIN_EMAIL = "vidhichambers@yahoo.com";

const HASHED_PASSWORD =
  "$2b$10$c04eX528wJGMXOl3l/RknukKvPPq7Ut0OQIf8c7plZkaDI/1kGTXe";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, HASHED_PASSWORD);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken({
      email: ADMIN_EMAIL,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
