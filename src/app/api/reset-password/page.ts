import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getDataSource } from "@/connection/data-source";
import { ResetPassword } from "@/entities/recuperaPassword";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

const POSTSavePassword = async (req: Request) => {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Email and password required!"
            }, { status: 404 });
        }

        const dataSource = await getDataSource(); // inizializza la connessione
        const userRepo = dataSource.getRepository(User); // tutti gli users presi
        const findEmailUser = await userRepo.findOneBy({ email });

        // se non troviamo l'utente
        if (!findEmailUser) {
            return NextResponse.json({
                success: false,
                message: "This user not exist!"
            }, { status: 403 });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 15);
        findEmailUser.password = hashedPassword;

        // save new data in your user table
        await userRepo.save(findEmailUser);

        // token generation
        const token = jwt.sign(
            { id: findEmailUser.id, email: findEmailUser.email },
            JWT_SECRET,
            { expiresIn: "3d" }
        );

        return NextResponse.json({
            success: true,
            message: "New password is saved!",
            token,
        });

    } catch (error) {
        console.error("This process is not allowed or not correct!");
        return NextResponse.json({
            success: false,
            message: `Unfortunately process make an error: ${String(error)}`
        });
    };
};

export default POSTSavePassword;