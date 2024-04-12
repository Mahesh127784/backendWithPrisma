const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("every fieleds are compolsery");
    }

    const user = await prisma.user.create({
      data: { name, email, password },
    });
    console.log("created");
    cookieToken(user, res);
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email and password to login");
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Emailid not found siign in firt to login");
    }
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};
