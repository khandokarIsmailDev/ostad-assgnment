import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function GET (req,res){
    try {
        const prisma = new PrismaClient()
        const result = await prisma.catagories.findMany({
            select:{id:true,name:true}
        })

        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"success",data:error.toString()})
    }
}