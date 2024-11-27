const request = require("supertest");
const {
  createUser,
} = require("../controllers/user");

const User = require("../models/user");
const Index = require("../models/index");

jest.mock("../models/user.js");

describe("User Controller", () => {
  describe("createUser", () => {
    it("should create a user and return 201 status", async () => {
      const req = {
        params: {
          name: "Roshidh",
          email: "roshidh@gmail.com",
          age: 25,
          gender: "male",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      User.create.mockResolvedValue(req.params);

      await createUser(req, res);

      expect(User.create).toHaveBeenCalledWith(req.params);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(req.params);
    });
    it("should return 400 if required fields are missing", async () => {
      const req = { params: { name: "Roshidh" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(
        "All fields (name, email, age, gender) are required"
      );
    });

    it("should return 400 if email is invalid", async () => {
      const req = {
        params: {
          name: "Roshidh",
          email: "invalid email",
          age: 25,
          gender: "male",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith("Please enter the valid email");
    });

    it("should handle Sequelize unique constraint error", async () => {
      const req = {
        params: {
          name: "Roshidh",
          email: "roshidh@gmail.com",
          age: 25,
          gender: "male",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      User.create.mockRejectedValue({ name: "SequelizeUniqueConstraintError" });
      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.send).toHaveBeenCalledWith("Email already exists");
    });
  });
});
