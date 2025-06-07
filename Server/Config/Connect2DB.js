import dotenv from 'dotenv';
import db from './DB.Config.js';
import { createUserTable } from '../Models/User.Model.js';


dotenv.config();


const connect = async () => {

    try {

        console.log(`Attempting Connecting To DB---`);
        await db.connect();
        console.log(`###########---Connected To DB---###########`);


        // Executing Scripts

        console.log(`Executing Scripts`);
        await db.query(createUserTable);

    } catch (error) {

        console.log(error);
        throw new Error(error.message);

    }



}

export default connect;