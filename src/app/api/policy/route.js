import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET (req,res){
    try {
        const prisma = new PrismaClient()
        let {searchParams} = new URL(req.url)
        let type = searchParams.get('type')

        let result = await prisma.polices.findMany({
            where:{type:type}
        })


        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}