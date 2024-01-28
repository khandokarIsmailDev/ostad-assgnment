import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function GET(req,res){
    try{
        let{searchParams} = new URL(req.url)
        let postId = parseInt(searchParams.get('postId'))
        const prisma = new PrismaClient()
        const result = await prisma.comments.findMany({
            where:{postId:postId},
            include:{users:{select:{firstName:true,lastName:true}}}            // sathe users detail dekhar jonno
        })

        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}