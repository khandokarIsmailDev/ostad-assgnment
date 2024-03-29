import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {CreateToken} from "@/utility/JWTTokenHelper";


export async function POST(req,res){
    try {
        let reqBody = await req.json()
        const prisma = new PrismaClient()
        const result = await prisma.users.findUnique({where:reqBody})

        if(result.length === 0){
            return NextResponse.json({status:"fail",data:result})
        }else{
            let token =await CreateToken(result['email'],result['id'])
            let expireDuration = new Date(Date.now()+24*60*60*1000)
            const cookieString = `token=${token};expires=${expireDuration.toUTCString()};path=/`     // ekhane jebabe dewa ase, ai babei likhte hobe , hobo ho,, banana bul kora jabe na

            return NextResponse.json({status:"sucess",data:token},{status:200,headers:{'set-cookie':cookieString}})           // header er modde cookie ai babe set korte hoy
        }


        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}