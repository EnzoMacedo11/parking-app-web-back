import { prisma } from "../../config";
import bcrypt from "bcrypt";

async function createUser(
  enrollment: string,
  name: string,
  hashedPassword: string,
  admin: boolean,
  token: string
) {
  const enrollmentExistent = await prisma.user.findUnique({
    where: { enrollment },
  });

  if (enrollmentExistent) {
    console.log(enrollmentExistent);
    throw new Error("Matrícula já existe.");
  } else {
    await prisma.user.create({
      data: {
        enrollment,
        name,
        password: hashedPassword,
        admin,
        token,
      },
    });
    return `O usuário ${name} foi cadastrado com sucesso`;
  }
}

async function findUser(enrollment: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      enrollment,
    },
  });
  if (!user) {
    throw new Error("Matrícula e/ou senha incorretas");
  }

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const { name, token, admin } = user;
      return { name, token, admin };
    } else {
      throw new Error("Matrícula e/ou senha incorretas");
    }
  }
}

const userRepository = {
  createUser,
  findUser,
};

export default userRepository;
