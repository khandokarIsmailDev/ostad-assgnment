import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function POST (req,res){
    try{
        let reqBody = await req.json()
        const prisma = new PrismaClient()
        const count = await prisma.users.count({
            where:{
                email:reqBody['email'],
                otp:reqBody['otp']
            }
        })

        if(count === 1){

            let result = await prisma.users.update({
                where:{email:reqBody['email']},
                data:{otp:"0",password:reqBody['password']}
            })

            return NextResponse.json({status:"success",data:"password reset success"})
        }else{
            return NextResponse.json({status:"fail",data:"password reset failed"})
        }


    }catch (error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}