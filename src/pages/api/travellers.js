import { connectToDatabase } from './lib/mysql'; 
import { SendEmail } from './lib/mailing'; 

export default async function handler(req, res) {
    const db = await connectToDatabase();

    if(req.method === 'GET'){
        const [rows] = await db.query('SELECT * FROM travellers');
  
        res.status(200).json({ data: rows})
    }

    if(req.method === 'POST'){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const phone = req.body.phone;
        const message = req.body.message;


        //*****check for already submitted application */
        const [checkUser] = await db.query('SELECT * FROM travellers WHERE email = ?', [email]);
        
        if(checkUser.length === 0){

            //******generate the trackingID */
            const trackingID = "sa"+getRandom(4)

            const [insert] = await db.query('INSERT Into travellers(firstName,lastName,email,phone,message,trackingID) VALUES(?,?,?,?,?,?)', [firstName,lastName,email,phone,message,trackingID]);

            if(insert.affectedRows > 0){
                await SendEmail(email,trackingID);

                res.status(200).json({success:true,message:"Application Sent"})
            }
            else{
                res.status(400).json({success:false,message:insert})
            }
        }
        else{
            res.status(201).json({success:false,message:"Email already exits",checkUser})
            
        }
    }
  }


function getRandom(length) {
    return Math.floor(
      Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
    );
  }