import 'reflect-metadata';
import bcrypt from 'bcrypt';
import { getDataSource } from '@/connection/data-source';
import { User } from '@/entities/user';

async function seedUser() {
    try {
        const dataSource = await getDataSource();
        const userRepo = dataSource.getRepository(User);

        const email = 'mgc@bula.it';
        const password = 'bulachebula';
        const hashedPassword = await bcrypt.hash(password, 10);

        const existing = await userRepo.findOneBy({ email });
        if (existing) {
            console.warn("Utente già iscritto");
        }

        const newUser = userRepo.create({
            email,
            password: hashedPassword,
        });

        await userRepo.save(newUser);
        console.log(`✅ Utente creato: ${email}`);

    } catch (error) {
        console.error('❌ Errore nel seed:', error);
    }
};

seedUser();